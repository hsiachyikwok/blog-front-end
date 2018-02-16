<template>
<v-container>
  <v-layout column>
    <v-flex>
      <strong>公告</strong>
    </v-flex>
    <v-flex text-xs-left>
      <v-card>
        <v-card-text>
          <vue-markdown :source="notice"></vue-markdown>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <strong>最近评论</strong>
    </v-flex>
    <v-flex text-xs-left>
      <v-card>
        <v-card-text>
          <vue-markdown :source="notice"></vue-markdown>
        </v-card-text>
      </v-card>
    </v-flex>
    <!-- <v-flex>
      <strong>标签云</strong>
    </v-flex>
    <v-flex>
      <tag-cloud></tag-cloud>
    </v-flex> -->
    <v-flex>
      <v-fab-transition>
        <v-btn @click="goTop" color="pink" dark fab bottom right fixed v-show="hidden">
          <v-icon>expand_less</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-flex>
  </v-layout>
</v-container>
</template>right
<script>
import VueMarkdown from 'vue-markdown'
//import TagCloud from '@/views/tag'
export default {
  name: 'rightsidebar',
  data() {
    return {
      hidden: true,
      notice: "天门山，就是安徽当涂县的东梁山古代又称博望山）与和县的西梁山的合称。两山夹江对峙，象一座天设的门户，形势非常险要，“天门”即由此得名。诗题中的“望”字，说明诗中所描绘的是远望所见天门",
      scrollTop: '',
      interval: null, // 定时器
      visibleHeight:"50",
      rate:"6"
    }
  },
  components: {
    VueMarkdown,
    //TagCloud
  },
  mounted() {
    // Dom加载完毕时监听scroll事件
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    handleScroll() {
      // 判断条件
      this.hidden = window.pageYOffset > this.visibleHeight
      this.scrollTop = window.pageYOffset
    },
    goTop(e) {
      this.interval = setInterval(() => {
        this.scrollTop = this.scrollTop + (-this.scrollTop) / this.rate
        window.scrollTo(0, this.scrollTop)
        if (this.scrollTop <= 0) {
          window.scrollTo(0, 0)
          clearInterval(this.interval)
        }
      }, 13)
    }
  }
}
</script>
