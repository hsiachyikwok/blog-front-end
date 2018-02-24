<template>
<v-toolbar app>
  <v-menu bottom offset-y>
    <v-avatar slot="activator">
      <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg" alt="avatar">
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
    <v-icon>fa-search</v-icon>
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
      blogTitle: ''
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
  }
}
</script>
