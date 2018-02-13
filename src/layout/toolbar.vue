<template>
<v-toolbar app>
  <v-avatar>
    <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg" alt="avatar">
  </v-avatar>
  <v-toolbar-title>Hsia'Blog</v-toolbar-title>
  <v-flex ml-5>
    <router-link to="/index">
      <v-btn icon>
        <v-icon small>fa-h-square</v-icon>
      </v-btn>
    </router-link>
    <router-link to= "/archive">
      <v-btn icon>
        <v-icon small>fa-archive</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/tag">
      <v-btn icon>
        <v-icon small>fa-tags</v-icon>
      </v-btn>
    </router-link>
    <router-link to= "/category">
      <v-btn icon>
        <v-icon small>fa-cube</v-icon>
      </v-btn>
    </router-link>
    <router-link to= "/about">
      <v-btn icon>
        <v-icon small>fa-user-secret</v-icon>
      </v-btn>
    </router-link>
  </v-flex>
  <v-spacer></v-spacer>
  <v-btn icon>
    <v-icon>search</v-icon>
  </v-btn>
  <v-text-field name="search" label="搜索" id="search">
  </v-text-field>
</v-toolbar>
</template>
<script>
export default {
  name: 'toolbar'
}
</script>
