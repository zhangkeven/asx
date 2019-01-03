<template>
	<div class="main">
		<div v-bind:class="topBg">
			<div v-bind:class="topNav" :style="windowBg">
				<div class="topLeft" @mouseenter="leavePerson()">
					<div class="topLeftTitle">
						<img src="../../assets/img/logo.png" alt="">
					</div>
				</div>
				<div v-bind:class="nav" @mouseenter="leavePerson()">
					<a href="javascript:">首页</a>
					<a href="javascript:">明星产品</a>
					<a href="javascript:" @click="goCoreyroom()">料理教室</a>
					<a href="javascript:" @click="goshare()">使用者分享</a>
					<a href="javascript:" @click="goAbout()">关于我们</a>
					<p href="javascript:">我要购买</p>
				</div>
				<div class="navRight">
					<div class="searchBg">
						<input type="text" @input="search" ref="inputVal" @keyup.enter="submit()" @mouseenter="leavePerson()">
						<img src="../../assets/img/search.png" alt="">
					</div>
					<img src="../../assets/img/person.png" alt="" @mouseenter="enterPerson()">
					<img src="../../assets/img/cart.png" alt="" @mouseenter="leavePerson()">
				</div>
			</div>
			<div v-bind:class="chooseLogin" v-show="showModal">
				<div>
					<p @click="goLogin()">登录</p>
					<p @click="goRegister()">注册</p>
				</div>
			</div>
		</div>
		<!--<div class="banner">-->
		<!--<img class="bannerImg" src="../../assets/img/banner.png" alt="">-->
		<!--</div>-->
		<div class="swiper-container" style="width: 100%" @mouseenter="leavePerson()">
			<div class="swiper-wrapper">
				<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../../assets/img/banner.png" alt=""></a></div>-->
				<div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
					<img class="bannerImg" src="../../assets/img/banner.png" alt="">
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>

			<!-- 如果需要导航按钮 -->
			<!--<div class="swiper-button-prev swiper-button-white"></div>-->
			<!--<div class="swiper-button-next swiper-button-white"></div>-->
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import Bottom from '../../components/bottom'
	export default {
		components: {
			Bottom
		},
		data() {
			return {
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
				showModal: false
			};
		},
		methods: {
			enterPerson() {
				this.showModal = true;
				this.windowBg = 'background-color: #eeeeee';
			},
			leavePerson() {
				this.showModal = false;
				this.windowBg = 'background-color: #FFFFFF';
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

</style>
