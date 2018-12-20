<template>
  <div class="main">
    <div v-bind:class="topNav">
      <div class="topLeft">
        <div class="topLeftTitle">
          <img src="../assets/img/logo.png" alt="">
        </div>
      </div>
      <div class="nav">
        <a href="javascript:">首页</a>
        <a href="javascript:">明星产品</a>
        <a href="javascript:">料理教室</a>
        <a href="javascript:">使用者分享</a>
        <a href="javascript:">关于我们</a>
        <p href="javascript:">我要购买</p>
      </div>
      <div class="navRight">
        <div class="searchBg">
          <input type="text">
          <img src="../assets/img/search.png" alt="">
        </div>
        <img src="../assets/img/person.png"  alt="">
        <img src="../assets/img/cart.png" alt="">
      </div>
    </div>
    <!--<div class="banner">-->
      <!--<img class="bannerImg" src="../assets/img/banner.png" alt="">-->
    <!--</div>-->
    <div class="swiper-container" style="width: 100%">
          <div class="swiper-wrapper">
            <!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
            <div class="swiper-slide"  v-for="(item,index) in imgs" :key="index">
              <img class="bannerImg" src="../assets/img/banner.png" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

           <!-- 如果需要导航按钮 -->
           <!--<div class="swiper-button-prev swiper-button-white"></div>-->
          <!--<div class="swiper-button-next swiper-button-white"></div>-->
    </div>
    <div class="conent">
      <div class="goShopping">
        <div class="hlgBg">
          <img src="../assets/img/guo.png" alt="">
          <p>活力锅介绍</p>
          <div class="mask">

          </div>
        </div>
        <div class="hlgBg">
          <img src="../assets/img/guo1.png" alt="">
          <p>全能锅介绍</p>
          <div class="mask">

          </div>
        </div>
        <div class="goShoppBg">
          <p>前往商城</p>
          <img src="../assets/img/go.png" alt="">
        </div>
      </div>
      <p class="recommendCh">推荐专栏</p>
      <p class="recommendEh">Expert tips</p>
      <div class="recommendConent">
        <div>
          <img src="../assets/img/hdy.png" alt="">
          <div class="mask">

          </div>
          <div>
            <p class="title">黄豆芽排骨汤</p>
            <p class="cuisineConent">黄豆芽是属于高纤的蔬菜，如果只有一锅满满的蔬菜汤会觉得好像在吃草，我们放了一些红萝卜白萝卜......</p>
            <p class="issue">查看更多>></p>
          </div>
        </div>
        <div>
          <img src="../assets/img/xhs.png" alt="">
          <div class="mask">

          </div>
          <div>
            <p class="title">高纤西红柿蔬菜汤</p>
            <p class="cuisineConent">西红柿是高钾的食材，所以会帮助钠排出体外，另外还有丰富的蔬菜，蔬菜也有各种纤维素，能够帮助废物排出......</p>
            <p class="issue">查看更多>></p>
          </div>
        </div>
        <div>
          <img src="../assets/img/hyp.png" alt="">
          <div class="mask">

          </div>
          <div>
            <p class="title">姜黄鱼片炖饭</p>
            <p class="cuisineConent">一般我们炖饭都会有太多勾芡、太多调味料，过油过咸就是导致水肿的主要关键，这道姜黄鱼片炖饭.........</p>
            <p class="issue">查看更多>></p>
          </div>
        </div>
        <div>
          <img src="../assets/img/sjd.png" alt="">
          <div class="mask">

          </div>
          <div>
            <p class="title">水炒四季豆</p>
            <p class="cuisineConent">四季豆相对来讲比一般蔬菜的纤维较粗，所以也是非常高纤的食材，起锅前再加上一些亚麻仁籽油，就完成......</p>
            <p class="issue">查看更多>></p>
          </div>
        </div>
      </div>
      <div class="discounts">
        <img src="../assets/img/discounts 1.png" alt="">
        <img src="../assets/img/discounts 2.png"  alt="">
      </div>
      <p class="aboutCh">关于我们</p>
      <p class="aboutEh">About Us</p>
      <div class="aboutConent">
        <img src="../assets/img/gc.png" alt="">
        <p class="aboutDetail">环保是现代人必须认真思考的一大课题。ASAHI轻金属工业在思考是否能对环保尽一份心力时，把提供高性能的调理器具以减少一般家庭的瓦斯费、电费视为首要考虑重点。自从开发出活力锅之后，就常常收到消费者瓦斯费、电费减少的开心反馈。因此我们有了「制作出让烹调时间更短且食物更好吃的锅子。因为烹煮时间缩短可以让繁忙的主妇多出许多可自由运用的时间，也可以对地球做出贡献！于是公元2006年开始我们接受了这项新的挑战，这个挑战耗费3年的时间才完成!</p>
        <p class="issueAbout" @click="seeMore()">查看更多>></p>
      </div>
      <p class="recipesCh">菜谱</p>
      <p class="recipesEh">Recipes</p>
      <div class="recipesConent">
        <div class="swiper-button-color1"></div>
        <div style="width: 91%">
          <div class="swiper-container1" id="swiper-container">
            <div class="swiper-wrapper">
              <!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
              <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
                <div class="menu">
                  <div>
                    <img src="../assets/img/hdy.png" alt="">
                    <div class="mask">

                    </div>
                    <div>
                      <p class="title">黄豆芽排骨汤</p>
                      <p class="cuisineConent">黄豆芽是属于高纤的蔬菜，如果只有一锅满满的蔬菜汤会觉得好像在吃草，我们放了一些红萝卜白萝卜......</p>
                    </div>
                  </div>
                  <div>
                    <img src="../assets/img/xhs.png" alt="">
                    <div class="mask">

                    </div>
                    <div>
                      <p class="title">高纤西红柿蔬菜汤</p>
                      <p class="cuisineConent">西红柿是高钾的食材，所以会帮助钠排出体外，另外还有丰富的蔬菜，蔬菜也有各种纤维素，能够帮助废物排出......</p>
                    </div>
                  </div>
                  <div>
                    <img src="../assets/img/hyp.png" alt="">
                    <div class="mask">

                    </div>
                    <div>
                      <p class="title">姜黄鱼片炖饭</p>
                      <p class="cuisineConent">一般我们炖饭都会有太多勾芡、太多调味料，过油过咸就是导致水肿的主要关键，这道姜黄鱼片炖饭.........</p>
                    </div>
                  </div>
                  <div>
                    <img src="../assets/img/sjd.png" alt="">
                    <div class="mask">

                    </div>
                    <div>
                      <p class="title">水炒四季豆</p>
                      <p class="cuisineConent">四季豆相对来讲比一般蔬菜的纤维较粗，所以也是非常高纤的食材，起锅前再加上一些亚麻仁籽油，就完成......</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <!--<div class="swiper-pagination"></div>-->

            <!-- 如果需要导航按钮 -->
            <!--<div class="swiper-button-prev swiper-button-white"></div>-->
            <!--<div class="swiper-button-next swiper-button-white"></div>-->
          </div>
        </div>
        <div class="swiper-button-color"></div>
      </div>
      <p class="useCh">使用心得</p>
      <p class="useEh">Customer reviews</p>
    </div>
    <div class="swiper-container3" style="width: 100%">
      <div class="swiper-wrapper">
        <!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
        <div class="swiper-slide"  v-for="(item,index) in imgs" :key="index">
          <div class="useConent">
            <div class="useList">
              <img src="../assets/img/tb.png" alt="">
              <div>
                <p class="useTitle">汤包</p>
                <p class="useListConent">对于忙碌的职业妇女来说，活力锅帮我省下不少时间,增添更多美味，用活力锅第一次煮了红豆汤，口感绵密比外卖还专业，家人赞叹我...</p>
              </div>
            </div>
            <div class="useList">
              <img src="../assets/img/tb.png" alt="">
              <div>
                <p class="useTitle">莊小如</p>
                <p class="useListConent">买了3L零秒活力锅，想不煮饭都难！锅身外型，就已经加分了。煮出来的食物美味度更是不得了。希忘大家能多分享使用食谱喔！！</p>
              </div>
            </div>
            <div class="useList">
              <img src="../assets/img/tb.png" alt="">
              <div>
                <p class="useTitle">魏锦良</p>
                <p class="useListConent">刚刚才开箱，研读使用说明，时间跟火焰，有别以后的烹调方式，新鲜感让人想了解这：新食器时代!</p>
              </div>
            </div>
            <div class="useList">
              <img src="../assets/img/tb.png" alt="">
              <div>
                <p class="useTitle">汤包</p>
                <p class="useListConent">对于忙碌的职业妇女来说，活力锅帮我省下不少时间,增添更多美味，用活力锅第一次煮了红豆汤，口感绵密比外卖还专业，家人赞叹我...</p>
              </div>
            </div>
            <div class="useList">
              <img src="../assets/img/tb.png" alt="">
              <div>
                <p class="useTitle">汤包</p>
                <p class="useListConent">对于忙碌的职业妇女来说，活力锅帮我省下不少时间,增添更多美味，用活力锅第一次煮了红豆汤，口感绵密比外卖还专业，家人赞叹我...</p>
              </div>
            </div>
            <div class="useList">
              <img src="../assets/img/tb.png" alt="">
              <div>
                <p class="useTitle">汤包</p>
                <p class="useListConent">对于忙碌的职业妇女来说，活力锅帮我省下不少时间,增添更多美味，用活力锅第一次煮了红豆汤，口感绵密比外卖还专业，家人赞叹我...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mediaBg">
      <div class="media">
        <p>媒体报道</p>
        <div class="swiper-container2" style="width: 100%">
          <div class="swiper-wrapper">
            <!--<div class="swiper-slide" ><a href=""><img class="bannerImg" src="../assets/img/banner.png" alt=""></a></div>-->
            <div class="swiper-slide"  v-for="(item,i) in mediaList" :key="i">
              <div style="width: 100%">
                <div>
                  <img src="../assets/img/media1.png" alt="">
                  <div class="mask">

                  </div>
                </div>
                <div>
                  <div class="mediaBottom">
                    <p class="mediaTitle">活力锅必买的三大好处</p>
                    <p class="mediaConent">因为用水量少、快速烹煮，所以美味都锁在食材里！只需用一杯水烹煮，所以......</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <div class="media-nav">
            <div class="swiper-img-prev"></div>
            <div class="swiper-img-next"></div>
          </div>
          <!-- 如果需要导航按钮 -->
          <!--<div class="swiper-button-prev swiper-button-white"></div>-->
          <!--<div class="swiper-button-next swiper-button-white"></div>-->
        </div>
      </div>
      <div class="news">
        <div class="newsTitleBg">
          <p class="newsTitle">最新消息</p>
          <p class="issueNews">查看更多>></p>
        </div>
        <div class="newsList">
          <div v-for="(item,index) in newsList" :key="index">
            <div>
              <img src="../assets/img/duobianxing.png" alt="">
              <p>【涨价公告】10/16起，朝日锅具将调整价格</p>
            </div>
            <p>2018-10-08</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
        <div>
          <div>
            <div class="bottomTitleBg">
              <div class="bottomTitle">
                <div>
                  <img src="../assets/img/time.png" alt="">
                  <p>72小时发货</p>
                </div>
                <p>今日下单3天内出货不含当天，节假日</p>
              </div>
              <div class="bottomTitle">
                <div>
                  <img src="../assets/img/baoyou.png" alt="">
                  <p>满399包邮</p>
                </div>
                <p>全场399包邮</p>
              </div>
              <div class="bottomTitle">
                <div>
                  <img src="../assets/img/fapiao.png" alt="">
                  <p>电子发票</p>
                </div>
                <p>关爱地球，保护环境，全场使用电子发票</p>
              </div>
              <div class="bottomTitle">
                <div>
                  <img src="../assets/img/tuihuo.png" alt="">
                  <p>7天无理由退换</p>
                </div>
                <p>商品退换，请于7日内联系工作人员</p>
              </div>
            </div>
          </div>
          <div class="bottomConent">
            <div>
              <div>
                <p class="baseTitle">产品中心</p>
                <p>0秒活力锅</p>
                <p>全能锅</p>
                <p>天使锅系列</p>
                <p>梦幻公主锅</p>
                <p>配件</p>
              </div>
            </div>
            <div>
              <div>
                <p class="baseTitle">料理教室</p>
                <p>料理教室</p>
                <p>料理教室</p>
                <p>料理教室</p>
                <p>料理教室</p>
              </div>
            </div>
            <div>
              <div>
                <p class="baseTitle">使用者分享</p>
                <p>使用者分享</p>
                <p>使用者分享</p>
                <p>使用者分享</p>
                <p>使用者分享</p>
                <p>使用者分享</p>
              </div>
            </div>
            <div>
              <div>
                <p class="baseTitle">最新动态</p>
                <p>最新动态</p>
                <p>最新动态</p>
                <p>最新动态</p>
                <p>最新动态</p>
                <p>最新动态</p>
              </div>
            </div>
            <div>
              <div>
                <p class="baseTitle">客服</p>
                <p>免费客服电话：0800-600-997</p>
                <p>服务时间：</p>
                <p>周一～周五 08：30～11：30/13：30～16：30</p>
                <p>国定节假日不提供服务</p>
                <p>传真：06-3317858（701）</p>
              </div>
            </div>
          </div>
        </div>
      <div class="line">

      </div>
      <div class="location">
        <div>
          <img src="../assets/img/gongan.gif" style="height: 1.375rem;margin-right: 0.5rem" alt="">
          <p>苏公网安备 11000002000088号</p>
          <p style="margin-left: 1rem">地址：台湾台南市东区裕平路118号</p>
        </div>
        <p>技术支持：</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import Swiper1 from 'swiper';
  import Swiper2 from 'swiper';
  import Swiper3 from 'swiper';
  export default {
  // name: 'Main',
  data () {
    return {
      msg: '这是主页',
      currentTab: 1,
      isActive: false,
      topNav: 'topNavBg',
      imgs:[
        {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
        {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
        {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
        {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
      ],
      newsList:['','','','',''],
      mediaList:['','','','','']
    }
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop);
      console.log($('.topLeft')[0]);
      if (scrollTop > 0){
        this.topNav = 'topNavBg1'
      } else {
        this.topNav = 'topNavBg'
      }
    },
    seeMore(){
      this.$router.push({name:'Seemore',params:{id:'110',name:'tom'}})
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
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
     paginationVisibleClass:'my-visible-switch',
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
    });
    new Swiper1 ('#swiper-container', {
      autoplay:false,
      speed:300,
      // autoplayDisableOnInteraction:true,
      loopAdditionalSlides:1,
      paginationClickable:true,
      touchReleaseOnEdges:true,
      loop: true,
      // 如果需要分页器
      // pagination: '.swiper-pagination',
      // paginationHide:true,
      // grabCursor:true,
      paginationVisibleClass:'my-visible-switch',
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-color',
      prevButton: '.swiper-button-color1',
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
    })
    new Swiper2 ('.swiper-container2', {
      autoplay:false,
      speed:300,
      // autoplayDisableOnInteraction:true,
      loopAdditionalSlides:1,
      paginationClickable:true,
      touchReleaseOnEdges:true,
      loop: true,
      // 如果需要分页器
      // pagination: '.swiper-pagination',
      // paginationHide:true,
      // grabCursor:true,
      // paginationVisibleClass:'my-visible-switch',
      // 如果需要前进后退按钮
      nextButton: '.swiper-img-next',
      prevButton: '.swiper-img-prev',
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
    })
    new Swiper3 ('.swiper-container3', {
      autoplay:false,
      speed:300,
      // autoplayDisableOnInteraction:true,
      loopAdditionalSlides:1,
      paginationClickable:true,
      touchReleaseOnEdges:true,
      loop: true,
      // 如果需要分页器
      // pagination: '.swiper-pagination',
      // paginationHide:true,
      // grabCursor:true,
      // paginationVisibleClass:'my-visible-switch',
      // 如果需要前进后退按钮
      // nextButton: '.swiper-img-next',
      // prevButton: '.swiper-img-prev',
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
    })
  },
   created(){

   }
}
</script>
<style>
 body{
   min-width: 69rem;
 }
 .mask{
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,0);
   position: absolute;
   left: 0;
   bottom: 0;
   transition: background-color linear .5s;
 }
 .mask:hover{
   background-color: rgba(0,0,0,.1);
 }
 .swiper-container1{
   margin: 0 auto;
   position: relative;
   overflow: hidden;
   list-style: none;
   padding: 0;
   /* Fix of Webkit flickering */
   z-index: 1;
 }
 .swiper-container2{
   margin: 0 auto;
   position: relative;
   overflow: hidden;
   list-style: none;
   padding: 0;
   /* Fix of Webkit flickering */
   z-index: 1;
   display: flex;
   justify-content: center;
 }
 .swiper-container3{
   margin: 0 auto;
   position: relative;
   overflow: hidden;
   list-style: none;
   padding: 0;
   /* Fix of Webkit flickering */
   z-index: 1;
 }
 .swiper-button-color{
   background-image: url("../assets/img/go(1).png");
   width: 1.25rem;
   height: 2.4rem;
   cursor: pointer;
 }
 .swiper-button-color1{
   background-image: url("../assets/img/go2.png");
   width: 1.25rem;
   height: 2.4rem;
   cursor: pointer;
 }
  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /*width: 120rem;*/
  }
  .topNavBg{
    width: 70.5%;
    min-width: 69rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:1.5rem 2%;
    position: fixed;
    top:3.5rem;
    z-index: 4;
    box-shadow: 0 0.3125rem 0.9375rem 0 #ececec;
  }
  .topNavBg1{
    width: 96%;
    min-width: 69rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:1rem 2%;
    position: fixed;
    top:0;
    z-index: 4;
    box-shadow: 0 0.3125rem 0.9375rem 0 #ececec;
  }
  .topLeft{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
  }
  .nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .nav a{
    margin-right:2rem;
    font-size: 1rem;
    transition:color linear .5s;
  }
  .nav a:hover{
    color: #9f303d;
  }
  .nav p{
    width: 5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #852833;
    color: #ffffff;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
  }
  .bannerImg{
    width: 100%;
    /*height: 100%;*/
    cursor: pointer;
  }
  .navRight{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
  }
  .searchBg{
    background-color:#EEE;
    padding:0.5rem 0.5rem;
    width: 13rem;
    height: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin-right: 1.5rem;
  }
  .searchBg input{
    border:none;
    width: 80%;
    background-color: #EEE;
    flex: 1;
    outline:none;
  }
  .navRight>img{
    margin-right:1.5rem;
    width: 1rem;
  }
 .el-carousel__item h3 {
   color: #475669;
   font-size: 14px;
   opacity: 0.75;
   line-height: 200px;
   margin: 0;
 }
  .conent{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 68%;
    min-width: 65rem;
  }
  .goShopping{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 3.4rem;
    width: 100%;
  }
 .hlgBg{
   width: 32%;
   height: 11.5rem;
   position: relative;
   cursor: pointer;
 }
  .hlgBg img{
    width: 100%;
    height: 100%;
  }
  .hlgBg p{
    font-size: 1rem;
    color: #333;
    position: absolute;
    bottom: 0;
    background-color:rgba(51,51,51,.1);
    width: 96%;
    padding:0.2rem 2%;
  }
  .goShoppBg{
    width: 32%;
    height: 11.5rem;
    background-color: #852833;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .goShoppBg p{
    font-size: 1.875rem;
    color: #ffffff;
    margin-right: 1rem;
  }
  .recommendCh{
    font-size: 1.875rem;
    color: #333;
    margin-top: 2.375rem;
  }
  .recommendEh{
    font-size: 1.25rem;
    color: #666;
    margin-top: 0.625rem;
    margin-bottom: 2.5rem;
  }
  .recommendConent{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .recommendConent>div{
    width:23.5%;
    /*height: 15.875rem;*/
    background-color: #f3ebe4;
    min-height: 27rem;
    position: relative;
    cursor: pointer;
  }
  .recommendConent>div>img{
    width: 100%;
  }
  .recommendConent>div>div{
    width: 92%;
    padding:0 4%;
  }
  .recommendConent>div>div>p.title{
    margin-top: 1.25rem;
    font-size: 1rem;
    color:#5a5a57;
  }
  .recommendConent>div>div>p.cuisineConent{
    margin-top: 1.875rem;
    font-size: 0.875rem;
    color: #a6a09b;
  }
 .recommendConent>div>div>p.issue{
   margin-top: 1.75rem;
   margin-bottom: 0.875rem;
   font-size: 0.875rem;
   color: #a6a09b;
   position: absolute;
   bottom: 1rem;
   cursor: pointer;
 }
 .menu{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
 }
 .menu>div{
   width:23.5%;
   /*height: 15.875rem;*/
   background-color: #fff;
   min-height:24rem;
   position: relative;
   border-radius: 0.5rem;
   box-shadow: inset -0.7rem -0.7rem 0.5rem #eee;
   cursor: pointer;
 }
 .menu>div>img{
   width: 100%;
   border-radius: 0.5rem;
 }
 .menu>div>div{
   width: 92%;
   padding:1rem 4%;
 }
 .menu>div>div>p.title{
   margin-top: 1.25rem;
   font-size: 1rem;
   color:#5a5a57;
 }
 .menu>div>div>p.cuisineConent{
   margin-top: 1.875rem;
   font-size: 0.875rem;
   color: #a6a09b;
 }
  .discounts{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3.875rem;
  }
  .discounts img{
    width: 49%;
  }
  p.aboutCh{
    margin-top: 2.5rem;
    font-size: 1.875rem;
    color: #333;
  }
  p.aboutEh{
    margin-bottom: 1.875rem;
    font-size: 1.5rem;
    color: #666;
  }
  div.aboutConent{
    width: 100%;
    box-shadow: inset -0.7rem -0.7rem 0.5rem #eee;
    padding:0.5rem 0;
  }
  div.aboutConent>img{
    width: 100%;
  }
  div.aboutConent>p.aboutDetail{
    color: #666;
    font-size: 0.875rem;
    margin:0.5rem 0;
  }
  div.aboutConent>p.issueAbout{
    color:#df4557;
    font-size: 1rem;
    text-align: right;
    cursor: pointer;
  }
  p.recipesCh{
    margin-top: 4.375rem;
    font-size: 1.875rem;
    color: #333;
  }
  p.recipesEh{
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: #666;
  }
  .recipesConent{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 110%;
  }
  .useCh{
    margin-top: 1.875rem;
    font-size: 1.875rem;
    color: #333;
  }
  .useEh{
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    color: #666;
  }
  .useConent{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
  }
  .useConent>div.useList{
    width: 15%;
    position: relative;
    cursor: pointer;
  }
 .useConent>div.useList>img{
   width: 100%;
 }
 .useConent>div.useList>div{
   padding:1rem 4%;
   width: 92%;
   background-color: rgba(235,235,235,.5);
   position: absolute;
   bottom: 0;
   min-height: 8rem;
 }
  .useConent>div.useList>div>p.useTitle{
    font-size: 1.125rem;
    color: #333;
    margin-bottom: 1rem;
  }
  .useConent>div.useList>div>p.useListConent{
    font-size: 0.75rem;
    color:#333;
  }
  .mediaBg{
    width: 68%;
    min-width: 65rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:4.375rem 0;
  }
  .media{
    width: 49%;
  }
  .media-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    width: 90%;
    bottom: 1rem;
    z-index: 10;
  }
 .media>div.swiper-container2>div.swiper-wrapper>div.swiper-slide{
   cursor: pointer;
   position: relative;
 }
  .media>div.swiper-container2>div.swiper-wrapper>div.swiper-slide>div>div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 96%;
    padding:1.125rem 2%;
    background-color: #f8f8f8;
  }

  .swiper-img-prev{
    background-image: url("../assets/img/go2.png");
    width: 1.25rem;
    height: 2.4rem;
    cursor: pointer;
  }
  .swiper-img-next{
    background-image: url("../assets/img/go(1).png");
    width: 1.25rem;
    height: 2.4rem;
    cursor: pointer;
  }
  .media>div.swiper-container2>div.swiper-wrapper>div.swiper-slide>div>div>img{
    width: 100%;
  }
  .media>p{
    font-size: 1.875rem;
    color: #333;
    margin-left: 2rem;
    margin-bottom: 2.625rem;
  }
  div.mediaBottom{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
  }
  .mediaTitle{
    font-size: 0.875rem;
    color: #666;
  }
  .mediaConent{
    font-size: 0.875rem;
    color: #999;
    margin-top: 1rem;
  }
  .news{
    width: 49%;
  }
  .news>div.newsTitleBg{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2.625rem;
    align-items: center;
  }
  .news>div>p.newsTitle{
    font-size: 1.875rem;
    color: #333;
    cursor: pointer;
  }
 .news>div>p.issueNews{
   font-size: 1rem;
   color: #e50012;
   cursor: pointer;
 }
 .newsList{
   display: flex;
   flex-direction: column;
   width: 100%;
 }
 .newsList>div{
   width: 96%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   background-color: #ffffff;
   box-shadow: 0 0.5rem 0 0.1rem #ececec;
   padding: 0.5rem 2%;
   cursor: pointer;
   margin-bottom: 2.75rem;
 }
 .newsList>div>div{
   display: flex;
   flex-direction: row;
 }
  .bottom{
    width: 100%;
    background-color: #852833;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div.bottom>div{
    width: 68%;
    min-width: 65rem;
  }
  .bottomTitleBg{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .bottomConent{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1.875rem;
  }
  .bottomConent p{
    color: #ffffff;
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }
  .bottomConent p.baseTitle{
    margin-bottom: 1.625rem;
    font-size: 0.875rem;
  }
  .bottomTitle{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bottomTitle>div{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.875rem;
  }
  .bottomTitle>div>p{
    color: #ffffff;
    font-size: 1.125rem;
    margin-left: 0.5rem;
  }
  .bottomTitle>p{
    color: #ffffff;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
  div.bottom div.line{
    width: 100%;
    height: 2px;
    background-color: #ffffff;
  }
  div.location{
    width: 68%;
    min-width: 65rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:0.5rem 0;
  }
  div.location p{
    color: #ffffff;
  }
  div.location>div{
    display: flex;
    flex-direction: row;
  }
</style>
<style scoped>
/*@import'../assets/css/swiper.min.css';*/
</style>
