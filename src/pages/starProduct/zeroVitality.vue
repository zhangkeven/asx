<template>
	<div class="main">
    <Header v-on:listenChildEvent="searchInput" ref="data"></Header>
	<div class="right-nav-bg" @mouseenter="clearDropDown()">
		<RightNav></RightNav>
	</div>
		<div class="conent" @mouseenter="clearDropDown()">
			<!-- 购买 -->
			<div class="star-products-yi">
				<div>
					<div class="star-products-yi-img">
						<img src="../../assets/img/yi.jpg" alt="">
					</div>
					<div class="star-products-yi-mai">
						<div>
							点我购买
						</div>
					</div>
				</div>
			</div>
			<!-- 视频播放 -->
			<div class="star-products-er">
				<video src="" width="1200" height="500" poster="../../assets/img/video-bei.jpg" controls="controls">
					 <source src="" type="video/mp4">
				</video>
			</div>
			<div class="star-products-huo">
				<img src="../../assets/img/huoli.png" alt="">
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

			};
		},
		methods:{
			clearDropDown(){
				this.$refs.data.showstartdrop = false;
				this.$refs.data.showModal = false;
				this.$refs.data.showAboutdrop=false;
				this.$refs.data.showUsermodal=false;
				this.$refs.data.windowBg = 'background-color: #FFFFFF';
			},
			searchInput(e) {
				console.log('子组件中触发明星产品页面', e); //子组件输入框触发,e代表输入框中的值
			}
		},
		mounted(){

		}
	}
</script>

<style>
.star-products-yi{
		max-width:75rem; 
		margin:0 auto;
		position: relative;
	}
	.star-products-yi div{
		margin-top:7.625rem;
		margin-bottom: 2.75rem;
	}
	.star-products-yi-img{
		width: 100%;
	}
	.star-products-yi-mai{
		position: absolute;
		top:21.65rem;
		left:2.5rem;
		right: 0;
	}
	.star-products-yi-mai div{
		width: 8%;
		border:1.5px solid #afafb0;
		font-size:1.5rem;
		color: #7b7b7b;
		padding: 0.51rem 0rem;
		border-radius: 0.625rem;
		width: 10rem;
		text-align: center;
	}
	.star-products-er{
		max-width: 75rem;
		margin:0 auto;
	}
	.star-products-huo{
		margin:3.125rem 0;
	}
</style>
