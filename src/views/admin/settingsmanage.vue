<template>
<v-container fluid grid-list-md>
  <v-layout>
    <v-flex xs12>
      <v-form v-model="valid" ref="form">
        <v-text-field label="头像" v-model="configForm.avatar" :rules="nameRules"></v-text-field>
        <v-text-field label="博客标题" v-model="configForm.blogTitle" :rules="nameRules"></v-text-field>
        <v-text-field label="博客子标题" v-model="configForm.blogSubTitle" :rules="nameRules"></v-text-field>
        <v-text-field label="博客logo" v-model="configForm.blogLogo" :rules="nameRules"></v-text-field>
        <v-text-field label="favicon" v-model="configForm.favicon" :rules="nameRules"></v-text-field>
        <v-text-field label="MetaKeyWords" v-model="configForm.metaKeywords" :rules="nameRules"></v-text-field>
        <v-text-field label="MetaDesc" v-model="configForm.metaDesc" :rules="nameRules"></v-text-field>
        <v-text-field label="Footer" v-model="configForm.footer" :rules="nameRules"></v-text-field>
        <v-text-field label="##公告##markdown" v-model="configForm.notice" :rules="nameRules" textarea></v-text-field>
        <v-text-field label="允许评论" v-model="configForm.allowComment" :rules="nameRules"></v-text-field>
        <v-text-field label="文章列表样式" v-model="configForm.listStyle" :rules="nameRules"></v-text-field>
        <v-text-field label="最近评论数" v-model="configForm.recentCommentSize" :rules="nameRules"></v-text-field>
        <v-text-field label="分页大小" v-model="configForm.pageSize" :rules="nameRules"></v-text-field>
        <v-text-field label="分页宽度" v-model="configForm.pageWidth" :rules="nameRules"></v-text-field>
        <v-text-field label="最多浏览文章显示数" v-model="configForm.mostViewSize" :rules="nameRules"></v-text-field>
        <v-text-field label="最多评论显示数" v-model="configForm.mostCommentSize" :rules="nameRules"></v-text-field>
        <v-text-field label="待选标签显示数" v-model="configForm.usedTagSize" :rules="nameRules"></v-text-field>
        <v-text-field label="位置" v-model="configForm.location" :rules="nameRules"></v-text-field>
        <v-text-field label="##关于##markdown" v-model="configForm.about" :rules="nameRules" textarea></v-text-field>
      </v-form>
    </v-flex>
    <v-flex xs12></v-flex>
  </v-layout>

  <v-layout>
    <v-flex>
      <v-btn outline @click="updateConfig()">更新</v-btn>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import api from '@/api'
import storage from '@/utils/storage.js'
export default {
  name: 'settingsmanage',
  data() {
    return {
      valid: false,
      configForm: {},
      nameRules: [
        v => !!v || 'Value is required',
        // v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        // v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    updateConfig() {
      if (!this.$refs.form.validate()) {
        return false
      }
      this.configForm.createTime = undefined
      this.configForm.updateTime = undefined
      this.configForm.username = undefined
      this.configForm.password = undefined
      api.config.updateConfig(this.configForm).then(res => {
        this.$toast.center('更新成功！');
        api.config.getConfig().then(res => {
          this.configForm = res.body
          storage.set('config', res.body)
        }, error => console.log(error))
      }, error => console.log(error))
    }
  },
  mounted() {
    this.configForm = storage.get('config')
  }
}
</script>
