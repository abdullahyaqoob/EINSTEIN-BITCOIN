import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRecaptcha from 'vue-recaptcha'
import VueResource from 'vue-resource'
import Toasted from 'vue-toasted'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const ToastedOptions = {
  position: 'top-center',
  duration: 3000,
  theme: 'toasted-primary'
}

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Toasted, ToastedOptions)

Vue.use(VueResource)

Vue.component('vue-recaptcha', VueRecaptcha)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
