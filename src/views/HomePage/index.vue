<template>
<div class="main">
  <div class="aside">
    <div>
      <router-link to="/">leapxia'notes</router-link>
    </div>
    <br>
    <br>
    <br>
    <div>
      搜索
      <hr class="style-two">
    </div>
    <div>
      归档
      <hr class="style-two">
    </div>
    <div>
      <router-link to="/tag">标签</router-link>
      <hr class="style-two">
    </div>
    <div>
      分类
      <hr class="style-two">
    </div>
    <div>
      时光轴
      <hr class="style-two">
    </div>
    <div>
      友链
      <hr class="style-two">
    </div>
    <footer>
      hsiachyikwok'blog since ©2018
    </footer>
  </div>
  <div class="content">
    <div v-for="n in 5" class="article-item">
      <mu-card>
        <mu-card-header title="hsiachyikwok" subTitle="2018-1-10">
          <mu-avatar src="http://img1.imgtn.bdimg.com/it/u=586723545,3678636448&fm=27&gp=0.jpg" />
        </mu-card-header>
        <mu-card-title title="vue项目搭建" subTitle="vue.js" />
        <mu-card-text>
          <vue-markdown>{{aa}}</vue-markdown>
        </mu-card-text>
        <mu-card-actions>
          <!--<mu-flat-button label="更多"/>-->
          <router-link to="/article">
            <mu-flat-button label="更多" />
          </router-link>
        </mu-card-actions>
      </mu-card>
    </div>
    <div class="page">
      <!--<vue-markdown>### ddd</vue-markdown>-->
    </div>
  </div>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  // component properties
  props: {},
  // variables
  data() {
    return {
      aa:'## ddd'
    }
  },
  computed: {},
  // when component uses other components
  components: {
    VueMarkdown
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
