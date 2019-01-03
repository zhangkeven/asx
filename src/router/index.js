import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Seemore from '@/pages/seemore/seemore'
import Coreyroom from '@/pages/coreyroom/coreyRoom'
import CoreyroomDetail from '@/pages/coreyroom/coreyroomDetail'
import About from '@/pages/about/about'
import Buy from '@/pages/shoppingMall/buyProduct'
import Register from '@/pages/shoppingMall/register'
import ShortcutLogin from '@/pages/shoppingMall/shortcutLogin'
import FindUpwd from '@/pages/shoppingMall/findUpwd'
import CompleteUpwd from '@/pages/shoppingMall/completeUpwd'
import Login from '@/pages/shoppingMall/login'
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
			path: '/Buy',
			name: 'Buy',
			component: Buy,
			meta: {
				title: "购买商品",
				content: 'disable'
			}
		},
		{
			path: '/Register',
			name: 'Register',
			component: Register,
			meta: {
				title: "注册账号",
				content: 'disable'
			}
		},
		{
			path: '/Login',
			name: 'Login',
			component: Login,
			meta: {
				title: "登录账号",
				content: 'disable'
			}
		},
		{
			path: '/ShortcutLogin',
			name: 'ShortcutLogin',
			component: ShortcutLogin,
			meta: {
				title: "快捷登录",
				content: 'disable'
			}
		},
		{
			path: '/FindUpwd',
			name: 'FindUpwd',
			component: FindUpwd,
			meta: {
				title: "找回密码",
				content: 'disable'
			}
		},
		{
			path: '/CompleteUpwd',
			name: 'CompleteUpwd',
			component: CompleteUpwd,
			meta: {
				title: "找回密码",
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
