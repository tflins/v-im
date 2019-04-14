<template>
  <mu-container>
    <mu-tabs center color="teal">
      <mu-tab to="/groupchat">
        <mu-icon value="question_answer"></mu-icon>聊天室
      </mu-tab>
      <mu-tab>
        <mu-icon value="account_circle"></mu-icon>好友
      </mu-tab>
      <mu-tab>
        <mu-icon value="face"></mu-icon>个人中心
      </mu-tab>
    </mu-tabs>
  </mu-container>
</template>

<script>
export default {
  name: 'THeader'
}
</script>

<style lang="scss" scoped>
</style>
