import Vue from 'vue'
import Vuex from 'vuex'
import loading from './modules/loading'
import app from './modules/app'
import permission from './modules/permission'
import auth from './modules/auth'
import dialog from './modules/dialog'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    loading,
    app,
    permission,
    auth,
    dialog
  },
  // strict: debug,
  plugins: debug ? [createLogger()] : []
})
