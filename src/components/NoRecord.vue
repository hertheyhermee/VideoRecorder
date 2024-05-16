<script setup>
import { ref } from "vue";
import Modal from "./RecordingModal.vue";
import RecordingMenu from "./RecordingMenu.vue";

const showModal = ref(false);

const  props = defineProps({
  recordings: {
    type: Object,
    required: true
  }
})

const {recordings} = props

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const buttonsSm = ref([
  { text: "Start Recording", icon: "/images/video.svg" },
  { text: "New Request", icon: "/images/record.svg" },
]);
</script>

<template>
  <div class="landingPage">
    <div class="wrap">
      <div class="title">
        <p>Snapbyte</p>
        <img src="/images/chevron-right.svg" alt="" />
        <p>My recordings</p>
      </div>
      <RecordingMenu :recordings="recordings"/>
      <div class="hero">
        <img class="folder" src="/images/filefolder.jpg" alt="" />
        <p>Say hello to the world!</p>
        <small
          >Record your first video/audio and share it with your team, friends, followers
          and customers</small
        >
        <div class="btnsHero">
          <div v-for="(button, i) in buttonsSm" :key="i">
            <button
              v-if="button.text === 'Start Recording'"
              :key="button.text"
              class="btn-red"
              @click="toggleModal"
            >
              <img :src="button.icon" alt="" />
              {{ button.text }}
            </button>
            <button
              :key="button.text"
              v-if="button.text === 'New Request'"
              class="btn-blue"
            >
              <img :src="button.icon" alt="" />
              {{ button.text }}
            </button>
          </div>
        </div>
      </div>

      <div class="snap">
        <div class="snapshot">
          <img src="/images/card.jpg" alt="" />
        </div>
        <div class="controls">
          <h3>Want more controls & better quality recording?</h3>
          <button>Download the desktop recorder</button>
        </div>
      </div>
      <!-- <h1>Landing page</h1> -->
    </div>

    <div v-if="showModal">
      <Modal @close-modal="toggleModal" />
    </div>
  </div>


</template>

<style lang="less">
.landingPage {
  margin-bottom: 100px;
  .wrap {

    .snap {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      .snapshot {
        flex: 1;
        img {
          width: 100%;
          box-shadow: 0px 3px 48px #0000001a;
          border-radius: 10px;
          // height: 200px;
        }
      }
      .controls {
        flex: 1;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        // border: 1px solid;

        h3 {
          max-width: 400px;
          font-size: 26px;
        }

        button {
          align-self: flex-start;
          padding: 15px 30px;
          font-size: 16px;
          border-radius: 25px;
          background: #0dabd8;
          color: #fff;
          border: none;
          margin-top: 30px;
          margin-left: 30px;
        }
      }
    }

    .hero {
      border: 1px dashed #a3bac6;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 30em;
      margin-top: 30px;
      border-radius: 30px;

      .btnsHero {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        button {
          margin: 0 15px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          border: none;
          gap: 5px;
          border-radius: 30px;
          cursor: pointer;
        }
      }

      .folder {
        width: 250px;
      }
      p {
        font-size: 25px;
        font-weight: bold;
      }
      small {
        margin-top: 20px;
        max-width: 400px;
        text-align: center;
        color: #637c8e;
      }
    }
    .title {
      display: flex;
      align-items: center;
      color: #637c8e;
      margin-bottom: 15px;

      img {
        margin: 0 10px;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .subtitle {
    flex-direction: column;
    align-items: center;

    .btns {
      margin-top: 20px;

      .btn:first-of-type {
        margin-left: 0;
      }
    }
    .btns:first-child {
      margin-left: 0;
    }

    .recordings {
      align-self: flex-start;
      margin-bottom: 20px;
    }
  }
}
</style>
