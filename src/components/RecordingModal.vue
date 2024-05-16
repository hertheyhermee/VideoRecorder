<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const screenRecording = ref(false)
  const videoRecording = ref(false)
  const audioRecording = ref(false)
  const project = ref(null)

  const router = useRouter();

  const emit = defineEmits(['close-modal'])

  const record = () => {
    if(screenRecording.value ==  false  && videoRecording.value  == false  && audioRecording.value == false) {
      alert("Please, select at least one peripheral to record!")
      return
    }
    router.push({
        name: 'LivePreview', 
        query: {
            project: project.value, 
            screenRecording: screenRecording.value, 
            videoRecording: videoRecording.value,
            audioRecording: audioRecording.value
        }
    })
  }

</script>

<template>
  <div class="modal">
    <div class="wrapper">
      <div class="modalTitle">
        <h2>New Recording</h2>
        <img src="/images/cancel.svg" @click="emit('close-modal')" alt="" />
      </div>
      <div class="modalContent">
        <p>Save the recording in</p>
        <div class="select-dropdown">
          <select name="projects" id="" v-model="project">
            <option value="">Select a project</option>
            <option value="">Project 1</option>
            <option value="">Project 2</option>
          </select>
        </div>
        <div class="options">
          <p>Record screen</p>
          <div class="toggle-switch">
            <input class="toggle-input" id="toggle" type="checkbox" v-model="screenRecording"/>
            <label class="toggle-label" for="toggle"></label>
          </div>
        </div>
        <div class="options">
          <p>Record camera</p>
          <div class="toggle-switch">
            <input class="toggle-input" id="toggle1" type="checkbox" v-model="videoRecording"/>
            <label class="toggle-label" for="toggle1"></label>
          </div>
        </div>
        <div class="options">
          <p>Record mic</p>
          <div class="toggle-switch">
            <input class="toggle-input" id="toggle2" type="checkbox" v-model="audioRecording"/>
            <label class="toggle-label" for="toggle2"></label>
          </div>
        </div>
        <button class="start" @click="record">Start Recording</button>
        <!-- <div v-if="showPreview">
          <router-link to="/Preview">
            <Preview />
          </router-link>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="less">
.modalContent {
  padding: 20px 11px;

  p {
    margin: 0 0 20px;
  }
  .select-dropdown,
  .select-dropdown * {
    margin: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
  }
  .select-dropdown {
    position: relative;
    background-color: #e6e6e6;
    border-radius: 4px;
  }
  .select-dropdown select {
    font-size: 1rem;
    font-weight: normal;
    width: 100%;
    max-width: 100%;
    padding: 8px 24px 8px 10px;
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .select-dropdown select:active,
  .select-dropdown select:focus {
    outline: none;
    box-shadow: none;
  }
  .select-dropdown:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 8px;
    width: 0;
    height: 0;
    margin-top: -2px;
    border-top: 5px solid #aaa;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }

  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    p {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 1px;
    }
  }

  .start {
    display: block;
    margin: 30px auto 0;
    font-size: 18px;
    border-radius: 30px;
    border: none;
    background: #0dabd8;
    color: #fff;
    padding: 15px 30px;
    width: 280px;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
  }
  // toggle switch styles
  /* Genel stil */
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 0 10px;
    margin-right: 0;
  }

  /* Giriş stil */
  .toggle-switch .toggle-input {
    display: none;
  }

  /* Anahtarın stilinin etrafındaki etiketin stil */
  .toggle-switch .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 24px;
    background-color: grey;
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  /* Anahtarın yuvarlak kısmının stil */
  .toggle-switch .toggle-label::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
  }

  /* Anahtarın etkin hale gelmesindeki stil değişiklikleri */
  .toggle-switch .toggle-input:checked + .toggle-label {
    background-color: #4caf50;
  }

  .toggle-switch .toggle-input:checked + .toggle-label::before {
    transform: translateX(16px);
  }

  /* Light tema */
  .toggle-switch.light .toggle-label {
    background-color: #bebebe;
  }

  .toggle-switch.light .toggle-input:checked + .toggle-label {
    background-color: #9b9b9b;
  }

  .toggle-switch.light .toggle-input:checked + .toggle-label::before {
    transform: translateX(6px);
  }

  /* Dark tema */
  .toggle-switch.dark .toggle-label {
    background-color: #4b4b4b;
  }

  .toggle-switch.dark .toggle-input:checked + .toggle-label {
    background-color: #717171;
  }

  .toggle-switch.dark .toggle-input:checked + .toggle-label::before {
    transform: translateX(16px);
  }
}
</style>
