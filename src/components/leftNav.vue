<template>
	<div class="my-order">
		<div class="user-icon">
			<img src="../assets/img/avatar.png" alt="">
		</div>
		<div v-bind:class="activeId==0?'my-btn' : 'not-choose-btn'" @click="gomyorder">
			<p>我的订单</p>
		</div>
		<div v-bind:class="activeId==1?'my-btn' : 'not-choose-btn'">
			<p>我的优惠卷</p>
		</div>
		<div v-bind:class="activeId==2?'my-btn' : 'not-choose-btn'">
			<p>我的收藏</p>
		</div>
		<div v-bind:class="activeId==3?'my-btn' : 'not-choose-btn'">
			<p>我的足迹</p>
		</div>
		<div v-bind:class="activeId==4?'my-btn' : 'not-choose-btn'">
			<p>收获地址</p>
		</div>
		<div v-bind:class="activeId==5?'my-btn' : 'not-choose-btn'" @click="gosalesReturn">
			<p>退换货</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeId:0
			};
		},
		methods:{
			gosalesReturn(){
				this.$router.push({
					name: 'SalesReturn',
					params: {}
				})
			},
			gomyorder(){
				this.$router.push({
					name: 'MyOrder',
					params: {}
				})
			}
		}
	}
</script>

<style>
.my-order {
	width: 18.5%;
	height: 33.125rem;
	display: flex;
	flex-direction: column;
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
	cursor: pointer;
}

.my-btn>p {
	color: #FFF;
	font-size: 0.875rem;
}
.not-choose-btn{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0.9375rem 0;
	cursor: pointer;
}
.not-choose-btn>p{
	color: #333333;
	font-size: 0.875rem;
}
.not-choose-btn:hover{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #b52637;
	padding: 0.9375rem 0;
	cursor: pointer;
}
.not-choose-btn:hover>p{
	color: #FFFFFF;
}
</style>
