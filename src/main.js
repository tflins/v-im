import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Toast from 'muse-ui-toast'
import './common/scss/index.scss'
import VueSocketio from 'vue-socket.io'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(MuseUI)
Vue.use(Toast, {
  position: 'top'
})
Vue.use(
  new VueSocketio({
    debug: true,
    connection: 'http://localhost:5000/'
  })
)

// http request 拦截器
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回401清楚token信息并跳转到登陆页面
          router.replace({
            path: '/login'
          })
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息。
  }
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
