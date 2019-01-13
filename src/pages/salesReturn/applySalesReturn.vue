<template>
	<div class="main mainBg">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div id="applySalesReturn" class="conent">
			<div class="applySalesReturn-title">
				<p>商品信息</p>
			</div>
			<div class="applySalesReturn-conent">
				<div class="conent-title">
					<p>商品信息</p>
					<p>价格</p>
					<p>数量</p>
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
							<p>1</p>
						</div>
					</div>
				</div>
			</div>
			<div class="applySalesReturn-title" style="margin-top: 0;">
				<p>服务类型</p>
			</div>
			<div class="serverBg">
				<div @click="choosesalesReturn">
					<img v-show="showimg" src="../../assets/img/thuochoose.png" alt="">
					<img v-show="!showimg" src="../../assets/img/thuowei.png" alt="">
					<p>退货</p>
				</div>
				<div @click="chooseexchange">
					<img v-show="!showimg" src="../../assets/img/thuochoose.png" alt="">
					<img v-show="showimg" src="../../assets/img/thuowei.png" alt="">
					<p>换货</p>
				</div>
			</div>
			<div class="applySalesReturn-title" style="margin-top: 0;">
				<p>退货原因</p>
			</div>
			<div class="returnCause">
				<div :class="imgid==0?'chooseBtn':'notchooseBtn'" @click="chooseCause(0)">
					<p>我不想要了</p>
					<img v-if="imgid==0" src="../../assets/img/tuihuogou.png" alt="">
				</div>
				<div :class="imgid==1?'chooseBtn':'notchooseBtn'" @click="chooseCause(1)">
					<p>质量问题</p>
					<img v-if="imgid==1" src="../../assets/img/tuihuogou.png" alt="">
				</div>
				<div :class="imgid==2?'chooseBtn':'notchooseBtn'" @click="chooseCause(2)">
					<p>发货慢</p>
					<img v-if="imgid==2" src="../../assets/img/tuihuogou.png" alt="">
				</div>
			</div>
			<div class="applySalesReturn-title" style="margin-top: 0;">
				<p>退款金额</p>
			</div>
			<div class="money-bg">
				<div>
					<p>¥ 3000.00</p>
				</div>
			</div>
			<div class="applySalesReturn-title" style="margin-top: 0;">
				<p>退款说明</p>
			</div>
			<div class="return-explain">
				<textarea ref="inputVal" @input="importText" placeholder="退款说明" />

			</div>
			<div class="confirmBtn">
				<div>
					<p>确定</p>
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
			showimg:true,
			imgid:0
		};
	},
	methods: {
		importtext() {
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
		choosesalesReturn(){
			this.showimg=true;
		},
		chooseexchange(){
			this.showimg=false;
		},
		chooseCause(index){
			if(this.imgid==index){
				
			}else{
				this.imgid=index
			}
		},
		importText(){
			console.log('input输入的值', this.$refs.inputVal.value);
		},
	},
	computed: {}
};
</script>
<style lang="scss" scoped>
.mainBg {
	background-color: #f9f9f9;
}
.textplaceholder {
	font-size: 0.875rem;
	color: red;
}
#applySalesReturn {
	margin-top: 6.875rem;
	
	div.applySalesReturn-title {
		width: 96%;
		padding: 0.5rem 2%;
		margin-top: 0.625rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color:#EBEBEB;
		p:first-child {
			color: #999999;
		}

		p:last-child {
			color: #666666;
		}
	}

	div.applySalesReturn-conent {
		width: 100%;

		div.conent-title {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: #fff;
			border: 0.0625rem solid #ebebeb;
			border-bottom: none;
			padding: 0.5rem 0;
			box-sizing:border-box;
			p {
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
			background-color: #ffffff;
			display: flex;
			flex-direction: column;
			div.product-detail {
				width: 100%;
				display: flex;
				flex-direction: row;
				border: 0.0625rem solid #ebebeb;
				box-sizing: border-box;
				margin-bottom: 2.6875rem;
				div.product-size {
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
						border: 0.0625rem solid #ebebeb;
					}

					div {
						width: 96%;
						margin-left: 2%;
						p {
							width: 50%;
							line-height: 150%;
							font-size: 0.875rem;
							color: #666666;
						}
						div {
							width: 50%;
							margin-left: 0;
							display: flex;
							flex-direction: row;
							align-items: center;
							p {
								width: auto;
								line-height: auto;
							}
							p:first-child {
								margin-right: 2%;
								font-size: 0.75rem;
								color: #999999;
							}
							p:nth-child(2) {
								margin-right: 8%;
								font-size: 0.875rem;
								color: #666666;
							}
							p:nth-child(3) {
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
					border-left: 0.0625rem solid #ebebeb;
					p {
						font-size: 1rem;
						color: #666666;
					}
				}
			}
			
		}
	}
	div.serverBg{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		background-color: #ffffff;
		padding:1.5rem 0;
		div{
			width: auto;
			display: flex;
			flex-direction: row;
			align-items: center;
			cursor: pointer;
			p{
				font-size: 1.125rem;
				color: #666666;
				margin-left: 1.25rem;
			}
		}
	}
	div.returnCause{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		background-color: #ffffff;
		padding:1.5rem 0;
		div.chooseBtn{
			border:0.125rem solid #852833;
			box-sizing: border-box;
			border-radius: 0.5rem;
		}
		div.notchooseBtn{
			border:0.125rem solid #f0f0f0;
			border-radius: 0.5rem;
			box-sizing: border-box;
		}
		div{
			width: 8.625rem;
			height: 3rem;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			position: relative;
			cursor: pointer;
			p{
				color: #666666;
					font-size: 1.125rem;
			}
			img{
				position: absolute;
				bottom: 0;
				right: 0;
			}
		}
	}
	div.money-bg{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		background-color: #ffffff;
		padding:1.5rem 0;
		div{
			width: 8.625rem;
			height: 3rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			border:0.125rem solid #852833;
			border-radius: 0.5rem;
			box-sizing: border-box;
			p{
				font-size: 1.125rem;
				color: #852833;
				margin-left: 1.25rem;
			}
		}
	}
	div.return-explain{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		background-color: #ffffff;
		padding:1.5rem 0;
		textarea{
			width: 80%;
			border-radius: 0.5rem;
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
	div.confirmBtn{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		margin-bottom: 13.125rem;
		div{
			width: 12rem;
			height: 3rem;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			background-color: #852833;
			border-radius: 0.5rem;
			box-sizing: border-box;
			margin:2.5rem 0;
			p{
				color: #FFFFFF;
				font-size: 1.5rem;
			}
		}
	}
}
</style>
