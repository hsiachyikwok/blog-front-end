<template>
<v-container>
  <v-layout column>
    <notice></notice>
    <go-top></go-top>
    <!-- <v-flex>
      <strong>最近评论</strong>
    </v-flex>
    <v-flex text-xs-left>
      <v-card>
        <v-card-text>
          <vue-markdown :source="notice"></vue-markdown>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <strong>最近浏览</strong>
    </v-flex>
    <v-flex text-xs-left>
      <v-card>
        <v-card-text>
          <vue-markdown :source="notice"></vue-markdown>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <strong>最多浏览</strong>
    </v-flex>
    <v-flex text-xs-left>
      <v-card>
        <v-card-text>
          <vue-markdown :source="notice"></vue-markdown>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <strong>标签</strong>
    </v-flex>
    <v-flex>
      <tag-cloud></tag-cloud>
    </v-flex> -->
    <!-- <v-flex>
      <v-fab-transition>
        <v-btn @click="goTop" color="pink" dark fab bottom right fixed v-show="hidden">
          <v-icon>expand_less</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-flex> -->
  </v-layout>
</v-container>
</template>
<script>
import notice from './notice.vue'
import GoTop from '@/components/goTop'
export default {
  name: 'rightsidebar',
  data() {
    return {
      hidden: false,
      scrollTop: '',
      interval: null, // 定时器
      visibleHeight: "50",
      rate: "6"
    }
  },
  components: {
    notice,
    GoTop
  }
}
</script>
