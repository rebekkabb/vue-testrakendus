import Vue from 'vue'
import App from './App.vue'
import { makeServer } from "./server"
import router from './router'

Vue.config.productionTip = false

if (process.env.NODE_ENV === "development") {
  makeServer()
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
