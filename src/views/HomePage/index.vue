<template>
<div class="main">
  <pageSidebar></pageSidebar>
  <router-view></router-view>
</div>
</template>

<script>
import pageSidebar from '@/views/sidebar'
export default {
  name: 'Layout',
  // component properties
  props: {},
  // variables
  data() {
    return {}
  },
  computed: {},
  // when component uses other components
  components: {
    pageSidebar
  },
  // methods
  watch: {},
  methods: {},
  // component Lifecycle hooks
  beforeCreate() {},
  created() {},
  mounted() {}
}
</script>

<style lang="css">
  .main {
    display: flex;
    flex-flow:row nowrap;
    justify-content : space-around;
  }
  .content {
    display: flex;
    flex-flow:column nowrap;
  }
  .aside {
    display: flex;
    flex-flow:column nowrap;
    padding: 5%;
  }
  .article-item{
    padding: 5%;
    max-width: 800px;
  }
  .page {
    display: flex;
    flex-flow:row nowrap;
    justify-content : space-around;
  }

  /* 透明渐变 - color - transparent */
  .style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }

</style>
