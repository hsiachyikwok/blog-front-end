<template>
<v-container>
  <v-layout>
    <v-flex>
      <v-card>
        <v-flex>
          <timeline>
            <div v-for="n in 3">
              <timeline-title>2018-2-16</timeline-title>
              <timeline-item color="#9dd8e0">spring 源码分析</timeline-item>
              <timeline-item :hollow="true">vue 入门</timeline-item>
              <timeline-item :hollow="true">vue 入门</timeline-item>
              <timeline-item :hollow="true">
                <v-avatar>
                  <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg" alt="avatar">
                </v-avatar>
              </timeline-item>
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
export default {
  data() {
    return {}
  },
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }

}
</script>
