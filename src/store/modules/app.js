import * as types from '../mutation-types'

// initial state
const state = {
  sidebarFlag: !+localStorage.getItem('sidebar_status'),
  visitedViews: []
}
// getters
const getters = {
  menuFlag({sidebarFlag}) {
    return sidebarFlag
  },
  visitedViews({visitedViews}) {
    return visitedViews
  }
}

// actions
const actions = {
  toggleSidebar({commit}) {
    commit(types.TOGGLE_SIDEBAR)
  },
  addVisitedViews({commit}, view) {
    commit(types.ADD_VISITED_VIEWS, view)
  },
  delVisitedViews({commit}, view) {
    commit(types.DEL_VISITED_VIEWS, view)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_SIDEBAR](state) {
    if (state.sidebarFlag) {
      localStorage.setItem('sidebar_status', 1)
    } else {
      localStorage.setItem('sidebar_status', 0)
    }
    state.sidebarFlag = !state.sidebarFlag
  },
  [types.ADD_VISITED_VIEWS](state, view) {
    if (state.visitedViews.some(v => v.path === view.path)) {
      return false
    }
    state.visitedViews.push({name: view.name, path: view.path, title: view.meta.title})
  },
  [types.DEL_VISITED_VIEWS](state, view) {
    let index
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        index = i
        break
      }
    }
    state.visitedViews.splice(index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
