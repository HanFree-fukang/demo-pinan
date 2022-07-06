import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import router from './router'
import 'animate.css'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
