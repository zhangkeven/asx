<template>
	<div class="main">
		<Header />
		<div class="swiper-container" style="width: 100%;margin-top: 4.375rem">
			<div class="swiper-wrapper">
				<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
				<div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
					<img class="recommendBannerImg" src="../../assets/img/banner1.png" alt="">
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>

			<!-- 如果需要导航按钮 -->
			<!--<div class="swiper-button-prev swiper-button-white"></div>-->
			<!--<div class="swiper-button-next swiper-button-white"></div>-->
		</div>
		<div class="recommend-conent-bg">
			<div class="recommend-nav">
				<p>新手必学</p>
				<p>健康食谱</p>
				<p>料理达人</p>
				<p>萝洁塔</p>
				<p>涛妈</p>
				<p>营养师</p>
				<p>更多>></p>
			</div>
			<div class="recommend-conent">
				<div class="greens" v-for="(item,index) in greensList" :kye="index" @click="gorecommendDertail">
					<div>
						<div>
							<img :src="item.imgurl" alt="">
						</div>
						<div>
							<p>
								{{item.title}}
							</p>
							<p>
								{{item.conent}}
							</p>
						</div>
					</div>
					<div>
						<p>查看更多 >></p>
					</div>
				</div>
				<div class="bottom-page">
					<div class="page-count">
						<p @click="prevPage">上一页</p>
						<div>
							<p @click="choosePage" :data-id="index" v-bind:class="[{activePage:pageCount==index}, ' ']" v-for="(item,index) in page"
							 :key="index">{{item}}</p>
						</div>
						<p @click="nextPage">下一页</p>
					</div>
				</div>
			</div>
		</div>
		<Bottom />
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Bottom from '../../components/bottom'
	import global from '../../assets/Global/global.js'
	export default {
		name: "recommend",
		components: {
			Header,
			Bottom
		},
		data() {
			return {
				pageCount: 0,
				page: [
					'1', '2', '3', '4', '5', '6'
				],
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
				greensList: [{
						imgurl: 'http://www.zhang-yan.top/static/img/hdy.1a2f054.png',
						title: '黄豆芽排骨汤',
						conent: '「过于忙碌、压力过大的上班族常常外食，而导致摄取不够多的高纤食物，造成身体中的负担太多...」赵函颖营养师说。体内的负担过多可是健康的一大隐忧喔！ 美国心血管协会建议我们每天要多吃一些高纤的食材， 可是我们现在很多人都吃不够...研究证实， 这些人容易得到癌症的机率比一般人高出3 % ~5 % 喔！营养师：「 高纤的食材通常口感都偏硬， 较难入口， 所以我都使用零秒活力锅来烹煮这些食材， 只要零秒就能将高纤的食材瞬间炖煮软烂， 所以不管是老人或小孩都可以很好入口， 完整的把这些高纤维的营养食......'
					},
					{
						imgurl: 'http://www.zhang-yan.top/static/img/hdy.1a2f054.png',
						title: '黄豆芽排骨汤',
						conent: '「过于忙碌、压力过大的上班族常常外食，而导致摄取不够多的高纤食物，造成身体中的负担太多...」赵函颖营养师说。体内的负担过多可是健康的一大隐忧喔！ 美国心血管协会建议我们每天要多吃一些高纤的食材， 可是我们现在很多人都吃不够...研究证实， 这些人容易得到癌症的机率比一般人高出3 % ~5 % 喔！营养师：「 高纤的食材通常口感都偏硬， 较难入口， 所以我都使用零秒活力锅来烹煮这些食材， 只要零秒就能将高纤的食材瞬间炖煮软烂， 所以不管是老人或小孩都可以很好入口， 完整的把这些高纤维的营养食......'
					},
					{
						imgurl: 'http://www.zhang-yan.top/static/img/hdy.1a2f054.png',
						title: '黄豆芽排骨汤',
						conent: '「过于忙碌、压力过大的上班族常常外食，而导致摄取不够多的高纤食物，造成身体中的负担太多...」赵函颖营养师说。体内的负担过多可是健康的一大隐忧喔！ 美国心血管协会建议我们每天要多吃一些高纤的食材， 可是我们现在很多人都吃不够...研究证实， 这些人容易得到癌症的机率比一般人高出3 % ~5 % 喔！营养师：「 高纤的食材通常口感都偏硬， 较难入口， 所以我都使用零秒活力锅来烹煮这些食材， 只要零秒就能将高纤的食材瞬间炖煮软烂， 所以不管是老人或小孩都可以很好入口， 完整的把这些高纤维的营养食......'
					},
					{
						imgurl: 'http://www.zhang-yan.top/static/img/hdy.1a2f054.png',
						title: '黄豆芽排骨汤',
						conent: '「过于忙碌、压力过大的上班族常常外食，而导致摄取不够多的高纤食物，造成身体中的负担太多...」赵函颖营养师说。体内的负担过多可是健康的一大隐忧喔！ 美国心血管协会建议我们每天要多吃一些高纤的食材， 可是我们现在很多人都吃不够...研究证实， 这些人容易得到癌症的机率比一般人高出3 % ~5 % 喔！营养师：「 高纤的食材通常口感都偏硬， 较难入口， 所以我都使用零秒活力锅来烹煮这些食材， 只要零秒就能将高纤的食材瞬间炖煮软烂， 所以不管是老人或小孩都可以很好入口， 完整的把这些高纤维的营养食......'
					}
				],
			}
		},
		methods: {
			choosePage(e) {
				if (e.currentTarget.dataset.id == this.pageCount) {

				} else {
					this.pageCount = e.currentTarget.dataset.id
				}
			},
			prevPage(){
				if(this.pageCount>0){
					this.pageCount--
				}
			},
			nextPage(){
				if(this.pageCount<5){
					this.pageCount++
				}
			},
			gorecommendDertail(){
				this.$router.push({name:'RecommendDetail',params:{}})
			},
			setTitle(){
				global.title="推荐专栏";
			}
		},
		created(){
			global.title="推荐专栏";
			console.log(global.title);
		},
		mounted() {
			// window.addEventListener('scroll', this.handleScroll);
			//初始化swiper
			global.title="推荐专栏";
			console.log(global.title);
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

<style scoped>
	.recommendBannerImg {
		width: 100%;
		/*height: 100%;*/
		cursor: pointer;
	}
	.mask{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0);
		position: absolute;
		left: 0;
		bottom: 0;
		transition: background-color linear .5s;
	}
	.mask:hover{
		background-color: rgba(0,0,0,.1);
	}
	div.main>div.recommend-conent-bg {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: column;
		flex-direction: column;
		position: relative;
		margin-top: 3.125rem;
		margin-bottom: 12.5rem;
	}

	div.main>div.recommend-conent-bg>div.recommend-nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 3.125rem;
		border-bottom:0.0625rem solid #EEEEEE ;
		padding-bottom: 1rem;
	}

	div.main>div.recommend-conent-bg>div.recommend-nav>p {
		font-size: 1.125rem;
		color: #666666;
		cursor: pointer;
	}

	div.main>div.recommend-conent-bg>div.recommend-nav>p:last-child {
		color: #999999;
		cursor: pointer;
	}

	div.main>div.recommend-conent-bg>div.recommend-nav>p:hover {
		color: #852833;
		cursor: pointer;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.greens {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-bottom: 1rem;
		box-shadow: 0.3125rem 0.3125rem 0.3125rem #eee, 0.3125rem -0.3125rem 0.3125rem #eee, -0.3125rem 0.3125rem 0.3125rem #eee, -0.3125rem -0.3125rem 0.3125rem #eee;
		border-radius: 1rem;
		cursor: pointer;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.greens>div:nth-child(1) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 96%;
		padding-left: 2%;
		padding-right: 2%;
		padding-top: 2.5rem;
		padding-bottom: 1.875rem;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.greens>div:nth-child(1)>div:nth-child(1) {

		width: 30%;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.greens>div:nth-child(1)>div:nth-child(1)>img {
		width: 100%;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.greens>div:nth-child(1)>div:nth-child(2) {
		width: 67%;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.greens>div:nth-child(1)>div:nth-child(2)>p:nth-child(1) {
		color: #5a5a57;
		font-size: 1.5rem;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.greens>div:nth-child(1)>div:nth-child(2)>p:nth-child(2) {
		color: #a6a09b;
		font-size: 1rem;
		line-height: 180%;
		margin-top: 1.25rem;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.greens>div:nth-child(2) {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		width: 98%;
		padding-right: 2%;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.greens>div:nth-child(2)>p {
		color: #fff;
		text-align: right;
		width: 7.75rem;
		height: 2.5rem;
		background-color: #852833;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.5rem;
		cursor: pointer;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.bottom-page {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-top: 2.5rem;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.bottom-page>div.page-count {
		display: flex;
		flex-direction: row;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.bottom-page>div.page-count>p {
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

	div.main>div.recommend-conent-bg>div.recommend-conent>div.bottom-page>div.page-count>p:hover {
		background-color: #852833;
		color: #FFFFFF;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.bottom-page>div.page-count>div {
		display: flex;
		flex-direction: row;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.bottom-page>div.page-count>div>p {
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

	div.main>div.recommend-conent-bg>div.recommend-conent>div.bottom-page>div.page-count>div>p:hover {
		background-color: #852833;
		color: #FFFFFF;
	}

	div.main>div.recommend-conent-bg>div.recommend-conent>div.bottom-page>div.page-count>div>p.activePage {
		background-color: #852833;
		color: #FFFFFF;
	}
</style>
