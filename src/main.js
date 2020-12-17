import Vue from 'vue'
import router from './router/index.js'
// import store from './store'
// import http from './http.js'
import ElementUI from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/iconfont.css'
import './assets/less/main.less'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
