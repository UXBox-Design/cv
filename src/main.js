import Vue from 'vue'
import App from './App.vue'
import PrismicVue from 'prismic-vue'
import VueClipboard from 'vue-clipboard2'
import VueAnalytics from 'vue-analytics'

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint
})

Vue.use(VueAnalytics, {
  id: 'UA-33579395-7'
})

Vue.use(VueClipboard)

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$storagekey', {
  value: 'please-hire-dustin-delatore'
})

new Vue({
  render: h => h(App)
}).$mount('#app')