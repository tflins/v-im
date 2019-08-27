<template>
  <div class="private-chat">
    <full-dialog class="wrap" :title="chatUserInfo.name || ''" :openFullscreen="privateChat" @closeFullscreenDialog="closePrivateChat">
      <GeminiScrollbar class="msg-list" ref="msgList">
        <message-item v-for="item in msgList" class="item"
          :message="item.message"
          :key="item.key || item._id"
          :name="chatUserInfo.name"
        ></message-item>
      </GeminiScrollbar>

      <mu-text-field v-model="inputMsg"></mu-text-field>
      <mu-button color="red" @click="sendPrivateMsg">
        Send
        <mu-icon right value="send"></mu-icon>
      </mu-button>
    </full-dialog>
  </div>
</template>

<script>
import FullDialog from '../../components/FullDialog'
import { mapGetters, mapMutations } from 'vuex'
import { savePrivateChatMsg } from '../../api/privateChat'
import MessageItem from '../../components/MessageItem'

export default {
  name: 'PrivateChat',
  data() {
    return {
      inputMsg: ''
    }
  },
  computed: {
    ...mapGetters(['privateChat', 'userInfo', 'toUserId', 'msgList', 'chatUserInfo'])
  },
  methods: {
    ...mapMutations(['setPrivateChat']),
    closePrivateChat() {
      this.setPrivateChat(false)
      this.$router.back()
    },
    // 发送私聊信息
    sendPrivateMsg() {
      const data = {
        from_uid: this.userInfo.id,
        to_uid: this.toUserId,
        message: this.inputMsg
      }
      console.log(this.toUserId)
      // 保存进数据库
      savePrivateChatMsg(data).then(res => {
      }).catch(err => {
        throw err
      })
      this.$socket.emit('sendPrivateMsg', data)
    }
  },
  components: {
    MessageItem,
    FullDialog
  }
}
</script>

<style lang="scss" scoped>
.private-chat {
  .msg-list {
    height: 50px;
    overflow: auto;
    background-color: red;
    .item {
      margin-top: 10px;
    }
  }
}
</style>
