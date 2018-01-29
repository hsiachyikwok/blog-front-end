<template>
<div class="content">
  <div v-for="n in 2" class="article-item">
    <mu-card>
      <mu-card-header title="hsiachyikwok" subTitle="2018-1-10">
        <mu-avatar src="http://img1.imgtn.bdimg.com/it/u=586723545,3678636448&fm=27&gp=0.jpg" />
      </mu-card-header>
      <mu-card-media>
        <img style="max-height: 200px" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=728716286,400909932&fm=27&gp=0.jpg" />
      </mu-card-media>
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
</template>
<script>
import VueMarkdown from 'vue-markdown'
import api from '@/api'
export default {
  name: 'ArticleList',
  data() {
    return {
      aa: '## 前言11111111111111111111111111'
    }
  },
  methods: {
    handleClick(newIndex) {}
  },
  components: {
    VueMarkdown
  },
  mounted(){
    api.article.getArticleList();
  }
}
</script>
<style lang="css">
  .content {
    display: flex;
    flex-flow:column nowrap;
  }
  .article-item{
    padding: 5%;
    max-width: 800px;
    max-height: 1000px;
  }
  .page {
    display: flex;
    flex-flow:row nowrap;
    justify-content : space-around;
  }
  .summary {
    width:30em; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;
  }
</style>
