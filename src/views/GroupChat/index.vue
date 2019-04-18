<template>
  <mu-container class="group-chat">
    <GeminiScrollbar class="msg-list" ref="msgList">
      <message-item v-for="item in messageList" class="item"
        :message="item.message"
        :key="item.key || item._id"
        :name="item.username"
      ></message-item>
    </GeminiScrollbar>
    <div class="message-form">
      <mu-text-field v-model="message" placeholder="请输入你的消息" color="red"></mu-text-field>
      <mu-button icon color="red" @click="_send">
        <mu-icon right value="send"></mu-icon>
      </mu-button>
    </div>
  </mu-container>
</template>

<script>
import MessageItem from '../../components/MessageItem'
import { mapGetters } from 'vuex'
import { saveGroupMessage, getGroupMessage } from '../../api/groupChat'

export default {
  name: 'GroupChat',
  data() {
    return {
      message: '',
      messageList: []
    }
  },
  sockets: {
    receiveGroupMsg(data) {
      this.messageList.push(data)
    }
  },
  methods: {
    _send() {
      if (this.message === '') {
        return
      }
      const data = {
        userid: this.userInfo.id,
        username: this.userInfo.name,
        message: this.message
      }
      this.$socket.emit('sendGroupMsg', Object.assign({
        key: Math.random()
      }, data))
      this._saveGroupMessage(data)
      this.message = ''
    },
    _saveGroupMessage(data) {
      saveGroupMessage(data)
        .then(res => {
        }).catch(err => {
          throw err
        })
    },
    _getGroupMessage() {
      getGroupMessage().then(res => {
        if (res.success) {
          this.messageList = res.data
        }
      })
    }
  },
  components: {
    MessageItem
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created() {
    this._getGroupMessage()
  },
  watch: {
    // 监听消息列表,滚动至末尾
    messageList() {
      this.$nextTick(() => {
        const scrollDom = document.querySelector('.gm-scroll-view')
        scrollDom.scrollTop = scrollDom.scrollHeight
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.group-chat {
  .msg-list {
    height: 500px;
    overflow: auto;
    .item {
      margin-top: 10px;
    }
  }
  .message-form {
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>
