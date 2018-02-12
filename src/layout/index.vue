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
          <router-view/>
        </v-flex>
        <v-flex xs3>
          <right-sidebar></right-sidebar>
        </v-flex>
      </v-layout>
    </v-container>
    <hr/>
    <v-container fluid grid-list-md text-xs-center>
      <bottom></bottom>
    </v-container>
  </v-content>
  <app-footer></app-footer>
</v-app>
</template>

<script>
import bottom from './bottom.vue'
import leftSidebar from './leftsidebar.vue'
import rightSidebar from './rightsidebar.vue'
import toolbar from './toolbar.vue'
import appFooter from './footer.vue'
export default {
  name: 'layout',
  components: {
    bottom,
    leftSidebar,
    rightSidebar,
    toolbar,
    appFooter
  }
}
</script>
