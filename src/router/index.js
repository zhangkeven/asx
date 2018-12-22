import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Seemore from '@/pages/seemore/seemore'
import About from '@/pages/about/about'
import Recommend from '@/pages/recommend/recommend'
import RecommendDetail from '@/pages/recommend/recommendDetail'
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
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
		{
			path: '/Recommend',
			name: 'Recommend',
			component: Recommend
		},
		{
			path: '/RecommendDetail',
			name: 'RecommendDetail',
			component: RecommendDetail
		}
  ]
})
