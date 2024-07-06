import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { createPinia, PiniaVuePlugin } from 'pinia'
// import { createPersistedState } from 'pinia-persistedstate-plugin'
// Vue.use(PiniaVuePlugin)
// const pinia = createPinia()
Vue.config.productionTip = false

new Vue({
  // pinia,
  router,
  render: h => h(App)
}).$mount('#app')
