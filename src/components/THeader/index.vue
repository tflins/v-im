<template>
  <mu-appbar style="width: 100%;" color="primary">
  <mu-button icon slot="left">
    <mu-icon value="menu"></mu-icon>
  </mu-button>
  {{ headerTitle }}
  <mu-button flat slot="right" @click="openAddFriends" v-show="headerTitle === '好友'">
    <slot></slot>
  </mu-button>
</mu-appbar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'THeader',
  computed: {
    ...mapGetters(['headerTitle'])
  },
  methods: {
    ...mapMutations({
      setOpenAddFriends: 'setOpenAddFriends'
    }),
    openAddFriends() {
      this.setOpenAddFriends(true)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
