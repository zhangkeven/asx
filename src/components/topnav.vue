<template>
	<div class="main">
		<div class="top-nav-main">
			<div class="top-nav-bg" :style="windowBg">
				<div class="topLeft">
					<div class="topLeftTitle">
						<img src="../assets/img/logo.png" alt="">
					</div>
				</div>
				<div class="nav">
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
				<div class="navRight">
					<div class="searchBg" @mouseenter="clearDropdown()">
						<input type="text" @input="search" ref="inputVal" @keyup.enter="submit()">
						<img src="../assets/img/search.png" alt="">
					</div>
					<img src="../assets/img/person.png" @mouseenter="enterPerson()" alt="">
					<div class="user-photo" @mouseenter="showUserModal()">
						<p>张三*</p>
					</div>
					<img src="../assets/img/cart.png" alt="" @mouseenter="clearDropdown()">
				</div>
			</div>
			<div class="chooseLogin" v-show="showModal">
				<div>
					<p @click="goLogin()">登录</p>
					<p @click="goRegister()">注册</p>
				</div>
			</div>
			<div class="show-user-detail" style="width: 92%;padding: 1.5rem 4%;" v-show="showUsermodal">
				<div>
					<p @click="">我的订单</p>
					<p @click="">我的收藏</p>
					<p @click="">我的地址</p>
					<p @click="">修改密码</p>
					<p @click="">退出登录</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				inputVal: '',
				searchText: '',
				showstartdrop: false,
				showModal: false,
				showAboutdrop: false,
				showUsermodal: false,
				windowBg: 'background-color: #fff'
			};
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
				this.showAboutdrop = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #FFFFFF';
			},
			showUserModal() {
				this.showUsermodal = true;
				this.showModal = false;
				this.showstartdrop = false;
				this.showAboutdrop = false;
				this.windowBg = 'background-color: #eeeeee';
			},
			enterPerson() {
				this.showModal = true;
				this.showstartdrop = false;
				this.showAboutdrop = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #eeeeee';
			},
			enterStart() {
				this.showstartdrop = true;
				this.showAboutdrop = false;
				this.showModal = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #eeeeee';
			},
			enterAbout() {
				this.showstartdrop = false;
				this.showAboutdrop = true;
				this.showModal = false;
				this.showUsermodal = false;
				this.windowBg = 'background-color: #eeeeee'
			}
		}
	}
</script>

<style>
	.top-nav-main{
		width: 70.5%;
		min-width: 65rem;
		position: fixed;
		top: 3.5rem;
		z-index: 11;
	}
	.top-nav-bg {
		width: 96%;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2%;
		box-shadow: 0 0.3125rem 0.9375rem 0 #ececec;
	}

	.topLeft {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		cursor: pointer;
	}

	.nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 50%;
	}

	.nav a {
		font-size: 1rem;
		color: #333333;
		transition: color linear .5s;
	}

	.nav>a:first-child {
		width: 9%;
		text-align: center;
	}

	.nav>a:not(:first-child) {
		width: 18%;
		text-align: center;
	}

	.nav>div {
		width: 18%;
		text-align: center;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 11;
	}

	.nav>div>div.drop-down-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background-color: #FFFFFF;
		position: absolute;
		left: 0;
		top: 2.8125rem;
		padding: 0.3125rem 0;
		z-index: 11;
		box-shadow: 0 0.3125rem 0.9375rem 0 #ececec;
	}

	.nav>div>div.drop-down-box>p {
		cursor: pointer;
		color: #666;
		font-size: 1rem;
		transition: color linear .5s;
	}

	.nav>div>div.drop-down-box>p:hover {
		color: #852833;
	}

	.nav>div>div.drop-down-box>p:not(:last-child) {
		margin-bottom: 0.9375rem;
	}

	.nav>p {
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



	.nav a:hover,
	.nav1 a:hover {
		color: #9f303d;
	}

	.navRight {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
	}

	.searchBg {
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

	.searchBg input {
		border: none;
		width: 80%;
		background-color: #e9e9e9;
		flex: 1;
		outline: none;
	}

	.searchBg img {
		cursor: pointer;
	}

	.navRight>img {
		margin-right: 1.5rem;
		width: 1rem;
		cursor: pointer;
	}
</style>
