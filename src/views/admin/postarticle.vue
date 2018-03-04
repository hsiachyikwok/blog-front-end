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
    <v-container fill-height fluid grid-list-md>
      <v-layout>
        <v-flex xs2>
          <v-radio-group v-model="radioGroup">
          <v-radio
            :label="`发布`"
            :value="publish"
          ></v-radio>
          <v-radio
            :label="`存为草稿`"
            :value="draft"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
  <v-flex>
    <v-btn outline @click="submit()" v-if="!isEdit">确定</v-btn>
    <v-btn outline @click="update()" v-else>更新</v-btn>
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
      radioGroup: 1,
      publish: 1,
      draft: 0,
      isEdit: false,
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
    doPublish() {
      console.log(0)
      this.draft = false
    },
    doDraft() {
      console.log(1)
      this.publish = false
    },
    submit() {
      api.article.addArticle(this.articleInfo).then(res => {}, error => {
        console.log(error)
      })
    },
    update(value) {
      //this.articleInfo.type = value
      //this.articleInfo.isDel = value
      api.updateArticle(this.articleInfo).then(res => {}, error => {
        console.log(error)
      })
    },
    getArticle(id) {
      api.article.getArticle(id).then(res => {
        this.articleInfo = res.body
        console.log(this.articleInfo)
      }, error => {
        console.log(error)
      })
    }
  },
  components: {
    mavonEditor
  },
  mounted() {
    var id = this.$router.currentRoute.query.id
    if (id !== undefined) {
      this.isEdit = true
      this.publish = false
      this.draft = true
      this.getArticle(id)
    }
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
