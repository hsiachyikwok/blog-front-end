<template>
<v-toolbar app>
  <v-menu bottom offset-y>
    <v-avatar slot="activator">
      <img :src="this.favicon" alt="avatar">
    </v-avatar>
    <v-list dense>
      <v-list-tile v-for="(item, i) in items" :key="i" @click="manage(item.title)">
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
  <v-toolbar-title>
    {{blogTitle}}
  </v-toolbar-title>
  <navigation></navigation>
  <v-spacer></v-spacer>
  <v-btn icon>
    <v-icon>search</v-icon>
  </v-btn>
  <v-text-field name="search" label="搜索" id="search">
  </v-text-field>
</v-toolbar>
</template>
<script>
import storage from '@/utils/storage.js'
import navigation from './navigation.vue'
export default {
  name: 'toolbar',
  data() {
    return {
      items: [{
        title: '管理'
      }],
      blogTitle: '',
      favicon:''
    }
  },
  methods: {
    manage(title) {
      this.$router.push('/login')
    }
  },
  components: {
    navigation
  },
  mounted() {
    this.blogTitle = storage.get('config').blogTitle
    this.favicon = storage.get('config').favicon
  }
}
</script>
