<template>
<!-- <v-layout>
    dd
  </v-layout> -->
<v-layout row>
  <!-- <v-flex :key = n v-for="n in 5">
      <v-card>
        <v-card-text>
          <vue-markdown :source="content"># dddd的点点滴滴多多多多多多多多多多多多多多多多多多多多多</vue-markdown>
        </v-card-text>
      </v-card>
    </v-flex> -->
  <v-flex>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" transition="fade" reverse-transition="fade"></v-carousel-item>
    </v-carousel>
  </v-flex>
</v-layout>
</template>
<script>
export default {
  name: 'bottom',
  items:[]
}
</script>
