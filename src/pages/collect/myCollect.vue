<template>
	<div class="person-main">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div id="myCollect">
			<div class="order-main">
				<div class="order-conent">
					<LeftNav ref="leftnav"></LeftNav>
					<div class="right-conent">
						
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
		},
		computed: {

		},
		mounted() {
			this.$refs.leftnav.activeId=2;
		}
	}
</script>

<style lang="scss" scoped>
#myCollect{
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
					width: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
				}
			}
		}
		
	}
}
</style>
