<template>
<v-container>
  <v-layout column>
    <v-flex v-if="btnFlag">
      <v-btn outline flat color="pink">
        {{btnDoc}}
      </v-btn>
    </v-flex>
    <v-flex :key=item.id v-for="item in this.articleList" mb-3 text-xs-left>
      <article-card :article="item"></article-card>
    </v-flex>
    <v-flex>
      <v-pagination :length="5" v-model="page" flat circle>
      </v-pagination>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import ArticleCard from './article.vue'
import api from '@/api'
export default {
  name: 'articlelist',
  data() {
    return {
      page: 1,
      articleList: '',
      btnFlag: false,
      btnDoc: 'java',
      query: {
        state: '1',
        pageNum: 1,
        pageSize: 2
      }
    }
  },
  components: {
    ArticleCard
  },
  mounted() {
    var type = this.$router.currentRoute.query.type
    if (type === undefined) { //首页文章
      api.article.getArticleListByState(this.query).then(res => {
        this.articleList = res.body
      }, error => console.log(error))
    } else {
      this.btnDoc = this.$router.currentRoute.query.p
      this.btnFlag = true
      //分类文章category
      if (type === 'category') {
        api.article.getArticleListByCategory(this.btnDoc).then(res => {
          this.articleList = res.body
        }, error => console.log(error))
      } else { //标签文章tag
        api.article.getArticleListByTag(this.btnDoc).then(res => {
          this.articleList = res.body
        }, error => console.log(error))
      }
    }
  }
}
</script>
