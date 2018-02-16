<template>
<v-container>
  <v-layout>
    <v-flex elevation-1 mt-1>
      <v-chip :key = n v-for="n in 20">
        <v-avatar class="teal">J</v-avatar>
        Java
      </v-chip>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  data() {
    return {
      content: "## 技术思考"
    }
  },
  components: {
    VueMarkdown
  },

}
</script>
