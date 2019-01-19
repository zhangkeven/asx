<template>
	<div class="main">
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<Header v-on:listenChildEvent="searchInput" ref="data" />
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
		<div id="roomMain">
			<div class="room-conent" @mouseenter="clearDropDown()">
				<div class="room-conent-title">
					<div v-bind:class="[{activeBg:activeType==0},'']" data-id="0" @click="chooseType">
						<p>零秒活力锅</p>
					</div>
					<div v-bind:class="[{activeBg:activeType==1},'']" data-id="1" @click="chooseType">
						<p>全能平底锅</p>
					</div>
				</div>
				<div class="room-nav">
					<p v-bind:class="[{activenav:activeNav==index},'']" v-for="(item,index) in greensList" :key="index" @click="chooseNav(index,item)">{{item}}</p>
				</div>
				<div class="greens-conent-bg">
					<div class="greens-conent" v-for="(item,index) in cuisineList" :key="index" @click="gocoreyroomDetail('红豆饭')">
						<div class="greens-conent-top">
							<img src="../../assets/img/rou.png" alt="">
							<img src="../../assets/img/play.png" alt="">
						</div>
						<div class="greens-conent-bottom">
							<div>
								<p>
									红豆饭
								</p>
								<p>
									高压0秒
								</p>
							</div>
							<p>
								红豆饭在日本常作为年中一些特殊场合的庆祝餐食，例如：生日、婚礼等；
								而在某些值得庆祝，或是......
							</p>
						</div>
					</div>
				</div>
				<div class="bottom-page">
					<el-pagination 
					@current-change="getPage" 
					prev-text="上一页" 
					next-text="下一页" 
					background 
					layout="prev, pager, next"
					 :total="total*10">
					</el-pagination>
					<!-- <div class="page-count">
						<p @click="greensprevPage">上一页</p>
						<div>
							<p @click="choosegreensPage" :data-id="index" v-bind:class="[{activePage:greenspageCount==index}, ' ']" v-for="(item,index) in greenspage"
							 :key="index">{{item}}</p>
						</div>
						<p @click="greensnextPage">下一页</p>
					</div> -->
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
	export default {
		components: {
			Header,
			Bottom,
			RightNav
		},
		data() {
			return {
				navTitle: '',
				total:10,
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
				greensList: [
					'蔬菜',
					'鱼类',
					'饭类',
					'汤品',
					'面食',
					'豆类',
					'蛋类'
				],
				cuisineList: [
					'', '', '', '', '', '', '', '', '', '', ''
				],
				activeType: 0,
				activeNav: 0,
				greenspageCount: 0,
				greenspage: ['1', '2', '3', '4', '5', '6']

			};
		},
		methods: {
			getPage(e) {
				console.log(e);
			},
			clearDropDown() {
				this.$refs.data.showstartdrop = false;
				this.$refs.data.showModal = false;
				this.$refs.data.showAboutdrop = false;
				this.$refs.data.showUsermodal = false;
				this.$refs.data.windowBg = 'background-color: #FFFFFF';
			},
			searchInput(e) {
				console.log('子组件中触发料理教室页面', e); //子组件输入框触发,e代表输入框中的值
			},
			chooseType(e) {
				if (e.currentTarget.dataset.id == this.activeType) {

				} else {
					this.activeType = e.currentTarget.dataset.id
				}
			},
			chooseNav(id, conent) {
				if (id == this.activeNav) {

				} else {
					this.activeNav = id
				}
				this.navTitle = conent;
			},
			choosegreensPage(e) {
				if (e.currentTarget.dataset.id == this.greenspageCount) {

				} else {
					this.greenspageCount = e.currentTarget.dataset.id
				}
			},
			greensprevPage() {
				if (this.greenspageCount > 0) {
					this.greenspageCount--
				}
			},
			greensnextPage() {
				if (this.greenspageCount < 5) {
					this.greenspageCount++
				}
			},
			gocoreyroomDetail(title) {
				this.$router.push({
					name: 'CoreyroomDetail',
					params: {
						navtitle: this.navTitle,
						title: title
					}
				})
			}
		},
		mounted() {
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
	#roomMain {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		div.room-conent {
			width: 62.5%;
			min-width: 65rem;
			display: flex;
			flex-direction: column;
			margin-top: 2.5rem;
			margin-bottom: 4.5rem;
		}

		div.room-conent>div.room-conent-title {
			width: 100%;
			display: flex;
			flex-direction: row;
			border-bottom: 0.0625rem solid #EEEEEE;
		}

		div.room-conent>div.room-conent-title>div {
			margin-right: 2.5rem;
			cursor: pointer;
			color: #666666;
		}

		div.room-conent>div.room-conent-title>div>p {
			padding-bottom: 0.3125rem;
			font-size: 1.125rem;
		}

		div.room-conent>div.room-conent-title>div:hover {
			border-bottom: 0.125rem solid #852833;
			color: #852833;
		}

		div.room-conent>div.room-conent-title>div.activeBg {
			border-bottom: 0.125rem solid #852833;
			color: #852833;
		}

		div.room-conent>div.room-nav {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom: 0.0625rem solid #EEEEEE;
			padding-top: 1.875rem;
			padding-bottom: 0.3125rem;
		}

		div.room-conent>div.room-nav>p {
			margin-right: 2.25rem;
			font-size: 1rem;
			color: #333333;
		}

		div.room-conent>div.room-nav>p:hover {
			color: #852833;
			cursor: pointer;
		}

		div.room-conent>div.room-nav>p.activenav {
			color: #852833;
		}

		div.room-conent>div.greens-conent-bg {
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			padding: 2.5rem 0;
		}

		div.room-conent>div.greens-conent-bg>div.greens-conent {
			width: 23.5%;
			display: flex;
			flex-direction: column;
			border-radius: 0.625rem;
			box-shadow: #ccc 0 0.625rem 0.625rem;
			margin-right: 1.5%;
			margin-bottom: 2.75rem;
			cursor: pointer;
		}

		div.room-conent>div.greens-conent-bg>div.greens-conent>div.greens-conent-top {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			position: relative;
			cursor: pointer;
		}

		div.room-conent>div.greens-conent-bg>div.greens-conent>div.greens-conent-top>img:nth-child(1) {
			width: 100%;
			height: auto;
			border-radius: 0.625rem;
			box-shadow: #ccc 0 0.3125rem 0.3125rem;
		}

		div.room-conent>div.greens-conent-bg>div.greens-conent>div.greens-conent-top>img:nth-child(2) {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			z-index: 1;
		}

		div.room-conent>div.greens-conent-bg>div.greens-conent>div.greens-conent-bottom {
			width: 92%;
			padding: 1.125rem 4%;
		}

		div.room-conent>div.greens-conent-bg>div.greens-conent>div.greens-conent-bottom>div {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		div.room-conent>div.greens-conent-bg>div.greens-conent>div.greens-conent-bottom>div>p:nth-child(1) {
			color: #333333;
			font-size: 1rem;
		}

		div.room-conent>div.greens-conent-bg>div.greens-conent>div.greens-conent-bottom>div>p:nth-child(2) {
			color: #FFFFFF;
			padding: 0.3125rem 0.3125rem;
			background-color: #852833;
			border-radius: 0.625rem;
			font-size: 0.75rem;
		}

		div.room-conent>div.greens-conent-bg>div.greens-conent>div.greens-conent-bottom>p {
			width: 100%;
			line-height: 200%;
			margin-top: 1.25rem;
			font-size: 0.875rem;
			color: #666666;
		}

		div.room-conent>div.bottom-page {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}

		div.room-conent>div.bottom-page>div.page-count {
			display: flex;
			flex-direction: row;
		}

		div.room-conent>div.bottom-page>div.page-count>p {
			padding: 0.625rem 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #ECECEC;
			margin-right: 0.625rem;
			font-size: 0.75rem;
			color: #333333;
			border-radius: 0.3rem;
			cursor: pointer;
		}

		div.room-conent>div.bottom-page>div.page-count>p:hover {
			background-color: #852833;
			color: #FFFFFF;
		}

		div.room-conent>div.bottom-page>div.page-count>div {
			display: flex;
			flex-direction: row;
		}

		div.room-conent>div.bottom-page>div.page-count>div>p {
			padding: 0.625rem 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #ECECEC;
			margin-right: 0.625rem;
			font-size: 0.75rem;
			color: #333333;
			border-radius: 0.3rem;
			cursor: pointer;
		}

		div.room-conent>div.bottom-page>div.page-count>div>p.activePage {
			background-color: #852833;
			color: #FFFFFF;
		}

		div.room-conent>div.bottom-page>div.page-count>div>p:hover {
			background-color: #852833;
			color: #FFFFFF;
		}
	}

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
</style>
