<template>
<v-container fill-height fluid>
  <v-layout column>
    <v-form v-model="valid" ref="form">
  <v-flex>
    <v-text-field v-model="articleInfo.articleTitle"  :rules="nameRules" label="标题"></v-text-field>
  </v-flex>
  <v-flex mb-3>
    <div id="editor">
      <mavon-editor v-model="articleInfo.content" style="height: 100%"></mavon-editor>
    </div>
  </v-flex>
  <v-flex>
    <v-text-field  v-model="articleInfo.articleLink" :rules="nameRules" label="访问链接"></v-text-field>
  </v-flex>
  <v-flex>
      <v-text-field  v-model="articleInfo.tags" :rules="nameRules" label="标签"></v-text-field>
  </v-flex>
  <v-flex>
    <v-text-field v-model="articleInfo.brefIntro" :rules="nameRules" label="##简介##支持markdown" textarea></v-text-field>
  </v-flex>
    </v-form>
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
      valid: false,
      nameRules: [
        v => !!v || 'Value is required'
      ],
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
    validateForm() {
      if (!this.$refs.form.validate()) {
        return false
      } else if (this.articleInfo.content === '') {
        this.$toast.center('请输入文章内容！');
        return false
      }
      return true
    },
    getType() {
      if (this.isDraft) {
        this.articleInfo.type = '0'
      } else {
        this.articleInfo.type = '1'
      }
    },
    submit() {
      if (!this.validateForm()) {
        console.log(111323232323)
        return false
      }
      this.getType()
      api.article.addArticle(this.articleInfo).then(res => {
        this.$toast.center('发布成功！');
      }, error => {
        this.$toast.center('发布失败！');
        console.log(error)
      })
    },
    update() {
      if (!this.validateForm()) {
        console.log(111323232323)
        return false
      }
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
