<template>
	<div class="main" style="background-color: #EEEEEE">
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="conent" @mouseenter="clearDropDown()">
			<div class="product-main">
				<LeftNav ref="leftnav"></LeftNav>
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
									<img src="../../assets/img/wuliu3.png" alt="">
									<p>2018-12-30</p>
									<p>17:26:53</p>
									<p>商品已返回仓库</p>
								</div>
								<div class="logistics-information">
									<img src="../../assets/img/wuliu1.png" alt="">
									<p>2018-12-30</p>
									<p>17:26:53</p>
									<p>商品已出库</p>
								</div>
								<div class="logistics-information">
									<img src="../../assets/img/wuliu1.png" alt="">
									<p>2018-12-30</p>
									<p>17:26:53</p>
									<p>商品已出库</p>
								</div>
							</div>
						</div>
					</div>
					<div class="order-detail-bottom">
						<p>订单商品</p>
						<div class="product-title">
							<p>商品信息</p>
							<p>单价</p>
							<p>数量</p>
							<p>操作</p>
						</div>
						<div class="order-detail-conent">
							<div class="order-detail-conent-top">
								<div>
									<div>
										<img src="../../assets/img/wl.png" alt="">
									</div>
									<div>
										<p>全能平低锅介绍名称全能平低锅介绍名称全能平低锅介绍名称</p>
										<div>
											<p>颜色:</p>
											<p>茶色</p>
											<p>尺寸:</p>
											<p>M</p>
										</div>
									</div>
								</div>
								<div>
									<p>¥ 3000</p>
								</div>
								<div>
									<p>1</p>
								</div>
								<div>
									<p>再次购买</p>
								</div>
							</div>
							<div class="order-detail-conent-bottom">
								<div>
									<p>商品总额:</p>
									<p>¥3000.00</p>
								</div>
								<div>
									<p>优惠券:</p>
									<p>-¥20.00</p>
								</div>
								<div>
									<p>运费:</p>
									<p>¥10.00</p>
								</div>
								<div style="margin-bottom: 1.75rem;">
									<p>应付总额:</p>
									<p>¥2990.00</p>
								</div>
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
	import LeftNav from '../../components/leftNav'
	import RightNav from '../../components/rightNav'
	import Swiper from 'swiper'
  import Service from '../../assets/service/service.js'
  export default {
		components: {
			Bottom,
			Header,
			LeftNav,
			RightNav
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
			clearDropDown() {
				this.$refs.data.showstartdrop = false;
				this.$refs.data.showModal = false;
				this.$refs.data.showAboutdrop = false;
				this.$refs.data.showUsermodal = false;
				this.$refs.data.windowBg = 'background-color: #FFFFFF';
			},
			searchInput(e) {
				console.log('子组件中触发物流订单页面', e); //子组件输入框触发,e代表输入框中的值
			}
		},
		mounted() {
			this.$refs.leftnav.activeId=0;
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

	.order-code>p:nth-child(1) {
		color: #999999;
		font-size: 0.75rem;
	}

	.order-code>p:nth-child(2) {
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

	.order-date>p {
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

	.order-price {
		color: #666666;
		font-size: 0.875rem;
	}

	.price-bg>p:not(:first-child) {
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

	.location-person>p:nth-child(1) {
		font-size: 0.875rem;
		color: #999999;
	}

	.location-person>p:nth-child(2) {
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

	.schedule-icon>p {
		color: #666666;
		font-size: 0.875rem;
	}

	.logistics-trace {
		width: 96%;
		padding: 0 2%;
		border: 0.0625rem solid #e4e4e4;
		padding-top: 1.375rem;
		padding-bottom: 0.625rem;
		margin-bottom: 2.625rem;
	}

	.logistics-information-bg {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
	}

	.logistics-information {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}

	.logistics-information>p {
		font-size: 0.75rem;
		color: #999999;
	}

	.logistics-information>p:nth-child(2) {
		margin-left: 1.25rem;
	}

	.logistics-information>p:nth-child(3) {
		margin-left: 0.625rem;
	}

	.logistics-information>p:nth-child(4) {
		margin-left: 0.625rem;
	}

	.order-detail-bottom {
		width: 100%;
		display: flex;
		flex-direction: column;
		border: 0.0625rem solid #e4e4e4;
		margin-bottom: 8.25rem;
	}

	.order-detail-bottom>p {
		width: 96%;
		padding: 0.875rem 2%;
		background-color: #FFFFFF;
		color: #666666;
		font-size: 0.875rem;
	}

	.product-title {
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 0.75rem 0;
	}

	.product-title>p {
		color: #666666;
		font-size: 0.875rem;
	}

	.product-title>p:first-child {
		width: 55.5%;
		padding: 0 4%;
	}

	.product-title>p:not(:first-child) {
		width: 12.5%;
		text-align: center;
	}

	.order-detail-conent {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.order-detail-conent-top {
		width: 98%;
		padding-left: 2%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		border: 0.0625rem solid #e4e4e4;
	}

	.order-detail-conent-top>div:first-child {
		width: 62.5%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1.125rem 0;
		justify-content: space-between;
	}

	.order-detail-conent-top>div:first-child>div:first-child {
		width: 20%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 1.25rem 0;
		border: 0.0625rem solid #e4e4e4;
	}

	.order-detail-conent-top>div:first-child>div:last-child {
		width: 64%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-right: 12%;
	}

	.order-detail-conent-top>div:first-child>div:last-child>p {
		width: 100%;
		line-height: 150%;
		color: #666666;
		font-size: 0.75rem;
	}

	.order-detail-conent-top>div:first-child>div:last-child>div {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.order-detail-conent-top>div:first-child>div:last-child>div>p {
		color: #666666;
		font-size: 0.75rem;
	}

	.order-detail-conent-top>div:first-child>div>img {
		width: 100%;
	}

	.order-detail-conent-top>div:not(:first-child) {
		width: 12.5%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-left: 0.0625rem solid #e4e4e4;
	}

	.order-detail-conent-top>div:nth-child(2)>p,
	.order-detail-conent-top>div:nth-child(3)>p {
		color: #666666;
		font-size: 0.875rem;
	}

	.order-detail-conent-top>div:last-child>p {
		color: #666666;
		font-size: 0.75rem;
		padding: 0.3125rem 0.3125rem;
		border: 0.0625rem solid #e4e4e4;
		border-radius: 0.5rem;
	}

	.order-detail-conent-bottom {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		background-color: #FFFFFF;
	}

	.order-detail-conent-bottom>div {
		width: 37.5%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}


	.order-detail-conent-bottom>div:not(:last-child)>p:first-child {
		color: #666666;
		font-size: 0.75rem;
	}

	.order-detail-conent-bottom>div:not(:last-child)>p:last-child {
		color: #666666;
		font-size: 0.875rem;
	}

	.order-detail-conent-bottom>div:last-child>p {
		color: #852833;
	}

	.order-detail-conent-bottom>div:last-child>p:first-child {
		font-size: 0.75rem;
	}

	.order-detail-conent-bottom>div:last-child>p:last-child {
		font-size: 1.5rem;
	}

	.order-detail-conent-bottom>div>p {
		text-align: right;
		margin-top: 1.25rem;
	}

	.order-detail-conent-bottom>div>p:first-child {
		letter-spacing: 0.1875rem;
		width: 50%;
	}

	.order-detail-conent-bottom>div>p:last-child {
		width: 50%;
		padding-right: 4%;
	}
</style>
