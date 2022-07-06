<template>
  <div class="page10-container">
    <Top middle="客户详情"></Top>
    <div class="bgc"></div>
    <div class="main">
      <div class="title">
        <router-link tag="span" to="/page10/child1" active-class="active">客户信息</router-link>
        <router-link tag="span" to="/page10/child2" active-class="active">经营指引</router-link>
        <router-link tag="span" to="/page10/child3" active-class="active">客户画像</router-link>
        <router-link tag="span" to="/page10/child4" active-class="active">经营轨迹</router-link>
      </div>
  <router-view></router-view>
    </div>
    <footer>
      <div>
        <p>
          <span></span>
          <span>电话</span>
        </p>
        <p><span></span> <span>短信</span></p>
        <p>添加拜访计划</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
export default {
  data() {
    return {
      list: [
        { id: 1, text: '投保人' },
        { id: 2, text: '被保人' }
      ],
      active: 0
    }
  },
  methods: {
    status(i) {
      this.active = i
    }
  },
  name: 'page10-container',
  components: { Top }
}
</script>

<style scoped lang="scss">
.page10-container {
  position: relative;
  padding-top: 88px;
  .bgc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 190px;
    background-image: url(../assets/img/bgc.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 -400px;
    // z-index: -1;
  }
  ::v-deep .topComponent {
    background-color: transparent;
    .top {
      background-color: transparent;
      .middle {
        padding-left: 0;
      }
      .right {
        min-width: 0;
        width: 48px;
        background-image: url(../assets/icon/instructions.png);
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
  .main {
    background-color: #f6f6f9;
    padding: 0 30px 30px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      height: 80px;
      span {
        position: relative;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.85);
        &.active {
          font-weight: 900;
          &.active::after {
            position: absolute;
            left: 50%;
            margin-left: -18px;
            bottom: -13px;
            content: '';
            width: 36px;
            height: 6px;
            background-color: #ff7744;
          }
        }
      }
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #EEEEF5;
    height: 108px;
    width: 100vw;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 108px;
      p:first-child {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        margin-left: 66px;
        span:first-child {
          width: 48px;
          height: 48px;
          background-image: url(../assets/icon/telephone.png);
          background-size: contain;
        }
        span:last-child {
          font-size: 24px;
          color: rgba(0, 0, 0, 0.45);
        }
      }
      p:nth-child(2) {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        span:first-child {
          width: 48px;
          height: 48px;
          background-image: url(../assets/icon/SMS.png);
          background-size: contain;
        }
        span:last-child {
          font-size: 24px;
          color: rgba(0, 0, 0, 0.45);
        }
      }
      p:last-child {
        margin-right: 20px;
        width: 330px;
        height: 80px;
        line-height: 80px;
        font-size: 28px;
        color: #ffffff;
        background: #ff7744;
        border-radius: 44.5px;
        text-align: center;
      }
    }
  }
}
</style>