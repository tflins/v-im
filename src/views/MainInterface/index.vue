<template>
  <div class="main-interface">
    <t-header></t-header>
  </div>
</template>

<script>
import THeader from '../../components/THeader'

export default {
  name: 'MainInterface',
  components: {
    THeader
  },
  sockets: {
    // 不能改,j建立连接自动调用connect
    connect: function() {
      // 与socket.io连接后回调
      console.log('socket 已经连接')
    },
    // 服务端向客户端发送login事件
    login: function(value) {
      // 监听login(后端向前端emit  login的回调)
      console.log(value)
    }
  },
  updated() {
    // 数据更新时，向服务器端发送事件
    this.$socket.emit('compile') // 触发start
  }
}
</script>
