<template>
    <div>
        <Recordings v-if="recordings.length" :recordings="recordings"/>
        <NoRecord  :recordings="recordings" v-else/>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import NoRecord from '../components/NoRecord.vue'
    import Recordings from '../components/Recordings.vue'

    const recordings = ref([
        {
            'thumbnail': '/images/thumbnail-1.jpg',
            'name': 'Getting it right the first time',
            'description': 'The video description for getting it right the first time.',
            'views': 588,
            'size': '12800 KB',
            'duration': '12:30',
            'last_modified': '3 months ago',
        },
        {
            'thumbnail': '/images/thumbnail-2.jpg',
            'name': 'Getting it right the second time',
            'description': 'The video description for getting it right the second time.',
            'views': 324,
            'size': '10564 KB',
            'duration': '10:18',
            'last_modified': '3 months ago',
        },
    ])
</script>

<style lang="less" scoped>

</style>