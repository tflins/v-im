<template>
  <div>
    <mu-tabs color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
      <mu-tab to="/groupchat">
        <mu-icon value="question_answer"></mu-icon>聊天室
      </mu-tab>
      <mu-tab to="/friends">
        <mu-icon value="account_circle"></mu-icon>好友
      </mu-tab>
      <mu-tab>
        <mu-icon value="face"></mu-icon>个人中心
      </mu-tab>
    </mu-tabs>
  </div>
</template>

<script>
export default {
  name: 'THeader'
}
</script>

<style lang="scss" scoped>
</style>
