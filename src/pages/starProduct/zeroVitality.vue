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
				<p><img src="../../assets/img/huoli.png" alt=""></p>
			</div>
			<!-- 活力锅下圆弧部分 -->
			<div class="star-products-xia">
				<div class="star-products-xia-a">
					<p class="a"><img src="../../assets/img/rou.jpg" alt=""></p>
					<p><img src="../../assets/img/xia.jpg" alt=""></p>
					<p class="c"><img src="../../assets/img/mi.jpg" alt=""></p>
				</div>
				<div class="star-products-xia-c">
					<div class="images"><img src="../../assets/img/bigyuan.png" alt=""></div>
				</div>
				<div class="star-products-xia-d">
					<p class="a">令人惊讶的快速蒸煮</p>
					<p class="b">0秒料理</p>
					<p class="c">不需要繁杂的手续，美味的料理快速完成!</p>
					<p class="d">0分料理 超简单、超快速</p>
					<p class="e">用零秒活力锅，咖喱饭只要3步骤，用时0秒就能煮出新鲜的食材，完全不需要事先翻炒</p>
				</div>
				<div class="star-products-xia-b">
					<div class="b1">
						<div>
							<p><img src="../../assets/img/3.1.png" alt=""></p>
							<p class="a1"><b>1.</b>将切成大块的食物放入锅中，加上一杯水，盖上锅盖后开火。--不需将食材切成小块事先炒过！</p>
						</div>
						<div>
							<p><img src="../../assets/img/4.1.png" alt=""></p>
							<p class="a1"><b>2.</b>配重泄压阀大力摇晃后，马上关火，再利用余热烹煮就可以喽!——不需要一直微调火力大小的烹煮！</p>
						</div>
						<div>
							<p><img src="../../assets/img/6.1.png" alt=""></p>
							<p class="a1"><b>3.</b>压力指示阀完全下降后，将配重泄压阀取下，开锅并放入咖喱块，就完成喽！——最后使用余热烹煮,不需要一直守在厨房！</p>
						</div>
					</div>

				</div>
			</div>
			<!--  -->
			<div class="star-products-san">
				<div class="a">日本第一！&nbsp;&nbsp;&nbsp;热销超过540万台！</div>
				<div class="b"><img src="../../assets/img/rexiao.png" alt=""></div>
			</div>
			<div class="star-products-si">
				<div class="a">
					<div class="a1">75年专注  匠心精神  日本职人手工打造</div>
					<div class="a2">日本原装进口</div>
				</div>
				<div class="b">
					<div><img src="../../assets/img/jiangxin1.png" alt=""></div>
					<div class="a1">
						<img src="../../assets/img/jiangxin2.png" alt="">
						<img src="../../assets/img/jiangxin3.png" alt="">
					</div>
				</div>
				<div class="c">
					<div class="a1">专为东方人饮食习惯所设计的2种配种泄压阀</div>
					<div class="a2">只需要在锅盖突起的泄压柱(蒸气喷嘴)装上不同的配重泄压阀，就可以完成高压与低压的设定。不但一眼就能辨识，也不会发生旋转钮调节设定错误的情形。</div>
				</div>
				<div class="d">
					<div class="a1">
						<div class="ya">
							<p class="a">高压配重泄压阀</p>
							<p>快速、强力</p>
							<p>「零秒料理」使用</p>
						</div>
						<div class="hu">
							<img src="../../assets/img/gaoya.png" alt="">
						</div>
						<div class="miao">
							<p>零秒活力锅可将大块的肉、坚硬的鱼骨等较硬的食材</p>
							<p>在短时间内烹煮到筷子轻轻一切就断的软嫩程度!</p>
							<p class="hei">不需要繁杂的手续，美味的料理快速完成!</p>
						</div>
					</div>
					<div class="a2">
						<div>
							<p><img src="../../assets/img/roukuai.png" alt=""></p>
							<p class="a">肉块也能在短时间内煮的软嫩多汁</p>
						</div>
						<div>
							<p><img src="../../assets/img/kunbu.png" alt=""></p>
							<p class="a">香甜可口的大豆昆布煮!</p>
						</div>
						<div>
							<p><img src="../../assets/img/kunbu.png" alt=""></p>
							<p class="a">软嫩的让筷子可轻松夹断!鱼骨也可吃!</p>
						</div>
					</div>

				</div>
				<div class="d bai">
					<div class="a1">
						<div class="ya">
							<p class="a">低压配重泄压阀</p>
							<p>快速、强力</p>
							<p>「零秒料理」使用</p>
						</div>
						<div class="hu">
							<img src="../../assets/img/diya.png" alt="">
						</div>
						<div class="miao">
							<p>煮出柴烧大锅饭才能呈现Q弹香甜米饭，加压时间也只要1分钟!</p>
							<p class="hei">米饭专用的低压配重泄压阀，加压1分钟引出米饭本身的甘甜。</p>
						</div>
					</div>
					<div class="a2">
						<div>
							<p><img src="../../assets/img/mifan.png" alt=""></p>
							<p class="a">饭粒饱满Q弹的白米饭!</p>
						</div>
						<div>
							<p><img src="../../assets/img/mayou.png" alt=""></p>
							<p class="a">香气十足的香菇麻油饭！</p>
						</div>
						<div>
							<p><img src="../../assets/img/wumu.png" alt=""></p>
							<p class="a">料多丰富的五目炊饭!</p>
						</div>
					</div>

				</div>
				<div class="e">
					<div class="left">
						<p class="ling">零秒活力锅的秘密</p>
						<p>● 家用压力锅中世界最高等级146kPa</p>
						<p>● 128℃的强力烹煮</p>
						<p>● 耐高压、高保温一体成型「五层特殊复合钢金属」</p>
						<p>● 锅身可均匀导热不易烧焦</p>
						<p>● 5重安全装置的防护设计</p>
					</div>
					<div class="right">
						<div class="ji">世界最高等级146kPa</div>
						<div><img src="../../assets/img/yuanguo.png" alt=""></div>
					</div>
				</div>
				<div class="f">
					<div class="a">
						<p>无需多余油脂，保留食材全营养</p>
						<p>世界最高料理气压，营养不流失</p>
					</div>
					<div class="b">
						<div>
							<p><img src="../../assets/img/shao.png" alt=""></p>
							<p>蔬菜的甜味都被煮出来了，只需要少许的调味料就OK！</p>
						</div>
						<div>
							<p><img src="../../assets/img/dou.png" alt=""></p>
							<p>不加糖也很清甜</p>
						</div>
						<div>
							<p><img src="../../assets/img/ye.png" alt=""></p>
							<p>用少许水加热，让营养都完整保留下来！</p>
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
  import Service from '../../assets/service/service.js'
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
	.star-products-yi-img img{
		width:100%;
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
	.star-products-er video{
		width:100%;
	}
	.star-products-huo{
		margin:3.125rem 0;
	}
	.star-products-xia{
		max-width: 75rem;
	}
	.star-products-xia div.star-products-xia-a{
		width:100%;
		display: flex;
		justify-content: space-between;
	}
	.star-products-xia-a p {
		padding:0 1rem;
	}
	.star-products-xia-a p img{
		width: 100%;
	}
	.star-products-xia-a p.a img{
		border-top-left-radius:4.5rem;
		border-bottom-left-radius:4.5rem;
	}
	.star-products-xia-a p.c img{
		border-top-right-radius:4.5rem;
		border-bottom-right-radius:4.5rem;
	}
	.star-products-xia-b{
		max-width: 75rem;
		position: relative;
		top:-6.7rem;
	}
	.star-products-xia-b .b1{
		width: 100%;
		margin:.6rem auto;
		display: flex;
		justify-content: space-between;
	}
	.star-products-xia-b div.b1 div{
		width: 100%;
		display: flex;
		flex-direction: column;
		margin:0 0.625rem;
	}
	.star-products-xia-b div.b1 div p img{
		width:100%;
	}
	.star-products-xia-b div.b1 div p.a1{
		color: #999999;
		font-size:0.875rem;
		margin-left: 1.6rem;
		margin-top:0.625rem;
		line-height: 1.5rem;
	}
	.star-products-xia-b div.b1 div p b{
		color:#852833;
		font-size:1.25rem;
	}
	.star-products-xia-d{
		text-align: center;
		position: relative;
		left:0;
		right: 0;
		top: -6.8rem;
	}
	.star-products-xia-d p.a{
		color:#333333;
		font-size: 1.5rem;
	}
	.star-products-xia-d p.b{
		color:#ec4143;
		font-size: 4.5rem;
		margin-top:1.5rem;
	}
	.star-products-xia-d p.c{
		color:#666666;
		font-size:1.5rem;
		margin-top:.6rem;
	}
	.star-products-xia-d p.d{
		color: #333333;
		font-weight: bold;
		font-size: 1.5rem;
		margin-top: 3.375rem;
	}
	.star-products-xia-d p.e{
		color: #666666;
		font-size: 1rem;
		margin-top:1.25rem;
	}
	.star-products-xia-c{
		position: relative;
	}
	.star-products-xia-c div.images{
		position: absolute;
		top:-11.1rem;
		left:0;
		right: 0;
		text-align: center;
	}
	.star-products-san{
		max-width: 75rem;
		position: relative;
		top:-6.25rem;
	}
	.star-products-san .a{
		width: 100%;
		font-size: 3.75rem;
		background-color: #89623b;
		color:#fff;
		text-align: center;
		padding: 0.625rem 0;
	}
	.star-products-san .b{
		width:100%;
	}
	.star-products-san .b img{
		width: 100%;
	}
	.star-products-si{
		max-width: 75rem;
		position: relative;
		top:-5.5rem;
	}
	.star-products-si .a{
		width:100%;
		display: flex;
		justify-content: center;
	}
	.star-products-si .a div.a1{
		font-size: 2.125rem;
		color:#fff;
		background-color: #89623b;
		height: 3.1rem;
		margin-top:1.6rem;
		padding: 0.1875rem 0.75rem;
		margin-right: 2.25rem;
	}
	.star-products-si .a div.a2{
		font-size: 4.5rem;
		color:#333333;
	}
	.star-products-si .b{
		display: flex;
		justify-content: center;
		margin-top: 1.7rem;
	}
	.star-products-si .b div.a1{
		display: flex;
		flex-direction: column;
	}
	.star-products-si .b img{
		width: 100%;
	}
	.star-products-si .c{
		width: 100%;
		margin-top: 1.875rem;
	}
	.star-products-si .c div.a1{
		font-size: 1.875rem;
		color: #e70012;
		margin-bottom: 1.75rem;
		text-align: center;
	}
	.star-products-si .c div.a2{
		font-size: 1.125rem;
		color: #666666;
		margin:0 1.4rem;
	}
	.star-products-si .d{
		background-color:#EFEFEF;
		margin-top: 1.875rem;
	}
	.star-products-si .d .a1{
		padding: 1.25rem 1.5rem;
		display: flex;
		justify-content: flex-start;
	}
	.star-products-si .d .a1 .ya p.a{
		font-size: 1.5rem;
		color: #c30d23;
		border:1.5px solid #c30d23;
		border-radius: 2.25rem;
		padding: 0.875rem;
		margin-bottom: 0.625rem;
		margin-top: 1.25rem;
	}
	.star-products-si .d .a1 .ya p{
		text-align: center;
		color: #333333;
		font-size: 1.125rem;
	}
	.star-products-si .d .a1 .hu{
		margin-left: 3rem;
		margin-right: 6.75rem;
	}
	.star-products-si .d .a1 .hu img{
		width: 100%;
	}
	.star-products-si .d .a1 .miao{
		text-align: center;
		font-size: 1.5rem;
		color: #c30d23;
		line-height: 2.2rem;
		margin-top: 1.25rem;
	}
	.star-products-si .d .a1 .miao p.hei{
		color: #231815;
		margin-top: 0.3125rem;
	}
	.star-products-si .d .a2{
		padding: 2rem 3.125rem 2.5rem 3.125rem;
		display: flex;
		justify-content: space-between;
	}
	.star-products-si .d .a2 p img{
		width: 100%;
	}
	.star-products-si .d .a2 p.a{
		text-align: center;
		color: #666666;
		font-size:1.125rem;
		margin-top: 1rem;
	}
	.star-products-si .bai{
		background-color: #fff;
	}
	.star-products-si .e{
		display: flex;
		justify-content: space-between;
		background-color: #EFEFEF;
		padding: 2.5rem 2.5rem 2.5rem 1.875rem;
	}
	.star-products-si .e .left p.ling{
		font-size: 3rem;
		color: #7f4f21;
		margin-bottom: 1.5rem;
		margin-top: 0.625rem;
	}
	.star-products-si .e .left p{
		color: #333333;
		font-size: 1.5rem;
		line-height: 3rem;
	}
	.star-products-si .e .right .ji{
		color: #e60012;
		font-size: 2.25rem;
	}
	.star-products-si .e .right img{
		width: 100%;
	}
	.star-products-si .f{

	}
</style>
