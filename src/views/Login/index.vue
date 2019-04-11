<template>
  <div class="login">
    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <h1>TFL-IM 登录</h1>
        <mu-form-item label="用户名" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: '必须填写用户名' },
        { validate: val => val.length >= 3, message: '用户名长度大于3' }
      ],
      passwordRules: [
        { validate: val => !!val, message: '必须填写密码' },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: '密码长度大于3小于10'
        }
      ],
      validateForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        console.log('form valid: ', result)
      })
    },
    clear() {
      this.$refs.form.clear()
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  height: 100%;
  .mu-demo-form {
    width: 100%;
    max-width: 460px;
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%)
  }
}
</style>
