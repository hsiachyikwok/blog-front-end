<template>
<v-flex>
  <v-fab-transition>
    <v-btn @click="goTop" color="pink" dark fab bottom right fixed v-show="hidden">
      <v-icon>expand_less</v-icon>
    </v-btn>
  </v-fab-transition>
</v-flex>
</template>

<script>
export default {
  name: 'goTop',
  data() {
    return {
      hidden: false,
      scrollTop: '',
      interval: null, // 定时器
      visibleHeight: "50",
      rate: "6"
    }
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
