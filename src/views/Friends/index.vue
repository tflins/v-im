<template>
  <div>
    <GeminiScrollbar class="friends">
    <mu-paper :z-depth="1">
      <mu-list>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Myron Liu</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Myron Liu</mu-list-item-title>
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
  </div>
</template>

<script>
import FullDialog from '../../components/FullDialog'
import { getName } from '../../api/user'
import { mapMutations, mapGetters } from 'vuex'
import { addFriends } from '../../api/friends'

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
      to_uid: ''
    }
  },
  methods: {
    ...mapMutations({
      setOpenAddFriends: 'setOpenAddFriends'
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
      this.to_uid = uid
    },
    closeAlertDialog() {
      this.openAlert = false
    },
    sendVerifyMsg() {
      const data = {
        from_uid: this.userInfo.id,
        to_uid: this.to_uid,
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
}
</style>
