<template>
  <div>
    <GeminiScrollbar class="friends">
    <div class="new-friends" v-if="newFriends.length" @click="newFriend">
      <mu-icon value="assignment_ind" class="left" />
      <span class="text">新的好友请求!</span>
      <mu-icon value="chevron_right" class="right" />
    </div>

    <mu-paper :z-depth="1">
      <mu-list>
        <mu-sub-header>好友</mu-sub-header>
        <mu-list-item avatar button :ripple="false" v-for="item in friends" :key="item.userid" @click="selectItem(item.userid)">
          <mu-list-item-action>
            <mu-avatar>{{ item.name.substr(0, 1) }}</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>{{ item.name }}</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </mu-paper>
    </GeminiScrollbar>

    <full-dialog title="添加好友" :openFullscreen="openAddFriends" @closeFullscreenDialog="closeFullscreenDialog">
      <mu-text-field label="输入用户昵称" v-model.trim="searchStr" full-width color="#2196f3" placeholder=""></mu-text-field>
      <mu-list>
        <mu-list-item avatar button :ripple="false" v-for="item in searchList" :key="item._id">
          <mu-list-item-action>
            <mu-avatar>{{ item.name.substr(0, 1) }}</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>{{ item.name }}</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="add_circle" @click="addFriend(item._id)"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <p v-show="!searchList.length &&  searchStr">未找到该用户</p>

      <mu-dialog title="添加好友" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
        <mu-text-field label="填写验证信息" v-model.trim="verifyMessage" full-width color="#2196f3" placeholder=""></mu-text-field>
        <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">取消</mu-button>
      <mu-button slot="actions" flat color="primary" @click="sendVerifyMsg">发送</mu-button>
    </mu-dialog>
    </full-dialog>

    <full-dialog title="新的好友" :openFullscreen="newFriendDialog" @closeFullscreenDialog="closeNewFriend">
      <mu-list>
        <mu-list-item avatar button :ripple="false" v-for="item in newFriends" :key="item._id" @click="handleFriend(item)">
          <mu-list-item-action>
            <mu-avatar>{{ item.from_uid.name.substr(0, 1) }}</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>{{ item.from_uid.name }}</mu-list-item-title>
        </mu-list-item>
      </mu-list>

      <mu-dialog title="验证消息" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="handleFriendDialog">
        <div>{{ handleFriendInfo.message }}</div>
        <mu-button slot="actions" flat color="primary" @click="closeHandleFriend">取消</mu-button>
      <mu-button slot="actions" flat color="primary" @click="sendAddToFriends">同意</mu-button>
    </mu-dialog>
  </full-dialog>
  </div>
</template>

<script>
import FullDialog from '../../components/FullDialog'
import { getName, getUserById } from '../../api/user'
import { mapMutations, mapGetters } from 'vuex'
import { addFriends, getnewfriends, addToFriends, getfriendslist } from '../../api/friends'
import { getPrivateChatMsg } from '../../api/privateChat'

export default {
  name: 'Friends',
  data() {
    return {
      openAlert: false,
      // 搜素用户列表
      searchList: [],
      // 搜素昵称
      searchStr: '',
      // 好友列表
      friends: [],
      // 加好有验证信息
      verifyMessage: '',
      // 添加好友的uid
      toUid: '',
      // 新的好友请求
      newFriends: [],
      newFriendDialog: false,
      handleFriendDialog: false,
      handleFriendInfo: {}
    }
  },
  created() {
    this._getnewfriends()
    this._getfriendslist()
  },
  methods: {
    ...mapMutations({
      setOpenAddFriends: 'setOpenAddFriends',
      setPrivateChat: 'setPrivateChat',
      setToUserId: 'setToUserId',
      setChatUserInfo: 'setChatUserInfo',
      setMsgList: 'setMsgList'
    }),
    closeFullscreenDialog() {
      this.setOpenAddFriends(false)
    },
    // 搜素用户
    searchName() {
      if (this.searchStr === '') {
        this.searchList = []
        return
      }
      getName(this.searchStr).then(res => {
        if (res.success) {
          this.searchList = res.data
        } else {
          this.searchList = []
        }
      }).catch(err => {
        throw err
      })
    },
    addFriend(uid) {
      this.openAlert = true
      this.verifyMessage = ''
      this.toUid = uid
    },
    closeAlertDialog() {
      this.openAlert = false
    },
    sendVerifyMsg() {
      const data = {
        from_uid: this.userInfo.id,
        to_uid: this.toUid,
        message: this.verifyMessage
      }
      addFriends(data).then(res => {
        if (res.success) {
          this.$toast.success(res.mag || '发生请求成功')
        } else {
          this.$toast.warning(res.msg || '发生请求失败')
        }
        this.openAlert = false
      }).catch(err => {
        throw err
      })
    },
    // 获取新好友请求
    _getnewfriends() {
      getnewfriends().then(res => {
        if (res.success) {
          this.newFriends = res.data
        }
      }).catch(err => {
        throw err
      })
    },
    newFriend() {
      this.newFriendDialog = true
    },
    closeNewFriend() {
      this.newFriendDialog = false
    },
    handleFriend(info) {
      this.handleFriendInfo = info
      this.handleFriendDialog = true
    },
    closeHandleFriend() {
      this.handleFriendDialog = false
    },
    sendAddToFriends() {
      console.log(this.handleFriendInfo)
      const data = {
        userid: this.handleFriendInfo.from_uid._id,
        name: this.handleFriendInfo.from_uid.name
      }
      addToFriends(data).then(res => {
        console.log(res)
      }).catch(err => {
        throw err
      })
    },
    _getfriendslist() {
      getfriendslist().then(res => {
        if (res.success) {
          this.friends = res.data[0].friends
          console.log(res.data[0].friends)
        } else {
          this.friends = []
        }
      }).catch(err => {
        throw err
      })
    },
    selectItem(uid) {
      this.setToUserId(uid)
      this.setPrivateChat(true)
      const params = {
        from_uid: this.userInfo.id,
        to_uid: uid
      }
      // 聊天记录
      getPrivateChatMsg(params).then(res => {
        if (res.success) {
          this.setMsgList(res.data)
        } else {
          this.setMsgList([])
        }
      })
      // 好友用户信息
      getUserById(uid).then(res => {
        if (res.success) {
          this.setChatUserInfo(res.data)
        } else {
          this.setChatUserInfo({})
        }
      })
      this.$router.push('/privatechat')
    }
  },
  components: {
    FullDialog
  },
  watch: {
    searchStr() {
      this.searchName()
    }
  },
  computed: {
    ...mapGetters(['openAddFriends', 'userInfo'])
  }
}
</script>

<style lang="scss" scoped>
.friends {
  height: 500px;
  overflow: auto;
  .new-friends {
    position: relative;
    height: 8vh;
    line-height: 8vh;
    text-align:center;
    .mu-icon {
      position: absolute;
      top: 50%;
      transform:translate(-50%, -50%);
    }
    .left {
      left: 10%;
    }
    .right {
      right: 10%;
    }
  }
}
</style>
