<template>
<v-app>
  <v-navigation-drawer fixed v-model="drawer" app>
    <v-list dense>
      <v-list-tile @click="jumpToArticleManage">
        <v-list-tile-action>
          <v-icon>fa-paper-plane</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>文章管理</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="jumpToCommentManage">
        <v-list-tile-action>
          <v-icon>fa-comment</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>评论管理</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="jumpToSettingsManage">
        <v-list-tile-action>
          <v-icon>fa-cogs</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>设置</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-spacer></v-spacer>
    <div>
      <v-menu bottom offset-y>
        <v-avatar slot="activator">
          <img :src="avatar" alt="avatar">
        </v-avatar>
        <v-list dense>
          <v-list-tile v-for="(item, i) in items" :key="i" @click="menuActions(item.title)">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
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
import api from '@/api'
import storage from '@/utils/storage.js'
export default {
  data() {
    return {
      drawer: null,
      avatar: '',
      items: [{
        title: '首页'
      }, {
        title: '退出'
      }]
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
    },
    exit() {
      api.auth.logout().then(res => {
        this.$router.push('/index')
        storage.remove('token')
      }, error => console.log(error))
    },
    menuActions(title) {
      if (title === '退出') {
        this.exit()
      } else if (title === '首页') {
        this.jumpToHomePage()
      }
    }
  },
  mounted() {
    this.avatar = storage.get('config').avatar
  }
}
</script>
