<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <strong>公告</strong>
      </v-flex>
      <v-flex text-xs-left>
        <v-card>
          <v-card-text v-text="notice"></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'rightsidebar',
  data(){
    return{
      notice:`dsfs`
    }
  }
}
</script>
