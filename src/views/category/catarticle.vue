<template>
<v-container>
  <v-layout column>
    <v-flex>
      <v-btn outline flat color="pink">
        {{this.query.category}}
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
import ArticleCard from '@/views/articlelist/article.vue'
import api from '@/api'
export default {
  name: 'catarticle',
  data() {
    return {
      page: 1,
      articleList: '',
      query: {
        category: '',
        pageNum: 1,
        pageSize: 2
      }
    }
  },
  components: {
    ArticleCard
  },
  mounted() {
    this.query.category = this.$router.currentRoute.query.catName
    console.log(this.query.category)
    api.article.getArticleListByCategory(this.query).then(res => {
      this.articleList = res.body.list
    }, error => console.log(error))

  }
}
</script>
