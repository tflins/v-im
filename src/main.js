import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Toast from 'muse-ui-toast'
import './common/scss/index.scss'
import VueSocketio from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(MuseUI)
Vue.use(Toast, {
  position: 'top'
})
Vue.use(new VueSocketio({
  debug: true,
  connection: 'http://localhost:5000/'
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
