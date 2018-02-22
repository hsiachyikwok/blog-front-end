import * as types from '../mutation-types'
import storage from '@/utils/storage'
import api from '@/api'
import md5 from 'md5'

// initial state
const state = {
  loginId: storage.get('loginId'),
  userInfo: null,
  permissions: []
}
// getters
const getters = {
  userInfo(state) {
    return state.userInfo
  },
  permissions(state) {
    return state.permissions
  }
}

// actions
const actions = {
  loginAction({commit}, data) {
    return new Promise((resolve, reject) => {
      api.auth.login(data).then(res => {
        commit(types.LOGIN_SUCCESS, res)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  logoutAction({commit}) {
    return new Promise((resolve, reject) => {
      api.auth.logout().then(res => {
        commit(types.LOGOUT_SUCCESS)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  fetchUserInfo({commit, state}) {
    return new Promise((resolve, reject) => {
      api.auth.fetchUserInfo({loginId: state.loginId}).then(res => {
        commit(types.RECEIVE_USER_INFO, res)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 前端登出
  fedLogoutAction({commit}) {
    return new Promise(resolve => {
      commit(types.LOGOUT_SUCCESS)
      resolve()
    })
  }
}

// mutations
const mutations = {
  [types.LOGIN_SUCCESS](state, data) {
    // 缓存loginId
    state.loginId = data.loginId
    storage.set('loginId', data.loginId)
    storage.set('token', md5(`${data.sessionId}${data.loginId}`))
  },
  [types.LOGOUT_SUCCESS](state) {
    // 清除loginId
    state.loginId = ''
    state.userInfo = {}
    state.permissions = []
    storage.clear()
  },
  [types.RECEIVE_USER_INFO](state, data) {
    // 将用户数据存入store
    // 将用户数据存入本地
    state.userInfo = data.zpxyusr
    state.permissions = data.menuList
    storage.set('user', data.zpxyusr)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
