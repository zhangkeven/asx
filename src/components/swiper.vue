<template>
	<div class="swiper-main">
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
</template>

<script>
	import Swiper from 'swiper'
	export default {
		data() {
			return {
				imgs:[]
			};
		},
		props: {
			bannerList: Array,
		},
		mounted() {
			if(this.bannerList.length>0){
				this.imgs = this.bannerList;
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
					observeSlideChildren:true,
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

	.swiper-mypagination{
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
