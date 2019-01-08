<template>
	<div class="main">
		<div style="width: 100%;z-index: 6;" @mouseenter="clearDropdown()">
			<RightNav></RightNav>
		</div>
		<div v-bind:class="topBg">
			<div v-bind:class="topNav" :style="windowBg">
				<div class="topLeft" @mouseenter="clearDropdown()">
					<div class="topLeftTitle">
						<img src="../assets/img/logo.png" alt="">
					</div>
				</div>
				<div v-bind:class="nav">
					<a href="javascript:" @mouseenter="clearDropdown()">首页</a>
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
					<p @click="goBuy()" @mouseenter="clearDropdown()">我要购买</p>
				</div>
				<div class="navRight">
					<div class="searchBg" @mouseenter="clearDropdown()">
						<input type="text" @input="search" ref="inputVal" @keyup.enter="submit()">
						<img src="../assets/img/search.png" alt="">
					</div>
					<img src="../assets/img/person.png" alt="" @mouseenter="enterPerson()">
					<div class="user-photo" @mouseenter="showUserModal()">
						<p>张三*</p>
					</div>
					<img src="../assets/img/cart.png" alt="" @mouseenter="clearDropdown()" @click="goCart">
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
					<p @click="">我的收藏</p>
					<p @click="">我的地址</p>
					<p @click="">修改密码</p>
					<p @click="">退出登录</p>
				</div>
			</div>
		</div>
		<!--<div class="banner">-->
		<!--<img class="bannerImg" src="../assets/img/banner.png" alt="">-->
		<!--</div>-->
		<div class="swiper-container" style="width: 100%" @mouseenter="clearDropdown()">
			<div class="swiper-wrapper">
				<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
				<div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
					<img class="bannerImg" src="../assets/img/banner.png" alt="">
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>

			<!-- 如果需要导航按钮 -->
			<!--<div class="swiper-button-prev swiper-button-white"></div>-->
			<!--<div class="swiper-button-next swiper-button-white"></div>-->
		</div>
		<div class="conent" @mouseenter="clearDropdown()">
			<div class="goShopping">
				<div class="hlgBg">
					<img src="../assets/img/guo.png" alt="">
					<p>活力锅介绍</p>
					<div class="mask">

					</div>
				</div>
				<div class="hlgBg">
					<img src="../assets/img/guo1.png" alt="">
					<p>全能锅介绍</p>
					<div class="mask">

					</div>
				</div>
				<div class="goShoppBg">
					<p>前往商城</p>
					<img src="../assets/img/go.png" alt="">
				</div>
			</div>
			<p class="recommendCh">推荐专栏</p>
			<p class="recommendEh">Expert tips</p>
			<div class="recommendConent">
				<div @click="goRecommend()">
					<img src="../assets/img/hdy.png" alt="">
					<div class="mask">

					</div>
					<div>
						<p class="title">黄豆芽排骨汤</p>
						<p class="cuisineConent">黄豆芽是属于高纤的蔬菜，如果只有一锅满满的蔬菜汤会觉得好像在吃草，我们放了一些红萝卜白萝卜.......</p>
						<p class="issue">查看更多>></p>
					</div>
				</div>
				<div @click="goRecommend()">
					<img src="../assets/img/xhs.png" alt="">
					<div class="mask">

					</div>
					<div>
						<p class="title">高纤西红柿蔬菜汤</p>
						<p class="cuisineConent">西红柿是高钾的食材，所以会帮助钠排出体外，另外还有丰富的蔬菜，蔬菜也有各种纤维素，能够帮助废物排出......</p>
						<p class="issue">查看更多>></p>
					</div>
				</div>
				<div @click="goRecommend()">
					<img src="../assets/img/hyp.png" alt="">
					<div class="mask">

					</div>
					<div>
						<p class="title">姜黄鱼片炖饭</p>
						<p class="cuisineConent">一般我们炖饭都会有太多勾芡、太多调味料，过油过咸就是导致水肿的主要关键，这道姜黄鱼片炖饭.........</p>
						<p class="issue">查看更多>></p>
					</div>
				</div>
				<div @click="goRecommend()">
					<img src="../assets/img/sjd.png" alt="">
					<div class="mask">

					</div>
					<div>
						<p class="title">水炒四季豆</p>
						<p class="cuisineConent">四季豆相对来讲比一般蔬菜的纤维较粗，所以也是非常高纤的食材，起锅前再加上一些亚麻仁籽油，就完成......</p>
						<p class="issue">查看更多>></p>
					</div>
				</div>
			</div>
			<div class="discounts">
				<img src="../assets/img/discounts 1.png" alt="">
				<img src="../assets/img/discounts 2.png" alt="">
			</div>
			<p class="aboutCh">关于我们</p>
			<p class="aboutEh">About Us</p>
			<div class="aboutConent">
				<img src="../assets/img/gc.png" alt="">
				<p class="aboutDetail">环保是现代人必须认真思考的一大课题。ASAHI轻金属工业在思考是否能对环保尽一份心力时，把提供高性能的调理器具以减少一般家庭的瓦斯费、电费视为首要考虑重点。自从开发出活力锅之后，就常常收到消费者瓦斯费、电费减少的开心反馈。因此我们有了「制作出让烹调时间更短且食物更好吃的锅子。因为烹煮时间缩短可以让繁忙的主妇多出许多可自由运用的时间，也可以对地球做出贡献！于是公元2006年开始我们接受了这项新的挑战，这个挑战耗费3年的时间才完成!</p>
				<p class="issueAbout" @click="seeMore()">查看更多>></p>
			</div>
			<p class="recipesCh">菜谱</p>
			<p class="recipesEh">Recipes</p>
			<div class="recipesConent">
				<div class="swiper-button-color1"></div>
				<div class="recipesSwiper">
					<div class="swiper-container1" id="swiper-container">
						<div class="swiper-wrapper">
							<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
							<div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
								<div class="menu">
									<div>
										<img src="../assets/img/hdy.png" alt="">
										<div class="mask">

										</div>
										<div>
											<p class="title">黄豆芽排骨汤</p>
											<p class="cuisineConent">黄豆芽是属于高纤的蔬菜，如果只有一锅满满的蔬菜汤会觉得好像在吃草，我们放了一些红萝卜白萝卜......</p>
										</div>
									</div>
									<div>
										<img src="../assets/img/xhs.png" alt="">
										<div class="mask">

										</div>
										<div>
											<p class="title">高纤西红柿蔬菜汤</p>
											<p class="cuisineConent">西红柿是高钾的食材，所以会帮助钠排出体外，另外还有丰富的蔬菜，蔬菜也有各种纤维素，能够帮助废物排出......</p>
										</div>
									</div>
									<div>
										<img src="../assets/img/hyp.png" alt="">
										<div class="mask">

										</div>
										<div>
											<p class="title">姜黄鱼片炖饭</p>
											<p class="cuisineConent">一般我们炖饭都会有太多勾芡、太多调味料，过油过咸就是导致水肿的主要关键，这道姜黄鱼片炖饭.........</p>
										</div>
									</div>
									<div>
										<img src="../assets/img/sjd.png" alt="">
										<div class="mask">

										</div>
										<div>
											<p class="title">水炒四季豆</p>
											<p class="cuisineConent">四季豆相对来讲比一般蔬菜的纤维较粗，所以也是非常高纤的食材，起锅前再加上一些亚麻仁籽油，就完成......</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 如果需要分页器 -->
						<!--<div class="swiper-pagination"></div>-->

						<!-- 如果需要导航按钮 -->
						<!--<div class="swiper-button-prev swiper-button-white"></div>-->
						<!--<div class="swiper-button-next swiper-button-white"></div>-->
					</div>
				</div>
				<div class="swiper-button-color"></div>
			</div>
			<p class="useCh">使用心得</p>
			<p class="useEh">Customer reviews</p>
		</div>
		<div class="swiper-container3" style="width: 100%" @mouseenter="clearDropdown()">
			<div class="swiper-wrapper">
				<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
				<div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
					<div class="useConent">
						<div class="useList">
							<img src="../assets/img/tb.png" alt="">
							<div>
								<p class="useTitle">汤包</p>
								<p class="useListConent">对于忙碌的职业妇女来说，活力锅帮我省下不少时间,增添更多美味，用活力锅第一次煮了红豆汤，口感绵密比外卖还专业，家人赞叹我...</p>
							</div>
						</div>
						<div class="useList">
							<img src="../assets/img/tb.png" alt="">
							<div>
								<p class="useTitle">莊小如</p>
								<p class="useListConent">买了3L零秒活力锅，想不煮饭都难！锅身外型，就已经加分了。煮出来的食物美味度更是不得了。希忘大家能多分享使用食谱喔！！</p>
							</div>
						</div>
						<div class="useList">
							<img src="../assets/img/tb.png" alt="">
							<div>
								<p class="useTitle">魏锦良</p>
								<p class="useListConent">刚刚才开箱，研读使用说明，时间跟火焰，有别以后的烹调方式，新鲜感让人想了解这：新食器时代!</p>
							</div>
						</div>
						<div class="useList">
							<img src="../assets/img/tb.png" alt="">
							<div>
								<p class="useTitle">汤包</p>
								<p class="useListConent">对于忙碌的职业妇女来说，活力锅帮我省下不少时间,增添更多美味，用活力锅第一次煮了红豆汤，口感绵密比外卖还专业，家人赞叹我...</p>
							</div>
						</div>
						<div class="useList">
							<img src="../assets/img/tb.png" alt="">
							<div>
								<p class="useTitle">汤包</p>
								<p class="useListConent">对于忙碌的职业妇女来说，活力锅帮我省下不少时间,增添更多美味，用活力锅第一次煮了红豆汤，口感绵密比外卖还专业，家人赞叹我...</p>
							</div>
						</div>
						<div class="useList">
							<img src="../assets/img/tb.png" alt="">
							<div>
								<p class="useTitle">汤包</p>
								<p class="useListConent">对于忙碌的职业妇女来说，活力锅帮我省下不少时间,增添更多美味，用活力锅第一次煮了红豆汤，口感绵密比外卖还专业，家人赞叹我...</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mediaBg" @mouseenter="clearDropdown()">
			<div class="media">
				<p>媒体报道</p>
				<div class="swiper-container2" style="width: 100%">
					<div class="swiper-wrapper">
						<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
						<div class="swiper-slide" v-for="(item,i) in mediaList" :key="i">
							<div style="width: 100%">
								<div>
									<img src="../assets/img/media1.png" alt="">
									<div class="mask">

									</div>
								</div>
								<div>
									<div class="mediaBottom">
										<p class="mediaTitle">活力锅必买的三大好处</p>
										<p class="mediaConent">因为用水量少、快速烹煮，所以美味都锁在食材里！只需用一杯水烹煮，所以......</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>
					<div class="media-nav">
						<div class="swiper-img-prev"></div>
						<div class="swiper-img-next"></div>
					</div>
					<!-- 如果需要导航按钮 -->
					<!--<div class="swiper-button-prev swiper-button-white"></div>-->
					<!--<div class="swiper-button-next swiper-button-white"></div>-->
				</div>
			</div>
			<div class="news">
				<div class="newsTitleBg">
					<p class="newsTitle">最新消息</p>
					<p class="issueNews">查看更多>></p>
				</div>
				<div class="newsList">
					<div v-for="(item,index) in newsList" :key="index">
						<div>
							<img src="../assets/img/duobianxing.png" alt="">
							<p>【涨价公告】10/16起，朝日锅具将调整价格</p>
						</div>
						<p>2018-10-08</p>
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
	import Swiper1 from 'swiper';
	import Swiper2 from 'swiper';
	import Swiper3 from 'swiper';
	import Bottom from '../components/bottom'
	import RightNav from '../components/rightNav'
	export default {
		// name: 'Main',
		components: {
			Bottom,
			RightNav
		},
		data() {
			return {
				searchText: '',
				msg: '这是主页',
				currentTab: 1,
				isActive: false,
				topBg: 'top-bg',
				chooseLogin: 'chooseLogin',
				topNav: 'topNavBg',
				windowBg: 'background-color: #FFFFFF',
				nav: 'nav',
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
				newsList: ['', '', '', '', ''],
				mediaList: ['', '', '', '', ''],
				showModal: false,
				showstartdrop: false,
				showAboutdrop: false,
				showUsermodal: false
			}
		},
		methods: {
			showUserModal() {
				this.showUsermodal = true;
				this.showModal = false;
				this.showstartdrop = false;
				this.showAboutdrop = false;
				this.windowBg = 'background-color: #eeeeee';
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
			goMyOrder(){
				this.$router.push({
					name: 'MyOrder',
					params: {}
				})
			},
			goCart() {
				
			},
			clearDropdown() {
				this.showstartdrop = false;
				this.showModal = false;
				this.showAboutdrop = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #FFFFFF';
			},
			enterPerson() {
				this.showModal = true;
				this.showstartdrop = false;
				this.showAboutdrop = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #eeeeee';
			},
			enterStart() {
				this.showstartdrop = true;
				this.showAboutdrop = false;
				this.showModal = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #eeeeee';
			},
			enterAbout() {
				this.showstartdrop = false;
				this.showAboutdrop = true;
				this.showModal = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #eeeeee'
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
				} else {
					this.topBg = 'top-bg';
					this.topNav = 'topNavBg';
					this.chooseLogin = 'chooseLogin';
					this.nav = 'nav';
				}
			},
			seeMore() {
				this.$router.push({
					name: 'Seemore',
					params: {
						id: '110',
						name: 'tom'
					}
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
			new Swiper1('#swiper-container', {
				autoplay: false,
				speed: 300,
				// autoplayDisableOnInteraction:true,
				loopAdditionalSlides: 1,
				paginationClickable: true,
				touchReleaseOnEdges: true,
				loop: true,
				// 如果需要分页器
				// pagination: '.swiper-pagination',
				// paginationHide:true,
				// grabCursor:true,
				paginationVisibleClass: 'my-visible-switch',
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-color',
				prevButton: '.swiper-button-color1',
				// 如果需要滚动条
				// scrollbar: '.swiper-scrollbar',
			})
			new Swiper2('.swiper-container2', {
				autoplay: false,
				speed: 300,
				// autoplayDisableOnInteraction:true,
				loopAdditionalSlides: 1,
				paginationClickable: true,
				touchReleaseOnEdges: true,
				loop: true,
				// 如果需要分页器
				// pagination: '.swiper-pagination',
				// paginationHide:true,
				// grabCursor:true,
				// paginationVisibleClass:'my-visible-switch',
				// 如果需要前进后退按钮
				nextButton: '.swiper-img-next',
				prevButton: '.swiper-img-prev',
				// 如果需要滚动条
				// scrollbar: '.swiper-scrollbar',
			})
			new Swiper3('.swiper-container3', {
				autoplay: false,
				speed: 300,
				// autoplayDisableOnInteraction:true,
				loopAdditionalSlides: 1,
				paginationClickable: true,
				touchReleaseOnEdges: true,
				loop: true,
				// 如果需要分页器
				// pagination: '.swiper-pagination',
				// paginationHide:true,
				// grabCursor:true,
				// paginationVisibleClass:'my-visible-switch',
				// 如果需要前进后退按钮
				// nextButton: '.swiper-img-next',
				// prevButton: '.swiper-img-prev',
				// 如果需要滚动条
				// scrollbar: '.swiper-scrollbar',
			})
		},
		created() {

		}
	}
</script>
<style>
	.goShopping {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 3.4rem;
		width: 100%;
	}

	.hlgBg {
		width: 32%;
		height: 11.5rem;
		position: relative;
		cursor: pointer;
	}

	.hlgBg img {
		width: 100%;
		height: 100%;
	}

	.hlgBg p {
		font-size: 1rem;
		color: #333;
		position: absolute;
		bottom: 0;
		background-color: rgba(51, 51, 51, .1);
		width: 96%;
		padding: 0.2rem 2%;
	}

	.goShoppBg {
		width: 32%;
		height: 11.5rem;
		background-color: #852833;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.goShoppBg p {
		font-size: 1.875rem;
		color: #ffffff;
		margin-right: 1rem;
	}

	.recommendCh {
		font-size: 1.875rem;
		color: #333;
		margin-top: 2.375rem;
	}

	.recommendEh {
		font-size: 1.25rem;
		color: #666;
		margin-top: 0.625rem;
		margin-bottom: 2.5rem;
	}

	.recommendConent {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.recommendConent>div {
		width: 23.5%;
		/*height: 15.875rem;*/
		background-color: #f3ebe4;
		min-height: 27rem;
		position: relative;
		cursor: pointer;
	}

	.recommendConent>div>img {
		width: 100%;
	}

	.recommendConent>div>div {
		width: 92%;
		padding: 0 4%;
	}

	.recommendConent>div>div>p.title {
		margin-top: 1.25rem;
		font-size: 1rem;
		color: #5a5a57;
	}

	.recommendConent>div>div>p.cuisineConent {
		margin-top: 1.875rem;
		font-size: 0.875rem;
		color: #a6a09b;
	}

	.recommendConent>div>div>p.issue {
		margin-top: 1.75rem;
		margin-bottom: 0.875rem;
		font-size: 0.875rem;
		color: #a6a09b;
		position: absolute;
		bottom: 1rem;
		cursor: pointer;
	}

	.menu {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.menu>div {
		width: 23.5%;
		/*height: 15.875rem;*/
		background-color: #fff;
		min-height: 24rem;
		position: relative;
		border-radius: 0.5rem;
		box-shadow: inset -0.7rem -0.7rem 0.5rem #eee;
		cursor: pointer;
	}

	.menu>div>img {
		width: 100%;
		border-radius: 0.5rem;
	}

	.menu>div>div {
		width: 92%;
		padding: 1rem 4%;
	}

	.menu>div>div>p.title {
		margin-top: 1.25rem;
		font-size: 1rem;
		color: #5a5a57;
	}

	.menu>div>div>p.cuisineConent {
		margin-top: 1.875rem;
		font-size: 0.875rem;
		color: #a6a09b;
	}

	.discounts {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 3.875rem;
	}

	.discounts img {
		width: 49%;
	}

	p.aboutCh {
		margin-top: 2.5rem;
		font-size: 1.875rem;
		color: #333;
	}

	p.aboutEh {
		margin-bottom: 1.875rem;
		font-size: 1.5rem;
		color: #666;
	}

	div.aboutConent {
		width: 100%;
		box-shadow: inset -0.7rem -0.7rem 0.5rem #eee;
		padding: 0.5rem 0;
	}

	div.aboutConent>img {
		width: 100%;
	}

	div.aboutConent>p.aboutDetail {
		color: #666;
		font-size: 0.875rem;
		margin: 0.5rem 0;
	}

	div.aboutConent>p.issueAbout {
		color: #df4557;
		font-size: 1rem;
		text-align: right;
		cursor: pointer;
	}

	p.recipesCh {
		margin-top: 4.375rem;
		font-size: 1.875rem;
		color: #333;
	}

	p.recipesEh {
		margin-bottom: 2rem;
		font-size: 1.5rem;
		color: #666;
	}

	.useCh {
		margin-top: 1.875rem;
		font-size: 1.875rem;
		color: #333;
	}

	.useEh {
		margin-bottom: 2.5rem;
		font-size: 1.5rem;
		color: #666;
	}

	.useConent {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		cursor: pointer;
	}

	.useConent>div.useList {
		width: 15%;
		position: relative;
		cursor: pointer;
	}

	.useConent>div.useList>img {
		width: 100%;
	}

	.useConent>div.useList>div {
		padding: 1rem 4%;
		width: 92%;
		background-color: rgba(235, 235, 235, .5);
		position: absolute;
		bottom: 0;
		min-height: 8rem;
	}

	.useConent>div.useList>div>p.useTitle {
		font-size: 1.125rem;
		color: #333;
		margin-bottom: 1rem;
	}

	.useConent>div.useList>div>p.useListConent {
		font-size: 0.75rem;
		color: #333;
	}

	.mediaBg {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 4.375rem 0;
	}

	.media {
		width: 49%;
	}

	.media-nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: absolute;
		width: 90%;
		bottom: 1rem;
		z-index: 10;
	}

	.media>div.swiper-container2>div.swiper-wrapper>div.swiper-slide {
		cursor: pointer;
		position: relative;
	}

	.media>div.swiper-container2>div.swiper-wrapper>div.swiper-slide>div>div {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 96%;
		padding: 1.125rem 2%;
		background-color: #f8f8f8;
	}

	.media>div.swiper-container2>div.swiper-wrapper>div.swiper-slide>div>div>img {
		width: 100%;
	}

	.media>p {
		font-size: 1.875rem;
		color: #333;
		margin-left: 2rem;
		margin-bottom: 2.625rem;
	}

	div.mediaBottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 75%;
	}

	.mediaTitle {
		font-size: 0.875rem;
		color: #666;
	}

	.mediaConent {
		font-size: 0.875rem;
		color: #999;
		margin-top: 1rem;
	}

	.news {
		width: 49%;
	}

	.news>div.newsTitleBg {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 2.625rem;
		align-items: center;
	}

	.news>div>p.newsTitle {
		font-size: 1.875rem;
		color: #333;
		cursor: pointer;
	}

	.news>div>p.issueNews {
		font-size: 1rem;
		color: #e50012;
		cursor: pointer;
	}

	.newsList {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.newsList>div {
		width: 96%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #ffffff;
		box-shadow: 0 0.5rem 0 0.1rem #ececec;
		padding: 0.5rem 2%;
		cursor: pointer;
		margin-bottom: 2.75rem;
	}

	.newsList>div>div {
		display: flex;
		flex-direction: row;
	}
</style>
<style scoped>
	/*@import'../assets/css/swiper.min.css';*/
</style>
