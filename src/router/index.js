import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Seemore from '@/pages/seemore/seemore'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Seemore',
      name: 'Seemore',
      component: Seemore
    }
  ]
})
