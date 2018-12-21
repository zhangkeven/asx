<template>
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
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
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
