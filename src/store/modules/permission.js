import * as types from '../mutation-types'
import {constantRouterMap, errorRouterMap} from '@/router'
import componentConfig from '@/utils/component-config'

/**
 * 递归构建前端路由配置
 * @param tree
 */
function filterAsyncRouter(tree) {
  return tree.map(item => {
    return {
      path: '/' + item.name,
      name: item.name,
      icon: item.icon || 'store',
      component: componentConfig[item.name] ? componentConfig[item.name] : componentConfig.wrap,
      meta: {title: item.pageName},
      children: item.node && filterAsyncRouter(item.node)
    }
  })
}

// initial state
const state = {
  routers: [],
  extendRoutes: []
}

// getters
const getters = {
  extendRoutes(state) {
    return state.extendRoutes
  },
  routers() {
    return state.routers
  }
}

// actions
const actions = {
  generateRoutes({commit}, tree) {
    return new Promise(resolve => {
      let accessedRouters = [{
        path: '/',
        component: componentConfig.layout,
        children: filterAsyncRouter(tree)
      }]
      commit(types.GENERATE_ROUTERS, accessedRouters)
      resolve()
    })
  }
}

// mutations
const mutations = {
  [types.GENERATE_ROUTERS](state, routers) {
    state.extendRoutes = routers.concat(errorRouterMap)
    state.routers = routers
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
