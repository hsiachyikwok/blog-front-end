<template>
<v-toolbar app>
  <v-avatar>
    <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg" alt="avatar">
  </v-avatar>
  <v-toolbar-title>Hsia'Blog</v-toolbar-title>
  <v-flex ml-5>
    <v-btn icon>
      <v-icon standard>fa-anchor</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon standard>label</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon standard>archive</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon standard>home</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon standard>favorite</v-icon>
    </v-btn>
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
