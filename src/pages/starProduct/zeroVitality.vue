<template>
	<div class="main">
		<Header v-on:listenChildEvent="searchInput"></Header>
		
		<Bottom></Bottom>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Bottom from '../../components/bottom'
	export default {
		components: {
			Bottom,
			Header
		},
		data() {
			return {
				
			};
		},
		methods:{
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
