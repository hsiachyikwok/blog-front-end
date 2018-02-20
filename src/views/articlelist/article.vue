<template>
<v-card>
  <v-card-title primary-title>
    <v-layout column text-xs-center>
      <v-flex>
        <h2>{{article.articleTitle}}</h2>
      </v-flex>
      <v-layout row>
        <v-flex text-xs-right>
          <span><i class="far fa-calendar-alt"></i></span>
          <span>{{article.createTime|formatDate}}</span>
        </v-flex>
        <v-flex text-xs-left>
          <i class="fas fa-user"></i>
          <span>{{article.viewCount}}</span>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-card-title>
  <v-card-text>
    <vue-markdown :source="this.article.brefIntro"></vue-markdown>
  </v-card-text>
  <v-divider></v-divider>
  <v-card-actions>
    <i class="fas fa-tag"></i>
    <v-flex>
      {{article.tags}}
    </v-flex>
    <v-spacer></v-spacer>
    <v-btn flat color="orange" @click.native="$router.push({name: 'article', params: {id: 'springboot'}})">阅读更多</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {formatDate} from '@/utils/dateformat.js'
export default {
  name: 'articlecard',
  props: {
    article: ''
  },
  data() {
    return {
      content: `  天门山，就是安徽当涂县的东梁山（古代又称博望山）与和县的西梁山的合称。两山夹江对峙，象一座天设的门户，形势非常险要，“天门”即由此得名。诗题中的“西岳峥嵘何壮哉！黄河如丝天际来。黄河万里触山动，盘涡毂转秦地雷。”“盘涡毂转”也就是“碧水东流至此回”，同样是描绘万里江河受到峥嵘奇险的山峰阻遏时出现的情景。绝句尚简省含蓄，所以不象七古那样写得淋漓尽致。`,
      timestamp: '2018-2-13 18:23',
      viewcount: '100'
    }
  },
  components: {
    VueMarkdown
  },
  filters: {
    formatDate(time) {
    let date = new Date(time)
    return formatDate(date,'yyyy-MM-dd hh:mm')
    }
  },
  mounted() {
    console.log(this.article)
  }
}
</script>
