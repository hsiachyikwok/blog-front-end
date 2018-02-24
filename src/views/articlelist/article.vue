<template>
<v-card>
  <v-card-title primary-title>
    <v-layout column text-xs-center>
      <v-flex>
        <h2>{{article.articleTitle}}</h2>
      </v-flex>
      <v-layout row>
        <v-flex text-xs-right>
          <span><i class="far fa-calendar-alt"></i></span>
          <span>{{article.createTime|formatDate}}</span>
        </v-flex>
        <v-flex text-xs-left>
          <i class="fas fa-user"></i>
          <span>{{article.viewCount}}</span>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-card-title>
  <v-card-text>
    <vue-markdown :source="this.article.brefIntro"></vue-markdown>
  </v-card-text>
  <v-divider></v-divider>
  <v-card-actions>
    <i class="fas fa-tag"></i>
    <v-flex>
      {{article.tags}}
    </v-flex>
    <v-spacer></v-spacer>
    <v-btn flat color="orange" @click.native="readmore(article)">阅读更多</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {
  formatDate
} from '@/utils/dateformat.js'
export default {
  name: 'articlecard',
  props: {
    article: ''
  },
  data() {
    return {}
  },
  methods: {
    readmore(article) {
      if (article.articleLink === ''||article.articleLink===null) {
        let date = new Date(article.createTime)
        article.articleLink = formatDate(date, 'yyyy-MM-dd')
      }
      this.$router.push({
        name: 'article',
        query:{
          id:article.id
        },
        params: {
          id: article.articleLink
        }
      })
    }
  },
  components: {
    VueMarkdown
  },
  filters: {
    formatDate(time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  mounted() {
    //console.log(this.article)
  }
}
</script>
