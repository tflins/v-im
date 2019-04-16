<template>
  <div class="group-chat">
    <div class="msg-list">
      <message-item v-for="item in messageList" class="item"
        :message="item.message"
        :key="item.key"
        :name="item.username"
      ></message-item>
    </div>
    <div class="message-form">
      <mu-text-field v-model="message" placeholder="请输入你的消息"></mu-text-field>
      <mu-button color="red" @click="_send">
        Send
        <mu-icon right value="send"></mu-icon>
      </mu-button>
    </div>
  </div>
</template>

<script>
import MessageItem from '../../components/MessageItem'
import { mapGetters } from 'vuex'
import { saveGroupMessage } from '../../api/groupChat'

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
          console.log(data)
        }).catch(err => {
          throw err
        })
    }
  },
  components: {
    MessageItem
  },
  computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>

<style lang="scss" scoped>
.group-chat {
  // background-color: ;
  max-width: 80%;
  margin-left: 50%;
  transform: translateX(-50%);
  .msg-list {
    height: 500px;
    overflow: scroll;
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
