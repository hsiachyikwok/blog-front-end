<template>
<v-container>
  <v-layout column>
    <v-flex :key=item.id v-for="item in this.articleList" mb-3 text-xs-left>
      <article-card :article="item"></article-card>
    </v-flex>
    <v-flex>
      <v-pagination @input="pageChange()" :length="100" v-model="query.pageNum" :total-visible="5" flat circle>
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
      query: {
        state: '1',
        pageNum: 1,
        pageSize: 3
      }
    }
  },
  components: {
    ArticleCard
  },
  mounted() {
    api.article.getArticleListByState(this.query).then(res => {
      this.articleList = res.body.list
    }, error => console.log(error))
  }
}
</script>
