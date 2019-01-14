<template>
	<div class="main">
		<div class="right-nav-bg" @mouseenter="clearDropdown()">
			<RightNav></RightNav>
		</div>
		<div v-bind:class="topBg">
			<div v-bind:class="topNav" :style="windowBg">
				<div class="topLeft" @mouseenter="clearDropdown()">
					<div class="topLeftTitle">
						<img src="../../assets/img/logo.png" alt="">
					</div>
				</div>
				<div v-bind:class="nav">
					<a href="javascript:" @click="goMain()" @mouseenter="clearDropdown()">首页</a>
					<div>
						<a href="javascript:" @click="goStart()" @mouseenter="enterStart()">明星产品</a>
						<div class="drop-down-box" v-show="showstartdrop">
							<p @click="goStart()">零秒活力锅</p>
							<p @click="goAllRound()">全能平底锅</p>
							<p>梦幻公主锅</p>
							<p>天使锅</p>
						</div>
					</div>
					<a href="javascript:" @click="goCoreyroom()" @mouseenter="clearDropdown()">料理教室</a>
					<a href="javascript:" @click="goshare()" @mouseenter="clearDropdown()">使用者分享</a>
					<div>
						<a href="javascript:" @click="goAbout" data-id="1" @mouseenter="enterAbout()">关于我们</a>
						<div class="drop-down-box" v-show="showAboutdrop">
							<p @click="goAbout" data-id="1">公司简介</p>
							<p @click="goAbout" data-id="2">公司摘要</p>
							<p @click="goAbout" data-id="3">历史事件</p>
							<p @click="goAbout" data-id="4">新闻中心</p>
							<p @click="goAbout" data-id="5">联系我们</p>
						</div>
					</div>
					<p @click="goBuy()" @mouseenter="showProduct()">我要购买</p>
				</div>
				<div class="navRight">
					<div class="searchBg" @mouseenter="clearDropdown()">
						<input type="text" @input="search" ref="inputVal" @keyup.enter="submit()">
						<img src="../../assets/img/search.png" alt="">
					</div>
					<img src="../../assets/img/person.png" alt="" @mouseenter="enterPerson()">
					<div class="user-photo" @mouseenter="showUserModal()" @click="goPersonCenter">
						<p>张三*</p>
					</div>
					<img src="../../assets/img/cart.png" alt="" @mouseenter="clearDropdown()" @click="goCart">
				</div>
			</div>
			<div v-bind:class="chooseLogin" v-show="showModal">
				<div>
					<p @click="goLogin()">登录</p>
					<p @click="goRegister()">注册</p>
				</div>
			</div>
			<div class="show-user-detail" v-show="showUsermodal">
				<div>
					<p @click="goMyOrder">我的订单</p>
					<p @click="goCollect">我的收藏</p>
					<p @click="goMylocation">我的地址</p>
					<p @click="">修改密码</p>
					<p @click="">退出登录</p>
				</div>
			</div>
			<div v-bind:class="chooseProduct" v-show="showProductModal">
				<p v-for="(item,index) in productList">{{item}}</p>
			</div>
		</div>
		<!--<div class="banner">-->
		<!--<img class="bannerImg" src="../../assets/img/banner.png" alt="">-->
		<!--</div>-->
		<div class="swiper-container" style="width: 100%" @mouseenter="clearDropdown()">
			<div class="swiper-wrapper">
				<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../../assets/img/banner.png" alt=""></a></div>-->
				<div class="swiper-slide" v-for="(item,index) in imgs">
					<img class="bannerImg" src="../../assets/img/banner.png" alt="">
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>

			<!-- 如果需要导航按钮 -->
			<!--<div class="swiper-button-prev swiper-button-white"></div>-->
			<!--<div class="swiper-button-next swiper-button-white"></div>-->
		</div>
		<div class="conent" @mouseenter="clearDropdown()">
			<div class="newProduct">
				<div v-for="(item,index) in list">
					<img src="../../assets/img/newguo.png" alt="">
					<p>新品上市</p>
				</div>
			</div>
			<div class="buy-discounts">
				<img src="../../assets/img/discounts 1.png" alt="">
				<img src="../../assets/img/discounts 2.png" alt="">
			</div>
		</div>
		<div class="product-classify" @mouseenter="clearDropdown()">
			<div class="conent">
				<div class="pot-classify" v-for="(item,index) in potList">
					<p>{{item.title}}</p>
					<img src="../../assets/img/bigguo.png" alt="">
					<div class="pot-list">
						<div class="pot-detail" v-for="(item,i) in item.product">
							<img src="../../assets/img/smallguo.png" alt="">
							<div class="money-bg">
								<div class="money-text">
									<div class="now-price">
										<p>¥</p>
										<p>{{item.money}}</p>
									</div>
									<div class="before-price">
										<p>¥{{item.beforeMoney}}</p>
									</div>
								</div>
								<img class="money-icon" src="../../assets/img/bai.png" alt="" v-if="item.hot==1">
								<img class="money-icon" src="../../assets/img/hong.png" alt="" v-if="item.hot==0">
							</div>
							<p>{{item.conent}}</p>
						</div>
					</div>
				</div>
				<div class="pot-classify" v-for="(item,index) in partList" style="margin-bottom: 12.125rem;">
					<p>{{item.title}}</p>
					<div class="pot-list">
						<img src="../../assets/img/peijian.png" alt="">
						<div class="pot-detail" v-for="(item,i) in item.product">
							<img src="../../assets/img/smallguo.png" alt="">
							<div class="money-bg">
								<div class="money-text">
									<div class="now-price">
										<p>¥</p>
										<p>{{item.money}}</p>
									</div>
									<div class="before-price">
										<p>¥{{item.beforeMoney}}</p>
									</div>
								</div>
								<img class="money-icon" src="../../assets/img/bai.png" alt="" v-if="item.hot==1">
								<img class="money-icon" src="../../assets/img/hong.png" alt="" v-if="item.hot==0">
							</div>
							<p>{{item.conent}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-background" @mouseenter="clearDropdown()">
			<Bottom />
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import Bottom from '../../components/bottom'
	import RightNav from '../../components/rightNav'
	export default {
		components: {
			Bottom,
			RightNav
		},
		data() {
			return {
				potList: [{
						title: '零秒活力锅',
						product: [{
								money: '3000',
								beforeMoney: '5000',
								hot: '1',
								conent: '零秒活力锅介绍'
							},
							{
								money: '3000',
								beforeMoney: '5000',
								hot: '1',
								conent: '零秒活力锅介绍'
							},
							{
								money: '3000',
								beforeMoney: '5000',
								hot: '0',
								conent: '零秒活力锅介绍'
							},
							{
								money: '3000',
								beforeMoney: '5000',
								hot: '0',
								conent: '零秒活力锅介绍'
							},
							{
								money: '3000',
								beforeMoney: '5000',
								hot: '0',
								conent: '零秒活力锅介绍'
							},
							{
								money: '3000',
								beforeMoney: '5000',
								hot: '1',
								conent: '零秒活力锅介绍'
							},
						]
					},
					{
						title: '全能平底锅',
						product: [{
								money: '3000',
								beforeMoney: '5000',
								hot: '1',
								conent: '全能平底锅介绍'
							}, {
								money: '3000',
								beforeMoney: '5000',
								hot: '0',
								conent: '零秒活力锅介绍'
							},
							{
								money: '3000',
								beforeMoney: '5000',
								hot: '1',
								conent: '全能平底锅介绍'
							}, {
								money: '3000',
								beforeMoney: '5000',
								hot: '0',
								conent: '零秒活力锅介绍'
							},
							{
								money: '3000',
								beforeMoney: '5000',
								hot: '1',
								conent: '全能平底锅介绍'
							}, {
								money: '3000',
								beforeMoney: '5000',
								hot: '0',
								conent: '零秒活力锅介绍'
							}
						]
					},
					{
						title: '梦幻公主锅',
						product: [{
								money: '3000',
								beforeMoney: '5000',
								hot: '1',
								conent: '梦幻公主锅介绍'
							}, {
								money: '3000',
								beforeMoney: '5000',
								hot: '0',
								conent: '零秒活力锅介绍'
							},
							{
								money: '3000',
								beforeMoney: '5000',
								hot: '1',
								conent: '梦幻公主锅介绍'
							}, {
								money: '3000',
								beforeMoney: '5000',
								hot: '0',
								conent: '零秒活力锅介绍'
							},
							{
								money: '3000',
								beforeMoney: '5000',
								hot: '1',
								conent: '梦幻公主锅介绍'
							}, {
								money: '3000',
								beforeMoney: '5000',
								hot: '0',
								conent: '零秒活力锅介绍'
							}
						]
					},

				],
				partList: [{
					title: '热门配件',
					product: [{
							money: '3000',
							beforeMoney: '5000',
							hot: '1',
							conent: '梦幻公主锅介绍'
						}, {
							money: '3000',
							beforeMoney: '5000',
							hot: '0',
							conent: '零秒活力锅介绍'
						},
						{
							money: '3000',
							beforeMoney: '5000',
							hot: '1',
							conent: '梦幻公主锅介绍'
						}, {
							money: '3000',
							beforeMoney: '5000',
							hot: '0',
							conent: '零秒活力锅介绍'
						},
						{
							money: '3000',
							beforeMoney: '5000',
							hot: '1',
							conent: '梦幻公主锅介绍'
						}, {
							money: '3000',
							beforeMoney: '5000',
							hot: '0',
							conent: '零秒活力锅介绍'
						}
					]
				}, ],
				imgs: [{
						imgUrl: '../assets/img/banner.png',
						url: 'http://www.baidu.com'
					},
					{
						imgUrl: '../assets/img/banner.png',
						url: 'http://www.baidu.com'
					},
					{
						imgUrl: '../assets/img/banner.png',
						url: 'http://www.baidu.com'
					},
					{
						imgUrl: '../assets/img/banner.png',
						url: 'http://www.baidu.com'
					},
				],
				topBg: 'top-bg',
				chooseLogin: 'chooseLogin',
				topNav: 'topNavBg',
				windowBg: 'background-color: #FFFFFF',
				nav: 'nav',
				showModal: false,
				showstartdrop: false,
				showAboutdrop: false,
				showProductModal: false,
				showUsermodal:false,
				productList: ['零秒活力锅', '全能平底锅', '梦幻公主锅'],
				chooseProduct: 'chooseProduct',
				list: ['', '', '', '']
			};
		},
		methods: {
			clearDropdown() {
				this.showstartdrop = false;
				this.showModal = false;
				this.showAboutdrop = false;
				this.showProductModal = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #FFFFFF';
			},
			enterPerson() {
				this.showModal = true;
				this.showstartdrop = false;
				this.showAboutdrop = false;
				this.showProductModal = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #eeeeee';
			},
			enterStart() {
				this.showstartdrop = true;
				this.showAboutdrop = false;
				this.showModal = false;
				this.showProductModal = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #eeeeee';
			},
			enterAbout() {
				this.showstartdrop = false;
				this.showAboutdrop = true;
				this.showModal = false;
				this.showProductModal = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #eeeeee'
			},
			showProduct() {
				this.showProductModal = true;
				this.showstartdrop = false;
				this.showAboutdrop = false;
				this.showModal = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #eeeeee';
			},
			showUserModal() {
				this.showUsermodal = true;
				this.showModal = false;
				this.showstartdrop = false;
				this.showAboutdrop = false;
				this.showProductModal = false;
				this.windowBg = 'background-color: #eeeeee';
			},
			goLogin() {
				this.$router.push({
						name: 'Login',
						params: {}
					}),
					this.showModal = false;
			},
			goRegister() {
				this.$router.push({
						name: 'Register',
						params: {}
					}),
					this.showModal = false;
			},
			search() {
				console.log('input输入的值', this.$refs.inputVal.value);
				this.searchText = this.$refs.inputVal.value;
				console.log('searchtext的值', this.searchText);
			},
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				console.log(scrollTop);
				// console.log($('.topLeft')[0]);
				if (scrollTop > 0) {
					this.topBg = 'top-bg1';
					this.topNav = 'topNavBg1';
					this.chooseLogin = 'chooseLogin1';
					this.nav = 'nav1';
					this.chooseProduct = 'chooseProduct1';
				} else {
					this.topBg = 'top-bg';
					this.topNav = 'topNavBg';
					this.chooseLogin = 'chooseLogin';
					this.nav = 'nav';
					this.chooseProduct = 'chooseProduct';
				}
			},
			goMain() {
				this.$router.push({
					name: 'Main',
					params: {}
				})
			},
			goStart() {
				this.$router.push({
					name: 'ZeroVitality',
					params: {}
				})
			},
			goAllRound() {
				this.$router.push({
					name: 'AllRound',
					params: {}
				})
			},
			goCoreyroom() {
				this.$router.push({
					name: 'Coreyroom',
					params: {}
				})
			},
			goshare() {
				this.$router.push({
					name: 'Share',
					params: {}
				})
			},
			goAbout(e) {
				this.$router.push({
					name: 'About',
					params: {
						id: e.currentTarget.dataset.id
					}
				})
			},
			goBuy() {
				this.$router.push({
					name: 'Buy',
					params: {}
				})
			},
			goPersonCenter(){
				this.$router.push({
					name: 'PersonCenter',
					params: {}
				})
			},
			goCollect(){
				this.$router.push({
					name: 'MyCollect',
					params: {}
				})	
			},
			goMylocation(){
				this.$router.push({
					name: 'AddLocation',
					params: {}
				})	
			},
			goMyOrder(){
				this.$router.push({
					name: 'MyOrder',
					params: {}
				})
			},
			goCart() {
				this.$router.push({
					name: 'Cart',
					params: {}
				})
			},
			goRecommend() {
				this.$router.push({
					name: 'Recommend',
					params: {}
				})
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
			//初始化swiper
			new Swiper('.swiper-container', {
				autoplay: 2000,
				speed: 300,
				// autoplayDisableOnInteraction:true,
				loopAdditionalSlides: 1,
				paginationClickable: true,
				touchReleaseOnEdges: true,
				loop: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				// paginationHide:true,
				// grabCursor:true,
				paginationVisibleClass: 'my-visible-switch',
				// 如果需要前进后退按钮
				// nextButton: '.swiper-button-next',
				// prevButton: '.swiper-button-prev',
				// 如果需要滚动条
				// scrollbar: '.swiper-scrollbar',
			});
		},
	}
</script>

<style>
	.chooseProduct {
		width: 90%;
		padding: 2rem 5%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
	}

	.chooseProduct1 {
		width: 70%;
		padding: 2rem 15%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
	}

	.chooseProduct>p {
		cursor: pointer;
		margin-left: 6%;
		margin-bottom: 1.875rem;
	}

	.chooseProduct>p:hover {
		color: #852833;
	}

	.chooseProduct1>p {
		cursor: pointer;
		margin-left: 6%;
		margin-bottom: 1.875rem;
	}

	.chooseProduct1>p:hover {
		color: #852833;
	}

	.newProduct {
		margin-top: 2.125rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	div.newProduct>div {
		width: 23%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2.5rem 0;
		background-color: #f1f1f1;
	}

	div.newProduct>div>img {
		width: 63%;
		height: auto;
		margin-bottom: 1.5rem;
	}

	div.newProduct>div>p {
		color: #333333;
		font-size: 16px;
	}

	div.buy-discounts {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		margin: 2rem 0;
	}

	div.buy-discounts>img {
		width: 49%;
	}

	.product-classify {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: #f3f3f3;
		align-items: center;

	}

	.pot-classify>p {
		margin: 2.5rem 0;
		color: #333333;
		font-size: 1.375rem;
	}

	.pot-classify>img {
		width: 100%;
		margin-bottom: 1.25rem;
	}

	.pot-list {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.pot-list>img {
		margin: 0 0.5%;
		width: 49%;
		margin-bottom: 0.9375rem;
	}

	.pot-detail {
		width: 24%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		background-color: #FFFFFF;
		margin: 0 0.5%;
		margin-bottom: 0.9375rem;
		border-radius: 0.625rem;
		padding: 1.875rem 0;
	}

	.pot-detail>img {
		width: 81%;
	}

	.pot-detail>p {
		width: 94%;
		padding: 0 3%;
		color: #666;
		font-size: 0.875rem;
	}

	.money-bg {
		width: 94%;
		padding: 0 3%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}

	.money-bg>img {
		width: 1.25rem;
		height: 1.25rem;
	}

	.money-text {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}

	.now-price {
		display: flex;
		flex-direction: row;
	}

	.now-price>p {
		color: #ff0606;
		font-size: 1.125rem;
	}

	.now-price>p:nth-child(2) {
		margin-left: 0.3125rem;
	}

	.before-price>p {
		color: #999999;
		font-size: 0.75rem;
		margin-left: 0.625rem;
		text-decoration: line-through;
	}
</style>
