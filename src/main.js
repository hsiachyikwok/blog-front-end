// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMarkdown from 'vue-markdown'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'

Vue.use(Toast, {
  defaultType: 'center',
  duration: 1500,
  wordWrap: true,
  width: '180px'
});

Vue.use(VueMarkdown);
Vue.use(Vuetify);
Vue.config.productionTip = false

// Document title
Vue.directive('title', {
  inserted: (el, binding) => {
    document.title = binding.value
  },
  update: (el, binding) => {
    document.title = binding.value
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
