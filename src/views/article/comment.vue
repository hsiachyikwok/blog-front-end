<template>
<div class="text-xs-center">
  <v-bottom-sheet v-model="sheet">
    <v-btn slot="activator" color="purple" dark>评论</v-btn>
    <v-layout>
      <v-flex>
        <v-card>
          请输入你的评论
        </v-card>
      </v-flex>
    </v-layout>
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
