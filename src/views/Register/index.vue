<template>
  <div class="login">
    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <h1>加入 TFL-IM</h1>
        <mu-form-item label="邮箱" prop="email" :rules="emailRules">
          <mu-text-field v-model="validateForm.email" prop="email"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="用户名" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="确认密码" prop="repassword" :rules="repasswordRules">
          <mu-text-field type="password" v-model="validateForm.repassword" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="secondary" @click="submit">注册</mu-button>
          <mu-button @click="clear">重置</mu-button>
          <router-link to="/login">
            <a class="reg-text">已有账号?登录</a>
          </router-link>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      emailRules: [
        { validate: val => !!val, message: '必须填写邮箱' },
        {
          /* eslint-disable */
          validate: val => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(val),
          message: '请输入正确的邮箱'
        }
      ],
      usernameRules: [
        { validate: val => !!val, message: '必须填写用户名' },
        { validate: val => val.length >= 3, message: '用户名长度必须大于3' }
      ],
      passwordRules: [
        { validate: val => !!val, message: '必须填写密码' },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: '密码长度大于3小于10'
        }
      ],
      repasswordRules: [
        { validate: val => !!val, message: '必须确认密码' },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: '密码长度大于3小于10'
        },
        { validate: val => val === this.validateForm.password, message: '两次密码不一致' }
      ],
      validateForm: {
        email: '',
        password: '',
        username: ''
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
        email: '',
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
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    .reg-text {
      margin-left: 160px;
    }
  }
}
</style>
