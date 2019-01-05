<template>
	<div class="main" style="background-color: #EEEEEE">
		<Header v-on:listenChildEvent="searchInput"></Header>
		<!-- <div class="swiper-container" style="width: 100%;margin-top: 4.375rem">
			<div class="swiper-wrapper"> -->
				<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
				<!-- <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
					<img class="aboutBannerImg" src="../../assets/img/banner1.png" alt="">
				</div>
			</div> -->
			<!-- 如果需要分页器 -->
			<!-- <div class="swiper-pagination"></div> -->
		
			<!-- 如果需要导航按钮 -->
			<!--<div class="swiper-button-prev swiper-button-white"></div>-->
			<!--<div class="swiper-button-next swiper-button-white"></div>-->
		<!-- </div> -->
		<div class="conent">
			<div class="product-main">
				<div class="my-order">
					<div class="user-icon">
						<img src="../../assets/img/avatar.png" alt="">
					</div>
					<div class="my-btn">
						<p>我的订单</p>
					</div>
					<div class="my-nav">
						<p>我的优惠卷</p>
						<p>我的收藏</p>
						<p>我的足迹</p>
						<p>收获地址</p>
						<p>退换货</p>
					</div>
				</div>
				<div class="order-detail">
					<div class="order-detail-top">
						<p class="order-detail-title">订单详情</p>
						<div class="order-code-bg">
							<div class="order-code">
								<p>订单号:</p>
								<p>123456</p>
							</div>
							<div class="order-date">
								<p>下单时间:</p>
								<p>2018-12-02</p>
								<p>15:55:33</p>
							</div>
						</div>

						<div class="price-bg">
							<p class="order-price">订单金额:</p>
							<p>¥</p>
							<p class="price-number">3000</p>
						</div>
						<div class="location-detail">
							<div class="location-person">
								<p style="letter-spacing:0.25rem;">收货人:</p>
								<p>王菲</p>
							</div>
							<div class="location-person">
								<p>所在区域:</p>
								<p>江苏省苏州市</p>
							</div>
							<div class="location-person">
								<p>详细地址:</p>
								<p>金枫路</p>
							</div>
							<div class="location-person">
								<p>手机号码:</p>
								<p>183****0587</p>
							</div>
							<div class="location-person">
								<p>邮箱编号:</p>
								<p>000000</p>
							</div>
						</div>
						<div class="logistics-detail">
							<p class="logistics-title">售后物流详情</p>
							<div class="logistics-schedule">
								<div class="schedule-icon">
									<img src="../../assets/img/chushi.png" alt="">
									<!-- <img src="../../assets/img/lasticon.png" alt=""> -->
									<p class="schedule-explain">提交订单</p>
								</div>
								<div class="schedule-icon">
									<img src="../../assets/img/gaoliang.png" alt="">
									<!-- <img src="../../assets/img/weidao.png" alt=""> -->
									<p class="schedule-explain">付款成功</p>
								</div>
								<div class="schedule-icon">
									<!-- <img src="../../assets/img/gaoliang.png" alt=""> -->
									<img src="../../assets/img/weidao.png" alt="">
									<p class="schedule-explain">商品出库</p>
								</div>
								<div class="schedule-icon">
									<!-- <img src="../../assets/img/gaoliang.png" alt=""> -->
									<img src="../../assets/img/weidao.png" alt="">
									<p class="schedule-explain">等待收货</p>
								</div>
								<div class="schedule-icon">
									<!-- <img src="../../assets/img/chushi.png" alt=""> -->
									<img src="../../assets/img/lasticon.png" alt="">
									<p class="schedule-explain">完成</p>
								</div>
							</div>
							
							
						</div>
						<div class="logistics-trace">
							<div class="logistics-information-bg">
								<div class="logistics-information">
									<img src="../../assets/img/personcenter.png" alt="">
									<p>2018-12-30</p>
									<p>17:26:53</p>
									<p>商品已返回仓库</p>
								</div>
								<div class="logistics-information">
									<img src="../../assets/img/personcenter.png" alt="">
									<p>2018-12-30</p>
									<p>17:26:53</p>
									<p>商品已出库</p>
								</div>
							</div>
						</div>
					</div>
					<div class="order-detail-bottom">
						
					</div>

				</div>
			</div>
		</div>
		<Bottom></Bottom>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Bottom from '../../components/bottom'
	import Swiper from 'swiper'
	export default {
		components: {
			Bottom,
			Header
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
			};
		},
		methods: {
			searchInput(e) {
				console.log('子组件中触发物流订单页面', e); //子组件输入框触发,e代表输入框中的值
			}
		},
		mounted(){
			new Swiper('.swiper-container', {
				autoplay: 2000,
				speed: 300,
				// autoplayDisableOnInteraction:true,
				loopAdditionalSlides: 1,
				paginationClickable: true,
				touchReleaseOnEdges: true,
				loop: true,
				observer: true,
				observeParents: false,
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
		}
	}
</script>

<style>
	.aboutBannerImg {
		width: 100%;
		/*height: 100%;*/
		cursor: pointer;
	}
	.product-main {
		margin-top: 7.5rem;
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.my-order {
		width: 18.5%;
		background-color: #FFFFFF;
		margin-top: 7.25rem;
	}

	.user-icon {
		width: 82%;
		padding: 1.25rem 9%;
	}

	.user-icon>img {
		width: 100%;
	}

	.my-btn {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #b52637;
		padding: 0.9375rem 0;
	}
	.my-btn>p {
		color: #FFF;
		font-size: 0.875rem;
	}
	.my-nav {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.1875rem 0;
	}

	.my-nav>p {
		margin: 0.9375rem 0;
		font-size: 0.875rem;
		color: #333333;
	}

	

	.order-detail {
		width: 74%;
		display: flex;
		flex-direction: column;
	}

	.order-detail-top {
		width: 96%;
		padding: 0 2%;
		background-color: #FFFFFF;
		margin-bottom: 2.5rem;
	}

	.order-detail-title {
		width: 98%;
		padding: 0 1%;
		margin: 1.875rem 0;
		font-size: 1.125rem;
		color: #333333;
	}

	.order-code-bg {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 0.625rem;
		border-bottom: 0.0625rem solid #ececec;
	}

	.order-code {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 50%;
	}
	.order-code >p:nth-child(1){
		color: #999999;
		font-size: 0.75rem;
	}
	.order-code >p:nth-child(2){
		color: #666666;
		font-size: 0.75rem;
		margin-left: 2%;
	}
	.order-date {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		width: 50%;
	}
	.order-date>p{
		font-size: 0.875rem;
		color: #666;
		margin-left: 2%;
	}
	.price-bg {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1.25rem 0;
		border-bottom: 0.0625rem solid #ececec;
	}
	.order-price{
		color: #666666;
		font-size: 0.875rem;
	}
	.price-bg>p:not(:first-child){
		color: #B52637;
		font-size: 1.5rem;
		margin-left: 1%;
	}
	.location-detail {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0.375rem 0;
		border-bottom: 0.0625rem solid #ececec;
	}

	.location-person {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0.875rem 0;
	}
	.location-person>p:nth-child(1){
		font-size: 0.875rem;
		color: #999999;
	}
	.location-person>p:nth-child(2){
		font-size: 0.875rem;
		color: #666;
		margin-left: 2%;
	}
	.logistics-detail {
		width: 100%;
		padding: 0.75rem 0;
	}

	.logistics-title {
		width: 98%;
		padding: 0 1%;
		color: #666666;
		font-size: 0.875rem;
	}

	.logistics-schedule {
		width: 80%;
		padding: 0 10%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 1.5rem;
		margin-bottom: 1.875rem;
	}

	.schedule-icon {
		width: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.schedule-icon>img {
		width: 100%;
		margin-bottom: 0.625rem;
	}
	.schedule-icon>p{
		color: #666666;
		font-size: 0.875rem;
	}
	.logistics-trace{
		width: 96%;
		padding:0 2%;
		border:0.0625rem solid #e4e4e4;
		padding-top: 1.375rem;
		padding-bottom: 0.625rem;
		margin-bottom: 2.625rem;
	}
	.logistics-information-bg{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
	}
	.logistics-information{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.logistics-information>p{
		font-size: 0.75rem;
		color: #999999;
	}
	.logistics-information>p:nth-child(2){
		margin-left: 1.25rem;
	}
	.logistics-information>p:nth-child(3){
		margin-left: 0.625rem;
	}
	.logistics-information>p:nth-child(4){
		margin-left: 0.625rem;
	}
</style>
