// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMarkdown from 'vue-markdown'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import hljs from 'highlight.js';
// import 'highlight.js/styles/googlecode.css'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)
Vue.use(VueMarkdown);
Vue.use(Vuetify);
Vue.config.productionTip = false

// Vue.directive('highlightjs', {
//   deep: true,
//   bind: function(el, binding) {
//     // on first bind, highlight all targets
//     let targets = el.querySelectorAll('code')
//     targets.forEach((target) => {
//       // if a value is directly assigned to the directive, use this
//       // instead of the element content.
//       if (binding.value) {
//         target.textContent = binding.value
//       }
//       hljs.highlightBlock(target)
//     })
//   },
//   componentUpdated: function(el, binding) {
//     // after an update, re-fill the content and then highlight
//     let targets = el.querySelectorAll('code')
//     targets.forEach((target) => {
//       if (binding.value) {
//         target.textContent = binding.value
//         hljs.highlightBlock(target)
//       }
//     })
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
