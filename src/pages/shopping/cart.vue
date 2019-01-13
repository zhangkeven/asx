<template>
	<div class="main">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div class="cart-main" @mouseenter="clearDropDown()">
			<p class="cart-text">购物车</p>
			<div class="cart-product-list">
				<div class="cart-product" v-for="(item,index) in list" :key="index">
					<div class="cart-product-title">
						<p>商品信息</p>
						<p>单价</p>
						<p>数量</p>
						<p>小计</p>
						<p>操作</p>
					</div>
					<div class="cart-product-conent">
						<div>
							<p @click="chooseProduct(index)" v-show="!item.chooseBtn">

							</p>
							<img class="choose-btn" src="../../assets/img/gou.png" alt="" v-show="item.chooseBtn" @click="cancelProduct(index)">
							<img class="product-img" src="../../assets/img/1.0.png" alt="">
							<div>

								<p>
									全能平低锅介绍名称全能平低锅介绍名称全能平低锅介绍名称
								</p>
								<div>
									<p>颜色:</p>
									<p style="margin-left: 2%;">茶色</p>
									<p style="margin-left: 6%;">尺寸:</p>
									<p style="margin-left: 2%;">M</p>
								</div>

							</div>
						</div>
						<div>
							<p>¥ {{item.price}}</p>
						</div>
						<div>
							<span @click="dec(index)">-</span>
							<span>{{item.number}}</span>
							<span @click="add(index)">+</span>
						</div>
						<div>
							¥ {{item.price*item.number}}
						</div>
						<div>
							<p>移入收藏夹</p>
							<p>删除</p>
						</div>
					</div>
				</div>
			</div>
			<div class="cart-account">
				<p @click="chooseAll" v-show="!showAll"></p>
				<img src="../../assets/img/gou.png" alt="" v-show="showAll" @click="cancelAll">
				<p>
					全选
				</p>
				<p>
					删除
				</p>
				<p>
					移入收藏夹
				</p>
				<p>
					已选中商品
				</p>
				<p>{{totalCount}}</p>
				<p>件</p>
				<div class="confirm-account">
					<div>
						<div>
							<p>合计:</p>
							<p>¥ {{totalPrice}}</p>
						</div>
						<!-- <div>
							<p>
								节省:
							</p>
							<p>
								¥ 10.00
							</p>
						</div> -->
					</div>
					<div>
						<p>结算</p>
					</div>
				</div>
			</div>
			<div class="recommend-buy">
				<p>推荐购买</p>
				<div class="recommend-buy-conent">
					<div class="pot-detail" v-for="(item,i) in recommendList" :key="i" @click="goProdunctDetail">
						<img src="../../assets/img/smallguo.png" alt="">
						<div class="money-bg">
							<div class="money-text">
								<div class="now-price">
									<p>¥</p>
									<p>{{item.money}}</p>
								</div>
								<div class="before-price">
									<p>¥{{item.beforeMoney}}</p>
								</div>
							</div>
							<img class="money-icon" src="../../assets/img/bai.png" alt="" v-if="item.hot==1">
							<img class="money-icon" src="../../assets/img/hong.png" alt="" v-if="item.hot==0">
						</div>
						<p>{{item.conent}}</p>
					</div>
				</div>
			</div>
			<div class="recommend-buy">
				<p>可能你喜欢</p>
				<div class="recommend-buy-conent">
					<div class="pot-detail" v-for="(item,i) in recommendList" :key="i" @click="goProdunctDetail">
						<img src="../../assets/img/smallguo.png" alt="">
						<div class="money-bg">
							<div class="money-text">
								<div class="now-price">
									<p>¥</p>
									<p>{{item.money}}</p>
								</div>
								<div class="before-price">
									<p>¥{{item.beforeMoney}}</p>
								</div>
							</div>
							<img class="money-icon" src="../../assets/img/bai.png" alt="" v-if="item.hot==1">
							<img class="money-icon" src="../../assets/img/hong.png" alt="" v-if="item.hot==0">
						</div>
						<p>{{item.conent}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-background" @mouseenter="clearDropDown()">
			<Bottom />
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Bottom from '../../components/bottom'
	import LeftNav from '../../components/leftNav'
	import RightNav from '../../components/rightNav'
	export default {
		components: {
			Bottom,
			Header,
			LeftNav,
			RightNav,
		},
		data() {
			return {
				number: 1,
				price: 3000,
				chooseBtn:false,
				showBtn:false,
				list: [{
					price: '2000',
					number: '1',
					chooseBtn:true
				}, {
					price: '3000',
					number: '2',
				
					chooseBtn:true
				}, {
					price: '4000',
					number: '3',
					
					chooseBtn:true
				}, {
					price: '5000',
					number: '4',
					
					chooseBtn:true
				},
				{
					price: '2000',
					number: '1',
					chooseBtn:true
				}, {
					price: '3000',
					number: '2',
				
					chooseBtn:true
				}, {
					price: '4000',
					number: '3',
					
					chooseBtn:true
				}, {
					price: '5000',
					number: '4',
					
					chooseBtn:true
				}],
				allMoney: '',
				showAll: true,
				recommendList: [{
						money: '3000',
						beforeMoney: '5000',
						hot: '1',
						conent: '梦幻公主锅介绍'
					}, {
						money: '3000',
						beforeMoney: '5000',
						hot: '0',
						conent: '零秒活力锅介绍'
					},
					{
						money: '3000',
						beforeMoney: '5000',
						hot: '1',
						conent: '梦幻公主锅介绍'
					}, {
						money: '3000',
						beforeMoney: '5000',
						hot: '0',
						conent: '零秒活力锅介绍'
					},
					{
						money: '3000',
						beforeMoney: '5000',
						hot: '1',
						conent: '梦幻公主锅介绍'
					}, {
						money: '3000',
						beforeMoney: '5000',
						hot: '0',
						conent: '零秒活力锅介绍'
					}
				]
			};
		},
		methods: {
			searchInput(e) {
				console.log('子组件中触发购物车页面', e); //子组件输入框触发,e代表输入框中的值
			},
			goProdunctDetail(){
				this.$router.push({
					name: 'ProductDetail',
					params: {}
				})
			},
			clearDropDown() {
				this.$refs.data.showstartdrop = false;
				this.$refs.data.showModal = false;
				this.$refs.data.showAboutdrop = false;
				this.$refs.data.showUsermodal = false;
				this.$refs.data.windowBg = 'background-color: #FFFFFF';
			},
			dec(index) {
				if (this.list[index].number > 1) {
					this.list[index].number--;
				}
			},
			add(index) {
				this.list[index].number++;
			},
			chooseProduct(index) {
				this.list[index].chooseBtn = true;
			},
			cancelProduct(index) {
				this.list[index].chooseBtn = false;
				this.showAll=false;
			},
			chooseAll() {
				for(var i=0;i<this.list.length;i++){
					this.list[i].chooseBtn=true;
				}
				this.showAll=true;
			},
			cancelAll() {
				for(var i=0;i<this.list.length;i++){
					this.list[i].chooseBtn=false;
				}
				this.showAll=false;
			},
		},
		mounted() {
			
		},
		computed: {
			//计算并获取总价
			totalPrice() {
				let total = 0
				for (let i = 0; i < this.list.length; i++) {
					if(this.list[i].chooseBtn==true){
						let item = this.list[i];
						total += item.price * item.number;
					}
					
				}
				return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
			},
			//选中商品总数
			totalCount() {
				let count = 0;
				let list=[];
				for (let i = 0; i < this.list.length; i++) {
					if(this.list[i].chooseBtn==true){
						let item = this.list[i];
						list.push(item);
					}
					count=list.length;
				}
				return count;
			}
		},
	}
</script>

<style>
	.cart-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 58%;
		margin-top: 4.375rem;
	}

	.cart-text {
		width: 98%;
		padding: 0 1%;
		font-size: 1.125rem;
		color: #000000;
		margin-top: 3.125rem;
		margin-bottom: 1.25rem;
	}

	.cart-product-list {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 0.625rem;
	}

	.cart-product {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 0.625rem;
		border: 0.125rem solid #ebebeb;
	}

	.cart-product-title {
		width: 100%;
		display: flex;
		flex-direction: row;
		background-color: #f4f4f4;
	}

	.cart-product-title>p:not(:first-child) {
		width: 11.75%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #999999;
		font-size: 0.875rem;
	}

	.cart-product-title>p:first-child {
		width: 44%;
		padding: 0.5rem 4.5%;
		color: #999999;
		font-size: 0.875rem;
	}

	.cart-product-conent {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.cart-product-conent>div:first-child {
		width: 51%;
		min-height: 7.625rem;
		padding: 0 1%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.cart-product-conent>div:first-child>img.choose-btn {
		width: 1.5rem;
		height: 1.5rem;
		cursor: pointer;
	}

	.cart-product-conent>div:first-child>p {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		border: 0.125rem solid #ebebeb;
		box-sizing: border-box;
		cursor: pointer;
	}

	.cart-product-conent>div:first-child>img.product-img {
		width: 17%;
		margin-left: 2%;
	}

	.cart-product-conent>div:first-child>div {
		width: 52%;
		padding: 0 4%;
		display: flex;
		flex-direction: column;
	}

	.cart-product-conent>div:first-child>div>p {
		line-height: 150%;
		color: #666666;
		font-size: 0.875rem;
	}

	.cart-product-conent>div:first-child>div>div {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.cart-product-conent>div:first-child>div>div>p {
		color: #999999;
	}

	.cart-product-conent>div:first-child>div>div>p:first-child,
	.cart-product-conent>div:first-child>div>div>p:nth-child(3) {
		font-size: 0.75rem;
	}

	.cart-product-conent>div:first-child>div>div>p:nth-child(2),
	.cart-product-conent>div:first-child>div>div>p:nth-child(4) {
		font-size: 0.875rem;
	}

	.cart-product-conent>div:not(:first-child) {
		width: 11.5%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-left: 0.125rem solid #ebebeb;
		min-height: 7.625rem;
	}

	.cart-product-conent>div:nth-child(2)>p,
	.cart-product-conent>div:nth-child(4)>p {
		color: #666;
		font-size: 1rem;
	}

	.cart-product-conent>div:nth-child(3) {
		display: flex;
		flex-direction: row;
	}

	.cart-product-conent>div:nth-child(3)>span {
		padding: 0.2rem 2%;
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cart-product-conent>div:nth-child(3)>span:first-child {
		border: 0.125rem solid #f0f0f0;
		border-right: none;
		cursor: pointer;
	}

	.cart-product-conent>div:nth-child(3)>span:last-child {
		border: 0.125rem solid #f0f0f0;
		border-left: none;
		cursor: pointer;
	}

	.cart-product-conent>div:nth-child(3)>span:nth-child(2) {
		border: 0.125rem solid #f0f0f0;
	}

	.cart-product-conent>div:last-child>p {
		color: #666666;
		font-size: 0.875rem;
		margin-top: 0.3125rem;
		cursor: pointer;
	}

	.cart-account {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #F1F1F1;
		padding: 0.3125rem 0;
		margin-bottom: 1.875rem;
	}

	.cart-account>p:first-child {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		border: 0.125rem solid #ebebeb;
		box-sizing: border-box;
		cursor: pointer;
		margin-left: 1%;
	}

	.cart-account>p {
		cursor: pointer;
	}

	.cart-account>img {
		width: 1.5rem;
		height: 1.5rem;
		cursor: pointer;
		margin-left: 1%;
	}

	.cart-account>p:not(:first-child) {
		color: #999999;
		font-size: 0.875rem;
		margin-left: 3%;
	}

	.cart-account>p:nth-child(6) {
		margin-left: 26%;
	}

	.cart-account>p:nth-child(7) {
		margin: 0 1%;
		font-size: 1.125rem;
		color: #852833;
	}

	.cart-account>p:nth-child(8) {
		margin: 0 0;
	}

	.confirm-account {
		margin-left: 3%;
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		/* background-color: red; */
		justify-content: space-between;

	}

	.confirm-account>div:first-child {
		/* width: 50%; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 60%;
	}

	.confirm-account>div:first-child>div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}

	.confirm-account>div:first-child>div>p:first-child {
		font-size: 0.875rem;
		color: #999999;
	}

	.confirm-account>div:first-child>div:first-child>p:last-child {
		color: #852833;
		font-size: 1.125rem;
	}

	.confirm-account>div:first-child>div:last-child>p:last-child {
		color: #999999;
		font-size: 1rem;
	}

	.confirm-account>div:last-child {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 35%;
		background-color: #852833;
		padding: 0.5rem 0;
		cursor: pointer;
	}

	.confirm-account>div:last-child>p {
		color: #FFFFFF;
		font-size: 1.5rem;
	}

	.recommend-buy {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 1.875rem;
	}

	.recommend-buy>p {
		width: 96%;
		background-color: #F7F7F7;
		padding: 0.5rem 2%;
		margin-bottom: 1.25rem;
		color: #666666;
		font-size: 0.9375rem;
	}

	.recommend-buy-conent {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		background-color: #FFFFFF;
		align-items: center;
	}

	.recommend-buy-conent>.pot-detail {
		width: 24%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		background-color: #FFFFFF;
		margin: 0 0.5%;
		margin-bottom: 0.9375rem;
		border-radius: 0.625rem;
		padding: 1.875rem 0;
		border: 0.125rem solid #F0F0F0;
		box-sizing: border-box;
		cursor: pointer;
	}

	.recommend-buy-conent>.pot-detail>img {
		width: 81%;
	}

	.recommend-buy-conent>.pot-detail>p {
		width: 94%;
		padding: 0 3%;
		color: #666;
		font-size: 0.875rem;
	}

	.recommend-buy-conent>.pot-detail>.money-bg {
		width: 94%;
		padding: 0 3%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}

	.recommend-buy-conent>.pot-detail>.money-bg>img {
		width: 1.25rem;
		height: 1.25rem;
	}

	.recommend-buy-conent>.pot-detail>.money-bg>.money-text {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}

	.recommend-buy-conent>.pot-detail>.money-bg>.money-text>.now-price {
		display: flex;
		flex-direction: row;
	}

	.recommend-buy-conent>.pot-detail>.money-bg>.money-text>.now-price>p {
		color: #ff0606;
		font-size: 1.125rem;
	}

	.recommend-buy-conent>.pot-detail>.money-bg>.money-text>.now-price>p:nth-child(2) {
		margin-left: 0.3125rem;
	}

	.recommend-buy-conent>.pot-detail>.money-bg>.money-text>.before-price>p {
		color: #999999;
		font-size: 0.75rem;
		margin-left: 0.625rem;
		text-decoration: line-through;
	}
</style>
