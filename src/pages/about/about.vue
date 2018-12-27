<template>
	<div class="main">
		<div style="display: flex;flex-direction: column;width: 100%;" ref="banner">
			<Header v-on:listenChildEvent="searchInput"/>
			<div class="swiper-container" style="width: 100%;margin-top: 4.375rem">
				<div class="swiper-wrapper">
					<!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
					<div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
						<img class="aboutBannerImg" src="../../assets/img/banner1.png" alt="">
					</div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>

				<!-- 如果需要导航按钮 -->
				<!--<div class="swiper-button-prev swiper-button-white"></div>-->
				<!--<div class="swiper-button-next swiper-button-white"></div>-->
			</div>
		</div>
		<div class="about-nav-bg" ref="nav">
			<div class="about-nav">
				<div v-bind:class="[{activeNav:activeNav==1}, ' ']" @click="chooseNav" data-id="1">
					<p>公司简介</p>
				</div>
				<div v-bind:class="[{activeNav:activeNav==2}, ' ']" @click="chooseNav" data-id="2">
					<p>公司摘要</p>
				</div>
				<div v-bind:class="[{activeNav:activeNav==3}, ' ']" @click="chooseNav" data-id="3">
					<p>历史事件</p>
				</div>
				<div v-bind:class="[{activeNav:activeNav==4}, ' ']" @click="chooseNav" data-id="4">
					<p>新闻中心</p>
				</div>
				<div v-bind:class="[{activeNav:activeNav==5}, ' ']" @click="chooseNav" data-id="5">
					<p>联系我们</p>
				</div>
			</div>
		</div>
		<div class="about-conent" v-show="showIntro">
			<p class="eh">ABOUTUS</p>
			<p class="ch">公司简介</p>
			<p class="exploit">零秒活力锅开发的故事</p>
			<div class="exploit-bg">
				<div class="left-conent">
					<p class="exploit-conent">活力锅自推出后受到广大顾客的爱用，目前已研发进化成为超越“1分钟料理”※1具有
						“0秒料理”※2性能的「零秒活力锅」。让您的料理变得越来越简单。然而，开发如此神奇功能的锅具并不是件简单的事情。现在就让我们来瞧瞧零秒活力锅开发的故事吧!</p>
					<p class="num">※1： 1分钟料理:当锅中食物沸腾，配重泄压阀开始大幅度摇晃后，调成小火加热1分钟，接着关闭火源，利用余热闷煮即可。</p>
					<p class="num">※2： 0秒料理:当锅中食物沸腾，配重泄压阀开始大幅度摇晃后，立即关闭火源，利用余热闷煮即可。</p>
					<p class="exploit-title">从保护地球发想瓦斯和电器的使用量可以减少一点吗?</p>
					<p class="exploit-conent">环保是现代人必须认真思考的一大课题。ASAHI轻金属工业在思考是否能对环保尽一份心力时，把提供高性能的调理器具以减少一般家庭的瓦斯费、电费视为首要考虑重点。自从开发出活力锅之后，就常常收到消费者瓦斯费、电费减少的开心回馈。因此我们有了「制作出让烹调时间更短且食物更好吃的锅子。因为烹煮时间缩短可以让繁忙的主妇多出许多可自由运用的时间，也可以对地球做出贡献！」的想法。于是公元2006年开始我们接受了这项新的挑战，这个挑战耗费3年的时间才完成!</p>
					<p class="exploit-title">以累积10年的顾客回馈意见为后盾开始研发</p>
					<p class="exploit-conent">一直以来，我们对于制作高压锅的技术感到相当自豪，我们有信心活力锅绝对不会输给市面上任何一款高压锅，但我们并不因此而自满不思进步。针对过去10年间被我们珍视的顾客意见回馈进行彻底的分析、改善，再对世界各国的高压锅进行调查研究。以「制作出一个专门让东方人使用的高压锅」为考虑重点。经过不断地改良与研发，终于创造出一个不仅是世界上最快速、还可以烹煮出最好吃的米饭专用「低压配重泄压阀」，是更进一步提升东方美食的设计</p>
					<p class="exploit-title">追求「安全」与「设计」兼容并蓄</p>
					<p class="exploit-conent">新「零秒活力锅」是将食物煮沸后调成小火继续加热的1分钟转变成0秒--就是煮沸后便无须再加热，只要利用余热闷煮即可。将缩短的这1分钟视为技术开发的主轴，同时也在外观设计与使用的便利性上加以改良。特别是整体的曲线设计，更是其他市售品牌高压锅所没有的！然而这样的曲线设计在成型上非常困难，研发人员在试作与错误间不断尝试，因此开发费用也超出想象许多。但是设计出「让顾客每天都想要使用并且喜爱的高压锅」这样的理念，支持我们持续开发出令人满意的产品。此外「安全」是高压锅最基本的要求，「零秒活力锅」比前一代活力锅加强了更多的安全对策与安全设计，并以「不论是什么人都可以安心使用并享受烹调的乐趣」为宗旨！这项费时且工程浩大的设计，在不断试作与各种耐压测试之下，安全有了突破性的提升。虽然有时候设计性与安全性两者无法并存，但是在我们工作人员不断的研发与重复实验测试之下，两者终于可以达到最完美的结合。这个费尽千辛万苦开发出来的高压锅就是「零秒活力锅」，我们开发团队的成员可以很有信心的向您推荐，并「请您每天都使用它」！这就是ASAHI新产品「零秒活力锅」诞生的故事。</p>
				</div>
				<div class="right-img">
					<div class="lead">
						<img src="../../assets/img/people.png" alt="">
						<p class="job-name">生产部部长 池胁 和正</p>
						<p class="job-conent">推动零秒活力锅开发计划的核心集结所有的技术、
							设计以及安全的知识，让零秒活力锅臻至完美</p>
					</div>
					<div>
						<img src="../../assets/img/design.png" alt="">
					</div>
				</div>
			</div>
			<div class="first-news">
				<img src="../../assets/img/banner1.png" alt="">
			</div>
			<p class="production">来全能平底锅生产的现场瞧瞧</p>
			<div class="production-bg">
				<div class="production-left">
					<img src="../../assets/img/rengong.png" alt="">
					<p>
						朝日平底锅是由技术纯熟的工作人员，一个一个手工制作而成的
					</p>
				</div>
				<div class="production-right">
					<p>各位亲爱的顾客，您知道家中厨房所使用的ASAHI厨具都是怎么制造出来的吗？让我们来告诉您，在ASAHI职人的坚持下，所制作出来的料理器具！现在就从制作全能平底锅的生产制程开始看起吧！</p>
					<div class="production-right-bottom">
						<div>
							<p>于划时代材质「多孔铝质」的坚持</p>
							<p>从制造柴烧灶用煮饭锅开始的ASAHI轻金属工业，在公元1963年成功的推出现今朝日平底锅的前身「金属铝铸造陶瓷珐琅锅」之后，一直持续致力于铸造与内外加工法的改良与创新。进而在1996年发表了「无水？」「无油？」全能平底锅，从外表看来与其他平底锅无异，却有着划时代的烹饪秘密隐藏在材质里，这个秘密就是「多孔铝质手工铸造法」。全能平底锅的金属铝材质中含有许多细小的气泡，这些气泡可将热源均匀地传达到锅子的每一处，并具有良好的蓄热保温效果。每一个锅子都是在我们的兵库工厂细心打造完成的！</p>
						</div>
						<div>
							<img src="../../assets/img/guo20.png" alt="">
							<p>锅身可均匀受热的「金属铝陶瓷加工法」实际产品化后陆续研发出更多好用的商品！</p>
						</div>
					</div>
				</div>
			</div>
			<p class="product-make">朝日平底锅生产过程</p>
			<div class="make-list">
				<div>
					<div>
						<div>
							<p>1.铸型</p>
						</div>
						<img src="../../assets/img/zhuxing.png" alt="">
						<p>将平底锅的主要原料铝合金用700℃以上的高温溶解，一个一个慢慢的铸入平底锅模型之中。</p>
					</div>
				</div>
				<div>
					<div>
						<div>
							<p>2.脱模</p>
						</div>
						<img src="../../assets/img/tuomo.png" alt="">
						<p>将初具雏形的平底锅从模型中取出，去除模型周围的浇铸线，这些浇铸线并非多余的！这可都是让锅身均匀平整的必要元素</p>
					</div>
				</div>
				<div>
					<div>
						<div>
							<p>3.耐用图层加工</p>
						</div>
						<img src="../../assets/img/naiyong.png" alt="">
						<p>为了让耐久性不粘锅涂膜层与锅内密合，在锅内加工出细致的凹凸面</p>
					</div>
				</div>
				<div>
					<div>
						<div>
							<p>4.内外加工</p>
						</div>
						<img src="../../assets/img/neiwai.png" alt="">
						<p>锅身外部以550℃的高温进项陶瓷烤漆加工，不粘锅涂膜层与耐久性不粘锅涂膜层加工</p>
					</div>
				</div>
				<div>
					<div>
						<div>
							<p>5.修饰加工</p>
						</div>
						<img src="../../assets/img/xiushi.png" alt="">
						<p>确认并磨平可能造成顾客使用时刮手的部分，最后再装上把手</p>
					</div>
				</div>
				<div>
					<div>
						<div>
							<p>6.品质检查</p>
						</div>
						<img src="../../assets/img/wancheng.png" alt="">
						<p>放电磁炉检测通电状况与其他品质的测试。通过严格的品质确认的商品才能出货！</p>
					</div>
				</div>
			</div>
			<p class="like">为使所有顾客感到欢喜，怎么费工都在所不惜！</p>
			<p class="like-conent">
				在锅子送到顾客手上之前，最重要的就是要确保表面与里层都没有损伤，因此每个全能平底锅都是我们用心制作出来的！
				朝日平底锅生产制程中，有将原料放入熔解炉加热熔解的过程，也有将金属铝铸入模型烧制的过程，加热处理步骤繁多，工作人员即使在酷寒的冬天也常挥汗如雨地工作，工作环境绝对称不上舒适。而为了追求质量，许许多多的手工作业也少不了，一天可完成的数量也就相当有限，因此常有缺货的现象产生。但是这都是为了做出一个既安全又方便使用的全能平底锅，今后我们也将持续以此做为努力的目标！
			</p>
			<div class="bottom-img">
				<img src="../../assets/img/guke1.png" alt="">
				<div>
					<img src="../../assets/img/guke2.png" alt="">
					<p>锅内采用双层强化镀膜底层，具有耐腐蚀与耐磨的特质,锅子底部则使用耐用涂层加工。</p>
				</div>
				<div>
					<img src="../../assets/img/guke3.png" alt="">
					<p>每个全能平底锅都是我们用心仔仔细细制作出来的产品。</p>
				</div>
			</div>
		</div>
		<div class="company-digest" v-show="showDigest">
			<p class="ch">公司概要</p>
			<p class="eh">ASAHI NABE</p>
			<p class="digest-title">持续传递丰富的生活</p>
			<p class="digest-conent">
				アサヒ以「质量第一」为创业的第一步，制作出当时唯一获得符合日本工业标准JIS（Japanese Industrial
				Standards）要求的「アサヒ 釜 （朝日ASAHI饭锅）」，二次大战时，日本陆军使用的煮饭盒以及二次大战后的瓦斯自动煮饭器、电子锅等优质产品陆续问世。创社七十多年来，不断地努力研发，以「最高质量、最符合顾客需求」为最高指导原则，将「对饮食生活有帮助」的家庭烹饪调理器呈现给大家。
			</p>
			<div class="digest-img-bg">
				<div class="digest-img">
					<img src="../../assets/img/guo9.png" alt="">
					<img src="../../assets/img/guo8.png" alt="">
					<img src="../../assets/img/guo7.png" alt="">
				</div>
			</div>
			<p class="digest-title-child">不断创新开发，符合客户需求</p>
			<p class="digest-conent-child">
				ASAHI将研发的热情与特有的铸造技术倾注在金属、树脂、陶瓷等材质的制造上，自创社以来不断开发特有产品。 
				深入分析「使用方法」，并针对其他品牌调理器功能不足的部分进行调整，以期制作出对于「在家煮饭」更有帮助的烹调器具。因此，跟随时代的脚步，「最高质量，最符合客户需求」的产品也一一呈现在消费者眼前。
			</p>
			<img src="../../assets/img/gc.png" alt="">
			<p class="digest-title-child1">企业展望与期许</p>
			<div class="outlook-bg">
				<div class="outlook-left">
					<p>◆ 针对顾客所追求的饮食生活创造新价值</p>
					<p>◆ 追求调理器具对健康饮食生活的极致贡献</p>
					<p>◆ 从烹调中发现有利于地球环境保护的调理器具</p>
					<p>◆ 基于上述理念，不断创新技术</p>
					<p>◆ 以安全为前提，追求最高质量的商品制造</p>
					<p>◆ 不透过中间商，针对商品、使用方法、料理食谱等信息，成立日本唯一制造商与消费者直接对谈的会员制，提供完善的售后服务</p>
				</div>
				<div class="outlook-right">
					<img src="../../assets/img/zhanwang.png" alt="">
				</div>
			</div>
			<div class="footer-conent">
				<div>
					<p>本社</p>
					<p>朝日轻金属工业样式会社</p>
				</div>
				<div>
					<p>总公司</p>
					<p>大阪市中央瓦町1-4-16&nbsp;&nbsp;&nbsp;TEL代表号&nbsp;&nbsp;&nbsp;+81-6-6222-2222</p>
				</div>
				<div>
					<p>工厂</p>
					<p>兵库县加西市工业区</p>
				</div>
				<div>
					<p>创立</p>
					<p>公元1944年5月</p>
				</div>
				<div>
					<p>登记</p>
					<p>公元1947年6月&nbsp;&nbsp;注册登记</p>
				</div>
				<div>
					<p>主要产品</p>
					<p>研发销售守护家庭健康的调理器具</p>
				</div>
			</div>
		</div>
		<div class="company-history" :style="bgHeight" v-show="showHistory">
			<div class="top-bg">
				<div class="line-bg-red">

				</div>
				<div class="line-bg-gary">

				</div>
			</div>
			<!-- <div style="width: 100%;">
				<img style="width: 100%;" src="../../assets/img/loukong.png" alt="">
			</div> -->
			<div  class="history-conent">
				<p class="ch">历史事件</p>
				<p class="eh">Historical events</p>
			</div>
			<div class="year-list">
				<p v-for="(item,index) in historyList" :key="index">
					{{item.year}}年
				</p>
			</div>
			
			<!-- <div class="line-gay">
				<img src="../../assets/img/road.png" alt="">
			</div>
			<div class="line-red" :style="scrollHeight">
				<img src="../../../road1.png" alt="">
			</div> -->
			<div class="date-bg">
				<div class="date-conent" v-for="(item,index) in historyList" :key="index" v-if="roll==index">
					<div>
						<p>{{item.year}}</p>
					</div>
					<div>
						<p>1月 IH电磁炉专用、多孔质铝铸调理器「达人组合」开始贩卖</p>
						<p>2月 IH电磁炉专用、手掌大小的「零秒活力锅2.5L型」开始贩卖
							IH电磁炉专用、多孔质铝铸调理器、手掌大小的「Double
							PAN」开始贩卖</p>
					</div>
				</div>

				<!-- 如果需要分页器 -->
				<!-- <div class="swiper-pagination"></div> -->

				<!-- 如果需要导航按钮 -->
				<!--<div class="swiper-button-prev swiper-button-white"></div>-->
				<!--<div class="swiper-button-next swiper-button-white"></div>-->

			</div>
		</div>
		<div class="news-center" v-show="showNews">
			<p class="ch">新闻中心</p>
			<p class="eh">NEWS</p>
			<div class="news-nav">
				<p @click="newschoosetype" v-bind:class="[{activeNav:choosetype==0},'']" data-id="0">媒体报道</p>
				<p @click="newschoosetype" v-bind:class="[{activeNav:choosetype==1},'']" data-id="1">最新消息</p>
			</div>
			<div class="news-conent">
				<div class="news-conent-top">
					<div>
						<img src="../../assets/img/media1.png" alt="">
						<p>发布时间：&nbsp;&nbsp;2018-12-02</p>
					</div>
					<div>
						<p>活力锅必买的3大好处</p>
						<p>
							因为用水量少、快速烹煮，所以美味都锁在食材里！只需用一杯水烹煮，所以食材原有的味道完全被导引出来，不用加任何调味料也能吃到食材本身的甘甜！
							将蔬菜中的水分与甜味充分释出
							变身为浓郁高汤
							2.让鱼骨也能食用！
							吸收满满钙质
							「零秒活力锅」拥有世界最高等级146kPa，可将大块的肉、坚硬的鱼骨在短时间内烹煮到
						</p>
						<p>查看更多>></p>
					</div>
				</div>
				<div class="news-conent-bottom">
					<div v-for="(item,index) in newsList" :key="index">
						<div>
							<img src="../../assets/img/media1.png" alt="">
							<div>
								<p>
									{{item.title}}
								</p>
								<p>
									{{item.conent}}
								</p>
								<p>
									发布时间：{{item.time}}
								</p>
							</div>
						</div>
						<div>
							<img src="../../assets/img/issue.png" alt="">
						</div>
					</div>
				</div>
				<div class="bottom-page">
					<div class="page-count">
						<p @click="newsprevPage">上一页</p>
						<div>
							<p @click="choosenewsPage" :data-id="index" v-bind:class="[{activePage:newspageCount==index}, ' ']" v-for="(item,index) in newspage"
							 :key="index">{{item}}</p>
						</div>
						<p @click="newsnextPage">下一页</p>
					</div>
				</div>
			</div>
		</div>
		<div class="call-us" v-show="showCall">
			<div class="call-us-conent">
				<p class="ch">联系我们</p>
				<p class="eh">CONACT US</p>
				<div class="contact-nav">
					<div class="contact-nav-tab">
						<img src="../../assets/img/location.png" alt="">
						<p>地址</p>
						<p>台湾台南市东品裕平路118号</p>
					</div>
					<div class="tab-line"></div>
					<div class="contact-nav-tab">
						<img src="../../assets/img/phone.png" alt="">
						<p>电话</p>
						<p>06-3317369</p>
					</div>
					<div class="tab-line"></div>
					<div class="contact-nav-tab">
						<img src="../../assets/img/chuanzhen.png" alt="">
						<p>传真</p>
						<p>06-3317858 (701)</p>
					</div>
				</div>
			</div>
			<div id="container" class="location-bg">
				<!-- <img src="../../assets/img/map.png" alt=""> -->
			</div>
		</div>
		<div style="width: 100%;z-index: 5;">
			<Bottom />
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import Swiper4 from 'swiper'
	import Header from '../../components/header'
	import Bottom from '../../components/bottom'
	import AMap from 'AMap'
	var map
	export default {
		name: "about",
		components: {
			Header,
			Bottom

		},
		data() {
			return {
				bgHeight: '',
				roll: 0,
				newspageCount: 0,
				newspage: [
					'1', '2', '3', '4', '5', '6'
				],
				imgs: [{
						imgUrl: '../assets/img/banner.png',
						url: 'http://www.baidu.com'
					},
					{
						imgUrl: '../assets/img/banner.png',
						url: 'http://www.baidu.com'
					},
					{
						imgUrl: '../assets/img/banner.png',
						url: 'http://www.baidu.com'
					},
					{
						imgUrl: '../assets/img/banner.png',
						url: 'http://www.baidu.com'
					},
				],
				newsList: [{
						title: '活力锅必买的3大好处',
						conent: '因为用水量少、快速烹煮，所以美味都锁在食材里！只需用一杯水烹煮，所以食材原有的味道完全被导引出来，不用加任何调味料也能吃到食材本身的甘甜！',
						time: '2018-12-02'
					},
					{
						title: '活力锅必买的3大好处',
						conent: '因为用水量少、快速烹煮，所以美味都锁在食材里！只需用一杯水烹煮，所以食材原有的味道完全被导引出来，不用加任何调味料也能吃到食材本身的甘甜！',
						time: '2018-12-02'
					},
					{
						title: '活力锅必买的3大好处',
						conent: '因为用水量少、快速烹煮，所以美味都锁在食材里！只需用一杯水烹煮，所以食材原有的味道完全被导引出来，不用加任何调味料也能吃到食材本身的甘甜！',
						time: '2018-12-02'
					}
				],
				historyList: [{
						year: '2018'
					},
					{
						year: '2017'
					},
					{
						year: '2016'
					},
					{
						year: '2015'
					},
					{
						year: '2014'
					},
					{
						year: '2013'
					},
					{
						year: '2012'
					},
					{
						year: '2011'
					},
					{
						year: '2010'
					},
					{
						year: '2009'
					},
					{
						year: '2008'
					},
					{
						year: '2007'
					},
					{
						year: '2006'
					},
					{
						year: '2005'
					},
					{
						year: '2004'
					},
					{
						year: '2003'
					},
					{
						year: '2002'
					},
					{
						year: '2001'
					},
					{
						year: '1999'
					},
					{
						year: '1998'
					},
					{
						year: '1958'
					},
					{
						year: '1957'
					},
					{
						year: '1956'
					},
					{
						year: '1955'
					},
					{
						year: '1954'
					},
					{
						year: '1953'
					},
					{
						year: '1952'
					},
					{
						year: '1951'
					},
					{
						year: '1950'
					},
					{
						year: '1949'
					}
				],
				activeNav: 1,
				showIntro: true,
				showDigest: false,
				showHistory: false,
				showNews: false,
				showCall: false,
				choosetype: 0,
				scrollHeight: 'height:15rem'
			}
		},
		methods: {
			searchInput(e){
				console.log('子组件中触发about页面',e);//子组件输入框触发,e代表输入框中的值
			},
			chooseNav(e) {
				if (e.currentTarget.dataset.id == this.activeNav) {

				} else {
					this.activeNav = e.currentTarget.dataset.id
				}
				if (e.currentTarget.dataset.id == 1) {
					this.showIntro = true;
					this.showDigest = false;
					this.showHistory = false;
					this.showNews = false;
					this.showCall = false;
				} else if (e.currentTarget.dataset.id == 2) {
					this.showIntro = false;
					this.showDigest = true;
					this.showHistory = false;
					this.showNews = false;
					this.showCall = false;
				} else if (e.currentTarget.dataset.id == 3) {
					this.showIntro = false;
					this.showDigest = false;
					this.showHistory = true;
					this.showNews = false;
					this.showCall = false;
				} else if (e.currentTarget.dataset.id == 4) {
					this.showIntro = false;
					this.showDigest = false;
					this.showHistory = false;
					this.showNews = true;
					this.showCall = false;
				} else if (e.currentTarget.dataset.id == 5) {
					this.showIntro = false;
					this.showDigest = false;
					this.showHistory = false;
					this.showNews = false;
					this.showCall = true;
				}
			},
			getData() {
				var that = this;
				that.$http.post('https://duoduo18.com/public/index.php/index/index/index', {
					appkey: 'QDD',
					jintro: 1,
					keyword: '',
					page: 1
				}).then(function(data) {
					console.log(data.body)
				}, function(error) {})

			},
			newschoosetype(e) {
				if (e.currentTarget.dataset.id == this.choosetype) {

				} else {
					this.choosetype = e.currentTarget.dataset.id
				}
			},
			choosenewsPage(e) {
				if (e.currentTarget.dataset.id == this.newspageCount) {

				} else {
					this.newspageCount = e.currentTarget.dataset.id
				}
			},
			newsprevPage() {
				if (this.newspageCount > 0) {
					this.newspageCount--
				}
			},
			newsnextPage() {
				if (this.newspageCount < 5) {
					this.newspageCount++
				}
			},
			init: function() {
				map = new AMap.Map('container', {
					center: [120.1878170000, 22.9986010000],
					resizeEnable: true,
					zoom: 15,
					destName: '台湾台南市东品裕平路118号'
				})
				AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
					map.addControl(new AMap.ToolBar())
					map.addControl(new AMap.Scale())
				})
				var marker = new AMap.Marker({
					icon: "http://www.kevenzhang.com/image/mark_b.png",
					position: [120.1878170000, 22.9986010000]
				});
				map.add(marker);
				// map.setFitView();
				// AMap.moveCamera(CameraUpdateFactory.zoomTo(15))
			},
			getScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				console.log(scrollTop);
				var index = scrollTop / 155;
				console.log('取整', parseInt(index));
				if(index>30){
					this.roll=30
				}else{
					this.roll = parseInt(index);	
				}
			}
		},
		created: function() {
			//this.getData() //定义方法
		},
		mounted() {
			var index = 31;
			this.bgHeight = 'height:' + (12 + 10 * index) + 'rem';
			window.addEventListener('scroll', this.getScroll);
			//初始化swiper
			this.init();
			new Swiper('.swiper-container', {
				autoplay: 2000,
				speed: 300,
				// autoplayDisableOnInteraction:true,
				loopAdditionalSlides: 1,
				paginationClickable: true,
				touchReleaseOnEdges: true,
				loop: true,
				observer: true,
				observeParents: false,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				// paginationHide:true,
				// grabCursor:true,
				// paginationVisibleClass:'my-visible-switch',
				// 如果需要前进后退按钮
				// nextButton: '.swiper-button-next',
				// prevButton: '.swiper-button-prev',
				// 如果需要滚动条
				// scrollbar: '.swiper-scrollbar',
			});
			this.getScroll();
		},
	}
</script>

<style scoped>
	.aboutBannerImg {
		width: 100%;
		/*height: 100%;*/
		cursor: pointer;
	}

	div.about-nav-bg {
		width: 100%;
		height: 3.75rem;
		background-color: #eee;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	div.about-nav {
		width: 45%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	div.about-nav>div {
		width: 20%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		color: #666;
	}

	div.about-nav>div.activeNav {
		background-color: #852833;
		color: #fff;
	}

	div.about-nav>div:hover {
		background-color: #852833;
		color: #fff;
	}

	div.about-nav>div>p {
		font-size: 0.875rem;
	}

	div.main>div.about-conent {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: column;
		flex-direction: column;
		position: relative;
	}

	div.main>div.about-conent>p.eh {
		text-align: center;
		color: #f2f2f2;
		font-size: 3rem;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 1.875rem;
		z-index: -1;
	}

	div.main>div.about-conent>p.ch {
		text-align: center;
		margin-top: 2rem;
		font-size: 1.875rem;
		color: #333;
		margin-bottom: 2.625rem;
	}

	div.main>div.about-conet>div {
		margin-top: 2rem;
	}

	div.main>div.about-conent>div>div.left-conent {
		width: 80%;
	}

	div.main>div.about-conent>p.exploit {
		font-size: 1.5rem;
		color: #333;
		margin-bottom: 2.875rem;
	}

	div.main>div.about-conent>div.exploit-bg {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	div.main>div.about-conent>div.exploit-bg>div.right-img {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 15%;
	}

	div.main>div.about-conent>div.exploit-bg>div.right-img>div.lead {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div.main>div.about-conent>div.exploit-bg>div.right-img>div>img {
		width: 100%;
	}

	div.main>div.about-conent>div.exploit-bg>div.right-img>div.lead>p.job-name {
		font-size: 0.875rem;
		color: #666;
		margin-top: 0.625rem;
		margin-bottom: 1rem;
	}

	div.main>div.about-conent>div.exploit-bg>div.right-img>div.lead>p.job-conent {
		font-size: 0.75rem;
		color: #999;
		line-height: 200%;
	}

	div.main>div.about-conent>div>div.left-conent>p.exploit-conent {
		line-height: 200%;
		color: #666;
		font-size: 0.875rem;
	}

	div.main>div.about-conent>div>div.left-conent>p.num {
		margin-bottom: 0.5rem;
		color: #666;
		font-size: 0.875rem;
	}

	div.main>div.about-conent>div>div.left-conent>p.exploit-title {
		margin-top: 2.5rem;
		margin-bottom: 1.875rem;
		color: #333;
		font-size: 1.125rem;
	}

	div.main>div.about-conent>div.first-news {
		margin-top: 0.625rem;
		width: 100%;
	}

	div.main>div.about-conent>div.first-news>img {
		width: 100%;
	}

	div.main>div.about-conent>p.production {
		font-size: 1.5rem;
		color: #333;
		margin-top: 2.5rem;
		margin-bottom: 3.125rem;
	}

	div.main>div.about-conent>div.production-bg {
		display: flex;
		flex-direction: row;
		margin-bottom: 2.125rem;
	}

	div.main>div.about-conent>div.production-bg>div.production-right {
		margin-left: 1.625rem;
	}

	div.main>div.about-conent>div.production-bg>div.production-left>p {
		margin-top: 0.625rem;
		color: #999999;
		font-size: 0.75rem;
	}

	div.main>div.about-conent>div.production-bg>div.production-right>p {
		color: #666666;
		font-size: 0.875rem;
		line-height: 200%;
	}

	div.main>div.about-conent>div.production-bg>div.production-right>div.production-right-bottom {
		display: flex;
		flex-direction: row;
	}

	div.main>div.about-conent>div.production-bg>div.production-right>div.production-right-bottom>div:nth-child(1)>p:nth-child(1) {
		color: #333;
		font-size: 1.125rem;
		margin: 1.625rem 0;
	}

	div.main>div.about-conent>div.production-bg>div.production-right>div.production-right-bottom>div:nth-child(1)>p:nth-child(2) {
		color: #666666;
		font-size: 0.875rem;
		line-height: 200%;
	}

	div.main>div.about-conent>div.production-bg>div.production-right>div.production-right-bottom>div:nth-child(2) {
		margin-left: 5.125rem;
	}

	div.main>div.about-conent>div.production-bg>div.production-right>div.production-right-bottom>div:nth-child(2)>p {
		font-size: 0.75rem;
		color: #999999;
		margin-top: 0.625rem;
	}

	div.main>div.about-conent>p.product-make {
		font-size: 1.125rem;
		color: #333;
	}

	div.main>div.about-conent>div.make-list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	div.main>div.about-conent>div.make-list>div {
		width: 15%;
	}

	div.main>div.about-conent>div.make-list>div>div>div {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #852833;
		padding: 0.5rem 0;
		border-radius: 0.5rem;
		margin-top: 1.5rem;
		margin-bottom: 1.25rem;
	}

	div.main>div.about-conent>div.make-list>div>div>div>p {
		font-size: 1.125rem;
		color: #FFFFFF;
	}

	div.main>div.about-conent>div.make-list>div>div>p {
		font-size: 0.875rem;
		color: #555;
		line-height: 200%;
	}

	div.main>div.about-conent>div.make-list>div>div>img {
		width: 100%;
		margin-bottom: 0.625rem;
	}

	div.main>div.about-conent>p.like {
		font-size: 1.125rem;
		color: #333333;
		margin-top: 2.125rem;
		margin-bottom: 1.875rem;
	}

	div.main>div.about-conent>p.like-conent {
		font-size: 0.875rem;
		color: #666666;
		line-height: 200%;
	}

	div.main>div.about-conent>div.bottom-img {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 1.125rem;
		margin-bottom: 6.625rem;
		width: 100%;
	}

	div.main>div.about-conent>div.bottom-img>img {
		width: 32%;
	}

	div.main>div.about-conent>div.bottom-img>div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 32%;
	}

	div.main>div.about-conent>div.bottom-img>div>img {
		width: 100%;
	}

	div.main>div.about-conent>div.bottom-img>div>p {
		color: #999;
		font-size: 0.75rem;
		margin-top: 0.75rem;
	}

	div.main>div.company-digest {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
	}

	div.main>div.company-digest>p.eh {
		text-align: center;
		color: #f2f2f2;
		font-size: 3rem;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 1.875rem;
		z-index: -1;
	}

	div.main>div.company-digest>p.ch {
		text-align: center;
		margin-top: 2rem;
		font-size: 1.875rem;
		color: #333;
		margin-bottom: 2.625rem;
	}

	div.main>div.company-digest>p.digest-title {
		color: #333333;
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 2.75rem;
	}

	div.main>div.company-digest>p.digest-conent {
		color: #666666;
		font-size: 0.875rem;
		width: 100%;
		line-height: 200%;
		margin-bottom: 1.875rem;
	}

	div.main>div.company-digest>div.digest-img-bg {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	div.main>div.company-digest>div.digest-img-bg>div.digest-img {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	div.main>div.company-digest>div.digest-img-bg>div.digest-img>img {
		width: 12.7%;
	}

	div.main>div.company-digest>p.digest-title-child {
		color: #333333;
		font-size: 1.5rem;
		text-align: center;
		margin: 2.75rem 0;
	}

	div.main>div.company-digest>p.digest-conent-child {
		width: 100%;
		color: #666666;
		font-size: 0.875rem;
		line-height: 200%;
	}

	div.main>div.company-digest>img {
		width: 86%;
		margin-bottom: 2.5rem;
		margin-top: 1.375rem;
	}

	div.main>div.company-digest>p.digest-title-child1 {
		color: #333333;
		font-size: 1.5rem;
		text-align: center;
		width: 86%;
		margin-bottom: 1.75rem;
	}

	div.main>div.company-digest>div.outlook-bg {
		width: 86%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 1.875rem;
	}

	div.main>div.company-digest>div.outlook-bg>div.outlook-left {
		display: flex;
		flex-direction: column;
		width: 58%;
		justify-content: center;
	}

	div.main>div.company-digest>div.outlook-bg>div.outlook-left>p {
		color: #666666;
		font-size: 0.875rem;
		margin-bottom: 0.625rem;
	}

	div.main>div.company-digest>div.outlook-bg>div.outlook-right {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 40%;
	}

	div.main>div.company-digest>div.outlook-bg>div.outlook-right>img {
		width: 100%;
	}

	div.main>div.company-digest>div.footer-conent {
		display: flex;
		flex-direction: column;
		width: 84%;
		margin-bottom: 5rem;
	}

	div.main>div.company-digest>div.footer-conent>div {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	div.main>div.company-digest>div.footer-conent>div>p:nth-child(1) {
		width: 15%;
		padding: 0.625rem 2%;
		background-color: #852833;
		color: #FFFFFF;
		text-align: center;
		border-bottom: 0.0625rem solid #FFFFFF;
		font-size: 0.875rem;
	}

	div.main>div.company-digest>div.footer-conent>div>p:nth-child(2) {
		width: 65%;
		padding: 0.625rem 8%;
		border-bottom: 0.125rem solid #EEEEEE;
		color: #666666;
		font-size: 0.875rem;
		border-right: 0.125rem solid #bbb;
	}

	div.main>div.company-digest>div.footer-conent>div:nth-child(1)>p:nth-child(2) {
		border-top: 0.125rem solid #d4d4d5;
	}

	div.main>div.company-digest>div.footer-conent>div:last-child>p:nth-child(2) {
		border-bottom: 0.125rem solid #d4d4d5;
	}

	div.main>div.company-history {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		background: url('../../assets/img/lk.png') no-repeat;
	}
	div.main>div.company-history>div.year-list{
		width: 100%;
		position: relative;
	}
	div.main>div.company-history>div.year-list>p{
		font-size: 1.25rem;
		color:#333;
	}
	div.main>div.company-history>div.year-list>p:nth-child(1){
		position: absolute;
		left: 37%;
		top: 12.5rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(2){
		position: absolute;
		left: 40.625rem;
		top:23rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(3){
		position: absolute;
		left: 55rem;
		top:33rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(4){
		position: absolute;
		left: 71rem;
		top:43.5rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(5){
		position: absolute;
		left: 66rem;
		top:53.5rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(6){
		position: absolute;
		left: 78rem;
		top:64rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(7){
		position: absolute;
		left: 69rem;
		top:74rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(8){
		position: absolute;
		left: 70.5rem;
		top:84.5rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(9){
		position: absolute;
		/* left: 82rem; */
		top:94.5rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(10){
		position: absolute;
		left: 72rem;
		top:105rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(11){
		position: absolute;
		left: 63rem;
		top:115rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(12){
		position: absolute;
		left: 71rem;
		top:125rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(13){
		position: absolute;
		/* left: 85rem; */
		top:135.5rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(14){
		position: absolute;
		left: 85rem;
		top:146rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(15){
		position: absolute;
		left: 56rem;
		top:157rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(16){
		position: absolute;
		left: 49rem;
		top:166.5rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(17){
		position: absolute;
		left: 60rem;
		top:176rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(18){
		position: absolute;
		/* left:86.5rem; */
		top:186.5rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(19){
		position: absolute;
		/* left: 90rem; */
		top:197rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(20){
		position: absolute;
		left: 67rem;
		top:208rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(21){
		position: absolute;
		left: 46rem;
		top:218rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(22){
		position: absolute;
		left:47.5rem;
		top:228rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(23){
		position: absolute;
		left: 54.5rem;
		top:238rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(24){
		position: absolute;
		left: 68.5rem;
		top:248.5rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(25){
		position: absolute;
		left: 51rem;
		top:260rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(26){
		position: absolute;
		left: 38rem;
		top:269rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(27){
		position: absolute;
		left: 45.5rem;
		top:279rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(28){
		position: absolute;
		left:70rem;
		top:289rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(29){
		position: absolute;
		left: 61rem;
		top:300rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(30){
		position: absolute;
		left: 52rem;
		top:310rem;
	}
	div.main>div.company-history>div.year-list>p:nth-child(31){
		position: absolute;
		left: 78rem;
		top:64rem;
	}
	div.main>div.company-history>div.top-bg {
		position: fixed;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		
	}

	div.main>div.company-history>div.top-bg>div.line-bg-red {
		flex: 7.2;
		background-color: #852833;
		width: 100%;
	}

	div.main>div.company-history>div.top-bg>div.line-bg-gary {
		flex: 2.8;
		background-color: #d2d2d2;
		width: 100%;
	}

	div.main>div.company-history>div.history-conent {
		width: 100%;
		// min-width: 65rem;
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
		background-color: #FFFFFF;
	}

	div.main>div.company-history>div.history-conent>p.eh {
		text-align: center;
		color: #f2f2f2;
		font-size: 3rem;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 1.875rem;
		z-index: 1;
		width: 100%;
	}

	div.main>div.company-history>div.history-conent>p.ch {
		text-align: center;
		font-size: 1.875rem;
		color: #333;
		margin-bottom: 2.625rem;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 3.5rem;
		width: 100%;
		z-index: 2;
	}

	div.main>div.company-history>div.line-gay {
		width: 80%;
		position: absolute;
		top: 0;
		left: 10.7%;
		bottom: 0;
		right: 0;
	}

	div.main>div.company-history>div.line-gay>img {
		width: 100%;
	}

	div.main>div.company-history>div.line-red {
		width: 80%;
		position: absolute;
		top: 0;
		left: 10.7%;
		bottom: 0;
		z-index: 2;
		overflow: hidden;
	}

	div.main>div.company-history>div.line-red>img {
		width: 100%;
		/* height: 31.25rem; */
	}

	div.main>div.company-history>div.date-bg {
		position: relative;
		display: flex;
		position: fixed;
		top: 32.5rem;
		left: 34.375rem;
	}

	div.main>div.company-history>div.date-bg>div.date-conent {
		display: flex;
		flex-direction: row;
	}

	div.main>div.company-history>div.date-bg>div.date-conent>div:nth-child(1) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		background: url('../../assets/img/yearBg.png') no-repeat;
		width: 11.3125rem;
		height: 10rem;
	}

	div.main>div.company-history>div.date-bg>div.date-conent>div:nth-child(2) {
		width: 28.75rem;
		height: 7.8125rem;
		background-color: #efefef;
		margin-left: 0.75rem;
		padding-left: 0.9375rem;
		padding-right: 1.875rem;
	}

	div.main>div.company-history>div.date-bg>div.date-conent>div:nth-child(1)>p {
		font-size: 2.25rem;
		color: #FFFFFF;
		margin-top: 2.1875rem;
	}

	div.main>div.company-history>div.date-bg>div.date-conent>div:nth-child(2)>p {
		margin-top: 0.625rem;
		color: #666666;
		font-size: 0.875rem;
		line-height: 200%;
	}

	div.main>div.news-center {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
	}

	div.main>div.news-center>p.eh {
		text-align: center;
		color: #f2f2f2;
		font-size: 3rem;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 1.875rem;
		z-index: -1;
	}

	div.main>div.news-center>p.ch {
		text-align: center;
		margin-top: 2rem;
		font-size: 1.875rem;
		color: #333;
		margin-bottom: 2.625rem;
	}

	div.main>div.news-center>div.news-nav {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 1.625rem;
	}

	div.main>div.news-center>div.news-nav>p.activeNav {
		background-color: #852833;
		color: #FFFFFF;
		border: 0.125rem solid #852833;
		cursor: pointer;
	}

	div.main>div.news-center>div.news-nav>p {
		font-size: 1.25rem;
		color: #666666;
		border: 0.125rem solid #cbcbcb;
		padding: 0.625rem 1.875rem;
		cursor: pointer;
	}

	div.main>div.news-center>div.news-nav>p:hover {
		background-color: #852833;
		color: #FFFFFF;
		border: 0.125rem solid #852833;
		cursor: pointer;
	}

	div.main>div.news-center>div.news-nav>p:nth-child(1) {
		margin-right: 4.375rem;
	}

	div.main>div.news-center>div.news-nav>p:nth-child(2) {
		margin-left: 4.375rem;
	}

	div.main>div.news-center>div.news-conent {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		background-color: #FAFAFA;
		cursor: pointer;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-top>div:nth-child(1) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 51%;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-top>div:nth-child(1)>img {
		width: 100%;
		margin-top: 2.625rem;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-top>div:nth-child(1)>p {
		color: #999;
		font-size: 0.875rem;
		margin-top: 0.75rem;
		margin-bottom: 1.25rem;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-top>div:nth-child(2) {
		width: 47%;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-top>div:nth-child(2)>p:nth-child(1) {
		color: #666666;
		font-size: 1.25rem;
		margin-top: 3rem;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-top>div:nth-child(2)>p:nth-child(2) {
		color: #666666;
		font-size: 0.875rem;
		margin-top: 1.75rem;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-top>div:nth-child(2)>p:nth-child(3) {
		color: #666666;
		font-size: 0.875rem;
		margin-top: 1.875rem;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-bottom {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: 1.875rem;
		margin-bottom: 1.75rem;
		cursor: pointer;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-bottom>div {
		display: flex;
		flex-direction: row;
		/* padding:0.625rem 0; */
		background-color: #fafafa;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: 3.75rem;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-bottom>div>div:nth-child(1) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		width: 78%;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-bottom>div>div:nth-child(1)>img {
		width: 38%;
		height: 100%;
		margin-top: 1.875rem;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-bottom>div>div:nth-child(1)>div {
		width: 58%;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-bottom>div>div:nth-child(1)>div>p:nth-child(1) {
		margin-top: 2.375rem;
		margin-bottom: 1.5rem;
		font-size: 1.125rem;
		color: #333;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-bottom>div>div:nth-child(1)>div>p:nth-child(2) {
		margin-bottom: 2.5rem;
		color: #666666;
		font-size: 0.75rem;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-bottom>div>div:nth-child(1)>div>p:nth-child(3) {
		color: #999999;
		font-size: 0.75rem;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-bottom>div>div:nth-child(2) {
		width: 2.6%;
	}

	div.main>div.news-center>div.news-conent>div.news-conent-bottom>div>div:nth-child(2)>img {
		width: 100%;
		height: 100%;
	}

	div.main>div.news-center>div.news-conent>div.bottom-page {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 8.875rem;
	}

	div.main>div.news-center>div.news-conent>div.bottom-page>div.page-count {
		display: flex;
		flex-direction: row;
	}

	div.main>div.news-center>div.news-conent>div.bottom-page>div.page-count>p {
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

	div.main>div.news-center>div.news-conent>div.bottom-page>div.page-count>p:hover {
		background-color: #852833;
		color: #FFFFFF;
	}

	div.main>div.news-center>div.news-conent>div.bottom-page>div.page-count>div {
		display: flex;
		flex-direction: row;
	}

	div.main>div.news-center>div.news-conent>div.bottom-page>div.page-count>div>p {
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

	div.main>div.news-center>div.news-conent>div.bottom-page>div.page-count>div>p.activePage {
		background-color: #852833;
		color: #FFFFFF;
	}

	div.main>div.news-center>div.news-conent>div.bottom-page>div.page-count>div>p:hover {
		background-color: #852833;
		color: #FFFFFF;
	}

	div.main>div.call-us {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div.main>div.call-us>div.call-us-conent {
		width: 62.5%;
		min-width: 65rem;
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
	}

	div.main>div.call-us>div.call-us-conent>p.eh {
		text-align: center;
		color: #f2f2f2;
		font-size: 3rem;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 1.875rem;
		z-index: -1;
	}

	div.main>div.call-us>div.call-us-conent>p.ch {
		text-align: center;
		margin-top: 2rem;
		font-size: 1.875rem;
		color: #333;
		margin-bottom: 2.625rem;
	}

	div.main>div.call-us>div.call-us-conent>div.contact-nav {
		width: 85%;
		padding: 2.375rem 7.5%;
		background-color: #F8F8F8;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	div.main>div.call-us>div.call-us-conent>div.contact-nav>div.contact-nav-tab {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div.main>div.call-us>div.call-us-conent>div.contact-nav>div.contact-nav-tab>img {
		width: 2.3125rem;
		height: 2.3125rem;
		margin-bottom: 1.875rem;
	}

	div.main>div.call-us>div.call-us-conent>div.contact-nav>div.contact-nav-tab>p:nth-child(2) {
		color: #666666;
		font-size: 1.5rem;
		margin-bottom: 1.375rem;
	}

	div.main>div.call-us>div.call-us-conent>div.contact-nav>div.contact-nav-tab>p:nth-child(3) {
		color: #999999;
		font-size: 1rem;
	}

	div.main>div.call-us>div.call-us-conent>div.contact-nav>div.tab-line {
		width: 0.125rem;
		height: 2rem;
		background-color: #CBCBCB;
	}

	div.main>div.call-us>div.location-bg {
		width: 100%;
		height: 33.125rem;
		margin-top: 2.5rem;
		margin-bottom: 5.625rem;
	}

	div.main>div.call-us>div.location-bg>img {
		width: 100%;
	}
</style>
