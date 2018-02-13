<template>
<v-container>
  <v-layout>
    <v-flex text-xs-left>
      <v-card>
        <v-card-text>
          <vue-markdown :source="content"></vue-markdown>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <comment></comment>
</v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import comment from './comment'
export default {
  data() {
    return {
      content: "# fdsfsfsf"
    }
  },
  components: {
    VueMarkdown,
    comment
  }
}
</script>
