<template>
	<div class="person-main">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div id="myDiscountCoupon">
			<div class="order-main">
				<div class="order-conent">
					<LeftNav ref="leftnav"></LeftNav>
					<div class="right-conent">
						<div class="top-nav-bg">
							<p :class="activeId==0?'activeBtn':''" @click="chooseType(0)">可用优惠券</p>
							<p :class="activeId==1?'activeBtn':''" @click="chooseType(1)">已用优惠券</p>
							<p :class="activeId==2?'activeBtn':''" @click="chooseType(2)">过期优惠券</p>
							<p :class="activeId==3?'activeBtn':''" @click="chooseType(3)">回收站优惠券</p>
						</div>
						<div class="myDiscountCoupon-conent">
							<div v-show="activeId==0">
								可用
							</div>
							<div v-show="activeId==1">
								已用
							</div>
							<div v-show="activeId==2">
								过期
							</div>
							<div v-show="activeId==3">
								回收站
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
				activeId:0
			};
		},
		methods: {
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
			chooseType(index){
				if(this.activeId==index){
					
				}else{
					this.activeId=index
				}
			}
		},
		computed: {

		},
		mounted(){
			this.$refs.leftnav.activeId=1;
		}
	}
</script>

<style lang="scss" scoped>
#myDiscountCoupon{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.order-main{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 68%;
		.order-conent{
			margin-top: 7.5rem;
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.right-conent{
				width: 78%;
				display: flex;
				flex-direction: column;
				margin-bottom:5rem;
				.top-nav-bg{
					width: 75%;
					display: flex;
					flex-direction: row;
					align-items: center;
					padding-right: 25%;
					justify-content: space-between;
					border-bottom:0.125rem solid #e3e3e3;
					p{
						cursor: pointer;
						color: #666666;
						font-size: 1.125rem;
						padding:0.3125rem 0.625rem;
					}
					p:hover{
						border-bottom:0.125rem solid #852833;
						color: #852833;
					}
					p.activeBtn{
						border-bottom:0.125rem solid #852833;
						color: #852833;
					}
				}
				div.myDiscountCoupon-conent{
					width: 100%;
					height: auto;
				}
			}
		}
		
	}
}
</style>
