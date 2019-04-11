import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Register from './views/Register'
import MainInterface from './views/MainInterface'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MainInterface',
      component: MainInterface
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
