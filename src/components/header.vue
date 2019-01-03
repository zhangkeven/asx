<template>
	<div class="nav-bg">
		<div class="top-Left">
			<div class="top-Left-Title">
				<img src="../assets/img/logo.png" alt="">
			</div>
		</div>
		<div class="menu-nav">
			<a href="javascript:" @click="goMain()">首页</a>
			<a href="javascript:">明星产品</a>
			<a href="javascript:" @click="goCoreyroom()">料理教室</a>
			<a href="javascript:" @click="goshare()">使用者分享</a>
			<a href="javascript:" @click="goAbout()">关于我们</a>
			<p href="javascript:">我要购买</p>
		</div>
		<div class="nav-right">
			<div class="search-Bg">
				<input type="text" @input="search" ref="inputVal" @keyup.enter="submit()">
				<img @click="submit()" src="../assets/img/search.png" alt="">
			</div>
			<img src="../assets/img/person.png" alt="">
			<img src="../assets/img/cart.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		// name: "nav"
		data() {
			return {
				inputVal: '',
				searchText: ''
			}
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
			/*模糊搜索*/
			search() {
				console.log('input输入的值', this.$refs.inputVal.value);
				this.searchText = this.$refs.inputVal.value
			},
			submit() {
				// 子组件中触发父组件方法searchInput并传值
				this.$emit('listenChildEvent', this.searchText)
			}
		},
		mounted() {

		}
	}
</script>

<style scoped>
	.nav-bg {
		width: 88%;
		min-width: 72rem;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 1rem 6%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 4;
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
		justify-content: space-between;
		width: 40%;
	}

	.menu-nav a {
		font-size: 1rem;
		transition: color linear .5s;
	}

	.menu-nav a:hover {
		color: #9f303d;
	}

	.menu-nav p {
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

	.nav-right {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
	}

	.search-Bg {
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

	.search-Bg input {
		border: none;
		width: 80%;
		background-color: #EEE;
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
</style>
