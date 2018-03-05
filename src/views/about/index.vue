<template>
<v-container>
  <v-layout>
    <v-flex text-xs-left>
      <v-card height="600px">
        <v-flex py-3 px-3>
          <v-card-text>
            <vue-markdown :source="this.about"></vue-markdown>
          </v-card-text>
        </v-flex>
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
