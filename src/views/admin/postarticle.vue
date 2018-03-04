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
         <v-checkbox :label="`存为草稿`" v-model="isDraft"></v-checkbox>
      </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
  <v-flex>
    <v-btn outline @click="submit()" v-if="!isEdit">发布</v-btn>
    <v-btn outline @click="update()" v-else>发布</v-btn>
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
      isDraft: false,
      isEdit: false,
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
    getType() {
      if (this.isDraft) {
        this.articleInfo.type = '0'
      } else {
        this.articleInfo.type = '1'
      }
    },
    submit() {
      this.getType()
      api.article.addArticle(this.articleInfo).then(res => {
        this.$toast.center('发布成功！');
      }, error => {
        this.$toast.center('发布失败！');
        console.log(error)
      })
    },
    update() {
      this.getType()
      this.articleInfo.createTime = undefined
      this.articleInfo.updateTime = undefined
      api.article.updateArticle(this.articleInfo).then(res => {
        this.$toast.center('更新成功！');
      }, error => {
        this.$toast.center('更新失败！');
        console.log(error)
      })
    },
    getArticle(id) {
      api.article.getArticle(id).then(res => {
        this.articleInfo = res.body
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
