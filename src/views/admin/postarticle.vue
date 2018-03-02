<template>
<v-container fill-height fluid>
  <v-layout column>
  <v-flex>
    <v-text-field name="input-1" label="标题"></v-text-field>
  </v-flex>
  <v-flex>
    <editor></editor>
  </v-flex>
  <v-flex>
    <v-text-field name="input-1" label="访问链接"></v-text-field>
  </v-flex>
  <v-flex>
      <v-text-field name="input-1" label="标签"></v-text-field>
  </v-flex>
  <v-flex>
    <v-text-field name="input-1" label="简介" textarea></v-text-field>
  </v-flex>
  <v-flex>
    <v-btn @click="submit(1)">发布</v-btn>
    <v-btn @click="submit(2)">存为草稿</v-btn>
  </v-flex>
  </v-layout>
</v-container>
  </template>
<script>
import editor from './mdeditor.vue'
import api from '@/api'
export default {
  data() {
    return {
      articleInfo: {
        articleTitle: '',
        articleLink: '',
        type: '',
        tags: '',
        content: '',
        brefIntro: '',
      }
    }
  },
  methods: {
    submit(flag) {
      this.articleInfo.type = flag
      api.article.addArticle(this.articleInfo).then(res => {

      }, error => {
        console.log(error)
      })
    }
  },
  components: {
    editor
  }
}
</script>
