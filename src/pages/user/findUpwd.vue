<template>
	<div class="main">
		<Topnav v-on:listenChildEvent="searchInput" ref="data"></Topnav>
		<img src="../../assets/img/loginBg.png" class="big-bg-img" alt="" @mouseenter="clearDropDown()">
		<img src="../../assets/img/loginBg2.png" class="small-bg-img" alt="" @mouseenter="clearDropDown()">
		<div class="enter-window" @mouseenter="clearDropDown()">
			<p class="shortcutLogin-title windowTitle">
				找回密码
			</p>
			<div class="shortcutLogin-line-bg input-bg">
				<img src="../../assets/img/phone(1).png" alt="">
				<input class="inputStyle" type="number" placeholder="请输入手机号">
			</div>
			<div class="find-line-bg-upwd">
				<div>
					<img src="../../assets/img/lock.png" alt="">
					<input class="inputStyle" type="number" placeholder="请输入验证码">
				</div>
				<div>
					<p>
						获取验证码
					</p>
				</div>
			</div>
			<div class="shortcutLogin-line-bg shortcutLoginBtn btn" @click="goFindwd()">
				<p>下一步</p>
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
  import Service from '../../assets/service/service.js'
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
			},
			goFindwd(){
				this.$router.push({name:'CompleteUpwd',params:{}})
			}
		}
	}
</script>

<style>

	p.shortcutLogin-title {
		margin-top: 1.875rem;
		margin-bottom: 3.125rem;
	}

	.shortcutLogin-line-bg {
		display: flex;
		flex-direction: row;
		width: 60%;
		align-items: center;
	}
	.find-line-bg-upwd{
		display: flex;
		flex-direction: row;
		width: 60%;
		align-items: center;
		justify-content: space-between;
	}
	div.find-line-bg-upwd>div:nth-child(1){
		display: flex;
		flex-direction: row;
		width: 55%;
		align-items: center;

		background-color: #FFF;
		border-radius: 1.125rem;
	}
	div.find-line-bg-upwd>div:nth-child(1)>img{
		width: 1rem;
		height: 1.125rem;
		margin-left: 12%;
	}

	div.find-line-bg-upwd>div:nth-child(2){
		display: flex;
		flex-direction: row;
		width: 40%;
		align-items: center;
		justify-content: center;
		background-color: #852833;
		border-radius: 1.125rem;
		padding:0.5rem 0;
	}
	div.find-line-bg-upwd>div:nth-child(2)>p{
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
	.shortcutLoginBtn {
		margin-top:3.125rem;
		margin-bottom:1.875rem;
	}
	div.shortcutLogin-bottom{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 60%;
		margin-bottom: 4.25rem;
	}
	div.shortcutLogin-bottom>p{
		font-size: 0.875rem;
		color: #333333;
		cursor: pointer;
	}
</style>
