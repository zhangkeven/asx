<template>
	<div class="main">
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="swiper-main" @mouseenter="clearDropDown()">
			<div class="swiper-mycontainer">
				<div class="swiper-wrapper">
					<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
					<div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
						<img class="swiperImg" :src="item.imgUrl?item.imgUrl:''" alt="">
					</div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-mypagination"></div>

				<!-- 如果需要导航按钮 -->
				<!--<div class="swiper-button-prev swiper-button-white"></div>-->
				<!--<div class="swiper-button-next swiper-button-white"></div>-->
			</div>
		</div>
		<div class="roomdetail-conent-bg" @mouseenter="clearDropDown()">
			<div class="roomdetail-nav">
				<p>首页></p>
				<p>料理教室></p>
				<p>{{navtitle}}></p>
				<p>{{title}}</p>
			</div>
			<div class="roomdetail-conent">
				<div class="roomdetail-conent-title">
					<p>{{title}}</p>
					<p>高压0秒</p>
				</div>
				<div class="conent-particular">
					<div>
						<img src="../../assets/img/zaozifan.png" alt="">
						<div>
							<div class="around">

							</div>
							<p>食材明细</p>
						</div>
						<div>
							<p>主料</p>
							<div class="materials-bg">
								<div v-for="(item,index) in list" :key="index">
									<p>盐</p>
									<p>适量</p>
								</div>
							</div>
						</div>
						<div>
							<p>辅料</p>
							<div class="materials-bg">
								<div v-for="(item,index) in list" :key="index">
									<p>盐</p>
									<p>适量</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src="../../assets/img/haibao.png" alt="">
						<div>
							<p>最受欢迎菜系</p>
						</div>
						<div>
							<div v-bind:class="[{activeMenu:activeMenu==index},'']" v-for="(item,index) in list" :key="index"
							 @click="chooseMenu(index)">
								<p>{{item}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-background" @mouseenter="clearDropDown()">
			<Bottom />
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Bottom from '../../components/bottom'
	import RightNav from '../../components/rightNav'
	import Swiper from 'swiper'
  import Service from '../../assets/service/service.js'
  export default {
		components: {
			Header,
			Bottom,
			RightNav
		},
		data() {
			return {
				navtitle: '蔬菜',
				title: '',
				imgs: [{
						imgUrl: 'http://www.kevenzhang.com/img/banner1.png'
					},
					{
						imgUrl: 'http://www.kevenzhang.com/img/banner1.png'
					},
					{
						imgUrl: 'http://www.kevenzhang.com/img/banner1.png'
					},
					{
						imgUrl: 'http://www.kevenzhang.com/img/banner1.png'
					}
				],
				list: ['猪排骨汤饭', '猪排骨汤饭', '猪排骨汤饭', '猪排骨汤饭', '猪排骨汤饭', '猪排骨汤饭', '猪排骨汤饭'],
				activeMenu: 0,
				div:'<p>富文本</p>'
			};
		},
		methods: {
			clearDropDown(){
				this.$refs.data.showstartdrop = false;
				this.$refs.data.showModal = false;
				this.$refs.data.showAboutdrop=false;
				this.$refs.data.showUsermodal=false;
				this.$refs.data.windowBg = 'background-color: #FFFFFF';
			},
			searchInput(e) {
				console.log('子组件中触发料理教室详情页面', e); //子组件输入框触发,e代表输入框中的值
			},
			chooseMenu(index) {
				if (index== this.activeMenu) {

				} else {
					this.activeMenu = index
				}
			}
		},
		mounted() {
			if (this.$route.params.navtitle) {
				this.navtitle = this.$route.params.navtitle;
			}
			if (this.$route.params.title) {
				this.title = this.$route.params.title;
			}
			new Swiper('.swiper-mycontainer', {
				autoplay: 2500,
				speed: 300,
				autoplayDisableOnInteraction: false,
				loopAdditionalSlides: 1,
				loopedSlides: 0,
				paginationClickable: true,
				touchReleaseOnEdges: true,
				loop: true,
				observer: true, //修改图片后，自动初始化
				observeParents: true,
				// 如果需要分页器
				pagination: '.swiper-mypagination',
				// paginationHide:true,
				// grabCursor:true,
				// paginationVisibleClass:'my-visible-switch',
				// 如果需要前进后退按钮
				// nextButton: '.swiper-button-next',
				// prevButton: '.swiper-button-prev',
				// 如果需要滚动条
				// scrollbar: '.swiper-scrollbar',
			});

		},
	}
</script>

<style lang="scss" scoped>
	.swiper-main {
		width: 100%;
		margin-top: 4.375rem
	}

	.swiper-mycontainer {
		margin-left: auto;
		margin-right: auto;
		position: relative;
		overflow: hidden;
		/* Fix of Webkit flickering */
		z-index: 1;
		width: 100%;
	}

	.swiperImg {
		width: 100%;
		cursor: pointer;
	}

	.swiper-mypagination {
		position: absolute;
		text-align: center;
		-webkit-transition: 300ms;
		-moz-transition: 300ms;
		-o-transition: 300ms;
		transition: 300ms;
		-webkit-transform: translate3d(0, 0, 0);
		-ms-transform: translate3d(0, 0, 0);
		-o-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		z-index: 10;
	}

	div.main>div.roomdetail-conent-bg {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: column;
		margin-bottom: 4.5rem;
		div.roomdetail-nav {
			width: 100%;
			display: flex;
			flex-direction: row;
			border-bottom: 0.0625rem solid #EEEEEE;
			padding: 0.625rem 0;
		}

		div.roomdetail-nav>p {}

		div.roomdetail-nav>p:last-child {
			color: #852833;
		}

		div.roomdetail-conent {
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		div.roomdetail-conent>div.roomdetail-conent-title {
			width: 62%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 1.125rem 0;
		}

		div.roomdetail-conent>div.conent-particular {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(1) {
			width: 62%;
			display: flex;
			flex-direction: column;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(1)>div:nth-child(2) {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 2.25rem;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(1)>div:nth-child(2)>div.around {
			width: 0.75rem;
			height: 0.75rem;
			border-radius: 50%;
			border: 0.5rem solid #852833;
			margin-right: 0.625rem;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(1)>img {
			width: 100%;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(1)>div:nth-child(3) {
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(1)>div:nth-child(3)>div.materials-bg {
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(1)>div:nth-child(3)>div.materials-bg>div {
			width: 8%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 2rem 8.5%;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(1)>div:nth-child(4) {
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(1)>div:nth-child(4)>div.materials-bg {
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(1)>div:nth-child(4)>div.materials-bg>div {
			width: 8%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 2rem 8.5%;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(2) {
			width: 35%;
			display: flex;
			flex-direction: column;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(2)>img {
			width: 100%;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(2)>div:nth-child(2) {
			width: 100%;
			border-bottom: 0.125rem solid #EEEEEE;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(2)>div:nth-child(2)>p {
			width: 30%;
			padding: 0.625rem 0;
			color: #852833;
			border-bottom: 0.125rem solid #852833;
			font-size: 1.125rem;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(2)>div:nth-child(3) {
			margin-top: 1.25rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(2)>div:nth-child(3)>div {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border: 0.125rem solid #ebebeb;
			padding: 0.5rem 1.2rem;
			border-radius: 0.3125rem;
			margin-bottom: 1.5rem;
			margin-right: 1rem;
			color: #555555;
			font-size: 0.875rem;
			cursor: pointer;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(2)>div:nth-child(3)>div:hover {
			color: #852833;
			border: 0.125rem solid #852833;
		}

		div.roomdetail-conent>div.conent-particular>div:nth-child(2)>div:nth-child(3)>div.activeMenu {
			color: #852833;
			border: 0.125rem solid #852833;
		}
	}
</style>
