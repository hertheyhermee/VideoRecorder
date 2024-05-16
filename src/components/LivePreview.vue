<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


  const route = useRoute();
  const {project, screenRecording, videoRecording, audioRecording} = route.query;

  const mediaRecorder = ref(null);
  const recordedChunks = ref([]);
  const combinedVideo = ref(null)
  const recording = ref(null);
  const screenVideo = ref(null);
  const cameraVideo = ref(null);
  const recordingSize = ref(0);
  const isRecording = ref(null)
  const savedRecordingBlob = ref(null)

  const screenRecordingVal = screenRecording === 'true'
  const videoRecordingVal = videoRecording === 'true'
  const audioRecordingVal = audioRecording === 'true'

  const router = useRouter()

  let combinedStream;

  const startMediaRecording = async() => {
      try {
        isRecording.value = true
        let screenStream = null
        let audioStream = null
        let cameraStream = null
        let combinedTracks = []

        if (screenRecordingVal) {
            screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            screenVideo.value.srcObject = screenStream;

            const [screenVideoTrack] = screenStream.getVideoTracks();
            combinedTracks.push(screenVideoTrack);
        }

        if (audioRecordingVal) {
            audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

            const [microphoneAudioTrack] = audioStream.getAudioTracks();
            combinedTracks.push(microphoneAudioTrack);
        }

        if (videoRecordingVal) {
            cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
            cameraVideo.value.srcObject = cameraStream;

            const [cameraVideoTrack] = cameraStream.getVideoTracks();
            combinedTracks.push(cameraVideoTrack);
        }

        // if (!screenStream || !audioStream) {       
        //   window.alert('Permission denied for audio or video recording');
        //   return;
        // }


        combinedStream = new MediaStream(combinedTracks);

        const options = { mimeType: 'video/webm;codecs=vp9' };
        mediaRecorder.value = new MediaRecorder(combinedStream, options);

        mediaRecorder.value.ondataavailable = event => {
          if (event.data.size > 0) {
            recordedChunks.value.push(event.data);
            recordingSize.value += event.data.size;
          }
        };

        mediaRecorder.value.onstart = () => {
          recording.value = true;
        };

        mediaRecorder.value.onstop = async() => {
          recording.value = false;
          const blob = new Blob(recordedChunks.value, { type: 'video/webm' });
          const videoUrl = URL.createObjectURL(blob);
          savedRecordingBlob.value = blob
          // Save or process the combined recorded video
          console.log('Combined recorded video URL:', videoUrl);
          combinedVideo.value.src = videoUrl;
        //   await saveToFileSystem(blob);
          // saveRecording(videoUrl )
        };

        mediaRecorder.value.start();

      } catch (error) {
        window.alert(`Error starting combined recording:, ${error}`);
      }
    }

    const stopRecording = () => {
      if (mediaRecorder.value && mediaRecorder.value.state !== 'inactive') {
        mediaRecorder.value.stop();
        recording.value = false;
        combinedStream.getTracks().forEach(track => track.stop());
        recordingSize.value = recordedChunks.value.reduce((total, chunk) => total + chunk.size, 0);
        recordingSize.value = recordingSize.value / (1024 * 1024);
        isRecording.value = false
        // Clear recordedChunks array for future recordings
        recordedChunks.value = [];
        console.log("recorder stopped");
      }
    }

    const saveRecording = async() => {
      try {
            const fileHandle = await window.showSaveFilePicker({
              suggestedName: `recording${Math.floor(Math.random() * 100) + 1}.webm`,
              types: [{
                  description: 'WebM Files',
                  accept: { 'video/webm': ['.webm'] },
              }],
            });

            const writable = await fileHandle.createWritable();
            await writable.write(savedRecordingBlob.value);
            await writable.close();

            // Get the URL for the saved file
            // savedRecordingUrl.value = URL.createObjectURL(blob);
            window.alert("Recording  saved successfully")
            router.push('/')
        } catch (error) {
            console.error('Error saving file to FileSystem:', error);
        }
    }

    //Save recording to FileSystem
    const saveToFileSystem = async(blob) => {
        try {
            const fileHandle = await window.showSaveFilePicker({
            suggestedName: `recording${Math.floor(Math.random() * 100) + 1}.webm`,
            types: [{
                description: 'WebM Files',
                accept: { 'video/webm': ['.webm'] },
            }],
            });

            const writable = await fileHandle.createWritable();
            await writable.write(blob);
            await writable.close();

            // Get the URL for the saved file
            savedRecordingUrl.value = URL.createObjectURL(blob);
            console.log('URL of the recorded video:', savedRecordingUrl.value);
        } catch (error) {
            console.error('Error saving file to FileSystem:', error);
        }
    }

    startMediaRecording()

</script>

<template>
  <div>
    <div class="overlay" v-if="isRecording">
      <div class="live">
        <div class="on">
          <img src="/icons/record-circle-red.svg" alt="record-circle-red" />
          <span>Live Preview</span>
        </div>
        <video id="screen" ref="screenVideo" playsinline autoplay></video>
        <video id="camera" ref="cameraVideo" playsinline autoplay></video>
      </div>
      <div class="d-flex">
        <button class="btn btn-red mr-3" @click="stopRecording">Stop Recording</button>
      </div>
    </div>

    <div class="overlay" v-else>
      <div class="live mb-5">
        <div class="on">
          <img src="/icons/record-circle-red.svg" alt="record-circle-red" />
          <span>Live Preview</span>
        </div>
        <video id="screen" height="490" ref="combinedVideo" autoplay controls></video>
      </div>
      <div class="d-flex">
        <!-- <button v-show="isRecording" class="btn btn-red mr-3" @click="stopRecording">Stop Recording</button> -->
        <button class="btn btn-blue" @click="saveRecording">Save Recording</button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.overlay {
  min-height: 100vh;
  width: 100%;
  // background: linear-gradient(117deg, rgba(13, 171, 216, 1) 0%, rgba(234, 250, 255, 1) 0%, rgba(211, 245, 254, 0.25) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .live {
    width: 910px;
    height: 488px;
    background: #21455E;
    border: 1px solid #21455E;
    border-radius: 8px;
    position: relative;

    .on {
      font-size: 14px;
      line-height: 26px;
      color: #637C8E;
      margin-top: -35px;

      img {
        margin-right: 5px;
      }
    }

    #screen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border-radius: 8px;
    }

    #camera {
      position: absolute;
      width: 180px;
      height: 140px;
      right: 0;
      bottom: 0;
    }
  }

  .btn {
    padding: 15px 35px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 30px;
    color: #637c8e;
    border: 1px solid #e2e5ed;
    background: transparent;
    cursor: pointer;

    background: rgba(13, 171, 216, 0.25);
    margin-top: 75px;
    // width: 234px;
    // height: 63px;
    font-weight: 600px;
    font-size: 20px;
    line-height: 27px;
  }
}
</style>
