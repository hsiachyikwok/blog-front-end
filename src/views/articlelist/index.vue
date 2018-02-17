<template>
<v-container>
  <v-layout column>
    <v-flex :key=n v-for="n in 3" mb-3 text-xs-left>
      <v-card>
        <!-- <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
          </v-card-media> -->
        <v-card-title primary-title>
          <v-flex text-xs-center>
            <h3>手把手教你撸一个博客系统</h3> 2018 2-13 views:100
          </v-flex>
        </v-card-title>
        <v-card-text v-text="notice"></v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-icon small color="green">fa-tag</v-icon>
          <a herf="www">springboot</a> ,
          <a herf="www">vue</a> ,
          <a herf="www">springcloud</a>
          <v-spacer></v-spacer>
          <v-btn flat color="orange" @click.native="$router.push({name: 'article', params: {id: 'springboot'}})">阅读更多</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex>
      <v-pagination :length="5" v-model="page">
      </v-pagination>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'articlelist',
  data() {
    return {
      notice: `  天门山，就是安徽当涂县的东梁山（古代又称博望山）与和县的西梁山的合称。两山夹江对峙，象一座天设的门户，形势非常险要，“天门”即由此得名。诗题中的“西岳峥嵘何壮哉！黄河如丝天际来。黄河万里触山动，盘涡毂转秦地雷。”“盘涡毂转”也就是“碧水东流至此回”，同样是描绘万里江河受到峥嵘奇险的山峰阻遏时出现的情景。绝句尚简省含蓄，所以不象七古那样写得淋漓尽致。`,
      page: 1
    }
  }
}
</script>
