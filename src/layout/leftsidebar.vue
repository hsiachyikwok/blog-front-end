<template>
<v-container>
  <v-layout column>
    <v-flex>
      <v-card>
        <v-flex mb-3>
          <v-avatar size="100px">
            <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg">
          </v-avatar>
        </v-flex>
        <v-flex mb-3>
          <strong>君子性非异也，善假于物也。</strong>
        </v-flex>
        <v-icon>location_on</v-icon>
        <v-flex>
          中国-成都
        </v-flex>
        <v-divider></v-divider>
        <v-flex>
          <v-btn icon>
            <v-icon small>fa-envelope</v-icon>
          </v-btn>
          <v-btn icon>
            <i style="width:26px;height:26px"class="fab fa-github"></i>
          </v-btn>
          <v-btn icon>
            <v-icon standard>fa-rss-square</v-icon>
          </v-btn>
        </v-flex>
        <v-divider></v-divider>
        <v-flex mt-3>
          <strong>友链</strong>
        </v-flex>
        <v-flex  :key = n v-for="n in 3">
          dddddd
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
  name: 'leftsidebar'
}
</script>
