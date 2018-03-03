<template>
<v-container>
  <v-layout column>
    <v-flex>
      <v-btn outline flat color="pink">
        {{this.query.tag}}
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
import ArticleCard from '@/views/articlelist/article'
import api from '@/api'
export default {
  name: 'tagarticle',
  data() {
    return {
      page: 1,
      articleList: '',
      query: {
        tag: '',
        pageNum: 1,
        pageSize: 2
      }
    }
  },
  components: {
    ArticleCard
  },
  mounted() {
    this.query.tag = this.$router.currentRoute.query.tagName
    console.log(this.query.tag)
    api.article.getArticleListByTag(this.query).then(res => {
      this.articleList = res.body.list
    }, error => console.log(error))
  }
}
</script>
