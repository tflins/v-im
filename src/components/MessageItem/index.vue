<template>
  <mu-container class="message-item">
    <div class="item"  :class="isMe ?'isme' : ''">
      <mu-tooltip :content="name" v-if="!isMe">
        <mu-avatar color="red" class="avatar">{{ avatar }}</mu-avatar>
      </mu-tooltip>
      <div class="message">{{ message }}</div>
      <mu-tooltip :content="name" v-if="isMe">
        <mu-avatar color="red" class="avatar">{{ avatar }}</mu-avatar>
      </mu-tooltip>
    </div>
  </mu-container>
</template>

<script>
import { mapGetters } from "vuex";
import { userInfo } from "os";

export default {
  name: "MessageItem",
  props: {
    name: {
      type: String
    },
    message: {
      type: String
    }
  },
  computed: {
    avatar() {
      return this.name.substr(0, 1);
    },
    isMe() {
      return this.userInfo.name === this.name ? true : false;
    },
    ...mapGetters(["userInfo"])
  }
};
</script>

<style lang="scss" scoped>
.message-item {
  position: relative;
  .isme {
    text-align: right;
  }
  .item {
    .message {
      display: inline-block;
      background-color: #ff4081;
      color: #fff;
      height: 44px;
      border-radius: 4px;
      padding: 10px;
      margin: 0 10px;
      max-width: 80%;
    }
  }
}
</style>
