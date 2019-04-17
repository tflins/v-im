<template>
  <mu-container>
    <GeminiScrollbar class="friends">
    <mu-paper :z-depth="1">
      <mu-list>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Mike Li</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Maco Mai</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Alex Qin</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Allen Qun</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Myron Liu</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Myron Liu</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Myron Liu</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Myron Liu</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Myron Liu</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Myron Liu</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>L</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Myron Liu</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
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

    <full-dialog title="添加好友" :openFullscreen="openFullscreen" @closeFullscreenDialog="closeFullscreenDialog">
      <mu-text-field label="输入用户昵称" full-width color="secondary"></mu-text-field>
    </full-dialog>

    <mu-button fab color="teal" class="fr" @click="openFullscreenDialog">
      <mu-icon value="add"></mu-icon>
    </mu-button>
  </mu-container>
</template>

<script>
import FullDialog from '../../components/FullDialog'

export default {
  name: 'Friends',
  data() {
    return {
      openFullscreen: false
    }
  },
  methods: {
    openFullscreenDialog() {
      this.openFullscreen = true
    },
    closeFullscreenDialog() {
      this.openFullscreen = false
    }
  },
  components: {
    FullDialog
  }
}
</script>

<style lang="scss" scoped>
.friends {
  height: 500px;
  overflow: auto;
}
</style>
