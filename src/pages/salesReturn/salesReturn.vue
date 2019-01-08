<template>
	<div class="main" style="background-color: #f3f3f3;">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div class="mine-order-bg" @mouseenter="clearDropDown()">
			<div class="myOrder-main">
				<LeftNav ref="leftnav"></LeftNav>
				<div class="mine-order">
					<div class="salesReturn-dropdown-bg">
						<div class="dropdown-mold">
							<p>类型:</p>
							<div class="dropdown-title">
								<div @click="showDrop">
									<p>{{activeText}}</p>
									<img src="../../assets/img/down.png" alt="">
								</div>
								<div class="dropdown-menu" v-show="showDropDown">
									<p @click="chooseType('全部','0')" v-bind:class="activeDrop==0?'active-dropdown' : 'dropdown-text'">全部</p>
									<p @click="chooseType('退货','1')" v-bind:class="activeDrop==1?'active-dropdown' : 'dropdown-text'">退货</p>
									<p @click="chooseType('换货','2')" v-bind:class="activeDrop==2?'active-dropdown' : 'dropdown-text'">换货</p>
								</div>
							</div>

						</div>
						<div class="dropdown-mold">
							<p>状态:</p>
							<div class="dropdown-title">
								<div @click="showState">
									<p>{{state}}</p>
									<img src="../../assets/img/down.png" alt="">
								</div>
								<div class="dropdown-menu" v-show="showStateDown">
									<p @click="chooseState('全部','0')" v-bind:class="activeState==0?'active-dropdown' : 'dropdown-text'">全部</p>
									<p @click="chooseState('退货待处理','1')" v-bind:class="activeState==1?'active-dropdown' : 'dropdown-text'">退货待处理</p>
									<p @click="chooseState('换货待处理','2')" v-bind:class="activeState==2?'active-dropdown' : 'dropdown-text'">换货待处理</p>
									<p @click="chooseState('退换成功','3')" v-bind:class="activeState==3?'active-dropdown' : 'dropdown-text'">退换成功</p>
									<p @click="chooseState('换货成功','4')" v-bind:class="activeState==4?'active-dropdown' : 'dropdown-text'">换货成功</p>
									<p @click="chooseState('退换关闭','5')" v-bind:class="activeState==5?'active-dropdown' : 'dropdown-text'">退换关闭</p>
									<p @click="chooseState('换货关闭','6')" v-bind:class="activeState==6?'active-dropdown' : 'dropdown-text'">换货关闭</p>
								</div>
							</div>

						</div>
						<div class="choosedate-bg">
							<div class="choosedate-mold">
								<p>时间:</p>
								<el-date-picker v-model="startTime" align="right" type="date" placeholder="起始日期" :picker-options="pickerOptions">
								</el-date-picker>
							</div>
							<div class="choosedate-mold">
								<p style="padding-left: 4%;width: 11%;">到</p>
								<el-date-picker v-model="endTime" align="right" type="date" placeholder="结束日期" :picker-options="pickerOptions">
								</el-date-picker>

							</div>
						</div>

					</div>
					<div class="mine-order-conent">
						<div class="mine-order-conent-title">
							<p>订单</p>
							<p style="margin-left: 12.5%;">退款金额</p>
							<p>申请时间</p>
							<p>类型</p>
							<p>状态</p>
							<p>交易操作</p>
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
									<p>¥ 3000</p>
								</div>
								<div>
									<p style="font-size: 0.875rem">2018-12-02</p>
									<p style="font-size: 0.875rem">17:59:50</p>
								</div>
								<div>
									<p>退换</p>
								</div>
								<div @click="">
									<p>退货成功</p>
								</div>
								<div>
									<p style="margin:0 0;border: none;">服务详情</p>
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
				pageCount: 0,
				page: [
					'1', '2', '3', '4', '5', '6'
				],
				activeTap: 0,
				list: ['', '', '', '', '', '', '', '', '', ''],
				activeDrop: 0,
				activeText: '全部',
				showDropDown: false,
				state: '全部',
				activeState: 0,
				showStateDown: false,
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				startTime: '',
				endTime: '',
			};
		},
		methods: {
			chooseType(type, id) {
				this.activeDrop = id;
				this.activeText = type;
				this.showDropDown = false;
			},
			showDrop() {
				this.showDropDown = true;
				this.showStateDown = false;
			},
			chooseState(state, id) {
				this.activeState = id;
				this.state = state;
				this.showStateDown = false;
			},
			showState() {
				this.showStateDown = true;
				this.showDropDown = false;
			},
			clearDropDown() {
				this.$refs.data.showstartdrop = false;
				this.$refs.data.showModal = false;
				this.$refs.data.showAboutdrop = false;
				this.$refs.data.showUsermodal = false;
				this.$refs.data.windowBg = 'background-color: #FFFFFF';
			},
			goOrderDetail() {
				this.$router.push({
					name: 'OrderDetail',
					params: {}
				})
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
			prevPage() {
				if (this.pageCount > 0) {
					this.pageCount--
				}
			},
			nextPage() {
				if (this.pageCount < 5) {
					this.pageCount++
				}
			},
			date() {
				console.log(this.startTime);
				console.log(this.endTime);
			}
		},
		mounted() {
			this.$refs.leftnav.activeId = 5;
			console.log(this.startTime);
			console.log(this.endTime);

		},
		watch: {
			startTime(val, oldVal) {
				console.log("inputVal = " + val + " , oldValue = " + oldVal)
			}
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
		margin-bottom: 5rem;
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
		max-width: 4.0625rem;
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

	.salesReturn-dropdown-bg {
		width: 100%;
		min-width: 56.25rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 1.875rem;
	}

	.dropdown-mold {
		width: 26%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.dropdown-mold>p {
		width: 20%;
		color: #666666;
		font-size: 1.125rem;
	}

	.dropdown-title {
		width: 60%;
		position: relative;
	}

	.dropdown-title>div:first-child {
		width: 92%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		padding: 0.3125rem 4%;
		border: 0.125rem solid #D2D2D2;
		border-radius: 0.3125rem;
	}

	.dropdown-title>div:first-child>p {
		font-size: 1rem;
		color: #666;
	}

	.dropdown-menu {
		position: absolute;
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		border: 0.125rem solid #D2D2D2;
		border-radius: 0.3125rem;
		border-top: none;
		border-bottom: none;
	}

	.dropdown-menu>p {
		width: 92%;
		padding: 0.3125rem 4%;


	}

	.dropdown-menu>p:hover {
		background-color: #B52637;
		color: #FFFFFF;
		cursor: pointer;
		font-size: 0.875rem;
		border-bottom: none;
	}

	.active-dropdown {
		background-color: #B52637;
		color: #FFFFFF;
		cursor: pointer;
		font-size: 0.875rem;
	}

	.dropdown-text {
		cursor: pointer;
		color: #666666;
		font-size: 0.875rem;
		border-bottom: 0.125rem solid #D2D2D2;
	}

	.choosedate-bg {
		display: flex;
		flex-direction: row;
		width: 48%;
		align-items: center;
		justify-content: flex-end;
	}

	.choosedate-mold {
		width: 50%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}

	.choosedate-mold>p {
		width: 25%;
		color: #666666;
		font-size: 1.125rem;
	}

	.choosedate-title {
		width: 60%;
		position: relative;
	}

	.choosedate-title>div:first-child {
		width: 92%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		padding: 0.3125rem 4%;
		border: 0.125rem solid #D2D2D2;
		border-radius: 0.3125rem;
	}

	.choosedate-title>div:first-child>p {
		font-size: 1rem;
		color: #666;
	}
</style>
