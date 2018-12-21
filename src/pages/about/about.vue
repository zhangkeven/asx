<template>
    <div class="main">
      <Header/>
      <div class="swiper-container" style="width: 100%;margin-top: 4.375rem">
        <div class="swiper-wrapper">
          <!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
          <div class="swiper-slide"  v-for="(item,index) in imgs" :key="index">
            <img class="aboutBannerImg" src="../../assets/img/banner1.png" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!--<div class="swiper-button-prev swiper-button-white"></div>-->
        <!--<div class="swiper-button-next swiper-button-white"></div>-->
      </div>
      <div class="about-nav-bg">
        <div class="about-nav">
          <div>
            <p>公司简介</p>
          </div>
          <div>
            <p>公司摘要</p>
          </div>
          <div>
            <p>历史事件</p>
          </div>
          <div>
            <p>新闻中心</p>
          </div>
          <div>
            <p>联系我们</p>
          </div>
        </div>
      </div>
      <div class="about-conent">
        <p class="eh">ABOUTUS</p>
        <p class="ch">公司简介</p>
        <p class="exploit">零秒活力锅开发的故事</p>
        <div class="exploit-bg">
          <div class="left-conent">
            <p class="exploit-conent">活力锅自推出后受到广大顾客的爱用，目前已研发进化成为超越“1分钟料理”※1具有 “0秒料理”※2性能的「零秒活力锅」。让您的料理变得越来越简单。然而，开发如此神奇功能的锅具并不是件简单的事情。现在就让我们来瞧瞧零秒活力锅开发的故事吧!</p>
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
      <Bottom/>
    </div>
</template>

<script>
   import Header from '../../components/header'
   import Bottom from '../../components/bottom'
    export default {
      name: "about",
     components: {
       Header,
       Bottom
    },
      data(){
        return{
          imgs:[
            {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
            {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
            {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
            {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
          ],
        }
      },
      mounted () {
        // window.addEventListener('scroll', this.handleScroll);
        //初始化swiper
        new Swiper ('.swiper-container', {
          autoplay:2000,
          speed:300,
          // autoplayDisableOnInteraction:true,
          loopAdditionalSlides:1,
          paginationClickable:true,
          touchReleaseOnEdges:true,
          loop: true,
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
      },
    }
</script>

<style scoped>
  .aboutBannerImg{
    width: 100%;
    /*height: 100%;*/
    cursor: pointer;
  }
  div.about-nav-bg{
    width: 100%;
    height: 3.75rem;
    background-color: #eee;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  div.about-nav{
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div.about-nav>div{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color:#666;
  }
  div.about-nav>div:hover{
    background-color: #852833;
    color: #fff;
  }
  div.about-nav>div>p{
    font-size: 0.875rem;
  }
  div.main>div.about-conent{
    width: 62.5%;
    min-width: 65rem;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    position: relative;
  }
  div.main>div.about-conent>p.eh{
    text-align: center;
    color: #f2f2f2;
    font-size: 3rem;
    position: absolute;
    left: 50%;
    transform: translate(-50% ,-50%) ;
    top:1.875rem;
    z-index: -1;
  }
  div.main>div.about-conent>p.ch{
    text-align: center;
    margin-top: 2rem;
    font-size: 1.875rem;
    color: #333;
    margin-bottom: 2.625rem;
  }
  div.main>div.about-conet>div{
    margin-top: 2rem;
  }
  div.main>div.about-conent>div>div.left-conent{
      width: 80%;
  }
  div.main>div.about-conent>p.exploit{
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 2.875rem;
  }
  div.main>div.about-conent>div.exploit-bg{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div.main>div.about-conent>div.exploit-bg>div.right-img{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15%;
  }
  div.main>div.about-conent>div.exploit-bg>div.right-img>div.lead{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div.main>div.about-conent>div.exploit-bg>div.right-img>div>img{
    width: 100%;
  }
  div.main>div.about-conent>div.exploit-bg>div.right-img>div.lead>p.job-name{
    font-size: 0.875rem;
    color:#666;
    margin-top: 0.625rem;
    margin-bottom: 1rem;
  }
  div.main>div.about-conent>div.exploit-bg>div.right-img>div.lead>p.job-conent{
    font-size: 0.75rem;
    color: #999;
    line-height:200%;
  }
  div.main>div.about-conent>div>div.left-conent>p.exploit-conent{
    line-height:200%;
    color:#666;
    font-size: 0.875rem;
  }
  div.main>div.about-conent>div>div.left-conent>p.num{
   margin-bottom:0.5rem;
    color:#666;
    font-size: 0.875rem;
  }
  div.main>div.about-conent>div>div.left-conent>p.exploit-title{
    margin-top: 2.5rem;
    margin-bottom:1.875rem;
    color:#333;
    font-size: 1.125rem;
  }
  div.main>div.about-conent>div.first-news{
    margin-top: 0.625rem;
    width: 100%;
  }
  div.main>div.about-conent>div.first-news>img{
    width: 100%;
  }
  div.main>div.about-conent>p.production{
    font-size: 1.5rem;
    color:#333;
    margin-top: 2.5rem;
    margin-bottom: 3.125rem;
  }
	div.main>div.about-conent>div.production-bg{
		display: flex;
		flex-direction: row;
		margin-bottom: 2.125rem;
	}
	div.main>div.about-conent>div.production-bg>div.production-right{
		margin-left: 1.625rem;
	}
	div.main>div.about-conent>div.production-bg>div.production-left>p{
		margin-top: 0.625rem;
		color: #999999;
		font-size: 0.75rem;
	}
	div.main>div.about-conent>div.production-bg>div.production-right>p{
		color: #666666;
		font-size: 0.875rem;
		line-height: 200%;
	}
	div.main>div.about-conent>div.production-bg>div.production-right>div.production-right-bottom{
		display: flex;
		flex-direction: row;
	}
	div.main>div.about-conent>div.production-bg>div.production-right>div.production-right-bottom>div:nth-child(1)>p:nth-child(1){
		color: #333;
		font-size:1.125rem;
		margin:1.625rem 0;
	}
	div.main>div.about-conent>div.production-bg>div.production-right>div.production-right-bottom>div:nth-child(1)>p:nth-child(2){
		color: #666666;
		font-size: 0.875rem;
		line-height: 200%;
	}
	div.main>div.about-conent>div.production-bg>div.production-right>div.production-right-bottom>div:nth-child(2){
		margin-left: 5.125rem;
	}
	div.main>div.about-conent>div.production-bg>div.production-right>div.production-right-bottom>div:nth-child(2)>p{
		font-size: 0.75rem;
		color: #999999;
		margin-top: 0.625rem;
	}
	div.main>div.about-conent>p.product-make{
		font-size: 1.125rem;
		color:#333;
	}
	div.main>div.about-conent>div.make-list{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	div.main>div.about-conent>div.make-list>div{
		width: 15%;
	}
	div.main>div.about-conent>div.make-list>div>div>div{
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #852833;
		padding:0.5rem 0;
		border-radius: 0.5rem;
		margin-top: 1.5rem;
		margin-bottom: 1.25rem;
	}
	div.main>div.about-conent>div.make-list>div>div>div>p{
		font-size: 1.125rem;
		color: #FFFFFF;
	}
	div.main>div.about-conent>div.make-list>div>div>p{
		font-size: 0.875rem;
		color: #555;
		line-height:200%;
	}
	div.main>div.about-conent>div.make-list>div>div>img{
		width: 100%;
		margin-bottom: 0.625rem;
	}
	div.main>div.about-conent>p.like{
		font-size: 1.125rem;
		color: #333333;
		margin-top: 2.125rem;
		margin-bottom: 1.875rem;
	}
	div.main>div.about-conent>p.like-conent{
		font-size: 0.875rem;
		color:#666666;
		line-height: 200%;
	}
	div.main>div.about-conent>div.bottom-img{
		display: flex;
		flex-direction: row;
		margin-top: 1.125rem;
		margin-bottom: 6.625rem;
	}
	div.main>div.about-conent>div.bottom-img>div:nth-child(2){
		margin:0 0.375rem;
	}
	div.main>div.about-conent>div.bottom-img>div{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	div.main>div.about-conent>div.bottom-img>div>p{
		color: #999;
		font-size: 0.75rem;
		margin-top: 0.75rem;
	}
</style>
