<template>
<v-container fill-height fluid>
  <v-layout column>
  <v-flex>
    <v-text-field v-model="articleInfo.articleTitle"  label="标题"></v-text-field>
  </v-flex>
  <v-flex mb-3>
    <div id="editor">
      <mavon-editor v-model="articleInfo.content" style="height: 100%"></mavon-editor>
    </div>
  </v-flex>
  <v-flex>
    <v-text-field  v-model="articleInfo.articleLink" label="访问链接"></v-text-field>
  </v-flex>
  <v-flex>
      <v-text-field  v-model="articleInfo.tags" label="标签"></v-text-field>
  </v-flex>
  <v-flex>
    <v-text-field v-model="articleInfo.brefIntro" label="##简介##支持markdown" textarea></v-text-field>
  </v-flex>
  <v-flex>
    <v-btn outline @click="submit(1)" v-if="true">发布</v-btn>
    <v-btn outline @click="submit(0)" v-else>取消发布</v-btn>
    <v-btn  outline @click="submit(2)" v-if="true">存为草稿</v-btn>
  </v-flex>
  </v-layout>
</v-container>
  </template>
<script>
import {
  mavonEditor
} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
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
      },
      alert: true
    }
  },
  methods: {
    submit(value) {
      this.articleInfo.type = value
      api.article.addArticle(this.articleInfo).then(res => {

      }, error => {
        console.log(error)
      })
    }
  },
  components: {
    mavonEditor
  },
  mounted() {
    console.log(11222)
  }
}
</script>

<style>
#editor {
  margin: auto;
  max-width: 1100px;
  height: 300px;
}
</style>
