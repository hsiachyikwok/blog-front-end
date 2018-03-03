<template>
<v-container>
  <v-layout column>
    <v-flex :key=item.id v-for="item in this.articleList" mb-3 text-xs-left>
      <article-card :article="item"></article-card>
    </v-flex>
    <v-flex>
      <v-pagination :length="this.pages" v-model="query.pageNum" :total-visible="7" flat circle>
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
      articleList: '',
      pages:0,
      query: {
        state: '1',
        pageNum: 1,
        pageSize: 5
      }
    }
  },
  components: {
    ArticleCard
  },
  mounted() {
    api.article.getArticleListByState(this.query).then(res => {
      this.articleList = res.body.list
      this.pages = res.body.pages
    }, error => console.log(error))
  }
}
</script>
