<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Modal from "./components/RecordingModal.vue";

</script>

<template>
  <div>
    <Navbar />
    <div class="body">
      <div class="aside">
        <Sidebar />
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>

  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.body {
  display: flex;
  margin-top: 80px;

  .aside {
    width: 18%;
    min-width: 250px;
    position: fixed;
  }

  .main {
    flex: 9;
    padding: 20px 9%;
    margin-left: 17.9%;
  }
}
.modal {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  .wrapper {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }

  .modalTitle {
    position: relative;
    padding: 8px 12px;
    border-bottom: 1px solid #e2e5ed;
    h2 {
      font-size: 22px;
      font-weight: 600;
    }
    img {
      cursor: pointer;
      position: absolute;
      // border: 1px solid;
      border-radius: 50%;
      padding: 3px;
      right: 5px;
      top: 3px;
    }
  }
}
</style>
