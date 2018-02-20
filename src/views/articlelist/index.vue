<template>
<v-container>
  <v-layout column>
    <v-flex :key=item.id v-for="item in this.articleList" mb-3 text-xs-left>
      <article-card :article="item"></article-card>
    </v-flex>
    <v-flex>
      <v-pagination :length="5" v-model="page">
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
      articleList: ''
    }
  },
  components: {
    ArticleCard
  },
  mounted() {
    api.article.getArticleListByState(1).then(res => {
      this.articleList = res.body
    }, error => console.log(error))
  }
}
</script>
