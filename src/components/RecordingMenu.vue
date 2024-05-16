<template>
    <div>
        <div class="subtitle">
            <div class="recordings">
                <p>My recordings</p>
                <span>{{ recordings.length  }}</span>
            </div>
            <div class="btns">
                <div v-for="(button, i) in buttons" :key="i">
                    <button v-if="button.text === 'By Date' || button.text === 'Add Filter'" class="btn" :key="button.text">
                        <img :src="button.icon" alt="" />
                        {{ button.text }}
                    </button>
                    <button v-else-if="button.text === 'New Request'" class="btn btn-blue" style="background: #0dabd8; color: white">
                        <img :src="button.icon" alt="" />
                        {{ button.text }}
                    </button>
                    <button v-else-if="button.text === 'Start Recording'" class="btn btn-red" @click="toggleModal">
                        <img :src="button.icon" alt="" />
                        {{ button.text }}
                    </button>
                </div>
            </div>
        </div>

        <div v-if="showModal">
            <Modal @close-modal="toggleModal"/>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import Modal from "./RecordingModal.vue";

    const showModal = ref(false);
    const buttons = ref([
        { text: "By Date", icon: "/images/sort.svg" },
        { text: "Add Filter", icon: "/images/filter.svg" },
        { text: "New Request", icon: "/images/record.svg", to: "/start-recording" },
        { text: "Start Recording", icon: "/images/video.svg" },
    ]);

    const props = defineProps({
        recordings: {
            type: Object,
            required: true
        }
    })

    const {recordings} = props


    const toggleModal = () => {
        showModal.value = !showModal.value;
    };

</script>

<style lang="less" scoped>
    .subtitle {
        display: flex;
        justify-content: space-between;
        align-items: end;

        .btns {
        display: flex;

            .btn {
                margin: 0 15px;
                padding: 9px 20px;
                display: flex;
                align-items: center;
                gap: 5px;
                border-radius: 30px;
                color: #637c8e;
                border: 1px solid #e2e5ed;
                background: transparent;
                cursor: pointer;

            }
        }
        .recordings {
        display: flex;
        p {
            margin-right: 20px;
            font-size: 28px;
        }

        span {
            font-size: 28px;
            color: #637c8e;
            font-weight: 600;
        }
        }
    }
</style>