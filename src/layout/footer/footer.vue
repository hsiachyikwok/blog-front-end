<template>
<v-footer height="auto">
  <v-layout row wrap justify-center>
    <v-flex xs12 py-3 text-xs-center>
      &copy;2018 <strong>{{footer}}</strong>
    </v-flex>
  </v-layout>
</v-footer>
</template>
<script>
import storage from '@/utils/storage.js'
export default {
  name: 'appFooter',
  data: () => ({
    footer:''
  }),
  mounted() {
    this.footer = storage.get('config').footer
  }
}
</script>
