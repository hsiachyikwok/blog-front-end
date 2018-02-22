<template>
<v-app>
  <toolbar></toolbar>
  <v-content>
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs3>
          <left-sidebar></left-sidebar>
        </v-flex>
        <v-flex xs6>
          <!-- <transition name="fade" mode="out-in"> -->
          <router-view></router-view>
          <!-- </transition> -->
        </v-flex>
        <v-flex xs3>
          <right-sidebar></right-sidebar>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-md text-xs-center>
      <!-- <bottom></bottom> -->
    </v-container>
  </v-content>
  <app-footer></app-footer>
</v-app>
</template>

<script>
import bottom from './bottom/bottom.vue'
import leftSidebar from './leftsidebar/leftsidebar.vue'
import rightSidebar from './rightsidebar/rightsidebar.vue'
import toolbar from './toolbar/toolbar.vue'
import appFooter from './footer/footer.vue'
import api from '@/api'
export default {
  name: 'layout',
  components: {
    bottom,
    leftSidebar,
    rightSidebar,
    toolbar,
    appFooter
  },
  methods: {
    getConfig() {

    }
  },
  mounted() {
    api.config.getConfig().then(res => {

    }, error => {
      console.log(error)
    })
  }
}
</script>
