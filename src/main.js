import Vue from 'vue'
import router from './router'
import App from './App.vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './plugins/link-resolver.js'
import VueClipboard from 'vue-clipboard2'
import VueAnalytics from 'vue-analytics'

Vue.use(VueClipboard)
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
})

Vue.use(VueAnalytics, {
  id: 'UA-33579395-7',
  router
})

Object.defineProperty(Vue.prototype, '$storagekey', {
  value: 'please-hire-dustin-delatore'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')