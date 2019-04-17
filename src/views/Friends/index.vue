<template>
  <mu-container>
    <GeminiScrollbar class="friends">
    <mu-paper :z-depth="1">
      <mu-list>
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
      <mu-text-field label="输入用户昵称" v-model.trim="searchStr" full-width color="secondary" placeholder=""></mu-text-field>
      <mu-list>
        <mu-list-item avatar button :ripple="false" v-for="item in searchList" :key="item._id">
          <mu-list-item-action>
            <mu-avatar>{{ item.name.substr(0, 1) }}</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>{{ item.name }}</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="add_circle"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <p v-show="!searchList.length &&  searchStr">未找到该用户</p>
    </full-dialog>

    <mu-button fab color="teal" class="fr" @click="openFullscreenDialog">
      <mu-icon value="add"></mu-icon>
    </mu-button>
  </mu-container>
</template>

<script>
import FullDialog from '../../components/FullDialog'
import { getName } from '../../api/user'

export default {
  name: 'Friends',
  data() {
    return {
      openFullscreen: false,
      // 搜素用户列表
      searchList: [],
      // 搜素昵称
      searchStr: '',
      // 好友列表
      friends: []
    }
  },
  methods: {
    openFullscreenDialog() {
      this.openFullscreen = true
    },
    closeFullscreenDialog() {
      this.openFullscreen = false
    },
    // 搜素用户
    searchName() {
      if (this.searchStr === '') {
        this.searchList = []
        return
      }
      getName(this.searchStr).then(res => {
        if (res.success) {
          this.searchList = res.data
        } else {
          this.searchList = []
        }
      }).catch(err => {
        throw err
      })
    }
  },
  components: {
    FullDialog
  },
  watch: {
    searchStr() {
      this.searchName()
    }
  }
}
</script>

<style lang="scss" scoped>
.friends {
  height: 500px;
  overflow: auto;
}
</style>
