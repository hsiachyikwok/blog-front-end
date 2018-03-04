<template>
<v-app>
  <v-content>
    <v-alert type="error" :value="alert" transition="scale-transition">
      用户名或密码错误
    </v-alert>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>登录</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid" ref="form">
                <v-text-field prepend-icon="person" name="login" label="用户名" type="text" v-model="username" :rules="usernameRules" :counter="10" @focus="hiddenAlert()"></v-text-field>
                <v-text-field prepend-icon="lock" name="password" label="密码" id="password" type="password" :rules="passwordRules" :counter="20" v-model="password" @focus="hiddenAlert()"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color=" primary " @click="submit ">登录</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import api from '@/api'
import storage from '@/utils/storage.js'
import admin from '@/views/admin'
import articlemanage from '@/views/admin/articlemanage'
import settingsmanage from '@/views/admin/settingsmanage'
import commentmanage from '@/views/admin/commentmanage'
import draftbox from '@/views/admin/draftbox'
import postarticle from '@/views/admin/postarticle'
export default {
  data() {
    return {
      username: '',
      password: '',
      alert: false,
      valid: false,
      usernameRules: [v => !!v || '用户名不能为空'],
      passwordRules: [v => !!v || '密码不能为空']
    }
  },
  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return false
      }
      api.auth.login({
        username: this.username,
        password: this.password
      }).then(res => {
        storage.set("token", res.body)
        const adminRoute = [{
          path: '/admin',
          component: admin,
          children: [{
              path: '/admin/articlemanage',
              component: articlemanage,
              meta: {
                title: '文章管理'
              }
            },
            {
              path: '/admin/settingsmanage',
              component: settingsmanage,
              meta: {
                title: '设置管理'
              }
            },
            {
              path: '/admin/draftbox',
              component: draftbox,
              meta: {
                title: '草稿箱'
              }
            },
            {
              path: '/admin/commentmanage',
              component: commentmanage,
              meta: {
                title: '评论管理'
              }
            },
            {
              path: '/admin/postarticle',
              component: postarticle,
              name: 'postarticle',
              meta: {
                title: '编辑文章'
              }
            }
          ]
        }]
        this.$router.addRoutes(adminRoute)
        this.$router.push('/admin/articlemanage')
      }, error => {
        console.log(error)
        this.alert = true
      })
    },
    hiddenAlert() {
      this.alert = false
    }
  }
}
</script>
