<template>
<v-flex ml-5>
  <router-link to="/index">
    <v-btn icon>
      <v-icon small>fa-h-square</v-icon>
    </v-btn>
  </router-link>
  首页
  <router-link to="/archive">
    <v-btn icon>
      <v-icon small>fa-archive</v-icon>
    </v-btn>
  </router-link>
  归档
  <router-link to="/tag">
    <v-btn icon>
      <v-icon small>fa-tags</v-icon>
    </v-btn>
  </router-link>
  标签
  <router-link to="/category">
    <v-btn icon>
      <v-icon small>fa-cube</v-icon>
    </v-btn>
  </router-link>
  分类
  <router-link to="/about">
    <v-btn icon>
      <v-icon small>fa-user-secret</v-icon>
    </v-btn>
  </router-link>
  关于
</v-flex>
</template>

<script>
export default {
  name: 'navigation'
}
</script>
