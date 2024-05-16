<script setup>
import { useRouter } from "vue-router";

    const  router = useRouter()

    const navigate = (path) => {
        router.push(path)
    }
</script>
<template>
    <div class="sidebar">
        <ul>
            <li class="active" @click="navigate('/')">
                <img src="/images/video-player.svg" alt="">
                My recordings
            </li>
            <li>
                <img src="/images/share.svg" alt="">
                Requested
            </li>
        </ul>
    </div>
</template>
<style lang="less">
@background: #EBF2F6 ;
@hovercolor: #E2E5ED;
.sidebar {
    background-color: @background;
    height: calc(100vh - 80px);
    padding: 20px 20px;
    border-right: 3px solid @hovercolor;


    ul {
        list-style: none;

        li {
            display: flex;
            align-items: center;
            padding: 10px 25px;
            font-size: 16px;
            margin-bottom: 20px;
            border-radius: 10px;
            color: #21455E;
            cursor: pointer;

            img {
                padding-right: 20px;
            }
        }

        li.active {
            background-color: @hovercolor;
        }

        li:hover {
            background-color: @hovercolor;
        }
    }
}

</style>