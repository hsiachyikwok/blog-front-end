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
      <v-pagination @input="pageChange()" :length="this.pages" v-model="this.query.pageNum" :total-visible="7" flat circle>
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
      pages: 0,
      articleList: '',
      query: {
        category: '',
        pageNum: 1,
        pageSize: 5
      }
    }
  },
  components: {
    ArticleCard
  },
  methods: {
    pageChange() {
      this.getArticles()
    },
    getArticles() {
      this.query.category = this.$router.currentRoute.query.catName
      console.log(this.query.category)
      api.article.getArticleListByCategory(this.query).then(res => {
        this.articleList = res.body.list
        this.pages = res.body.pages
      }, error => console.log(error))

    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>
