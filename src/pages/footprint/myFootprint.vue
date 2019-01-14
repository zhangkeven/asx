<template>
	<div class="person-main">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div id="myFootprint" @mouseenter="clearDropDown()">
			<div class="order-main">
				<div class="order-conent">
					<LeftNav ref="leftnav"></LeftNav>
					<div class="right-conent">
						<div class="product-list-bg">
							<div class="list-title">
							<p>12.22</p>
							<p>4件商品</p>
							</div>
							<div class="list-conent">
								<div class="pot-detail" v-for="(item,i) in recommendList" :key="i">
									<p class="Cancel_collection" @click="deleteProduct">
										<img src="../../assets/img/delete.png" alt="">
									</p>
									<img src="../../assets/img/smallguo.png" alt="" @click="goProdunctDetail">
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
									<p @click="goProdunctDetail">{{item.conent}}</p>
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
import Swiper from 'swiper';
import Header from '../../components/header';
import Bottom from '../../components/bottom';
import LeftNav from '../../components/leftNav';
import RightNav from '../../components/rightNav';
import location from '../../assets/js/city-data.js';
export default {
	components: {
		Bottom,
		Header,
		LeftNav,
		RightNav
	},
	data() {
		return {
			location: location.CityInfo,
			footlist: ['', '', '', '', '', ''],
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
				},
				{
					money: '3000',
					beforeMoney: '5000',
					hot: '1',
					conent: '梦幻公主锅介绍'
				}, {
					money: '3000',
					beforeMoney: '5000',
					hot: '0',
					conent: '零秒活力锅介绍'
				},
				{
					money: '3000',
					beforeMoney: '5000',
					hot: '1',
					conent: '梦幻公主锅介绍'
				}, {
					money: '3000',
					beforeMoney: '5000',
					hot: '0',
					conent: '零秒活力锅介绍'
				}
			]
		};
	},
	methods: {
		searchInput(e) {
			console.log('子组件中触发购物车页面', e); //子组件输入框触发,e代表输入框中的值
		},
		deleteProduct(){
			console.log('删除');
		},
		clearDropDown() {
			this.$refs.data.showstartdrop = false;
			this.$refs.data.showModal = false;
			this.$refs.data.showAboutdrop = false;
			this.$refs.data.showUsermodal = false;
			this.$refs.data.windowBg = 'background-color: #FFFFFF';
		},
		goProdunctDetail(){
			this.$router.push({
				name: 'ProductDetail',
				params: {}
			})
		},
	},
	computed: {},
	mounted() {
		this.$refs.leftnav.activeId = 3;
	}
};
</script>

<style lang="scss" scoped>
#myFootprint {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.order-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 68%;
		.order-conent {
			margin-top: 7.5rem;
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.right-conent {
				width: 78%;
				display: flex;
				flex-direction: column;
				margin-bottom: 5rem;
				div.product-list-bg {
					width: 100%;
					display: flex;
					flex-direction: column;
					div.list-title {
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: center;
						p:first-child {
							color: #333333;
							font-size: 1.875rem;
						}
						p:last-child {
							margin-left: 0.625rem;
							color: #666;
							font-size: 1.125rem;
						}
					}
					div.list-conent {
						margin-top: 1.25rem;
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: center;
						flex-wrap: wrap;
						div.pot-detail:hover{
							.Cancel_collection{
								opacity: 1;
								display: block;
								z-index: 10;
							}
						}
						div.pot-detail {
							width: 24%;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: flex-end;
							background-color: #ffffff;
							margin: 0 0.5%;
							margin-bottom: 0.9375rem;
							border-radius: 0.625rem;
							padding: 1.875rem 0;
							border: 0.125rem solid #f0f0f0;
							box-sizing: border-box;
							cursor: pointer;
							position: relative;
							.Cancel_collection{
								position: absolute;
								right: 0;
								top: 0;
								width: auto;
								text-align: center;
								color: #fff;
								background-color: #c9c9c9;
								font-size: 0.875rem;
								opacity: 0;
								display:  none;
								cursor: pointer;
								img{
									max-width: 100%;
									width: auto;
								}
							}
							img {
								width: 81%;
							}
							p {
								width: 94%;
								padding: 0 3%;
								color: #666;
								font-size: 0.875rem;
							}
							.money-bg {
								width: 94%;
								padding: 0 3%;
								display: flex;
								flex-direction: row;
								align-items: flex-end;
								justify-content: space-between;
								margin-bottom: 1.25rem;
								img {
									width: 1.25rem;
									height: 1.25rem;
								}
								.money-text {
									display: flex;
									flex-direction: row;
									align-items: flex-end;
									.now-price {
										display: flex;
										flex-direction: row;
										p {
											color: #ff0606;
											font-size: 1.125rem;
										}
										p:nth-child(2) {
											margin-left: 0.3125rem;
										}
									}
									.before-price{
										p {
											color: #999999;
											font-size: 0.75rem;
											margin-left: 0.625rem;
											text-decoration: line-through;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
