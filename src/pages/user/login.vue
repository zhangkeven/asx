<template>
	<div class="main">
		<Topnav v-on:listenChildEvent="searchInput" ref="data"></Topnav>
		<img src="../../assets/img/loginBg.png" class="big-bg-img" alt="" @mouseenter="clearDropDown()">
		<img src="../../assets/img/loginBg2.png" class="small-bg-img" alt="" @mouseenter="clearDropDown()">
		<div class="enter-window" @mouseenter="clearDropDown()">
			<p class="login-title windowTitle">
				账号登录
			</p>
			<div class="login-line-bg input-bg">
				<img src="../../assets/img/phone(1).png" alt="">
				<input class="inputStyle" type="number" placeholder="请输入手机号">
			</div>
			<div class="login-line-bg input-bg">
				<img src="../../assets/img/lock.png" alt="">
				<input class="inputStyle" type="text" placeholder="请输入密码">
			</div>
			<div class="login-line-bg upwd-bg">
				<div class="remeber-upwd">
					<input  type="checkbox" id="remberupwd">
					<label for="remberupwd">
						<p>记住登录密码</p>
					</label>
				</div>
				<div class="forget-upwd">
					<p @click="goFindUpwd()">忘记密码</p>
					<p @click="goregister()">快速注册</p>
				</div>
			</div>
			<div class="login-line-bg loginBtn btn">
				<p>立即登录</p>
			</div>
			<div class="login-line-bg other-login">
				<p>其他方式登录</p>
				<p><img src="../../assets/img/wchat.png" alt=""></p>
				<p><img src="../../assets/img/QQ.png" alt=""></p>
				<p @click="goShortcutLogin()">快捷登录></p>
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
			Topnav,
			Bottom
		},
		data() {
			return {

			};
		},
		methods: {
			clearDropDown(){
				this.$refs.data.showstartdrop = false;
				this.$refs.data.showModal = false;
				this.$refs.data.showAboutdrop=false;
				this.$refs.data.showUsermodal=false;
				this.$refs.data.windowBg = 'background-color: #FFFFFF';
			},
			searchInput(e) {
				console.log('子组件中触发登录页面', e); //子组件输入框触发,e代表输入框中的值
			},
			goregister() {
				this.$router.push({name:'Register',params:{}})
			},
			goShortcutLogin(){
				this.$router.push({name:'ShortcutLogin',params:{}})
			},
			goFindUpwd(){
				this.$router.push({name:'FindUpwd',params:{}})
			}
		}
	}
</script>

<style>
	p.login-title {
		margin-top: 1.875rem;
		margin-bottom: 3.125rem;
	}

	.login-line-bg {
		display: flex;
		flex-direction: row;
		width: 60%;
		align-items: center;
	}

	.input-bg {
		background-color: #FFFFFF;
		border-radius: 1.125rem;
		margin-bottom: 1.625rem;
	}

	.input-bg>img {
		width: 1rem;
		height: 1.125rem;
		margin-left: 6%;
	}

	.upwd-bg {
		justify-content: space-between;
	}

	.remeber-upwd {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.remeber-upwd>p {
		color: #333333;
		font-size: 0.75rem;
	}

	.remeber-upwd>input {
		cursor: pointer;
	}

	.remeber-upwd>label>p {
		color: #333333;
		font-size: 0.75rem;
		cursor: pointer;
	}

	.forget-upwd {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.forget-upwd>p {
		color: #333333;
		font-size: 0.75rem;
		cursor: pointer;
	}

	.forget-upwd>p:nth-child(1) {
		padding-right: 0.3125rem;
	}

	.loginBtn {
		margin-top: 3.25rem;
		margin-bottom: 1.625rem;
	}

	.other-login {
		justify-content: space-between;
		margin-bottom: 4.5rem;
	}

	.other-login>p {
		color: #333333;
		font-size: 0.75rem;
		cursor: pointer;
	}

	.other-login>p:nth-child(2)>img {
		width: 1.5625rem;
		height: 1.25rem;
		cursor: pointer;
	}

	.other-login>p:nth-child(3)>img {
		width: 1.4rem;
		height: 1.25rem;
		cursor: pointer;
	}
</style>
