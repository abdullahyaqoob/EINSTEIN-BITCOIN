import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Resetpass from '../views/Resetpass.vue'
import forgot from '../views/forgot.vue'
import testing from '../components/testing.vue'
import navbar from '../components/navbar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: forgot
  },
  {
    path: '/Resetpass',
    name: 'Resetpass',
    component: Resetpass
  },
  {
    path: '/testing',
    name: 'testing',
    component: testing
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: navbar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
