<template>
	<div class="person-main">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div id="addLocation">
			<div class="order-main">
				<div class="order-conent">
					<LeftNav ref="leftnav"></LeftNav>
					<div class="right-conent">
						<p class="top-title">新增收货地址</p>
						<div>
							<p>收货人姓名:</p>
							<input @input="getName" ref="name" type="text" value="" placeholder="不超过15个字符" />
						</div>
						<div>
							<p>所在区域:</p>
							<input @input="getName" ref="name" type="text" value="" placeholder="不超过15个字符" />
						</div>
						<div>
							<p>详细地址:</p>
							<textarea @input="getName" ref="name" type="text" value="" placeholder="请输入详细地址信息,如道路、门牌号、小区、楼栋号、单元等" />
							</div>
						<div>
							<p>邮政编码:</p>
							<input @input="getName" ref="name" type="number" value="" placeholder="请填写邮编"/>
						</div>
						<div>
							<p>手机号码:</p>
							<input @input="getName" ref="name" type="number" value="" placeholder="请填写手机号"/>
						</div>
						<div class="set-location">
							<input type="checkbox" id="chooseLocation" value="" v-model="ckeckVal"/>
							<label for="chooseLocation" @click.start="clickMe">
								<p>设为默认收货地址</p>
							</label>
						</div>
						<div class="set-location">
							<p @click="save" class="save">保存</p>
						</div>
						<div class="bottom-location-list">
							<div class="location-top-title">
								<p>您已创建</p>
								<p>1</p>
								<p>个收货地址,</p>
								<p>最多可创建</p>
								<p>20</p>
								<p>个</p>
							</div>
							<div class="locationListBg">
								
								<div class="locationDetail" v-for="item in list">
									<span>x</span>
									<div class="handleBg">
										<p>
											设置为默认
										</p>
										<p>
											编辑
										</p>
									</div>
									<p class="name">王芳</p>
									
										<div>
											<p>收货人:</p>
											<p>王芳</p>
										</div>
									<div>
										<p>所在区域:</p>
										<p>江苏省苏州市吴中区</p>
									</div>
									<div>
										<p>详细地址:</p>
										<p>金枫路</p>
									</div>
									<div>
										<p>手机号码:</p>
										<p>13295154021</p>
									</div>
									<div>
										<p>邮政编号:</p>
										<p>000000</p>
									</div>
								</div>
							</div>
							<div class="bottom-page" style="margin: 1.25rem 0;">
								<div class="page-count">
									<p @click="prevPage">上一页</p>
									<div style="margin-bottom: 0;">
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
		
		<div class="bottom-background" @mouseenter="clearDropDown()">
			<Bottom />
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import Header from '../../components/header'
	import Bottom from '../../components/bottom'
	import LeftNav from '../../components/leftNav'
	import RightNav from '../../components/rightNav'
	import location from '../../assets/js/city-data.js'
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
				name:'',
				ckeckVal:true,
				pageCount: 0,
				page: ['1', '2', '3', '4', '5', '6'],
				list: ['', '', '', '']
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
			getName(){
				this.name=this.$refs.name.value;
				console.log(this.name);
			},
			 clickMe(){
				var that=this;
				console.log(that.ckeckVal);
			},
			save(){
				if(this.ckeckVal==false){
					console.log('不设置默认地址');
				}else{
					console.log('设置默认');
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
		computed: {
			
		},
		mounted(){
			this.$refs.leftnav.activeId=4;
			
		},
		updated(){
			if(this.ckeckVal==false){
				console.log('没有选中');
			}else{
				console.log('选中');
			}
		}
	}
</script>

<style lang="scss" scoped>
#addLocation{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.order-main{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 68%;
		.order-conent{
			margin-top: 7.5rem;
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.right-conent{
				width: 78%;
				display: flex;
				flex-direction: column;
				margin-bottom:5rem;
				p.top-title{
					color: #852833;
					margin-bottom: 1.25rem;
					font-size: 1.125rem;
				}
				div{
					width: 50%;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 1.25rem;
					p{
						width: 25%;
						text-align: right;
						color: #666666;
						font-size: 0.875rem;
					}
					input{
						width: 66%;
						padding:0.5rem 2%;
						border:0.125rem solid #ebebeb;
						outline:none;
						color: #000000;
						font-size: 0.875rem;
					}
					input::placeholder{
								color: #999999;
								font-size: 0.875rem;
					}
					textarea{
						width: 66%;
						padding:0.5rem 2%;
						border:0.125rem solid #ebebeb;
						outline:none;
						color: #000000;
						font-size: 0.875rem;
					}
					textarea::placeholder{
								color: #999999;
								font-size: 0.875rem;
					}
				}
				div.set-location{
					width: 37.5%;
					padding-left: 12.5%;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-start;
					input{
						width: auto;
					}
					label>p{
						width: auto;
						text-align: left;
						color: #666666;
						font-size: 0.75rem;
					}
					p.save{
						background-color: #b52637;
						color: #fff;
						text-align: center;
						border-radius: 0.3rem;
						font-size: 1.125rem;
						padding:0.3125rem 0.625rem;
						cursor: pointer;
					}
				}
				div.bottom-location-list{
					width: 96%;
					background-color: #FFFFFF;
					padding:0 2%;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: flex-start;
					margin-bottom: 0;
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
					div.location-top-title{
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content:flex-start;
						margin-bottom: 1rem;
						margin-top:1.25rem;
						p{
							width: auto;
							text-align: left;
							font-size: 0.75rem;
							color: #999999;
							padding:0 0;
							letter-spacing: 0.125rem;
						}
						p:nth-child(2){
							color: #f41348;
						}
						p:nth-child(5){
							color: #B52637;
						}
					}
					div.locationListBg{
						width: 100%;
						height: auto;
						padding:0 0;
						margin-bottom: 0;
						display: flex;
						flex-direction: column;
						div.locationDetail:hover{
							div.handleBg{
								display:flex;
							}
							span{
								display: block;
							}
						}
						div.locationDetail{
							width: 96%;
							padding:0.875rem 2%;
							border:0.125rem solid #d4d4d5;
							margin-bottom: 1.25rem;
							display:flex;
							flex-direction:column;
							align-items:flex-start;
							position: relative;
							span{
								font-size: 1.5625rem;
								color: #999;
								position: absolute;
								right: 0.5625rem;
								top: 0;
								display: none;
								cursor: pointer;
							}
							.handleBg{
								width: 100%;
								display: flex;
								flex-direction: row;
								align-items: center;
								justify-content: flex-end;
								position:absolute;
								bottom:0;
								right:1.5rem;
								display:none;
								p:first-child{
									width: auto;
									text-align: left;
									color: #852833;
									cursor: pointer;
								}
								p:last-child{
									width: auto;
									text-align: left;
									color: #852833;
									margin-left: 1.25rem;
									cursor: pointer;
								}
							}
							div{
								width: 100%;
								margin-bottom: 0.625rem;
								display: flex;
								flex-direction: row;
								align-items: center;
								justify-content: flex-start;
								p{
									letter-spacing: 0.25rem;
								}
								p:first-child{
									color: #999999;
									width: 14%;
									max-width: 6.3125rem;
									text-align: right;
								}
								p:last-child{
									margin-left: 0.625rem;
									color: #666666;
									text-align: left;
								}
							}
							p.name{
								width: auto;
								margin-bottom: 0.75rem;
								color: #666666;
								font-size: 1.125rem;
							}
						}
					}
				}
			}
		}
		
	}
}
</style>
