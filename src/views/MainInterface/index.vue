<template>
  <div class="main-interface">
    <t-header :title="title"></t-header>
    <router-view/>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import THeader from '../../components/THeader'
import BottomNav from '../../components/BottomNav'

export default {
  name: 'MainInterface',
  data() {
    return {
      title: '消息'
    }
  },
  components: {
    THeader,
    BottomNav
  }
}
</script>

<style lang="scss" scoped>
.main-interface {
  height: 100%;
}
</style>
