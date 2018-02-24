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
import storage from '@/utils/storage.js'
export default {
  name: 'notice',
  data() {
    return {
      content: "",
    }
  },
  components: {
    VueMarkdown
  },
  mounted() {
    this.content = storage.get('config').notice
  }
}
</script>
