<template>
  <div class="main-interface">
    <t-header></t-header>
    <router-view/>
  </div>
</template>

<script>
import THeader from '../../components/THeader'

export default {
  name: 'MainInterface',
  components: {
    THeader
  }
}
</script>
