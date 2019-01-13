<template>
	<div class="person-main">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div id="myDiscountCoupon" @mouseenter="clearDropDown()">
			<div class="order-main">
				<div class="order-conent">
					<LeftNav ref="leftnav"></LeftNav>
					<div class="right-conent">
						<div class="top-nav-bg">
							<p :class="activeId==0?'activeBtn':''" @click="chooseType(0)">可用优惠券</p>
							<p :class="activeId==1?'activeBtn':''" @click="chooseType(1)">已用优惠券</p>
							<p :class="activeId==2?'activeBtn':''" @click="chooseType(2)">过期优惠券</p>
							<p :class="activeId==3?'activeBtn':''" @click="chooseType(3)">回收站优惠券</p>
						</div>
						<div class="myDiscountCoupon-conent">
							<div class="Available_coupons" v-show="activeId==0">
								<div class="coupons_cont-bg">
									<div class="coupons_cont" v-for="item in list">
										<div class="img_coupons">
											<img class="remove_coupons" src="../../assets/img/youhuishanchu.png" alt="">
											<img src="../../assets/img/youhui.png" alt="">
											<div class="txt_coupons">
											<p class="price_coupons">￥<span>20</span></p>
											<p class="text_coupons">满199可用</p>
											<p class="time_coupons">2018-12-08-2018-12-31</p>
											</div>
										</div>
										<p class="use_coupons">立即使用</p>
									</div>
								</div>
								
								<div class="bottom-page" style="margin-top: 1.25rem;">
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
							<div class="Used_coupons" v-show="activeId==1">
								<div class="coupons_cont-bg">
									<div class="coupons_cont" v-for="item in list">
										<div class="img_coupons">
											<img src="../../assets/img/youhui2.png" alt="">
											<div class="txt_coupons">
											<p class="price_coupons">￥<span>20</span></p>
											<p class="text_coupons">满199可用</p>
											<p class="time_coupons">2018-12-08-2018-12-31</p>
											</div>
										</div>
										<div class="Unavailable_coupons">
											<img src="../../assets/img/yiyongyouhui.png" alt="">
										</div>
									</div>
								</div>	
								
								<div class="bottom-page" style="margin-top: 1.25rem;">
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
							<div class="Expired_coupons" v-show="activeId==2">
								<div class="coupons_cont-bg">
									<div class="coupons_cont" v-for="item in list">
										<div class="img_coupons">
											<img src="../../assets/img/youhui2.png" alt="">
											<div class="txt_coupons">
											<p class="price_coupons">￥<span>20</span></p>
											<p class="text_coupons">满199可用</p>
											<p class="time_coupons">2018-12-08-2018-12-31</p>
											</div>
										</div>
										<div class="Unavailable_coupons">
											<img src="../../assets/img/guoqiyouhui.png" alt="">
										</div>
									</div>
								</div>
								
								<div class="bottom-page" style="margin-top: 1.25rem;">
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
							<div class="Delete_coupons" v-show="activeId==3">
								<div class="coupons_cont-bg">
									<div class="coupons_cont" v-for="item in list">
										<div class="img_coupons">
											<img src="../../assets/img/youhui.png" alt="">
											<div class="txt_coupons">
											<p class="price_coupons">￥<span>20</span></p>
											<p class="text_coupons">满199可用</p>
											<p class="time_coupons">2018-12-08-2018-12-31</p>
											</div>
										</div>
										<div class="Unavailable_coupons">
											<p class="Revoke">撤回优惠券</p>
											<img src="../../assets/img/shanchuyouhui.png" alt="">
										</div>
									</div>
								</div>
								
								<div class="bottom-page" style="margin-top: 1.25rem;">
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
				</div>
			</div>
		</div>
		<div class="bottom-background" @mouseenter="clearDropDown()">
			<Bottom />
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import Header from '../../components/header';
import Bottom from '../../components/bottom';
import LeftNav from '../../components/leftNav';
import RightNav from '../../components/rightNav';
import location from '../../assets/js/city-data.js';
export default {
	components: {
		Bottom,
		Header,
		LeftNav,
		RightNav
	},
	data() {
		return {
			location: location.CityInfo,
			activeId: 0,
			pageCount: 0,
			page: ['1', '2', '3', '4', '5', '6'],
			list: ['', '', '', '', '', '']
		};
	},
	methods: {
		searchInput(e) {
			console.log('子组件中触发购物车页面', e); //子组件输入框触发,e代表输入框中的值
		},
		clearDropDown() {
			this.$refs.data.showstartdrop = false;
			this.$refs.data.showModal = false;
			this.$refs.data.showAboutdrop = false;
			this.$refs.data.showUsermodal = false;
			this.$refs.data.windowBg = 'background-color: #FFFFFF';
		},
		chooseType(index) {
			if (this.activeId == index) {
			} else {
				this.activeId = index;
			}
		},
		choosePage(e) {
			if (e.currentTarget.dataset.id == this.pageCount) {
			} else {
				this.pageCount = e.currentTarget.dataset.id;
			}
		},
		prevPage() {
			if (this.pageCount > 0) {
				this.pageCount--;
			}
		},
		nextPage() {
			if (this.pageCount < 5) {
				this.pageCount++;
			}
		}
	},
	computed: {},
	mounted() {
		this.$refs.leftnav.activeId = 1;
	}
};
</script>

<style lang="scss" scoped>
#myDiscountCoupon {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.order-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 68%;

		.order-conent {
			margin-top: 7.5rem;
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.right-conent {
				width: 78%;
				display: flex;
				flex-direction: column;
				margin-bottom: 5rem;

				.top-nav-bg {
					width: 75%;
					display: flex;
					flex-direction: row;
					align-items: center;
					padding-right: 25%;
					justify-content: space-between;
					border-bottom: 0.125rem solid #e3e3e3;

					p {
						cursor: pointer;
						color: #666666;
						font-size: 1.125rem;
						padding: 0.3125rem 0.625rem;
					}

					p:hover {
						border-bottom: 0.125rem solid #852833;
						color: #852833;
					}

					p.activeBtn {
						border-bottom: 0.125rem solid #852833;
						color: #852833;
					}
				}

				div.myDiscountCoupon-conent {
					width: 100%;
					height: auto;

					.Available_coupons {
						padding-top: 1.25rem;
						div.coupons_cont-bg {
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							flex-wrap: wrap;

							.coupons_cont {
								width: 26%;
								margin-right: 2%;
								margin-top: 1.25rem;
								padding: 0.875rem 1rem 2.25rem;
								background-color: #fff;
								.img_coupons:hover {
									cursor: pointer;
									.remove_coupons {
					 					opacity: 1;
										display: block;
									}
								}
								div.img_coupons {
									position: relative;
									text-align: center;
									color: #fff;
									padding: 0;
									.remove_coupons {
										position: absolute;
										right: 0;
										top: 0;
										opacity: 0;
										display: none;
									}
									div.txt_coupons {
										position: absolute;
										width: 100%;
										height: 100%;
										.price_coupons {
											font-size: 1.75rem;
											padding-top: 0.9375rem;
											span {
												font-size: 2.375rem;
											}
										}
										.text_coupons {
											font-size: 0.5rem;
										}
										.time_coupons {
											font-size: 0.5rem;
											margin-top: 3.125rem;
										}
									}
								}
								.use_coupons {
									width: 70%;
									margin: 2.25rem auto 0;
									color: #fdca67;
									border: 0.125rem solid #fdca67;
									border-radius: 1.25rem;
									height: 2.1875rem;
									line-height: 2.1875rem;
									text-align: center;
									cursor: pointer;
								}
							}
						}
					}
					.Used_coupons {
						padding-top: 1.25rem;
						div.coupons_cont-bg {
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							flex-wrap: wrap;
							.coupons_cont {
								width: 26%;
								margin-right: 2%;
								margin-top: 1.25rem;
								padding: 0.875rem 1rem 1rem;
								background-color: #fff;
								div.img_coupons {
									position: relative;
									text-align: center;
									color: #fff;
									padding: 0;
									div.txt_coupons {
										position: absolute;
										width: 100%;
										height: 100%;
										.price_coupons {
											font-size: 1.75rem;
											padding-top: 0.9375rem;
											span {
												font-size: 2.375rem;
											}
										}
										.text_coupons {
											font-size: 0.5rem;
										}
										.time_coupons {
											font-size: 0.5rem;
											margin-top: 3.125rem;
										}
									}
								}
								.Unavailable_coupons {
									padding: 0;
									display: flex;
									flex-direction: row;
									justify-content: flex-end;
									align-items: center;
									margin-top: 1.5625rem;
									img {
										width: 35%;
										max-width: 4.375rem;
										margin-right: 5%;
									}
								}
							}
						}
					}
					.Expired_coupons {
						padding-top: 1.25rem;
						div.coupons_cont-bg {
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							flex-wrap: wrap;
							.coupons_cont {
								width: 26%;
								margin-right: 2%;
								margin-top: 1.25rem;
								padding: 0.875rem 1rem 1rem;
								background-color: #fff;
								div.img_coupons {
									position: relative;
									text-align: center;
									color: #fff;
									padding: 0;
									div.txt_coupons {
										position: absolute;
										width: 100%;
										height: 100%;
										.price_coupons {
											font-size: 1.75rem;
											padding-top: 0.9375rem;
											span {
												font-size: 2.375rem;
											}
										}
										.text_coupons {
											font-size: 0.5rem;
										}
										.time_coupons {
											font-size: 0.5rem;
											margin-top: 3.125rem;
										}
									}
								}
								.Unavailable_coupons {
									padding: 0;
									display: flex;
									flex-direction: row;
									justify-content: flex-end;
									align-items: center;
									margin-top: 1.5625rem;
									img {
										width: 35%;
										max-width: 4.375rem;
										margin-right: 5%;
									}
								}
							}
						}
					}

					.Delete_coupons {
						padding-top: 1.25rem;
						div.coupons_cont-bg {
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							flex-wrap: wrap;
							.coupons_cont {
								width: 26%;
								margin-right: 2%;
								margin-top: 1.25rem;
								padding: 0.875rem 1rem 1rem;
								background-color: #fff;
								div.img_coupons {
									position: relative;
									text-align: center;
									color: #fff;
									padding: 0;
									div.txt_coupons {
										position: absolute;
										width: 100%;
										height: 100%;
										.price_coupons {
											font-size: 1.75rem;
											padding-top: 0.9375rem;
											span {
												font-size: 2.375rem;
											}
										}
										.text_coupons {
											font-size: 0.5rem;
										}
										.time_coupons {
											font-size: 0.5rem;
											margin-top: 3.125rem;
										}
									}
								}
								.Unavailable_coupons {
									padding: 0;
									display: flex;
									flex-direction: row;
									justify-content: flex-end;
									align-items: flex-end;
									margin-top: 1.5625rem;
									.Revoke {
										width: 60%;
										text-align: left;
										color: #dbdbdb;
										font-size: 0.625rem;
										cursor: pointer;
									}
									img {
										width: 35%;
										max-width: 4.375rem;
										margin-right: 5%;
									}
								}
							}
						}
					}

					div {
						width: 100%;
						@include cloumn;

						div.bottom-page {
							@include page-main(flex-end);

							div.page-count {
								@include page-bg;

								p {
									@include page-next;
								}

								p:hover {
									@include page-text-hover;
								}

								div {
									@include page-bg;

									p {
										@include page-text;
									}

									p.activePage {
										@include page-text-hover;
									}

									p:hover {
										@include page-text-hover;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
