<template>
  <mu-bottom-nav :value.sync="shift" class="bottom-nav">
    <mu-bottom-nav-item
      value="message"
      title="消息"
      icon="chat_bubble_outline"
      to="/message"
    ></mu-bottom-nav-item>
    <mu-bottom-nav-item
      value="friends"
      title="好友"
      icon="people"
      to="/friends"
    ></mu-bottom-nav-item>
    <mu-bottom-nav-item
      value="discover"
      title="探索"
      icon="explore"
    ></mu-bottom-nav-item>
  </mu-bottom-nav>
</template>

<script>
export default {
  data() {
    return {
      shift: 'message'
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
