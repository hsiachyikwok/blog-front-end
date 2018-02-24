<template>
<v-container>
  <v-layout>
    <v-flex>
      <v-card>
        <v-flex>
          <timeline>
            <div v-for="(item, index) in archiveList" :key="index">
              <timeline-title>{{item.archiveDate}}</timeline-title>
              <timeline-item color="#9dd8e0" v-for="(subitem, subindex) in item.articleList" :key="subindex">{{subitem}}</timeline-item>
            </div>
          </timeline>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import {
  Timeline,
  TimelineItem,
  TimelineTitle
} from 'vue-cute-timeline'
import api from '@/api'
export default {
  data() {
    return {
      archiveList: [{
        archiveDate: '2108-1-1',
        articleList: ['vue', 'vue']
      }, {
        archiveDate: '2108-1-1',
        articleList: ['vue', 'vue']
      }, {
        archiveDate: '2108-1-1',
        articleList: ['vue', 'vue']
      }]
    }
  },
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  mounted() {
    api.archive.getArchiveList().then(res => {
      //this.archiveList = res.body
    }, error => console.log(error))
  }

}
</script>
