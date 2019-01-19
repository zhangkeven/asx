<template>
	<div class="main">
		<Topnav v-on:listenChildEvent="searchInput" ref="data"></Topnav>
		<img src="../../assets/img/loginBg.png" class="big-bg-img" alt="" @mouseenter="clearDropDown()">
		<img src="../../assets/img/loginBg2.png" class="small-bg-img" alt="" @mouseenter="clearDropDown()">
		<div class="enter-window" @mouseenter="clearDropDown()">
			<p class="register-title windowTitle">
				快速注册
			</p>
			<div class="register-line-bg input-bg">
				<img src="../../assets/img/phone(1).png" alt="">
				<input class="inputStyle" type="number" placeholder="请输入手机号">
			</div>
			<div class="register-line-bg-upwd">
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

			<div class="register-line-bg input-bg">
				<img src="../../assets/img/lock.png" alt="">
				<input class="inputStyle" type="text" placeholder="请输入密码">
			</div>
			<div class="register-line-bg input-bg" style="margin-bottom: 1.875rem;">
				<img src="../../assets/img/lock.png" alt="">
				<input class="inputStyle"  type="text" placeholder="请再次输入密码">
			</div>
			<div class="register-line-bg agree-bg">
				<div class="agree-bg">
					<input type="checkbox" id="agree">
					<label for="agree">
						<p>已阅读并同意注册</p>
					</label>
					<p style="color: #4057d7;cursor: pointer;">用户协议</p>
				</div>
				<div class="number-login">
					<p @click="gologin()">账号登录></p>
				</div>
			</div>
			<div class="register-line-bg registerBtn btn">
				<p>完成注册</p>
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
		}
	}
</script>

<style>

	p.register-title {
		margin-top: 1.875rem;
		margin-bottom: 3.125rem;
	}

	.register-line-bg {
		display: flex;
		flex-direction: row;
		width: 60%;
		align-items: center;
	}
	.register-line-bg-upwd{
		display: flex;
		flex-direction: row;
		width: 60%;
		align-items: center;
		margin-bottom: 1.625rem;
		justify-content: space-between;
	}
	div.register-line-bg-upwd>div:nth-child(1){
		display: flex;
		flex-direction: row;
		width: 55%;
		align-items: center;

		background-color: #FFF;
		border-radius: 1.125rem;
	}

	div.register-line-bg-upwd>div:nth-child(1)>img{
		width: 1rem;
		height: 1.125rem;
		margin-left: 12%;
	}

	div.register-line-bg-upwd>div:nth-child(2){
		display: flex;
		flex-direction: row;
		width: 40%;
		align-items: center;
		justify-content: center;
		background-color: #852833;
		border-radius: 1.125rem;
		padding:0.5rem 0;
	}
	div.register-line-bg-upwd>div:nth-child(2)>p{
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

	.agree-bg {
		justify-content: space-between;
	}

	.agree-bg {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.agree-bg>p {
		color: #333333;
		font-size: 0.75rem;
	}

	.agree-bg>input {
		cursor: pointer;
	}

	.agree-bg>label>p {
		color: #333333;
		font-size: 0.75rem;
		cursor: pointer;
	}

	.number-login {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.number-login>p {
		color: #333333;
		font-size: 0.75rem;
		cursor: pointer;
	}

	.number-login>p:nth-child(1) {
		padding-right: 0.3125rem;
	}
	.registerBtn{
		margin-top: 3.125rem;
		margin-bottom: 4.25rem;
	}


</style>
