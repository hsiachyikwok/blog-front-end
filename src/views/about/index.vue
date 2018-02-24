<template>
<v-container>
  <v-layout>
    <v-flex text-xs-left>
      <v-card height="600px">
        <v-card-text>
          <vue-markdown v-highlightjs :source="this.about"></vue-markdown>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import storage from '@/utils/storage.js'
export default {
  data() {
    return {
      about: ""
    }
  },
  components: {
    VueMarkdown
  },
  mounted() {
    this.about = storage.get('config').about
  }
}
</script>
