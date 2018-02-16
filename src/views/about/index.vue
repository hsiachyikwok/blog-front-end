<template>
<v-app>
  <v-container>
    <v-layout>
      <v-flex text-xs-left>
        <v-card>
          <v-card-text>
            <vue-markdown v-highlightjs :source="this.content"></vue-markdown>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  data(){
    return{
      content:"## ddd"
    }
  },
  components: {
    VueMarkdown
  },

}
</script>
