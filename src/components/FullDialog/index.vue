<template>
  <mu-container>
    <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
      <mu-appbar color="#2196f3" :title="title">
        <mu-button slot="left" icon @click="closeFullscreenDialog">
          <mu-icon value="close"></mu-icon>
        </mu-button>
        <mu-button slot="right" flat @click="closeFullscreenDialog">Done</mu-button>
      </mu-appbar>
      <div style="padding: 24px;">
        <slot></slot>
      </div>
    </mu-dialog>
  </mu-container>
</template>

<script>
export default {
  name: 'FullDialog',
  props: {
    // 全屏弹窗名称
    title: {
      type: String,
      required: true
    },
    openFullscreen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeFullscreenDialog () {
      this.$emit('closeFullscreenDialog')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
