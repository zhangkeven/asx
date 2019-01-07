<template>
	<div class="main">
		<Topnav v-on:listenChildEvent="searchInput" ref="data"></Topnav>
		<img src="../../assets/img/loginBg.png" class="big-bg-img" alt="" @mouseenter="clearDropDown()">
		<img src="../../assets/img/loginBg2.png" class="small-bg-img" alt="" @mouseenter="clearDropDown()">
		<div class="enter-window" @mouseenter="clearDropDown()">
			<p class="complete-title windowTitle">
				找回密码
			</p>
			<div class="complete-line-bg input-bg">
				<img class="input-icon" src="../../assets/img/lock.png" alt="">
				<input class="inputStyle" type="text" placeholder="请输入密码">
			</div>
			<div class="complete-line-bg input-bg" style="margin-bottom: 0;">
				<img class="input-icon" src="../../assets/img/lock.png" alt="">
				<input class="inputStyle" type="text" placeholder="请再次输入密码">
			</div>
			<div class="complete-line-bg completeUpwdBtn btn">
				<p>完成</p>
			</div>
		</div>
		<div class="bottom-background" @mouseenter="clearDropDown()">
			<Bottom />
		</div>
	</div>
</template>

<script>
	import Topnav from '../../components/topnav'
	import Bottom from '../../components/bottom'
	export default {
		components: {
			Bottom,
			Topnav
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
				console.log('子组件中触发注册页面', e); //子组件输入框触发,e代表输入框中的值
			},
			gologin(){
				this.$router.push({name:'Login',params:{}})
			},
			goregister(){
				this.$router.push({name:'Register',params:{}})
			}
		}
	}
</script>

<style>
	
	p.complete-title {
		margin-top: 1.875rem;
		margin-bottom: 3.125rem;
	}
	
	.complete-line-bg {
		display: flex;
		flex-direction: row;
		width: 60%;
		align-items: center;
	}
	.complete-line-bg-upwd{
		display: flex;
		flex-direction: row;
		width: 60%;
		align-items: center;
		justify-content: space-between;
	}
	div.complete-line-bg-upwd>div:nth-child(1){
		display: flex;
		flex-direction: row;
		width: 55%;
		align-items: center;
		
		background-color: #FFF;
		border-radius: 1.125rem;
	}
	
	
	div.complete-line-bg-upwd>div:nth-child(2){
		display: flex;
		flex-direction: row;
		width: 40%;
		align-items: center;
		justify-content: center;
		background-color: #852833;
		border-radius: 1.125rem;
		padding:0.5rem 0;
	}
	div.complete-line-bg-upwd>div:nth-child(2)>p{
		color: #fff;
		font-size: 0.875rem;
	}
	
	
	
	
	div.enter-window>div.input-bg {
		background-color: #FFFFFF;
		border-radius: 1.125rem;
		margin-bottom: 1.625rem;
	}
	
	div.enter-window>div.input-bg>img {
		width: 1rem;
		height: 1.125rem;
		margin-left: 6%;
	}	
	.completeUpwdBtn {
		margin-top:3.125rem;
		margin-bottom:4.25rem;
	}
</style>
