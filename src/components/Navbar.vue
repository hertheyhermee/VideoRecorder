<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const headers = ref([
  "Projects",
  "Tools & App",
  "Channels",
  "contacts",
  "analytics",
  "settings",
]);

// Define reactive variables using ref
const message = ref("Hello, Vue 3!");
const count = ref(0);

// Define methods or event handlers
const increment = () => {
  count.value++;
};
</script>

<template>
  <div class="navbar">
    <router-link to="/" class="brand">
      <div class="logo">
        <img src="/images/swarm.svg" alt="" />
      </div>
      <h1>Adilo</h1>
    </router-link>
    <ul class="nav_items">
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a class="dropdown-toggle">Tools & App</a>
        <ul class="dropdown-content">
            <li>
                <RouterLink to="/" class="dropdown-item">Snapbyte Recorder</RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="dropdown-item">AudioBounce</RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="dropdown-item" style="border-bottom: none">Sugar Voice</RouterLink>
            </li>
        </ul>
      </li>
      <li>
        <a>Channels</a>
      </li>
      <li>
        <a>Contacts</a>
      </li>
    </ul>
    <div class="profile">
      <p class="help">help</p>
      <div class="profileDetails">
        <img class="avatar" src="/images/60111.jpg" alt="" />
        <div class="name">
          <h4 >Cody Fisher</h4>
          <p>codyfisher@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@logobg: #fbb271;
/* Your Less styles */

.navbar {
  border-bottom: 1px solid rgba(211, 211, 211, 0.818);
  padding: 20px 5%;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  // justify-content: space-between;
  .brand {
    display: flex;
    align-items: center;
    margin-right: 70px;
    text-decoration: none;
    color: #000;

    h1 {
      font-size: 30px;
    }
  }

  .logo {
    background: @logobg;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 15px;

    img {
      width: 25px;
    }
  }

  .nav_items {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      list-style: none;
      // border: 1px solid green;
      display: inline-block;
      font-size: 17.5px;
      margin: 0 25px;
      position: relative;
      color: #707070;
      cursor: pointer;

      img {
        position: absolute;
        right: -25px;
        top: -1px;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        width: 250px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;

        li a {
          float: none;
          color: black;
          padding: 12px 10px;
          text-decoration: none;
          display: block;
          text-align: left;
        }

      }
      &:hover .dropdown-content  {
        display: block;
      }
    }
  }

  .profile {
    // flex: 2;
    display: flex;
    align-items: center;
    margin-left: auto;

    .profileDetails {
      cursor: pointer;
      margin-left: 20px;

      div {
        p {
          font-size: 14px;
          color: gray;
        }
      }
    }

    .help {
      position: relative;
      padding-right: 15px;
      padding-top: 5px;
      padding-bottom: 5px;
      border-right: 3px solid #E2E5ED;
      font-size: 18px;
    }

    .avatar {
      width: 35px;
      height: 35px;
      border-radius: 10px;
      display: block;
      float: left;
      margin-right: 5px;
    }
    .name {
      display: inline-block;
    }
  }

  .dropdown-content a:hover {
    color: rgb(53, 128, 202)
  }
}
</style>
