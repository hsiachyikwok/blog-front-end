// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMarkdown from 'vue-markdown'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css'
Vue.use(VueMarkdown);
Vue.use(Vuetify);
Vue.config.productionTip = false

Vue.directive('highlight', (el) => {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
