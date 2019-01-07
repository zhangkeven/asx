<template>
	<div class="main" style="background-color: #EEEEEE;">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div class="mine-order-bg" @mouseenter="clearDropDown()">
			<div class="myOrder-main">
				<div class="my-order" style="width: 16%;">
					<div class="user-icon">
						<img src="../../assets/img/avatar.png" alt="">
					</div>
					<div class="my-btn">
						<p>我的订单</p>
					</div>
					<div class="my-nav">
						<p>我的优惠卷</p>
						<p>我的收藏</p>
						<p>我的足迹</p>
						<p>收获地址</p>
						<p>退换货</p>
					</div>
				</div>
				<div class="mine-order">
					<div class="mine-order-top">
						<div class="nav-tap">
							<div @click="chooseTap" data-id="0">
								<p v-bind:class="[{activeTap:activeTap==0},'']">全部订单</p>
							</div>
							<p></p>
							<div @click="chooseTap" data-id="1">
								<p v-bind:class="[{activeTap:activeTap==1},'']">待付款</p>

							</div>
							<p></p>
							<div @click="chooseTap" data-id="2">
								<p v-bind:class="[{activeTap:activeTap==2},'']">待发货</p>

							</div>
							<p></p>
							<div @click="chooseTap" data-id="3">
								<p v-bind:class="[{activeTap:activeTap==3},'']">待收货</p>

							</div>
							<p></p>
							<div @click="chooseTap" data-id="4">
								<p v-bind:class="[{activeTap:activeTap==4},'']">待评价</p>

							</div>
						</div>
						<div class="order-recyclebin">
							<img src="../../assets/img/delete.png" alt="">
							<p>订单回收站</p>
						</div>
					</div>
					<div class="mine-order-conent">
						<div class="mine-order-conent-title">
							<p>订单</p>
							<p style="margin-left: 12.5%;">收货人</p>
							<p>实付款</p>
							<p></p>
							<p>全部状态</p>
							<p>操作</p>
						</div>
					</div>
					<div class="order-list-bg">
						<div class="order-list" v-for="(item,index) in list" :key="index">
							<div class="order-list-title">
								<div>
									<p>2018-12-30</p>
									<p style="margin-left: 2%;">17:50:41</p>
									<p style="margin-left: 8%;">订单号:</p>
									<p style="margin-left: 2%;">84214523456</p>
								</div>
								<p>联系客服</p>
							</div>
							<div class="order-list-conent">
								<div>
									<img src="../../assets/img/1.0.png" alt="">
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
									<p>汪峰</p>
								</div>
								<div>
									<p style="text-decoration: line-through;">¥ 5000</p>
									<p>¥ 3000</p>
								</div>
								<div>
									<p>申请售后</p>
								</div>
								<div>
									<p>订单详情</p>
								</div>
								<div>
									<p>付款</p>
									<p>取消订单</p>
								</div>
							</div>

						</div>
					</div>
					<div class="bottom-page">
						<div class="page-count">
							<p @click="prevPage">上一页</p>
							<div>
								<p @click="choosePage" :data-id="index" v-bind:class="[{activePage:pageCount==index}, ' ']" v-for="(item,index) in page"
								 :key="index">{{item}}</p>
							</div>
							<p @click="nextPage">下一页</p>
						</div>
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
	import RightNav from '../../components/rightNav'
	export default {
		components: {
			Bottom,
			Header,
			RightNav
		},
		data() {
			return {
				pageCount: 0,
				page: [
					'1', '2', '3', '4', '5', '6'
				],
				activeTap: 0,
				list: ['', '', '', '', '', '', '', '', '', '']
			};
		},
		methods: {
			clearDropDown() {
				this.$refs.data.showstartdrop = false;
				this.$refs.data.showModal = false;
				this.$refs.data.showAboutdrop = false;
				this.$refs.data.showUsermodal = false;
				this.$refs.data.windowBg = 'background-color: #FFFFFF';
			},
			searchInput(e) {
				console.log('子组件中触发我的订单页面', e); //子组件输入框触发,e代表输入框中的值
			},
			chooseTap(e) {
				if (e.currentTarget.dataset.id == this.activeTap) {

				} else {
					this.activeTap = e.currentTarget.dataset.id
				}
			},
			choosePage(e) {
				if (e.currentTarget.dataset.id == this.pageCount) {
			
				} else {
					this.pageCount = e.currentTarget.dataset.id
				}
			},
			prevPage(){
				if(this.pageCount>0){
					this.pageCount--
				}
			},
			nextPage(){
				if(this.pageCount<5){
					this.pageCount++
				}
			},
		},
		mounted() {

		}
	}
</script>

<style>
	.mine-order-bg {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 68%;
	}

	.myOrder-main {
		margin-top: 7.5rem;
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.mine-order {
		width: 78%;
		display: flex;
		flex-direction: column;
		margin-bottom:5rem;
	}

	.mine-order-top {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 0.125rem solid #e3e3e3;
	}

	.nav-tap {
		width: 70%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.nav-tap>div {
		width: 15%;
		cursor: pointer;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0 0.3%;
	}

	.nav-tap>p {
		width: 0.125rem;
		height: 1.2rem;
		background-color: #e3e3e3;
	}

	.nav-tap>div>p {
		padding: 0.3rem 0;
		font-size: 1.125rem;
		color: #666666;
		text-align: center;
		width: 100%;
	}

	.nav-tap>div>p:hover {
		border-bottom: 0.25rem solid #852833;
		padding: 0.3rem 0;
		font-size: 1.125rem;
		color: #852833;
	}

	.nav-tap>div>p.activeTap {
		border-bottom: 0.25rem solid #852833;
		padding: 0.3rem 0;
		font-size: 1.125rem;
		color: #852833;
	}

	.order-recyclebin {
		width: 20%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}

	.order-recyclebin>p {
		color: #999999;
		font-size: 0.875rem;
		padding-left: 0.5rem;
	}

	.mine-order-conent {
		width: 100%;
		display: flex;
		flex-direction: column;
		
	}

	.mine-order-conent-title {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #fff;
		padding: 0.5rem 0;
	}

	.mine-order-conent-title>p {
		color: #666666;
		font-size: 0.875rem;
	}

	.mine-order-conent-title>p:first-child {
		width: 30%;
		text-align: center;
	}

	.mine-order-conent-title>p:not(:first-child) {
		width: 11.5%;
		text-align: center;
	}

	.order-list-bg {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 1.25rem;
	}

	.order-list {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 0.625rem;
		border: 0.125rem solid #e3e3e3;
	}

	.order-list-title {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #e8e8e8;
		padding: 0.3125rem 0;
	}

	.order-list-title>div {
		width: 37.5%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 2%;
		padding-right: 3%;
	}

	.order-list-title>div>p {
		font-size: 0.75rem;
	}

	.order-list-title>div>p:not(:last-child) {
		color: #999999;
	}

	.order-list-title>div>p:last-child {
		color: #666666;
	}

	.order-list-title>p {
		width: 46%;
		text-align: center;
		font-size: 0.75rem;
		color: #999999;
	}

	.order-list-conent {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #FFFFFF;
	}

	.order-list-conent>div:first-child {
		width: 38.5%;
		height: auto;
		min-height: 5rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 2%;
		padding-right: 3%;
		justify-content: space-between;
	}

	.order-list-conent>div:first-child>img {
		width: 25%;
		border: 0.125rem solid #e3e3e3;
	}

	.order-list-conent>div:first-child>div {
		width: 71%;
	}

	.order-list-conent>div:first-child>div>p {
		width: 100%;
		color: #666666;
		font-size: 0.75rem;
	}

	.order-list-conent>div:first-child>div>div {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.order-list-conent>div:first-child>div>div>p {
		color: #999999;
		font-size: 0.75rem;
	}

	.order-list-conent>div:not(:first-child) {
		width: 11.5%;
		height: auto;
		min-height: 5rem;
		border-left: 0.125rem solid #e3e3e3;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.order-list-conent>div>p {
		color: #666666;
		font-size: 0.75rem;
	}

	.order-list-conent>div:nth-child(2)>p:first-child {
		font-size: 0.875rem;

	}

	.order-list-conent>div:nth-child(3)>p:last-child {
		font-size: 0.875rem;
	}

	.order-list-conent>div:nth-child(4)>p,
	.order-list-conent>div:nth-child(5)>p {
		cursor: pointer;
	}

	.order-list-conent>div:last-child>p {
		width: 70%;
		color: #666666;
		font-size: 0.75rem;
		border: 0.125rem solid #dedede;
		border-radius: 0.375rem;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.order-list-conent>div:last-child>p:last-child {
		margin-top: 0.625rem;
	}
	div.mine-order>div.bottom-page {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-top: 0.3125rem;
	}
	
	div.mine-order>div.bottom-page>div.page-count {
		display: flex;
		flex-direction: row;
	}
	
	div.mine-order>div.bottom-page>div.page-count>p {
		padding: 0.625rem 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ECECEC;
		margin-right: 0.625rem;
		font-size: 0.75rem;
		color: #333333;
		border-radius: 0.3rem;
		cursor: pointer;
	}
	
	div.mine-order>div.bottom-page>div.page-count>p:hover {
		background-color: #852833;
		color: #FFFFFF;
	}
	
	div.mine-order>div.bottom-page>div.page-count>div {
		display: flex;
		flex-direction: row;
	}
	
	div.mine-order>div.bottom-page>div.page-count>div>p {
		padding: 0.625rem 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ECECEC;
		margin-right: 0.625rem;
		font-size: 0.75rem;
		color: #333333;
		border-radius: 0.3rem;
		cursor: pointer;
	}
	
	div.mine-order>div.bottom-page>div.page-count>div>p:hover {
		background-color: #852833;
		color: #FFFFFF;
	}
	
	div.mine-order>div.bottom-page>div.page-count>div>p.activePage {
		background-color: #852833;
		color: #FFFFFF;
	}
</style>
