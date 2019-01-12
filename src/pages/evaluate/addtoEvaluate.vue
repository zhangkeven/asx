<template>
	<div class="main mainBg">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div id="addtoEvaluate" class="conent">
			<div class="evaluate-title">
				<p>我的订单></p>
				<p>评价</p>
			</div>
			<div class="evaluate-conent">
				<div class="conent-title">
					<p>商品信息</p>
					<p>价格</p>
					<p>购买时间</p>
				</div>
				<div class="product-detail-bg">
					<div class="product-detail">
						<div class="product-size">
							<img src="../../assets/img/1.0.png" alt="">
							<div>
								<p>
									全能平低锅介绍名称全能平低锅介绍名称全能平低锅介绍名称
								</p>
								<div>
									<p>颜色:</p>
									<p>茶色</p>
									<p>尺寸:</p>
									<p>M</p>
								</div>
							</div>
						</div>
						<div class="product-price">
							<p>¥ 3000</p>
						</div>
						<div class="product-price">
							<p>2018-12-02</p>
						</div>
					</div>
					<div class="product-grade">
						<div>
							<p>初次评价:</p>
							<div>
								<p>
									以前总觉得用压力锅有点害怕！但是零秒活力锅不一样，让我可以轻松煮出小孩爱吃的咖哩，还不用花费许多时间，只要将食材切块放进去，不需翻炒，不需熬煮，就能煮出超好吃的美味咖哩，小孩吃得赞不绝口！
								</p>
								<div class="grade-img">
									<img src="../../assets/img/1.0.png" alt="" v-for="item in imglist">
								</div>
							</div>
						</div>
						<div>
							<p>追加评价:</p>
							<div>
								<textarea ref="inputVal" @input="importtext" placeholder="对商品满意吗？来分享您的使用感受吧~~" />
								</div>
						</div>
						<div>
							<p>晒图:</p>
							<div>
								<p>添加照片</p>
								<p>最多可以上传9张</p>
							</div>
						</div>
						<div>
							<p>发表</p>
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
	import Header from '../../components/header'
	import Bottom from '../../components/bottom'
	import LeftNav from '../../components/leftNav'
	import RightNav from '../../components/rightNav'
	import location from '../../assets/js/city-data.js'
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
				imglist:['','','','','','','','','','','','','','','','',]
			};
		},
		methods: {
			importtext(){
				console.log('input输入的值', this.$refs.inputVal.value);
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
		},
		computed: {

		}
	}
</script>
<style lang="scss" scoped>
	.mainBg {
		background-color: #f9f9f9;

	}
	.textplaceholder{
		font-size: 0.875rem;
		color: red;
	}
	#addtoEvaluate {
		margin-top: 4.375rem;

		div.evaluate-title {
			width: 100%;
			padding: 1.5rem 0;
			margin-top: 0.625rem;
			display: flex;
			flex-direction: row;
			align-items: center;

			p:first-child {
				color: #999999;
			}

			p:last-child {
				color: #666666;
			}
		}

		div.evaluate-conent {
			width: 95%;

			div.conent-title {
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				background-color: #F4F4F4;
				padding: 0.5rem 0;
				p{
					font-size: 0.875rem;
					color: #999999;
				}
				p:first-child {
					width: 62%;
					padding-left: 5%;
				}

				p:not(:first-child) {
					width: 16.5%;
					text-align: center;
				}
			}

			div.product-detail-bg {
				width: 100%;
				background-color: #FFFFFF;
				display: flex;
				flex-direction: column;	
				div.product-detail {
					width: 100%;
					display: flex;
					flex-direction: row;
					border-bottom: 0.0625rem solid #EBEBEB;
					box-sizing: border-box;
					margin-bottom: 2.6875rem;
					div.product-size{
						flex: 1;
						min-height: 8rem;
						padding-left: 3%;
						display: flex;
						flex-direction: row;
						align-items: center;
						margin-bottom: 0;
						border-bottom: none;
						img {
							width: 15%;
							height: 50%;
							border: 0.0625rem solid #EBEBEB;
						}

						div {
							width: 96%;
							margin-left: 2%;
							p{
								width: 50%;
								line-height: 150%;
								font-size: 0.875rem;
								color: #666666;
							}
							div{
								width: 50%;
								margin-left: 0;
								display: flex;
								flex-direction: row;
								align-items: center;
								p{
									width: auto;
									line-height: auto;
								}
								p:first-child{
									margin-right: 2%;
									font-size: 0.75rem;
									color: #999999;
								}
								p:nth-child(2){
									margin-right: 8%;
									font-size: 0.875rem;
									color: #666666;
								}
								p:nth-child(3){
									margin-right: 2%;
									font-size: 0.75rem;
									color: #999999;
								}
							}
						}
					}
					div.product-price {
						width: 16.5%;
						min-height: 8rem;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						border-left: 0.0625rem solid #EBEBEB;
						p{
							font-size: 1rem;
							color: #666666;
						}
					}
				}
				div.product-grade{
					width: 90%;
					padding-left:5%;
					padding-right: 5%;
					div:first-child{
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: flex-start;
						margin-bottom:2.5rem;
						p{
							width: 15%;
							text-align: right;
							font-size: 1rem;
							color: #666666;
						}
						div{
							margin-left: 2.875rem;
							flex: 1;
							display: flex;
							flex-direction: column;
							align-items: flex-start;
							justify-content: center;
							flex-wrap: wrap;
							p{
								font-size: 0.875rem;
								color: #333333;
								width: 100%;
								padding:0 0;
								margin:0 0;
								background: #FFFFFF;
								text-align: left;
							}
							div.grade-img{
								width: 100%;
								display: flex;
								flex-direction: row;
								align-items: center;
								justify-content: flex-start;
								flex-wrap: wrap;
								margin-left: 0;
								margin-top: 0.625rem;
								img{
									margin-right: 1%;
									width: 10%;
									margin-bottom: 0.625rem;
								}
							}
						}
					}
					div:nth-child(2){
						width: 100%;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: flex-start;
						p{
							width: 15%;
							text-align: right;
							font-size: 1rem;
							color: #666666;
						}
						div{
							margin-left: 2.875rem;
							flex: 1;
							display: flex;
							flex-direction: row;
							align-items: center;
							textarea{
								width: 100%;
								min-height:16.125rem;
								outline:none;
								color: #666666;
								font-size: 0.875rem;
							}
							textarea::placeholder{
								color: #999999;
								font-size: 0.875rem;
							}
						}
					}
					div:nth-child(3){
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: center;
						margin-top:2.5rem;
						margin-bottom: 5rem;
						p{
							width: 15%;
							text-align: right;
							font-size: 1rem;
							color: #666666;
						}
						div{
							margin-left: 2.875rem;
							flex: 1;
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							p{
								width: auto;
								text-align: left;
								margin-bottom: 0;
								font-size: 1rem;
							}
							p:first-child{
								background-color: #852833;
								color: #FFFFFF;
								padding: 0.5rem 2rem;
							}
							p:last-child{
								margin-left: 1.25rem;
								color: #666666;
								background-color: #FFFFFF;
								padding:0 0;
							}
						}
					}
					div:last-child{
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						
						p{
							background: #852833;
							color: #FFFFFF;
							padding:0.5rem 6.25rem;
							font-size: 1.5rem;
							border-radius: 0.3125rem;
							cursor: pointer;
							margin-bottom: 4.25rem;
						}
					}
				}
			}
		}
	}
	
</style>
