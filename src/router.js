import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Register from './views/Register'
import MainInterface from './views/MainInterface'
import GroupChat from './views/GroupChat'
import Friends from './views/Friends'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MainInterface',
      meta: {
        requiresAuth: true
      },
      redirect: '/groupchat',
      component: MainInterface,
      children: [
        {
          path: 'groupchat',
          name: 'GroupChat',
          component: GroupChat,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'friends',
          name: 'Friends',
          component: Friends,
          meta: {
            requiresAuth: true
          }
        }
      ]
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

// 登录拦截
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.meta.requiresAuth) {
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
