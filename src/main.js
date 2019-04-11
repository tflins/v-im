import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './common/scss/reset.scss'

Vue.config.productionTip = false

Vue.use(MuseUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
