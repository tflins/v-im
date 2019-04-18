<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  sockets: {
    connect() {
      console.log('成功连接服务器')
    }
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  background-color: #f4f4f6;
}
#app {
  background-color: #f4f4f6;
  width: 100%;
  height: 100%;
}
</style>
