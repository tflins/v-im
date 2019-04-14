<template>
  <div class="group-chat">
    <h1>聊天室</h1>
    <mu-text-field v-model="message" placeholder="请输入你的消息"></mu-text-field>
    <mu-button color="red" @click="_send">
      Send
      <mu-icon right value="send"></mu-icon>
    </mu-button>
  </div>
</template>

<script>
export default {
  name: 'GroupChat',
  data() {
    return {
      message: ''
    }
  },
  sockets: {
    receiveGroupMsg(msg) {
      console.log(msg)
    }
  },
  methods: {
    _send() {
      this.$socket.emit('sendGroupMsg', this.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.group-chat {
  // background-color: ;
  max-width: 80%;
  margin-left: 50%;
  transform: translateX(-50%)
}
</style>
