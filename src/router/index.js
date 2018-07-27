import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import axios from '../axios'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
