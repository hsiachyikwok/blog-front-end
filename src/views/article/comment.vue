<template>
  <div class="text-xs-center">
    <v-bottom-sheet v-model="sheet">
      <v-btn slot="activator" color="purple" dark>评论</v-btn>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  name: 'comment',
  data() {
    return {
      sheet: false
    }
  }
}
</script>
