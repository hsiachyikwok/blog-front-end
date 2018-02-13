<template>
<v-container>
  <v-layout column>
    <v-flex v-for="n in 3" :key=n mb-3 text-xs-left>
      <v-card>
        <!-- <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
          </v-card-media> -->
        <v-card-title primary-title>
          <h3>文章标题</h3>
        </v-card-title>
        <v-card-text v-text="notice"></v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn flat color="orange">分享</v-btn>
          <v-btn flat color="orange" @click.native="$router.push({name: 'article', params: {id: 312}})">阅读更多</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex>
      <v-pagination :length="6" v-model="page"></v-pagination>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'articlelist',
  data() {
    return {
      notice: `eqweqw`,
      page: 1
    }
  }
}
</script>
