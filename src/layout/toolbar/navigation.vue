<template>
<v-flex ml-5>
  <!-- <v-btn icon @click="goHomePage()">
    <v-icon small>fa-h-square</v-icon>
  </v-btn> -->
  <!-- <router-link to="/">
    <v-btn icon>
      <v-icon small>fa-h-square</v-icon>
    </v-btn>
  </router-link> -->
  <!-- 首页 -->
  <router-link to="/archive">
    <v-btn icon>
      <v-icon small>timeline</v-icon>
    </v-btn>
  </router-link>
  归档
  <router-link to="/tag">
    <v-btn icon>
      <v-icon small>loyalty</v-icon>
    </v-btn>
  </router-link>
  标签
  <router-link to="/category">
    <v-btn icon>
      <v-icon small>palette</v-icon>
    </v-btn>
  </router-link>
  分类
  <router-link to="/about">
    <v-btn icon>
      <v-icon small>face</v-icon>
    </v-btn>
  </router-link>
  关于
</v-flex>
</template>

<script>
export default {
  name: 'navigation',
  methods: {
    goHomePage() {
      window.location.href = "http://localhost:8080"
    }
  }
}
</script>
