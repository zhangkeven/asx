import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Seemore from '@/pages/seemore/seemore'
import Coreyroom from '@/pages/coreyroom/coreyRoom'
import CoreyroomDetail from '@/pages/coreyroom/coreyroomDetail'
import About from '@/pages/about/about'
import Share from '@/pages/share/share'
import Recommend from '@/pages/recommend/recommend'
import RecommendDetail from '@/pages/recommend/recommendDetail'
Vue.use(Router)
import global from '@/assets/Global/global.js'
export default new Router({
	routes: [{
			path: '/',
			name: 'Main',
			component: Main,
			meta: {
				title: "阿莎希",
				content: 'disable'
			}
		},
		{
			path: '/Seemore',
			name: 'Seemore',
			component: Seemore
		},
		{
			path: '/Coreyroom',
			name: 'Coreyroom',
			component: Coreyroom,
			meta: {
				title: "料理教室",
				content: 'disable'
			}
		},
		{
			path: '/CoreyroomDetail',
			name: 'CoreyroomDetail',
			component: CoreyroomDetail,
			meta: {
				title: "料里教室详情",
				content: 'disable'
			}
		},
		{
			path: '/Share',
			name: 'Share',
			component: Share,
			meta: {
				title: "使用者分享",
				content: 'disable'
			}
		},
		{
			path: '/About',
			name: 'About',
			component: About,
			meta: {
				title: "关于我们",
				content: 'disable'
			}
		},
		{
			path: '/Recommend',
			name: 'Recommend',
			component: Recommend,
			meta: {
				title: '推荐专栏',
				content: 'disable'
			}
		},
		{
			path: '/RecommendDetail',
			name: 'RecommendDetail',
			component: RecommendDetail
		}
	]
})
