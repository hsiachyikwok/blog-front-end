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
              <v-btn color="primary" @click.native="submit()">登录</v-btn>
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
import {
  addRoutes
} from '@/utils/addroute.js'
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
        addRoutes()
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
