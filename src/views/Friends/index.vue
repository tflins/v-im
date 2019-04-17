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
    <mu-button fab color="teal">
    <mu-icon value="add"></mu-icon>
  </mu-button>
  </mu-container>
</template>

<script>
export default {
  name: 'Friends'
}
</script>

<style lang="scss" scoped>
.friends {
  height: 500px;
  overflow: auto;
}
</style>
