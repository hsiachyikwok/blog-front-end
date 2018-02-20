<template>
<v-container>
  <v-layout column>
    <v-flex>
      <site-info></site-info>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import SiteInfo from './siteinfo'
export default {
  name: 'leftsidebar',
  components: {
    SiteInfo
  }
}
</script>
