<template>
<v-card>
  <v-flex mb-3>
    <v-avatar size="100px">
      <img :src="this.avatar">
    </v-avatar>
  </v-flex>
  <v-flex mb-3>
    <strong>{{blogSubTitle}}</strong>
  </v-flex>
  <v-icon>location_on</v-icon>
  <v-flex>
    {{location}}
  </v-flex>
  <v-divider></v-divider>
  <v-flex>
    <v-btn icon>
      <v-icon small>fa-envelope</v-icon>
    </v-btn>
    <v-btn icon @click="see('https://github.com/hsiachyikwok')">
      <i style="width:26px;height:26px" class="fab fa-github"></i>
    </v-btn>
    <v-btn icon>
      <v-icon standard>fa-rss-square</v-icon>
    </v-btn>
  </v-flex>
  <v-divider></v-divider>
  <v-flex mt-3>
    <strong>友链</strong>
  </v-flex>
  <v-flex :key=item.id v-for="item in this.friendLink">
    <v-avatar size="16px">
      <img :src="'http://www.google.com/s2/favicons?domain='+item.link">
    </v-avatar>
    <v-btn small flat outline @click="see(item.link)">{{item.linkTitle}}</v-btn>
  </v-flex>
</v-card>
</template>

<script>
import storage from '@/utils/storage.js'
import api from '@/api'
export default {
  name: 'siteinfo',
  data() {
    return {
      blogSubTitle: '',
      location: '',
      avatar: '',
      friendLink: []
    }
  },
  methods: {
    see(url) {
      window.location.href = url
    }
  },
  mounted() {
    this.blogSubTitle = storage.get('config').blogSubTitle
    this.avatar = storage.get('config').avatar
    this.location = storage.get('config').location

    api.friendlink.getFriendLink().then(res => {
      this.friendLink = res.body
    }, error => {
      console.log(error)
    })
  }
}
</script>
