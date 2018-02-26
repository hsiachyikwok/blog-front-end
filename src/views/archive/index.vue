<template>
<v-container>
  <v-layout>
    <v-flex>
      <v-card>
        <v-flex>
          <timeline>
            <div v-for="(item, index) in archiveList" :key="index">
              <timeline-title>{{item.archiveTime|formatDate}}</timeline-title>
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
  formatDate
} from '@/utils/dateformat.js'
import {
  Timeline,
  TimelineItem,
  TimelineTitle
} from 'vue-cute-timeline'
import api from '@/api'
export default {
  data() {
    return {
      archiveList: []
    }
  },
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  filters: {
    formatDate(time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  mounted() {
    api.archive.getArchiveList().then(res => {
      this.archiveList = res.body
    }, error => console.log(error))
  }

}
</script>
