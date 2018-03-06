<template>
<v-container>
  <v-layout>
    <v-flex text-xs-left>
      <v-card>
        <v-flex px-3 py-3>
          <v-card-text>
            <vue-markdown :toc="true" :source="content"></vue-markdown>
          </v-card-text>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
  <!-- <comment></comment> -->
</v-container>
</template>

<script>
import prism from 'prismjs'
import api from '@/api'
import VueMarkdown from 'vue-markdown'
import comment from './comment'
export default {
  data() {
    return {
      content: '',
    }
  },
  components: {
    VueMarkdown,
    comment,
  },
  mounted() {

    var id = this.$router.currentRoute.query.id
    api.article.getArticle(id).then(res => {
      this.content = res.body.content
    }, error => console.log(error))
  }
}
</script>
