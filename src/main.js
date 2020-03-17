import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
