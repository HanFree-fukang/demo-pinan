<template>
  <div class="page8-container">
    <Top middle="备注笔记" right="添加笔记"></Top>
    <div class="main">
      <div class="note1">
        <div class="bgc"></div>
        <p class="title">
          <span>面访笔记</span>
          <span>编辑</span>
        </p>
        <h3>
          <span></span>
          <span>面访内容：保障检视</span>
        </h3>
        <i>
          <span>有保险意识，近期无需求</span>
          <span>有足够资金</span>
        </i>
        <div class="text">
          <span>{{ text1 }}</span>
          <p class>{{ time1 }}</p>
        </div>
      </div>
      <div class="note2">
        <div class="bgc"></div>
        <p class="title">
          <span>面访笔记</span>
          <span>编辑</span>
        </p>
        <div class="text">
          <span>{{ text1 }}</span>
          <p class>{{ time1 }}</p>
        </div>
      </div>
      <div class="note3">
        <div class="bgc"></div>
        <p class="title">
          <span>常规记录</span>
          <span>编辑</span>
        </p>
        <div class="text">
          <span>{{ text1 }}</span>
          <p class>{{ time1 }}</p>
        </div>
      </div>
      <div class="note4">
        <div class="bgc"></div>

        <p class="title">
          <span>电话记录</span>
          <span>编辑</span>
        </p>
        <div class="text">
          <span>{{ text1 }}</span>
          <p class>{{ time1 }}</p>
        </div>
      </div>
      <div class="note5">
        <div class="bgc"></div>

        <p class="title">
          <span>历史备注</span>
          
        </p>
        <div class="text">
          <span>{{ text1 }}</span>
          <p class>{{ time1 }}</p>
        </div>
      </div><div class="note6">
        <div class="bgc"></div>

        <p class="title">
          <span>历史备注</span>
          
        </p>
        <div class="text">
          <span>{{ text1 }}</span>
          <p class>{{ time1 }}</p>
        </div>
      </div><div class="note7">
        <div class="bgc"></div>

        <p class="title">
          <span>历史备注</span>
          
        </p>
        <div class="text">
          <span>{{ text1 }}</span>
          <p class>{{ time1 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
export default {
  name: 'page8-container',
  components: { Top },
  props: {
    text1: {
      default: '客户买了两个190万的商铺，100多平方米，名下有一家建筑公司，推荐公司代办服务，继续跟进，还需要多沟通。'
    },
    time1: {
      default: '2020.02.12'
    }
  }
}
</script>

<style scoped lang="scss">
.page8-container {
  padding-top: 88px;
  ::v-deep .topComponent .top .left {
    padding-left: 50px;
  }
  .main {
    background-color: #f6f6f9;
    padding: 24px;
    .note1,
    .note2,
    .note3,
    .note4,
    .note5,
    .note6,
    .note7 {
      position: relative;
      margin-bottom: 25px;
      padding: 30px;
      min-height: 318px;
      background-color: #fff;
      border-radius: 12px;
      z-index: 0;
      .bgc {
        position: absolute;
        top: 0;
        right: 0;
        width: 229px;
        height: 230px;
        background-image: url(../assets/img/note.png);
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
      }
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        height: 54px;
        span:first-child {
          display: inline-block;
          width: 152px;
          height: 54px;
          border-radius: 27px;
          background-color: rgba(255,119,68,0.1);
          line-height: 54px;
          font-size: 26px;
          color: #ff7744;
          font-weight: 900;
          text-align: center;
        }
        span:last-child {
          font-size: 28px;
          color: #ff7744;
          font-weight: 900;
        }
      }
      h3 {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        font-size: 32px;
        color: rgba(0, 0, 0, 0.85);
        span:first-child {
          display: inline-block;
          margin-right: 12px;
          width: 6px;
          height: 26px;
          background-color: #ff7744;
        }
      }
      i {
        font-style: normal;
        font-size: 24px;
        color: #ff7744;
        span {
          margin-right: 12px;
          padding: 4px 8px;
          border: 1px solid rgba(255, 119, 68, 0.7);
          border-radius: 3px;
        }
      }
      .text {
        margin-top: 30px;
        span {
          font-size: 28px;
          color: rgba(0, 0, 0, 0.85);

        }
        p {
          position: absolute;
          right: 30px;
          bottom: 30px;
          margin-top: 30px;
          font-size: 24px;
          color: rgba(0, 0, 0, 0.45);
        }
      }
    }
    .note3 .bgc {
      background-image: url(../assets/img/record..png);
    }
    .note4 .bgc {
      background-image: url(../assets/img/phone.png);
    }
    .note5 .bgc,
    .note6 .bgc,
    .note7 .bgc {
      background-image: url(../assets/img/histroy.png);
    }
    .note3 .title span:first-child, 
    .note4 .title span:first-child {
      background-color: rgba(72,173,255,0.1);
    }
    .note5 .title span:first-child, 
    .note6 .title span:first-child,
    .note7 .title span:first-child {
      background-color: rgba(238,242,246,1.000);
    }
    .note3 .title span:first-child,
    .note4 .title span:first-child {
      font-size: 26px;
      color: #2c80ff;
    }
    .note5 .title span:first-child,
    .note6 .title span:first-child,
    .note7 .title span:first-child {
      color: #000;
    }



    
  }
}
</style>
