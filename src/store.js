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
    openAddFriends: false,
    // 私聊窗口
    privateChat: false,
    // 当前私聊用户id
    toUserId: '',
    // 当前聊天信息
    msgList: [],
    // 当前聊天用户信息
    chatUserInfo: {}
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
    },
    setPrivateChat(state, status) {
      state.privateChat = status
    },
    setToUserId(state, info) {
      state.toUserId = info
    },
    setChatUserInfo(state, data) {
      state.chatUserInfo = data
    },
    setMsgList(state, data) {
      state.msgList = data
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
    },
    privateChat(state) {
      return state.privateChat
    },
    toUserId(state) {
      return state.toUserId
    },
    chatUserInfo(state) {
      return state.chatUserInfo
    },
    msgList(state) {
      return state.msgList
    }
  }
})
