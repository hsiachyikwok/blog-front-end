<template>
<v-app>
  <v-navigation-drawer fixed v-model="drawer" app>
    <v-list dense>
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
    <v-toolbar-title>Admin</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-avatar>
      <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg" alt="avatar">
    </v-avatar>
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
