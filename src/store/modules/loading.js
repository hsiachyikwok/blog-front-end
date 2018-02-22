import * as types from '../mutation-types'

// initial state
const state = {
  localLoading: false,
  generalLoading: false
}
// getters
const getters = {
  localLoading(state) {
    return state.localLoading
  },
  generalLoading(state) {
    return state.generalLoading
  }
}

// actions
const actions = {
  updateLocalLoadingStatus(context, flag) {
    context.commit(types.UPDATE_LOCAL_LOADING, flag)
  },
  updateGeneralLoadingStatus(context, flag) {
    context.commit(types.UPDATE_GENERAL_LOADING, flag)
  }
}

// mutations
const mutations = {
  [types.UPDATE_LOCAL_LOADING](state, flag) {
    state.localLoading = flag
  },
  [types.UPDATE_GENERAL_LOADING](state, flag) {
    state.generalLoading = flag
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
