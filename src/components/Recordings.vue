<script setup>
import RecordingMenu from './RecordingMenu.vue';

const props = defineProps({
  recordings: {
    type: Object,
    required: true
  }
})

const {recordings} = props

</script>
<template>
  <div class="myRecordings">
    <div class="title">
      <p>Snapbyte</p>
      <img src="/images/chevron-right.svg" alt="" />
      <p>My recordings</p>
    </div>
    <RecordingMenu :recordings="recordings"/>
    <table>
      <thead>
        <th>Recordings</th>
        <th>Title</th>
        <th>Views</th>
        <th>Size</th>
        <th>Last modified</th>
      </thead>
      <tbody v-for="(record, i) in recordings" :key="`recording${i}}`">
        <tr>
            <td>
                <img :src="record.thumbnail" class="vidImg" alt="">
            </td>
            <td>
                <h6>{{record.name}}</h6>
                <p>{{ record.description }}</p>
            </td>
            <td class="views">
                <span>{{ record.views }}</span>
            </td>
            <td class="size">
                <span>{{ record.size }} KB</span>
            </td>
            <td class="modified">
                <span>{{ record.last_modified }}</span>
            </td>
            <td class="option">
              <img src="/images/three-dots.svg" width="20px" alt="">  
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less">
.myRecordings {
  .title {
    display: flex;
    align-items: center;
    color: #637c8e;
    margin-bottom: 15px;

    img {
      margin: 0 10px;
    }
  }

  table {
    width: 100%;
    margin-top: 40px;
    th {
        text-align: left;
        padding: 0 0 10px;
    }

    tr {
        margin-bottom: 2;
        td {
          padding: 0.5rem 0;
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;

          h6 {
            font-size: 18px;
            line-height: 21px;
          }

          p {
            font-size: 14px;
            line-height: 18px;
            color: #83aabf;
          }

        }
        .option {
          cursor: pointer;
        }
    }
    .vidImg {
      width: 120px;
      border-radius: 10px;
    }

  }

}
</style>
