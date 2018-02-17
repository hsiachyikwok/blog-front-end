<template>
<v-toolbar app>
  <v-menu bottom offset-y>
    <v-avatar slot="activator">
      <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg" alt="avatar">
    </v-avatar>
    <v-list>
      <v-list-tile v-for="(item, i) in items" :key="i" @click="manage(item.title)">
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
  <v-toolbar-title>
    <router-link to="/">Hsia'Blog</router-link>
  </v-toolbar-title>
  <v-flex ml-5>
    <router-link to="/index">
      <v-btn icon>
        <v-icon small>fa-h-square</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/archive">
      <v-btn icon>
        <v-icon small>fa-archive</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/tag">
      <v-btn icon>
        <v-icon small>fa-tags</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/category">
      <v-btn icon>
        <v-icon small>fa-cube</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/about">
      <v-btn icon>
        <v-icon small>fa-user-secret</v-icon>
      </v-btn>
    </router-link>
  </v-flex>
  <v-spacer></v-spacer>
  <v-btn icon>
    <v-icon>fa-search</v-icon>
  </v-btn>
  <v-text-field name="search" label="搜索" id="search">
  </v-text-field>
</v-toolbar>
</template>
<script>
export default {
  name: 'toolbar',
  data(){
    return{
      items:[{title:'管理'}]
    }
  },
  methods: {
    manage(title) {
      //console.log(title)
      this.$router.push('/login')
    }
  }
}
</script>
