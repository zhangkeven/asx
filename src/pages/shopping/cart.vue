<template>
	<div class="main">
		<Header v-on:listenChildEvent="searchInput" ref="data"></Header>
		<div class="right-nav-bg" @mouseenter="clearDropDown()">
			<RightNav></RightNav>
		</div>
		<div class="cart-main">
		<p class="cart-text">购物车</p>
		<div class="cart-product-list">
			<div class="cart-product">
				<div class="cart-product-title">
					<p>商品信息</p>
					<p>单价</p>
					<p>数量</p>
					<p>价格</p>
					<p>操作</p>
				</div>
				<div class="cart-product-conent">
					<div>
								
					</div>
					<div>
						<p>¥ 3000</p>
					</div>
					<div>
						<span @click="dec">-</span>
						<span>{{number}}</span>
						<span @click="add">+</span>
					</div>
					<div>
						¥ 3000
					</div>
					<div>
						<p>移入收藏夹</p>
						<p>删除</p>
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
				number:1
			};
		},
		methods:{
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
			dec(){
				if(this.number>1){
					this.number--
				}
			},
			add(){
				this.number++
			}
		}
	}
</script>

<style>
 .cart-main{
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	 width: 58%;
	 margin-top: 4.375rem;
 }
 .cart-text{
	 width: 98%;
	 padding:0 1%;
	 font-size: 1.125rem;
	 color: #000000;
	 margin-top: 3.125rem;
	 margin-bottom: 1.25rem;
 }
 .cart-product-list{
	 width: 100%;
	 display: flex;
	 flex-direction: column;
	 border:0.125rem solid #f0f0f0;
	 margin-bottom: 0.625rem;
 }
 .cart-product{
	 width: 100%;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
 }
 .cart-product-title{
	 width: 100%;
	 display: flex;
	 flex-direction: row;
	 background-color: #f4f4f4;
 }
 .cart-product-title>p:not(:first-child){
	 width: 11.75%;
	 text-align: center;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 color: #999999;
	 font-size: 0.875rem;
 }
 .cart-product-title>p:first-child{
	 width: 44%;
	 padding:0.5rem 4.5%;
	 color: #999999;
	 font-size: 0.875rem;
 }
 .cart-product-conent{
	 width: 100%;
	 display: flex;
	 flex-direction: row;
	 align-items: center;
 }
 .cart-product-conent>div:first-child{
	 width: 44%;
	 padding:0 4.5%;
	 min-height: 7.625rem;
 }
 .cart-product-conent>div:not(:first-child){
	 width: 11.5%;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	 border-left:0.125rem solid #ebebeb;
	 min-height: 7.625rem;
 }
 .cart-product-conent>div:nth-child(2)>p,.cart-product-conent>div:nth-child(4)>p{
	 color:#666;
	 font-size: 1rem;
 }
 .cart-product-conent>div:nth-child(3){
	 display: flex;
	 flex-direction: row;
 }
  .cart-product-conent>div:nth-child(3)>span{
	  padding:0.2rem 2%;
	  width:20%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
  }
  .cart-product-conent>div:nth-child(3)>span:first-child{
	 border:0.125rem solid #f0f0f0; 
	 border-right:none;
	 cursor: pointer;
  }
  .cart-product-conent>div:nth-child(3)>span:last-child{
  	 border:0.125rem solid #f0f0f0; 
  	 border-left:none;
	 cursor: pointer;
  }
 .cart-product-conent>div:nth-child(3)>span:nth-child(2){
	 border:0.125rem solid #f0f0f0;
 }
 .cart-product-conent>div:last-child>p{
	 color: #666666;
	 font-size: 0.875rem;
	 margin-top: 0.3125rem;
	 cursor: pointer;
 }
</style>
