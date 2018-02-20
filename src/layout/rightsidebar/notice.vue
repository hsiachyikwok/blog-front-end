<template>
<div>
  <v-flex>
    <v-icon>fa-paperclip</v-icon>
  </v-flex>
  <v-flex text-xs-left>
    <v-card>
      <v-card-text>
        <vue-markdown :source="content"></vue-markdown>
      </v-card-text>
    </v-card>
  </v-flex>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'notice',
  data() {
    return {
      content: "天门山，就是安徽当涂县的东梁山古代又称博望山）与和县的西梁山的合称。两山夹江对峙，象一座天设的门户，形势非常险要，“天门”即由此得名。诗题中的“望”字，说明诗中所描绘的是远望所见天门",
    }
  },
  components : {
    VueMarkdown
  }
}
</script>
