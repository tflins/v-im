import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './common/scss/reset.scss'
import VueSocketio from 'vue-socket.io'
// import socketio from 'socket.io-client'

Vue.config.productionTip = false

Vue.use(MuseUI)
Vue.use(new VueSocketio({
  debug: true,
  connection: 'http://localhost:5000/'
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
