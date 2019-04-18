import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前用户信息
    userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
    // 页头标题
    headerTitle: '消息',
    // 添加好友弹窗
    openAddFriends: false
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    setHeaderTitle(state, title) {
      state.headerTitle = title
    },
    setOpenAddFriends(state, status) {
      state.openAddFriends = status
    }
  },
  actions: {

  },
  getters: {
    userInfo(state) {
      return state.userInfo
    },
    headerTitle(state) {
      return state.headerTitle
    },
    openAddFriends(state) {
      return state.openAddFriends
    }
  }
})
