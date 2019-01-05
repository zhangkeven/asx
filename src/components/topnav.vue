<template>
	<div class="main">
		<div class="top-nav-bg">
			<div class="topLeft">
				<div class="topLeftTitle">
					<img src="../assets/img/logo.png" alt="">
				</div>
			</div>
			<div class="nav">
				<a href="javascript:" @click="goMain()">首页</a>
				<a href="javascript:">明星产品</a>
				<a href="javascript:" @click="goCoreyroom()">料理教室</a>
				<a href="javascript:" @click="goshare()">使用者分享</a>
				<a href="javascript:" @click="goAbout()">关于我们</a>
				<p href="javascript:" @click="goBuy()">我要购买</p>
			</div>
			<div class="navRight">
				<div class="searchBg">
					<input type="text" @input="search" ref="inputVal" @keyup.enter="submit()">
					<img src="../assets/img/search.png" alt="">
				</div>
				<img src="../assets/img/person.png" alt="">
				<img src="../assets/img/cart.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				inputVal: '',
				searchText: ''
			};
		},
		methods: {
			goMain() {
				this.$router.push({
					name: 'Main',
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
			goAbout() {
				this.$router.push({
					name: 'About',
					params: {}
				})
			},
			goBuy(){
				this.$router.push({name:'Buy',params:{}})
			},
			/*模糊搜索*/
			search() {
				console.log('input输入的值', this.$refs.inputVal.value);
				this.searchText = this.$refs.inputVal.value
			},
			submit() {
				// 子组件中触发父组件方法searchInput并传值
				this.$emit('listenChildEvent', this.searchText)
			}
		}
	}
</script>

<style>
	.top-nav-bg {
		width: 70.5%;
		min-width: 65rem;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2%;
		position: fixed;
		top: 3.5rem;
		z-index: 4;
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
		transition: color linear .5s;
	}

	.nav a:hover,
	.nav1 a:hover {
		color: #9f303d;
	}

	.nav p {
		width: 5rem;
		height: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #852833;
		color: #ffffff;
		border-radius: 0.5rem;
		cursor: pointer;
		font-size: 1rem;
	}

	.navRight {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
	}

	.searchBg {
		background-color: #EEE;
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
		background-color: #EEE;
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
