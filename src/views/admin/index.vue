<template>
<v-app id="inspire">
  <v-navigation-drawer fixed v-model="drawer" app>
    <v-list dense>
      <v-list-tile @click="jumpToHomePage ">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>博客首页</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="jumpToArticleManage">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>文章管理</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="jumpToCommentManage">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>评论管理</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="jumpToSettingsManage">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>设置</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <router-view/>
  </v-content>
  <v-footer color="indigo" app>
    <span class="white--text">&copy; 2018 powered by vuetify</span>
  </v-footer>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    }
  },
  methods: {
    jumpToHomePage() {
      this.$router.push('/')
    },
    jumpToArticleManage() {
      this.$router.push('/admin/articlemanage')
    },
    jumpToSettingsManage() {
      this.$router.push('/admin/settingsmanage')
    },
    jumpToCommentManage() {
      this.$router.push('/admin/commentmanage')
    }
  }
}
</script>
