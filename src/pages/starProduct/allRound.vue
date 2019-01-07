<template>
	<div class="main">
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>

		<div class="bottom-background" @mouseenter="clearDropDown()">
			<Bottom />
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Bottom from '../../components/bottom'
	import RightNav from '../../components/rightNav'
	export default {
		components: {
			Bottom,
			Header,
			RightNav
		},
		data() {
			return {

			};
		},
		methods:{
			clearDropDown(){
				this.$refs.data.showstartdrop = false;
				this.$refs.data.showModal = false;
				this.$refs.data.showAboutdrop=false;
				this.$refs.data.showUsermodal=false;
				this.$refs.data.windowBg = 'background-color: #FFFFFF';
			},
			searchInput(e) {
				console.log('子组件中触发明星产品页面', e); //子组件输入框触发,e代表输入框中的值
			}
		},
		mounted(){

		}
	}
</script>

<style>

</style>
