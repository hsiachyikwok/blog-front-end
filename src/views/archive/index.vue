<template>
<v-container>
  <v-layout>
    <v-flex text-xs-center>
      <timeline>
        <timeline-title>title</timeline-title>
        <timeline-item color="#9dd8e0">item1</timeline-item>
        <timeline-item :hollow="true">item2</timeline-item>
      </timeline>
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
