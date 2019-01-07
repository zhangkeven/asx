import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import ZeroVitality from '@/pages/starProduct/zeroVitality'
import AllRound from '@/pages/starProduct/allRound'
import Coreyroom from '@/pages/coreyroom/coreyRoom'
import CoreyroomDetail from '@/pages/coreyroom/coreyroomDetail'
import About from '@/pages/about/about'
import Seemore from '@/pages/seemore/seemore'
import Buy from '@/pages/product/buyProduct'
import LogisticsOrder from '@/pages/product/logisticsOrder'
import Register from '@/pages/user/register'
import ShortcutLogin from '@/pages/user/shortcutLogin'
import FindUpwd from '@/pages/user/findUpwd'
import CompleteUpwd from '@/pages/user/completeUpwd'
import Login from '@/pages/user/login'
import Share from '@/pages/share/share'
import Recommend from '@/pages/recommend/recommend'
import RecommendDetail from '@/pages/recommend/recommendDetail'
Vue.use(Router)
import global from '@/assets/Global/global.js'
export default new Router({
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Main,
			meta: {
				title: "阿莎希",
				content: 'disable'
			}
		},
		{
			path: '/ZeroVitality',
			name: 'ZeroVitality',
			component: ZeroVitality,
			meta: {
				title: "零秒活力锅",
				content: 'disable'
			}
		},
		{
			path: '/AllRound',
			name: 'AllRound',
			component: AllRound,
			meta: {
				title: "全能平底锅",
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
			path: '/LogisticsOrder',
			name: 'LogisticsOrder',
			component: LogisticsOrder,
			meta: {
				title: "物流订单",
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
	],
  scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

