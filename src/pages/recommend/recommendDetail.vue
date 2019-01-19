<template>
	<div class="main">
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<Header v-on:listenChildEvent="searchInput" ref="data"/>
		<div class="swiper-container" style="width: 100%;margin-top: 4.375rem" @mouseenter="clearDropDown()">
			<div class="swiper-wrapper">
				<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
				<div class="swiper-slide" v-for="(item,index) in imgs" :key="'swiper-slide-'+index">
					<img class="recommendDetailBannerImg" src="../../assets/img/banner1.png" alt="">
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>

			<!-- 如果需要导航按钮 -->
			<!--<div class="swiper-button-prev swiper-button-white"></div>-->
			<!--<div class="swiper-button-next swiper-button-white"></div>-->
		</div>
		<div class="recommendBg" @mouseenter="clearDropDown()">
			<div class="recommendNav">
				<p>新手必学</p>
				<p>健康食谱</p>
				<p>料理达人</p>
				<p>萝洁塔</p>
				<p>涛妈</p>
				<p>营养师</p>
				<p>更多>></p>
			</div>
			<div>
				<div class="top-perosn">
					<p class="detail-title">
						营养师：「高压锅的高温高压烹煮，让高纤食材更好入口。」
					</p>
					<p class="detail-date">
						2018-09-10
					</p>
					<p class="detail-conent">
						「过于忙碌、压力过大的上班族常常外食，而导致摄取不够多的高纤食物，造成身体中的负担太多...」赵函颖营养师说。
						体内的负担过多可是健康的一大隐忧喔！美国心血管协会建议我们每天要多吃一些高纤的食材，可是我们现在很多人都吃不够...研究证实，这些人容易得到癌症的机率比一般人高出3%~5%喔！
						营养师：「高纤的食材通常口感都偏硬，较难入口，所以我都使用零秒活力锅来烹煮这些食材，只要零秒就能将高纤的食材瞬间炖煮软烂，所以不管是老人或小孩都可以很好入口，完整的把这些高纤维的营养食材通通吃下肚，吸收满满的营养喔！」
					</p>
					<img src="../../assets/img/ZK_01spacial4.png" alt="">
					<p class="detail-conent1">
						一般高纤的食材由于纤维较粗较难烹煮，所以煮到松软可口的时候，烹煮时间已经过了很久很久了...烹煮时间越久，汤品产生的普林就越高...因此使用活力锅烹煮除了降低烹煮时间能让营养不流失以外，还能减少嘌呤的产生，让您的料理吃来不仅美味还更营养！
					</p>
				</div>
				<div class="greensBg" v-for="(item,index) in greensList" :key="'greensBg-'+index">
					<p class="greens-title">{{item.title}}</p>
					<img :src="item.imgurl" alt="">
					<p class="greens-conent">{{item.conent}}</p>
				</div>
				<div class="greens-question" v-for="(item,index) in questionList" :key="index">
					<p class="greens-question-title">{{item.title}}</p>
					<img :src="item.imgUrl=='' || item.imgUrl==null?'':item.imgUrl" alt="" v-if="item.imgUrl!='' && item.imgUrl!=null">
					<p class="greens-question-conent">{{item.conent}}</p>
				</div>
			</div>
		</div>
		<div class="recommend-page" @mouseenter="clearDropDown()">
			<p>上一篇</p>
			<p>下一篇</p>
		</div>
		<div class="bottom-recommend" @mouseenter="clearDropDown()">
			<p class="recommend-ch">
				推荐专栏
			</p>
			<p class="recipes-eh">
				Expert tips
			</p>
			<div class="bottom-list">
				<div class="greens">
					<div>
						<div>
							<img src="http://www.zhang-yan.top/static/img/hdy.1a2f054.png" alt="">
						</div>
						<div>
							<p>
								黄豆芽排骨汤
							</p>
							<p>
								「过于忙碌、压力过大的上班族常常外食，而导致摄取不够多的高纤食物，造成身体中的负担太多...」赵函颖营养师说。体内的负担过多可是健康的一大隐忧喔！ 美国心血管协会建议我们每天要多吃一些高纤的食材，
								可是我们现在很多人都吃不够...研究证实， 这些人容易得到癌症的机率比一般人高出3 % ~5 % 喔！营养师：「 高纤的食材通常口感都偏硬， 较难入口， 所以我都使用零秒活力锅来烹煮这些食材，
								只要零秒就能将高纤的食材瞬间炖煮软烂， 所以不管是老人或小孩都可以很好入口， 完整的把这些高纤维的营养食......
							</p>
						</div>
					</div>
					<div>
						<p>查看更多 >></p>
					</div>
				</div>
				<div class="greens">
					<div>
						<div>
							<img src="http://www.zhang-yan.top/static/img/hdy.1a2f054.png" alt="">
						</div>
						<div>
							<p>
								黄豆芽排骨汤
							</p>
							<p>
								「过于忙碌、压力过大的上班族常常外食，而导致摄取不够多的高纤食物，造成身体中的负担太多...」赵函颖营养师说。体内的负担过多可是健康的一大隐忧喔！ 美国心血管协会建议我们每天要多吃一些高纤的食材，
								可是我们现在很多人都吃不够...研究证实， 这些人容易得到癌症的机率比一般人高出3 % ~5 % 喔！营养师：「 高纤的食材通常口感都偏硬， 较难入口， 所以我都使用零秒活力锅来烹煮这些食材，
								只要零秒就能将高纤的食材瞬间炖煮软烂， 所以不管是老人或小孩都可以很好入口， 完整的把这些高纤维的营养食......
							</p>
						</div>
					</div>
					<div>
						<p>查看更多 >></p>
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
  import Service from '../../assets/service/service.js'
  export default {
		name: "recommend",
		components: {
			Header,
			Bottom,
			RightNav
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
				questionList: [{
						title: 'Ｑ：用零秒活力锅因为高温高压的烹煮方式让您觉得？',
						imgUrl: '',
						conent: 'Ａ：以前为了让一家老人、小孩阿都能比较好食用，妈妈都会花很多的烹煮时间将食材煮的软烂可口，但是烹煮的时间越长，汤内的嘌呤就会越高喔，有痛风等等疾病的人都要很小心呢！使用零秒活力锅能在「0秒」就能将这些粗纤维的食材煮的软烂可口，一家老小都能很安心的食用，这样才能摄取到足够的纤维，肠道好顺畅，身体好轻盈，进而让免疫力也跟着提升，身体更健康。'
					},
					{
						title: 'Ｑ：用零秒活力锅因为高温高压的烹煮方式让您觉得？',
						imgUrl: 'http://www.zhang-yan.top/static/img/hdy.1a2f054.png',
						conent: 'Ａ：以前为了让一家老人、小孩阿都能比较好食用，妈妈都会花很多的烹煮时间将食材煮的软烂可口，但是烹煮的时间越长，汤内的嘌呤就会越高喔，有痛风等等疾病的人都要很小心呢！使用零秒活力锅能在「0秒」就能将这些粗纤维的食材煮的软烂可口，一家老小都能很安心的食用，这样才能摄取到足够的纤维，肠道好顺畅，身体好轻盈，进而让免疫力也跟着提升，身体更健康。'
					},
				]
			}
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
				console.log('子组件中触发推荐专栏详情页面', e); //子组件输入框触发,e代表输入框中的值
			},
		},
		mounted() {
			// window.addEventListener('scroll', this.handleScroll);
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
	.recommendDetailBannerImg {
		width: 100%;
		/*height: 100%;*/
		cursor: pointer;
	}

	div.main>div.recommendBg {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: column;
		position: relative;
		margin-top: 3.125rem;
		align-items: center;
	}

	div.main>div.recommendBg>div:nth-child(2) {
		border: 0.0625rem solid #EEEEEE;
		width: 92%;
		padding: 2.125rem 4%;
	}

	div.main>div.recommendBg>div.recommendNav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
	}

	div.main>div.recommendBg>div.recommendNav>p {
		font-size: 1.125rem;
		color: #666666;
		cursor: pointer;
	}

	div.main>div.recommendBg>div.recommendNav>p:last-child {
		color: #999999;
		cursor: pointer;
	}

	div.main>div.recommendBg>div.recommendNav>p:hover {
		color: #852833;
		cursor: pointer;
	}

	div.main>div.recommendBg>div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	div.main>div.recommendBg>div>div.top-perosn {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	div.main>div.recommendBg>div>div.top-perosn>p.detail-title {
		font-size: 1.875rem;
		color: #333333;
	}

	div.main>div.recommendBg>div>div.top-perosn>p.detail-date {
		color: #666;
		font-size: 1.125rem;
		margin-top: 1.25rem;
		margin-bottom: 1.875rem;
	}

	div.main>div.recommendBg>div>div.top-perosn>p.detail-conent {
		color: #666666;
		font-size: 1rem;
		line-height: 200%;
		width: 100%;
		margin-bottom: 1.375rem;
	}

	div.main>div.recommendBg>div>div.top-perosn>img {
		width: 63%;
		margin-bottom: 1.875rem;
	}

	div.main>div.recommendBg>div>div.top-perosn>p.detail-conent1 {
		color: #666666;
		font-size: 1rem;
		line-height: 200%;
		width: 100%;
		margin-bottom: 2.375rem;
	}

	div.main>div.recommendBg>div>div.greensBg {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1.875rem;
	}

	div.main>div.recommendBg>div>div.greensBg>p.greens-title {
		font-size: 1.875rem;
		color: #333333;
		margin-bottom: 1.875rem;
	}

	div.main>div.recommendBg>div>div.greensBg>img {
		width: 63%;
		margin-bottom: 1.875rem;
	}

	div.main>div.recommendBg>div>div.greensBg>p.greens-conent {
		font-size: 1rem;
		color: #666666;
		line-height: 200%;
		width: 100%;
	}

	div.main>div.recommendBg>div>div.greens-question {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div.main>div.recommendBg>div>div.greens-question>p.greens-question-title {
		font-size: 1.875rem;
		color: #333333;
		width: 100%;
	}

	div.main>div.recommendBg>div>div.greens-question>img {
		width: 63%;
		margin: 1.875rem 0;
	}

	div.main>div.recommendBg>div>div.greens-question>p.greens-question-conent {
		font-size: 1rem;
		color: #666666;
		width: 100%;
		line-height: 200%;
		margin: 2.375rem 0;
	}

	div.main>div.recommend-page {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	div.main>div.recommend-page>p {
		color: #666666;
		font-size: 0.875rem;
		padding: 1.25rem 0;
		margin-left: 1.25rem;
		cursor: pointer;
	}

	div.main>div.bottom-recommend {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: column;
	}

	div.main>div.bottom-recommend>p.recommend-ch {
		font-size: 1.875rem;
		color: #333333;
	}

	div.main>div.bottom-recommend>p.recipes-eh {
		font-size: 1.5rem;
		color: #666666;
	}
	div.main>div.bottom-recommend>div.bottom-list{
		margin-top: 1.875rem;
		margin-bottom: 6.25rem;
	}
	div.main>div.bottom-recommend>div.bottom-list>div.greens {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-bottom: 1rem;
		box-shadow: 0.3125rem 0.3125rem 0.3125rem #eee, 0.3125rem -0.3125rem 0.3125rem #eee, -0.3125rem 0.3125rem 0.3125rem #eee, -0.3125rem -0.3125rem 0.3125rem #eee;
		border-radius: 1rem;
		cursor: pointer;

	}
	div.main>div.bottom-recommend>div.bottom-list>div.greens>div:nth-child(1) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 96%;
		padding-left: 2%;
		padding-right: 2%;
		padding-top: 2.5rem;
		padding-bottom: 1.875rem;
	}
	div.main>div.bottom-recommend>div.bottom-list>div.greens>div:nth-child(1)>div:nth-child(1) {
		width: 30%;
	}
	div.main>div.bottom-recommend>div.bottom-list>div.greens>div:nth-child(1)>div:nth-child(1)>img {
		width: 100%;
	}
	div.main>div.bottom-recommend>div.bottom-list>div.greens>div:nth-child(1)>div:nth-child(2) {
		width: 67%;
	}
	div.main>div.bottom-recommend>div.bottom-list>div.greens>div:nth-child(1)>div:nth-child(2)>p:nth-child(1) {
		color: #5a5a57;
		font-size: 1.5rem;
	}
	div.main>div.bottom-recommend>div.bottom-list>div.greens>div:nth-child(1)>div:nth-child(2)>p:nth-child(2) {
		color: #a6a09b;
		font-size: 1rem;
		line-height: 180%;
		margin-top: 1.25rem;
	}
	div.main>div.bottom-recommend>div.bottom-list>div.greens>div:nth-child(2) {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		width: 98%;
		padding-right: 2%;
	}
	div.main>div.bottom-recommend>div.bottom-list>div.greens>div:nth-child(2)>p {
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
</style>
