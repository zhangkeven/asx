<template>
	<div class="head-main">
		<div class="nav-bg" :style="windowBg">
			<div class="top-Left" @mouseenter="clearDropdown()">
				<div class="top-Left-Title">
					<img src="../assets/img/logo.png" alt="">
				</div>
			</div>
			<div class="menu-nav">
				<a href="javascript:" @click="goMain()" @mouseenter="clearDropdown()">首页</a>
				<div>
					<a href="javascript:" @click="goStart()" @mouseenter="enterStart()">明星产品</a>
					<div class="drop-down-box" v-show="showstartdrop">
						<p @click="goStart()">零秒活力锅</p>
						<p @click="goAllRound()">全能平底锅</p>
						<p>梦幻公主锅</p>
						<p>天使锅</p>
					</div>
				</div>
				<a href="javascript:" @click="goCoreyroom()" @mouseenter="clearDropdown()">料理教室</a>
				<a href="javascript:" @click="goshare()" @mouseenter="clearDropdown()">使用者分享</a>
				<div>
					<a href="javascript:" @click="goAbout" data-id="1" @mouseenter="enterAbout()">关于我们</a>
					<div class="drop-down-box" v-show="showAboutdrop">
						<p @click="goAbout" data-id="1">公司简介</p>
						<p @click="goAbout" data-id="2">公司摘要</p>
						<p @click="goAbout" data-id="3">历史事件</p>
						<p @click="goAbout" data-id="4">新闻中心</p>
						<p @click="goAbout" data-id="5">联系我们</p>
					</div>
				</div>
				<p href="javascript:" @click="goBuy()" @mouseenter="clearDropdown()">我要购买</p>
			</div>
			<div class="nav-right">
				<div class="search-Bg" @mouseenter="clearDropdown()">
					<input type="text" @input="search" ref="inputVal" @keyup.enter="submit()">
					<img @click="submit()" src="../assets/img/search.png" alt="">
				</div>
				<img src="../assets/img/person.png" @mouseenter="enterPerson()" alt="">
				<div class="user-photo" @mouseenter="showUserModal()">
					<p>张三*</p>
				</div>
				<img src="../assets/img/cart.png" alt="" @mouseenter="clearDropdown()" @click="goCart">
			</div>
		</div>
		<div class="chooseLogin1" v-show="showModal">
			<div>
				<p @click="goLogin()">登录</p>
				<p @click="goRegister()">注册</p>
			</div>
		</div>
		<div class="show-user-detail" v-show="showUsermodal">
			<div>
				<p @click="goMyOrder">我的订单</p>
				<p @click="goCollect">我的收藏</p>
				<p @click="goMylocation">我的地址</p>
				<p @click="">修改密码</p>
				<p @click="">退出登录</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		// name: "nav"
		data() {
			return {
				inputVal: '',
				searchText: '',
				showstartdrop: false,
				showModal: false,
				showAboutdrop:false,
				showUsermodal:false,
				windowBg: 'background-color: #FFFFFF',
				activeId:1
			}
		},
		methods: {
			goMain() {
				this.$router.push({
					name: 'Main',
					params: {}
				})
			},
			goStart() {
				this.$router.push({
					name: 'ZeroVitality',
					params: {}
				})
			},
			goAllRound(){
				this.$router.push({
					name: 'AllRound',
					params: {}
				})
			},
			goCoreyroom() {
				this.$router.push({
					name: 'Coreyroom',
					params: {}
				})
			},
			goshare() {
				this.$router.push({
					name: 'Share',
					params: {}
				})
			},
			goAbout(e) {
				this.$emit('listenActiveId', e.currentTarget.dataset.id)				
				this.$router.push({
					name: 'About',
					params: {id:e.currentTarget.dataset.id}
				})
			},
			goBuy() {
				this.$router.push({
					name: 'Buy',
					params: {}
				})
			},
			goMyOrder(){
				this.$router.push({
					name: 'MyOrder',
					params: {}
				})
			},
			goCollect(){
				this.$router.push({
					name: 'MyCollect',
					params: {}
				})	
			},
			goMylocation(){
				this.$router.push({
					name: 'AddLocation',
					params: {}
				})	
			},
			goCart() {
				this.$router.push({
					name: 'Cart',
					params: {}
				})
			},
			goLogin() {
				this.$router.push({
						name: 'Login',
						params: {}
					}),
					this.showModal = false;
			},
			goRegister() {
				this.$router.push({
						name: 'Register',
						params: {}
					}),
					this.showModal = false;
			},
			/*模糊搜索*/
			search() {
				console.log('input输入的值', this.$refs.inputVal.value);
				this.searchText = this.$refs.inputVal.value
			},
			submit() {
				// 子组件中触发父组件方法searchInput并传值
				this.$emit('listenChildEvent', this.searchText)
			},
			clearDropdown() {
				this.showstartdrop = false;
				this.showModal = false;
				this.showAboutdrop=false;
				this.showUsermodal=false;
				this.windowBg = 'background-color: #FFFFFF';
			},
			showUserModal(){
				this.showUsermodal=true;
				this.showModal = false;
				this.showstartdrop = false;
				this.showAboutdrop=false;
				this.windowBg = 'background-color: #eeeeee';
			},
			enterPerson() {
				this.showModal = true;
				this.showstartdrop = false;
				this.showAboutdrop=false;
				this.showUsermodal=false;
				this.windowBg = 'background-color: #eeeeee';
			},
			enterStart() {
				this.showstartdrop = true;
				this.showAboutdrop=false;
				this.showModal = false;
				this.showUsermodal=false;
				this.windowBg = 'background-color: #eeeeee';
			},
			enterAbout(){
				this.showstartdrop = false;
				this.showAboutdrop=true;
				this.showModal = false;
				this.showUsermodal=false;
				this.windowBg = 'background-color: #eeeeee'
			}
		},
		mounted() {

		}
	}
</script>

<style>
	.head-main {
		width: 100%;
		min-width: 81.25rem;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 6;
	}

	.nav-bg {
		width: 88%;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 1rem 6%;
		z-index: 6;
		box-shadow: 0 0.3125rem 0.9375rem 0 #dcdcdc;
	}

	.top-Left {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		cursor: pointer;
	}

	.menu-nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 40%;
	}

	.menu-nav a {
		font-size: 1rem;
		color: #333333;
		transition: color linear .5s;
	}

	.menu-nav>a:first-child {
		width: 9%;
		text-align: center;
	}

	.menu-nav>a:not(:first-child) {
		width: 18%;
		text-align: center;
	}

	.menu-nav>div {
		width: 18%;
		text-align: center;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.menu-nav>div>div.drop-down-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background-color: #FFFFFF;
		position: absolute;
		left: 0;
		top: 2.8125rem;
		padding: 0.3125rem 0;
	}

	.menu-nav>div>div.drop-down-box>p {
		cursor: pointer;
		color: #666;
		font-size: 1rem;
		transition: color linear .5s;
	}

	.menu-nav>div>div.drop-down-box>p:hover {
		color: #852833;
	}

	.menu-nav>div>div.drop-down-box>p:not(:last-child) {
		margin-bottom: 0.9375rem;
	}

	.menu-nav a:hover {
		color: #9f303d;
	}

	.menu-nav>p {
		width: 18%;
		height: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #852833;
		color: #ffffff;
		border-radius: 0.5rem;
		cursor: pointer;
		font-size: 1rem;
		text-align: center;
	}

	.nav-right {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
	}

	.search-Bg {
		background-color: #e9e9e9;
		padding: 0.5rem 0.5rem;
		width: 13rem;
		height: 1rem;
		border-radius: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-right: 1.5rem;
	}

	.search-Bg input {
		border: none;
		width: 80%;
		background-color: #e9e9e9;
		flex: 1;
		outline: none;
	}

	.search-Bg img {
		cursor: pointer;
	}

	.nav-right>img {
		margin-right: 1.5rem;
		width: 1rem;
		cursor: pointer;
	}
	.nav-right>div.user-photo{
		margin-right: 0.5rem;
		width: 3rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		cursor: pointer;
	}
	.nav-right>div.user-photo>p{
		width: 100%;
		font-size: 1rem;
		color: #852833;
	}
</style>
