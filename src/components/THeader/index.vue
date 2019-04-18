<template>
  <mu-appbar style="width: 100%;" color="primary">
  <mu-button icon slot="left">
    <mu-icon value="menu"></mu-icon>
  </mu-button>
  {{ title }}
  <mu-button flat slot="right">
    <slot></slot>
  </mu-button>
</mu-appbar>
</template>

<script>
export default {
  name: 'THeader',
  props: {
    title: {
      type: String,
      default: '消息'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
