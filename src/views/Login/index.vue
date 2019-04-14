<template>
  <div class="login">
    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <h1>TFL-IM 登录</h1>
        <mu-form-item label="邮箱" prop="email" :rules="emailRules">
          <mu-text-field v-model="validateForm.email" prop="email"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click.enter="_login">登录</mu-button>
          <mu-button @click="clear">重置</mu-button>
          <router-link to="/register">
            <a class="reg-text">没有账号?注册</a>
            <i class="iconfont icon-success"></i>
          </router-link>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>

<script>
import { login } from '../../api/user'

export default {
  name: 'Login',
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
      passwordRules: [
        { validate: val => !!val, message: '必须填写密码' },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: '密码长度大于3小于10'
        }
      ],
      validateForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    clear() {
      this.$refs.form.clear()
      this.validateForm = {
        email: '',
        password: '',
        isAgree: false
      }
    },
    _login() {
      this.$refs.form.validate().then(result => {
        if (result) {
          login(this.validateForm).then(res => {
            if (res.success) {
              localStorage.setItem('token', res.data.token)
              location.replace('/');
            } else {
              this.$toast.error(res.msg || '登录失败');
            }
          })
        }
      })
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
    transform: translateX(-50%);
    .reg-text {
      margin-left: 160px;
    }
  }
}
</style>
