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
