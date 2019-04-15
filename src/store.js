import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前用户信息
    userInfo: JSON.parse(sessionStorage.getItem('userInfo'))
  },
  mutations: {
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  },
  actions: {

  },
  getters: {
    userInfo(state) {
      return state.userInfo
    }
  }
})
