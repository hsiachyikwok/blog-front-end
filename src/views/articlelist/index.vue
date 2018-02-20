<template>
<v-container>
  <v-layout column>
    <v-flex :key=n v-for="n in 3" mb-3 text-xs-left>
      <article-card></article-card>
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
export default {
  name: 'articlelist',
  data() {
    return {
      page: 1
    }
  },
  components: {
    ArticleCard
  }
}
</script>
