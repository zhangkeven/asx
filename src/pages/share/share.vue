<template>
	<div class="main">
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<Header v-on:listenChildEvent="searchInput" ref="data"/>
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
		<div class="share-conent" @mouseenter="clearDropDown()">
			<div class="left-nav">
				<div class="nav-title">
					<p>产品分类</p>
				</div>
				<div class="nav-conent">
					<div v-bind:class="[{activeType:activeType==index}]" v-for="(item,index) in list" :key="index" @click="chooseProductType(index)">
						<p>零秒活力锅</p>
					</div>
				</div>
			</div>
			<div class="right-list">
				<div v-bind:class="[{reverse:index%2==1},'']" v-for="(item,index) in list" :key="index">
					<div>
						<div>
							<img src="../../assets/img/girl.png" alt="">
						</div>
						<p>霜绝</p>
					</div>
					<div>
						<p>美味食材，精彩不断</p>
						<p>
							朝日锅具让我美梦成真，女儿和媳妇是上班族兼外食族，对他们能下厨的事，也不抱希望了。在偶然的机会下她们拥有了朝日锅具，哇！奇迹出现了，零秒活力锅的超快速烹煮以及全能平底锅的多样性烹调方式，竟然让他们常常研究食谱煮美食并乐在其中。
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-page" @mouseenter="clearDropDown()">
			<div class="page-count">
				<p @click="prevPage">上一页</p>
				<div>
					<p @click="choosePage" :data-id="index" v-bind:class="[{activePage:pageCount==index}, ' ']" v-for="(item,index) in page"
					 :key="index">{{item}}</p>
				</div>
				<p @click="nextPage">下一页</p>
			</div>
		</div>
		<div class="bottom-bg-img" @mouseenter="clearDropDown()">
			<img src="../../assets/img/kefu.png" alt="">
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
				list: ['', '', '', '', '', '', '', ''],
				activeType: 0,
				pageCount:0,
				page: [
					'1', '2', '3', '4', '5', '6'
				],
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
				console.log('子组件中触发分享页面', e); //子组件输入框触发,e代表输入框中的值
			},
			chooseProductType(index) {
				if (this.activeType == index) {

				} else {
					this.activeType = index;
				}
			},
			choosePage(e) {
				if (e.currentTarget.dataset.id == this.pageCount) {

				} else {
					this.pageCount = e.currentTarget.dataset.id
				}
			},
			prevPage() {
				if (this.pageCount > 0) {
					this.pageCount--
				}
			},
			nextPage() {
				if (this.pageCount < 5) {
					this.pageCount++
				}
			},
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

<style>
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

	div.main>div.share-conent {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: row;
		margin-top: 3.5rem;
		justify-content: space-between;
	}

	div.main>div.share-conent>div.left-nav {
		width: 19%;
		display: flex;
		flex-direction: column;
	}

	div.main>div.share-conent>div.left-nav>div.nav-title {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		background-color: #852833;
		padding: 0.9375rem 0;
		font-size: 1.5rem;
	}

	div.main>div.share-conent>div.left-nav>div.nav-conent {
		width: 100%;
		height: auto;
		padding-bottom: 30%;
		border: 0.125rem solid #d7d7d7;
		box-sizing: border-box;
	}

	div.main>div.share-conent>div.left-nav>div.nav-conent>div {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.9375rem;
		padding-bottom: 0;
		cursor: pointer;
		color: #666666;
		font-size: 1rem;
	}

	div.main>div.share-conent>div.left-nav>div.nav-conent>div:hover {
		color: #852833;
	}

	div.main>div.share-conent>div.left-nav>div.nav-conent>div.activeType {
		color: #852833;
	}

	div.main>div.share-conent>div.left-nav>div.nav-conent>div>p {
		border-bottom: 0.0625rem solid #EEEEEE;
		padding-bottom: 0.9375rem;
		width: 100%;
	}

	div.main>div.share-conent>div.right-list {
		display: flex;
		flex-direction: column;
		width: 78.5%;
		padding-top: 0.5rem;
	}

	div.main>div.share-conent>div.right-list>div {
		width: 86%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-top: 2.375rem;
		padding-bottom: 2.5rem;
		padding-left: 5.5%;
		padding-right: 8.5%;
		background-color: #fffafa;
		margin-bottom: 0.625rem;
	}

	div.main>div.share-conent>div.right-list>div>div:nth-child(1) {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 11%;
	}

	div.main>div.share-conent>div.right-list>div>div:nth-child(1)>p {
		margin-top: 0.625rem;
		color: #333333;
		font-size: 1.125rem;
	}

	div.main>div.share-conent>div.right-list>div>div:nth-child(1)>div {
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		position: relative;
	}

	div.main>div.share-conent>div.right-list>div>div:nth-child(1)>div>img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	div.main>div.share-conent>div.right-list>div>div:nth-child(2) {
		display: flex;
		flex-direction: column;
		width: 87%;
		padding-top: 1.125rem;
	}

	div.main>div.share-conent>div.right-list>div>div:nth-child(2)>p:nth-child(1) {
		margin-bottom: 1.25rem;
		color: #4c4c4c;
		font-size: 1.125rem;
	}

	div.main>div.share-conent>div.right-list>div>div:nth-child(2)>p:nth-child(2) {
		width: 100%;
		line-height: 150%;
		font-size: 0.75rem;
		color: #858484;
	}

	div.main>div.share-conent>div.right-list>div.reverse {
		flex-direction: row-reverse;
	}

	div.main>div.bottom-page {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-top: 3.5rem;
		margin-bottom: 4.375rem;
	}

	div.main>div.bottom-page>div.page-count {
		display: flex;
		flex-direction: row;
	}

	div.main>div.bottom-page>div.page-count>p {
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

	div.main>div.bottom-page>div.page-count>p:hover {
		background-color: #852833;
		color: #FFFFFF;
	}

	div.main>div.bottom-page>div.page-count>div {
		display: flex;
		flex-direction: row;
	}

	div.main>div.bottom-page>div.page-count>div>p {
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

	div.main>div.bottom-page>div.page-count>div>p:hover {
		background-color: #852833;
		color: #FFFFFF;
	}

	div.main>div.bottom-page>div.page-count>div>p.activePage {
		background-color: #852833;
		color: #FFFFFF;
	}
	div.main>div.bottom-bg-img{
		width: 100%;
		margin-bottom: 7.5rem;
	}
	div.main>div.bottom-bg-img>img{
		width: 100%;
	}
</style>
