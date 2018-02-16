<template>
<v-container>
  <v-layout>
    <v-flex text-xs-left>
      <v-card>
        <v-card-text>
          <vue-markdown v-highlightjs :source="content"></vue-markdown>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <!-- <comment></comment> -->
</v-container>
</template>

<script>
import api from '@/api'
import VueMarkdown from 'vue-markdown'
import comment from './comment'
export default {
  data() {
    return {
      content: ""
    }
  },
  components: {
    VueMarkdown,
    comment,
  },
  mounted() {
    api.article.getArticle(1).then(res=>{
      this.content = res.body.content
    },error=>console.log(error)
  )
  }
}
</script>
