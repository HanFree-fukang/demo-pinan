<template>
  <div class="page2-container">
    <Top></Top>
    <div class="main">
      <div class="top">
        <img src="../assets/img/right@2x.png" alt="" />
        <p>扫码成功</p>
      </div>
      <div class="middle">
        <div class="node">
          填写面访笔记
        </div>
        <p> 填写两个小问题，让面访更准确</p>
      </div>
      <div class="more">
        <List label="可以向TA提供以下服务" value="" bor="border" show="display: inline-block"  lis="lis">
        </List>
        <List label="面见客户" value="" show="display: inline-block" :status="false"  lis="lis">
        </List>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import List from '../components/List.vue'
export default {
name:'page2-container',
components: {
  Top,List
}
}
</script>

<style lang="scss" scoped>
  .page2-container {
    padding-top: 88px;
    .main {
    padding: 0 30px;
    .top {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: 600px;
      // background-color: pink;

      img {
        margin-bottom: 48px;
        width: 160px;
      }
      p {
        font-size: 30px;
        color: rgba(0, 0, 0, 0.85);
      }
    }
    .middle {
      height: 200px;
      text-align: center;
      .node {
        margin-bottom: 12px;
        height: 94px;
        line-height: 94px;
        background: #FF7744;
        border-radius: 47px;
        font-size: 32px;
        color: #FFFFFF;
      }
      p {
        font-size: 26px;
        color: rgba(0,0,0,0.45);
      }
    }
  }
  }
</style>