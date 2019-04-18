<template>
  <mu-bottom-nav :value.sync="shift" class="bottom-nav" @change="handleChange">
    <mu-bottom-nav-item
      value="消息"
      title="消息"
      icon="chat_bubble_outline"
      to="/message"
    ></mu-bottom-nav-item>
    <mu-bottom-nav-item
      value="好友"
      title="好友"
      icon="people"
      to="/friends"
    ></mu-bottom-nav-item>
    <mu-bottom-nav-item
      value="探索"
      title="探索"
      icon="explore"
    ></mu-bottom-nav-item>
  </mu-bottom-nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      shift: 'message'
    }
  },
  methods: {
    ...mapMutations({
      setHeaderTitle: 'setHeaderTitle'
    }),
    handleChange(val) {
      this.setHeaderTitle(val)
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
