import Vue from 'vue'
import App from './App.vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './link-resolver.js'

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
})

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$storagekey', {
  value: 'please-hire-dustin-delatore'
})

new Vue({
  render: h => h(App)
}).$mount('#app')