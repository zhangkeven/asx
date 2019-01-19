<template>
	<div class="main">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div class="product-detail-conent" @mouseenter="clearDropDown()">
			<div class="product-detail-top">
				<div class="product-detail-top-leftIcon">
					<div class="big-img-bg">
						<img :src="bigImg" alt="">
					</div>
					<!-- <div class="samll-img-swiper"> -->
					<!-- <div class="swiper-product-prev"></div>
						<div class="swiper-wrapper" style="width: 60%;z-index: 15;margin-left: 15%;">
							<div style="cursor: pointer;z-index: 15;" class="swiper-slide" v-for="(item,index) in imgList" :key="index">
								<img v-for="(img,i) in imgs" :key="i" v-bind:class="activeid==i?'activeImg':'small-img'" :src="img" alt=""
								 @click="magnify(img,i)">
							</div>
						</div> -->
					<!-- 如果需要分页器 -->
					<!-- <div class="swiper-pagination"></div> -->
					<!-- <div class="product-swiper-nav"> -->

					<!-- <div class="swiper-product-next"></div> -->
					<!-- </div> -->
					<!-- </div> -->
					<div class="samll-img-backgroud">
						<!-- <div class="swiper-product-prev"></div> -->
						<div class="small-img-list">
							<img v-for="(img,i) in imgs" :key="i" v-bind:class="activeid==i?'activeImg':'small-img'" :src="img" alt=""
							 @click="magnify(img,i)">
						</div>
						<!-- <div class="swiper-product-next"></div> -->
					</div>
				</div>
				<div class="product-detail-top-rightConent">
					<div class="buy-product">
						<p class="guo-title">零秒活力锅</p>
						<div class="guo-price-bg">
							<div class="guo-price">
								<div class="guo-price-left">
									<div class="youhui">
										<p>闪购价</p>
										<p>¥ 3000.00</p>
										<p>[5000.00]</p>
									</div>
									<div class="youhuiquan">
										<p>优惠卷</p>
										<img src="../../assets/img/dec20.png" alt="">
										<p class="lingqu">领取</p>
										<img src="../../assets/img/dec30.png" alt="">
										<p class="lingqu">领取</p>
									</div>
								</div>
								<div class="shoucang">
									<img src="../../assets/img/shoucang.png" alt="">
									<p>收藏</p>
								</div>
							</div>

							<div class="pingjia">
								<p>累积评价</p>
								<p>30+</p>
							</div>
						</div>
						<div class="location-bg">
							<p>配送至</p>
							<!-- <v-distpicker  province="广东省" city="广州市" area="海珠区"></v-distpicker> -->
							<div class="block">
								<el-cascader separator="/" :value="selectedOptions" :props="optionProps" expand-trigger="hover" :options="location"
								 :show-all-levels="true" size="medium" v-model="selectedOptions" @change="handleChange" ref="location">
								</el-cascader>
							</div>
							<p>运费</p>
							<p>10元</p>
						</div>
						<div class="product-guige">
							<p>规格</p>
							<div>
								<p :class="typeid==index?'activeStyle':'morenstyle'" @click="chooseType(index)" v-for="(item,index) in typelist"
								 :key="index" :data-id="index">{{item}}</p>
							</div>
						</div>
						<div class="product-color">
							<p>颜色</p>
							<div>
								<p :class="colorid==index?'activeStyle':'morenstyle'" @click="chooseColor(index)" v-for="(item,index) in colorlist"
								 :key="index" :data-id="index">{{item}}</p>
							</div>
						</div>
						<div class="product-count">
							<p>数量</p>
							<div>
								<p @click="decCount">-</p>
								<p>{{number}}</p>
								<p @click="addCount">+</p>
							</div>
						</div>
						<div class="bottom-btn">
							<div @click="payment">
								<p>立即购买</p>
							</div>
							<div>
								<img src="../../assets/img/cart1.png" alt="">
								<p>加入购物车</p>
							</div>
						</div>
					</div>
					<div class="recommend-shopping">
						<p>看了又看</p>
						<div class="recommend-buy-conent" :style="shopHeight">
							<div class="pot-detail" v-for="(item,i) in recommendList" :key="i">
								<img src="../../assets/img/smallguo.png" alt="">
								<div class="money-bg">
									<div class="money-text">
										<div class="now-price">
											<p>¥</p>
											<p>{{item.money}}</p>
										</div>
										<div class="before-price">
											<p>¥{{item.beforeMoney}}</p>
										</div>
									</div>
								</div>
								<p>{{item.conent}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="product-detail-bottom">
				<div>
					<div class="recommend-shopping">
						<p class="new-product-title">新品</p>
						<div class="recommend-buy-conent">
							<div class="pot-detail" v-for="(item,i) in recommendList" :key="i">
								<img src="../../assets/img/smallguo.png" alt="">
								<div class="money-bg">
									<div class="money-text">
										<div class="now-price">
											<p>¥</p>
											<p>{{item.money}}</p>
										</div>
										<div class="before-price">
											<p>¥{{item.beforeMoney}}</p>
										</div>
									</div>
								</div>
								<p>{{item.conent}}</p>
							</div>
						</div>
					</div>
				</div>

				<div class="product-introduce">
					<div class="product-introduce-top">
						<div class="shop-title">
							<p v-bind:class="chooseId=='0'?'productActiveType':'shopBtn'" @click="chooseproducttype('0')">商品介绍</p>
							<p v-bind:class="chooseId=='1'?'productActiveType':'shopBtn'" @click="chooseproducttype('1')">运费规则</p>
							<p v-bind:class="chooseId=='2'?'productActiveType':'shopBtn'" @click="chooseproducttype('2')">规格与包装</p>
							<p v-bind:class="chooseId=='3'?'productActiveType':'shopBtn'" @click="chooseproducttype('3')">售后保障</p>
							<p v-bind:class="chooseId=='4'?'productActiveType':'shopBtn'" @click="chooseproducttype('4')">商品评价(30+)</p>
						</div>
						<div class="introduce-cart-btn">
							<p>加入购物车</p>
						</div>
					</div>
					<div class="product-introduce-bottom">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div class="product-evaluate">
							<p>
								商品评价
							</p>
							<div class="product-evaluate-btn">
								<div class="good-evaluate">
									<p>好评度</p>
									<p>99%</p>
								</div>
								<div class="evaluate-btn-style">
									<p>全部评价</p>
								</div>
								<div class="evaluate-btn-style">
									<p>晒图</p>
								</div>
								<div class="evaluate-btn-style">
									<p>好评</p>
								</div>
								<div class="evaluate-btn-style">
									<p>中评</p>
								</div>
								<div class="evaluate-btn-style">
									<p>差评</p>
								</div>
							</div>
							<div class="product-evaluate-list-bg">
								<div class="product-evaluate-list" v-for="item in recommendList">
									<div class="product-evaluate-list-top">
										<div class="product-evaluate-detail">
											<div class="product-evaluate-detail-left">
												<div>
													<div>
														<img src="../../assets/img/girl.png" alt="">
													</div>
												</div>
												<p>王小云</p>
											</div>
											<div class="product-evaluate-detail-right">
												<div class="top-icon">
													<img src="../../assets/img/pingjiaxx.png" alt="">
													<img src="../../assets/img/pingjiaxx.png" alt="">
													<img src="../../assets/img/pingjiaxx.png" alt="">
													<img src="../../assets/img/pingjiaxx.png" alt="">
													<img src="../../assets/img/baixingxing.png" alt="">
												</div>
											</div>
										</div>
										<div class="product-evaluate-detail-conent">
											<div class="product-evaluate-detail-text">
												<p>以前总觉得用压力锅有点害怕！但是零秒活力锅不一样，让我可以轻松煮出小孩爱吃的咖哩，还不用花费许多时间，只要将食材切块放进去，不需翻炒，不需熬煮，就能煮出超好吃的美味咖哩，小孩吃得赞不绝口！</p>
											</div>
											<div class="product-evaluate-detail-img">
												<img src="../../assets/img/1.0.png" alt="" v-for="item in list">
											</div>
											<div class="product-size">
												<div>
													<p>高压</p>
													<p>2018-12-24</p>
													<p>20:38</p>
												</div>
												<div>
													<p>举报</p>
													<div>
														<p>有用</p>
														<p>(0)</p>
													</div>

												</div>
											</div>
											<div class="add-evaluate">
												<p>追加评论</p>
											</div>
											<div class="product-evaluate-detail-text">
												<p>以前总觉得用压力锅有点害怕！但是零秒活力锅不一样，让我可以轻松煮出小孩爱吃的咖哩，还不用花费许多时间，只要将食材切块放进去，不需翻炒，不需熬煮，就能煮出超好吃的美味咖哩，小孩吃得赞不绝口！</p>
											</div>
											<div class="product-evaluate-detail-img">
												<img src="../../assets/img/1.0.png" alt="" v-for="item in list">
											</div>
										</div>
									</div>

								</div>
							</div>
							<div class="bottom-page" style="margin:1.875rem 0;">
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
					<p class="for-you">
						为你推荐
					</p>
					<div class="bottom-product-you">
						<div class="pot-detail" v-for="(item,i) in guoList" :key="i" @click="goProdunctDetail">
							<img src="../../assets/img/smallguo.png" alt="">
							<div class="money-bg">
								<div class="money-text">
									<div class="now-price">
										<p>¥</p>
										<p>{{item.money}}</p>
									</div>
									<div class="before-price">
										<p>¥{{item.beforeMoney}}</p>
									</div>
								</div>
								<img class="money-icon" src="../../assets/img/bai.png" alt="" v-if="item.hot==1">
								<img class="money-icon" src="../../assets/img/hong.png" alt="" v-if="item.hot==0">
							</div>
							<p>{{item.conent}}</p>
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
	import VDistpicker from 'v-distpicker'
	import Swiper from 'swiper';
	import Header from '../../components/header'
	import Bottom from '../../components/bottom'
	import LeftNav from '../../components/leftNav'
	import RightNav from '../../components/rightNav'
	import location from '../../assets/js/city-data.js'
  import Service from '../../assets/service/service.js'
  export default {
		components: {
			Bottom,
			Header,
			LeftNav,
			RightNav,
			VDistpicker
		},
		data() {
			return {
				pageCount: 0,
				page: [
					'1', '2', '3', '4', '5', '6'
				],
				guoList:[{
					money: '3000',
					beforeMoney: '5000',
					hot: '1',
					conent: '梦幻公主锅介绍'
				}, {
					money: '3000',
					beforeMoney: '5000',
					hot: '0',
					conent: '零秒活力锅介绍'
				},{
					money: '3000',
					beforeMoney: '5000',
					hot: '1',
					conent: '梦幻公主锅介绍'
				}, {
					money: '3000',
					beforeMoney: '5000',
					hot: '0',
					conent: '零秒活力锅介绍'
				}],
				chooseId: '0',
				shopHeight: '',
				location: location.CityInfo,
				typeid: 0,
				typelist: ['M', 'L'],
				imgList: ['', '', ''],
				colorlist: ['高压', '低压'],
				colorid: 0,
				list:['','','','','','','','','','','','',''],
				imgs: ['http://www.kevenzhang.com/asximage/smallguo.png', 'http://www.kevenzhang.com/asximage/smallguo.png',
					'http://www.kevenzhang.com/asximage/wl.png', 'http://www.kevenzhang.com/asximage/wl.png',
					'http://www.kevenzhang.com/asximage/wl.png',
					'http://www.kevenzhang.com/asximage/smallguo.png', 'http://www.kevenzhang.com/asximage/smallguo.png',
					'http://www.kevenzhang.com/asximage/wl.png', 'http://www.kevenzhang.com/asximage/wl.png',
					'http://www.kevenzhang.com/asximage/wl.png'
				],
				recommendList: [{
					money: '3000',
					beforeMoney: '5000',
					hot: '1',
					conent: '梦幻公主锅介绍'
				}, {
					money: '3000',
					beforeMoney: '5000',
					hot: '0',
					conent: '零秒活力锅介绍'
				}, ],
				bigImg: 'http://www.kevenzhang.com/asximage/smallguo.png',
				activeid: 0,
				number: 1,
				selectedOptions: [],
				selectedOptions2: [],
				optionProps: {
					value: 'id',
					label: 'name',
					children: 'children'
				}
			};
		},
		methods: {
			payment(){
				this.$router.push({
					name: 'Payment',
					params: {}
				})
			},
			searchInput(e) {
				console.log('子组件中触发购物车页面', e); //子组件输入框触发,e代表输入框中的值
			},
			clearDropDown() {
				this.$refs.data.showstartdrop = false;
				this.$refs.data.showModal = false;
				this.$refs.data.showAboutdrop = false;
				this.$refs.data.showUsermodal = false;
				this.$refs.data.windowBg = 'background-color: #FFFFFF';
			},
			magnify(url, index) {
				this.bigImg = url;
				this.activeid = index;
			},
			chooseType(index) {
				if (this.typeid == index) {

				} else {
					this.typeid = index
				}
			},
			chooseColor(index) {
				if (this.colorid == index) {

				} else {
					this.colorid = index
				}
			},
			addCount() {
				this.number++
			},
			decCount() {
				if (this.number > 1) {
					this.number--
				}
			},
			handleChange(value) {
				console.log(value);
				console.log(this.selectedOptions);
			},
			selected(data) {

				console.log(data);

			},
			chooseproducttype(index) {
				if (this.chooseId == index) {

				} else {
					this.chooseId = index
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
			goProdunctDetail(){
				this.$router.push({
					name: 'ProductDetail',
					params: {}
				})
			},
		},
		mounted() {
			new Swiper('.samll-img-swiper', {
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
				nextButton: '.swiper-product-next',
				prevButton: '.swiper-product-prev',
				// 如果需要滚动条
				// scrollbar: '.swiper-scrollbar',
			})
			console.log(this.$refs.location.label)
		}
	}
</script>

<style>
	body {
		min-width: 84.375rem;
	}

	.product-detail-conent {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 63%;
		margin-top: 4.375rem;
	}

	.product-detail-top {
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-top: 3.125rem;
		margin-bottom: 2.75rem;
		justify-content: space-between;
	}

	.product-detail-top-leftIcon {
		width: 30%;
		display: flex;
		flex-direction: column;
	}

	.big-img-bg {
		width: 91%;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border: 0.125rem solid #f0f0f0;
		margin-bottom: 1.375rem;
	}

	.big-img-bg>img {
		width: 80%;
	}

	.samll-img-backgroud {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.small-img-list {
		width: 90%;
		display: flex;
		flex-direction: row;
		align-items: center;
		overflow: auto;
	}

	.small-img {
		width: 15%;
		height: 50%;
		padding: 0.3125rem 1%;
		cursor: pointer;
		z-index: 15;
	}

	.small-img-list>img:not(:first-child) {
		margin-left: 2%;
	}

	.samll-img-swiper {
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		list-style: none;
		padding: 0;
		/* Fix of Webkit flickering */
		z-index: 1;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.activeImg {
		width: 15%;
		height: 65%;
		border: 0.125rem solid #852833;
		box-sizing: border-box;
		padding: 0.3125rem 1%;
		cursor: pointer;
		z-index: 15;
	}


	.swiper-product-prev {
		background: url("../../assets/img/go2.png") no-repeat;
		width: 10%;
		height: 3rem;
		cursor: pointer;
		z-index: 20;
	}

	.swiper-product-next {
		background: url("../../assets/img/go(1).png") no-repeat;
		cursor: pointer;
		width: 10%;
		height: 3rem;
		z-index: 20;
	}

	.product-swiper-nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: absolute;
		width: 90%;
		bottom: 0.3rem;
		z-index: 5;
		height: 1.8rem;
	}

	.product-detail-top-rightConent {
		width: 68%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.buy-product {
		width: 78%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.recommend-shopping {
		width: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.recommend-shopping>p {
		font-size: 1rem;
		color: #333333;
	}

	.guo-title {
		color: #333333;
		font-size: 1rem;
	}

	.guo-price-bg {
		width: 98%;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #f2f2f2;
		padding: 0.5rem 0;
		padding-left: 2%;
	}

	.guo-price {
		width: 80%;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-right: 0.125rem solid #c9c9c9;
	}

	.guo-price-left {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.shoucang {
		width: 20%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.shoucang>p {
		color: #852833;
		font-size: 0.875rem;
	}

	.shoucang>p {
		text-align: center;
	}

	.youhui {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.youhui>p:first-child {
		color: #666666;
		font-size: 0.875rem;
	}

	.youhui>p:nth-child(2) {
		color: #852833;
		font-size: 1.5rem;
		margin: 0 3%;
	}

	.youhui>p:last-child {
		color: #999;
		font-size: 0.875rem;
		text-decoration: line-through;
	}

	.youhuiquan {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.youhuiquan>p:first-child {
		color: #666666;
		font-size: 0.875rem;
	}

	.youhuiquan>img {
		margin: 0 3%;
	}

	.youhuiquan>p.lingqu {
		color: #cd3648;
		font-size: 0.75rem;
		cursor: pointer;
	}

	.pingjia {
		width: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.pingjia>p:first-child {
		color: #666666;
		font-size: 0.75rem;
	}

	.pingjia>p:last-child {
		color: #852833;
		font-size: 1rem;
	}

	.location-bg {
		width: 98%;
		display: flex;
		flex-direction: row;
		padding-left: 2%;
		align-items: center;
	}

	.location-bg>p:not(:last-child) {
		color: #666666;
		font-size: 0.875rem;
		letter-spacing: 0.625rem;
	}

	.location-bg>p:nth-child(3) {
		margin: 0 4%;
	}

	.location-bg>p:last-child {
		color: #333333;
		font-size: 0.875rem;
	}

	.product-guige,
	.product-color,
	.product-count {
		width: 98%;
		padding-left: 2%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.product-guige>p,
	.product-color>p,
	.product-count>p {
		color: #666666;
		font-size: 0.875rem;
	}

	.product-guige>div,
	.product-color>div,
	.product-count>div {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 5%;
	}

	.morenstyle {
		color: #666666;
		font-size: 1rem;
		border: 0.125rem solid #f0f0f0;
		padding: 0.4rem 0.6rem;
		cursor: pointer;
		margin-right: 20%;
		width: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.activeStyle {
		border: 0.125rem solid #852833;
		font-size: 1rem;
		padding: 0.4rem 0.6rem;
		cursor: pointer;
		color: #666666;
		margin-right: 20%;
		width: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bottom-btn {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}

	.product-count>div>p {
		padding: 0.3rem 1rem;

		font-size: 1.75rem;
	}

	.product-count>div>p:first-child {
		border: 0.125rem solid #f0f0f0;
		border-right: none;
		color: #999999;
		cursor: pointer;
	}

	.product-count>div>p:nth-child(2) {
		border: 0.125rem solid #f0f0f0;
		color: #666666;
	}

	.product-count>div>p:last-child {
		border: 0.125rem solid #f0f0f0;
		border-left: none;
		color: #999999;
		cursor: pointer;
	}

	.bottom-btn>div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0.625rem 0;
		cursor: pointer;
	}

	.bottom-btn>div>p {
		font-size: 1.5rem;
		color: #FFFFFF;
	}

	.bottom-btn>div:first-child {
		width: 30%;
		background-color: #CD3648;
		max-width: 9.375rem;
	}

	.bottom-btn>div:last-child {
		width: 40%;
		background-color: #852833;
		margin-left: 10%;
		max-width: 12.5rem;
	}

	.bottom-btn>div:last-child>p {
		margin-left: 3%;
	}

	.recommend-shopping>.recommend-buy-conent {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: #FFFFFF;
		align-items: center;
		justify-content: space-between;

	}

	.recommend-shopping>.recommend-buy-conent>.pot-detail {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		background-color: #FFFFFF;
		border-radius: 0.625rem;
		border: 0.125rem solid #F0F0F0;
		box-sizing: border-box;
		cursor: pointer;
		margin-top: 1.25rem;
	}

	.recommend-shopping>.recommend-buy-conent>.pot-detail>img {
		width: 81%;
	}

	.recommend-shopping>.recommend-buy-conent>.pot-detail>p {
		width: 94%;
		padding: 0 3%;
		color: #666;
		font-size: 0.875rem;
	}

	.recommend-shopping>.recommend-buy-conent>.pot-detail>.money-bg {
		width: 94%;
		padding: 0 3%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}

	.recommend-shopping>.recommend-buy-conent>.pot-detail>.money-bg>img {
		width: 1.25rem;
		height: 1.25rem;
	}

	.recommend-shopping>.recommend-buy-conent>.pot-detail>.money-bg>.money-text {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}

	.recommend-shopping>.recommend-buy-conent>.pot-detail>.money-bg>.money-text>.now-price {
		display: flex;
		flex-direction: row;
	}

	.recommend-shopping>.recommend-buy-conent>.pot-detail>.money-bg>.money-text>.now-price>p {
		color: #ff0606;
		font-size: 1.125rem;
	}

	.recommend-shopping>.recommend-buy-conent>.pot-detail>.money-bg>.money-text>.now-price>p:nth-child(2) {
		margin-left: 0.3125rem;
	}

	.recommend-shopping>.recommend-buy-conent>.pot-detail>.money-bg>.money-text>.before-price>p {
		color: #999999;
		font-size: 0.75rem;
		margin-left: 0.625rem;
		text-decoration: line-through;
	}

	.product-detail-bottom {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.product-detail-bottom>div {
		width: 15%;
	}

	.product-detail-bottom>div>.recommend-shopping {
		border: 0.125rem solid #f0f0f0;
		width: 100%;
		margin-bottom: 1.25rem;
		box-sizing: border-box;
		justify-content: flex-start;
	}

	.product-detail-bottom>div>.recommend-shopping>.recommend-buy-conent {
		padding-bottom: 3.25rem;
		padding-top: 0.5rem;
		justify-content: flex-start;

	}

	.product-detail-bottom>div>.recommend-shopping>.recommend-buy-conent>.pot-detail {
		width: 85%;
		margin-top: 0.75rem;
		margin-bottom: 0;
	}

	p.new-product-title {
		width: 100%;
		text-align: center;
		padding: 0.625rem 0;
		background-color: #dfdfdf;
		color: #333333;
		font-size: 1.1875rem;
	}

	.product-introduce {
		margin-left: 2%;
		flex: 1;
	}

	.product-introduce-top {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.shop-title {
		background-color: red;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		background-color: #f7f7f7;
		padding: 0;
	}

	.shop-title>p {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.shop-title>p:not(:first-child) {
		margin-left: 3%;
	}

	.shop-title>p:hover {
		color: #fff;
		background-color: #cd3648;
	}

	.shopBtn {
		padding: 0.625rem 0.625rem;
		color: #666666;
		cursor: pointer;

	}

	.productActiveType {
		padding: 0.625rem 0.625rem;
		color: #fff;
		background-color: #cd3648;
		cursor: pointer;
	}

	.introduce-cart-btn {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #f7f7f7;
		padding: 0.3125rem 0.3125rem;
		cursor: pointer;
	}

	.introduce-cart-btn>p {
		color: #FFFFFF;
		background-color: #cd3648;
		padding: 0.3125rem 0.625rem;
	}

	.product-introduce-bottom {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.product-evaluate {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.product-evaluate>p {
		width: 96%;
		padding: 2% 0.625rem;
		background-color: #f7f7f7;
		color: #666666;
		font-size: 1rem;
	}

	.product-evaluate-btn {
		width: 92%;
		padding: 1.25rem 4%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 0.25rem solid #f0f0f0;
	}

	.good-evaluate {
		width: 15%;
	}

	.good-evaluate>p:first-child {
		color: #999999;
		font-size: 1rem;
	}

	.good-evaluate>p:last-child {
		color: #CD3648;
		font-size: 1.875rem;

	}

	.evaluate-btn-style {
		width: 15%;
	}

	.evaluate-btn-style>p {
		width: 80%;
		color: #999999;
		font-size: 1rem;
		background-color: #fdfdfd;
		border: 0.125rem solid #f4f4f4;
		text-align: center;
		padding: 0.3rem 0;
		cursor: pointer;
	}

	.product-evaluate-list-bg {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.product-evaluate-list {
		width: 100%;
		display: flex;
		flex-direction: column;
		border-bottom: 0.0625rem solid #CCCCCC;
	}

	.product-evaluate-list-top {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.product-evaluate-detail {
		width: 96%;
		padding-right: 4%;
		padding-top: 0.625rem;
		display: flex;
		flex-direction: row;
		align-items: center;

	}

	.product-evaluate-detail-left {
		width: 20%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.product-evaluate-detail-left>p {
		margin-left: 0.3125rem;
	}

	.product-evaluate-detail-left>div {
		width: 50%;

	}

	.product-evaluate-detail-left>div>div {
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		position: relative;
	}

	.product-evaluate-detail-left>div>div>img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.product-evaluate-detail-right {
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.top-icon {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.top-icon>img {
		margin-right: 2%;
	}
	.product-evaluate-detail-conent{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.product-evaluate-detail-text{
		width: 77%;
		padding-right: 4%;
			margin-bottom: 1.625rem;
	}
	.product-evaluate-detail-text>p{
		color: #666666;
		font-size: 0.875rem;
	}
	.product-evaluate-detail-img{
		width: 77%;
		padding-right: 4%;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 1.25rem;
	}
	.product-evaluate-detail-img>img{
		width: 15%;
		margin-right: 2%;
		margin-bottom: 0.625rem;
	}
	.add-evaluate{
		width: 77%;
		padding-right: 4%;
		margin:0.75rem 0;
	}
	.add-evaluate>p{
		color: #999999;
		font-size: 0.75rem;
	}
	.product-size{
		width: 73%;
		padding:0.3125rem 4%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom:0.0625rem solid #CCCCCC;
	}
	.product-size>div:first-child{
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
	}
	.product-size>div:first-child>p{
		color: #c3c3c3;
		font-size: 0.75rem;
	}
	.product-size>div:first-child>p:first-child{
		flex: 0.3;
	}
	.product-size>div:first-child>p:last-child{
		margin-left: 3%;
	}
	.product-size>div:last-child{
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
	}
	.product-size>div:last-child>p{
		color: #c3c3c3;
		font-size: 0.75rem;
		cursor: pointer;
		flex: 1;
		text-align: right;
	}
	.product-size>div:last-child>div{
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		justify-content: flex-end;
	}
	.product-size>div:last-child>div>p{
		font-size: 0.75rem;

	}
	.product-size>div:last-child>div>p:first-child{
		color: #095dc4;
	}
	.product-size>div:last-child>div>p:last-child{
		color: #c3c3c3;
		padding-left:4%;
	}
	.product-evaluate>div.bottom-page {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-top: 0.3125rem;
	}

	.product-evaluate>div.bottom-page>div.page-count {
		display: flex;
		flex-direction: row;
	}

	.product-evaluate>div.bottom-page>div.page-count>p {
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

	.product-evaluate>div.bottom-page>div.page-count>p:hover {
		background-color: #852833;
		color: #FFFFFF;
	}

	.product-evaluate>div.bottom-page>div.page-count>div {
		display: flex;
		flex-direction: row;
	}

	.product-evaluate>div.bottom-page>div.page-count>div>p {
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

	.product-evaluate>div.bottom-page>div.page-count>div>p:hover {
		background-color: #852833;
		color: #FFFFFF;
	}

	.product-evaluate>div.bottom-page>div.page-count>div>p.activePage {
		background-color: #852833;
		color: #FFFFFF;
	}
	.bottom-product-you{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 5.625rem;
	}
	.bottom-product-you>.pot-detail {
		width: 24%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		background-color: #FFFFFF;
		margin: 0 0.5%;
		margin-bottom: 0.9375rem;
		border-radius: 0.625rem;
		padding: 1.875rem 0;
		border: 0.125rem solid #F0F0F0;
		box-sizing: border-box;
		cursor: pointer;
	}

	.bottom-product-you>.pot-detail>img {
		width: 81%;
	}

	.bottom-product-you>.pot-detail>p {
		width: 94%;
		padding: 0 3%;
		color: #666;
		font-size: 0.875rem;
	}

	.bottom-product-you>.pot-detail>.money-bg {
		width: 94%;
		padding: 0 3%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}

	.bottom-product-you>.pot-detail>.money-bg>img {
		width: 1.25rem;
		height: 1.25rem;
	}

	.bottom-product-you>.pot-detail>.money-bg>.money-text {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}

	.bottom-product-you>.pot-detail>.money-bg>.money-text>.now-price {
		display: flex;
		flex-direction: row;
	}

	.bottom-product-you>.pot-detail>.money-bg>.money-text>.now-price>p {
		color: #ff0606;
		font-size: 1.125rem;
	}

	.bottom-product-you>.pot-detail>.money-bg>.money-text>.now-price>p:nth-child(2) {
		margin-left: 0.3125rem;
	}

	.bottom-product-you>.pot-detail>.money-bg>.money-text>.before-price>p {
		color: #999999;
		font-size: 0.75rem;
		margin-left: 0.625rem;
		text-decoration: line-through;
	}
	.for-you{
		width: 98%;
		padding:0.625rem 0;
		padding-left: 2%;
		background-color: #f7f7f7;
		margin-bottom: 1.25rem;
		color: #666666;
		font-size: 1rem;
	}
</style>
