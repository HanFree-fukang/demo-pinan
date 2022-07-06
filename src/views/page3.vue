<template>
  <div class="page3-container">
    <Top></Top>
    <div class="main">
      <div class="groups">
        <div class="code">
        <div></div>
        <p>二维码每30秒自动刷新</p>
      </div>
      <div class="user">
        <ul>
          <li>
            <div>
              <i></i>
              <span>客户姓名</span>
              <p>李平安</p>
            </div>
          </li>
          <li>
            <div>
              <i></i>
              <span>联系方式</span>
              <p>13709827618</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="more">
        <p>查看更多信息</p>
        <span></span>
      </div>
      </div>
      <div class="task">
        <p>面访任务</p>
        <p>面见客户</p>
        <p>截止日期：3月21日</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'page3-container',
  components: {
    Top,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.page3-container {
  padding-bottom: 128px;
  padding-top: 88px + 24px;
  background-color: #f6f6f9;

  .main {
    padding: 0 30px;
    background-color: #f6f6f9;

    .groups {
      background-color: #fff;
      border-radius: 12px;
      .code {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: 497px;
      // background-color: pink;
      text-align: center;
      // background-color: #fff;

      div {
        margin-top: 87px;
        margin-bottom: 24px;
        width: 316px;
        height: 316px;
        background-color: green;
      }

      p {
        margin-bottom: 29px;
        font-size: 28px;
        color: rgba(0, 0, 0, 0.45);
      }
    }

    .user {
      // background-color: #fff;

      li {
        padding: 0 25px;
        div {
        display: flex;
        align-items: center;
        padding-left: 30px;
        height: 113px;
        line-height: 113px;
        border-bottom: 1px solid #eee;

        i {
          display: block;
          margin-right: 12px;
          width: 36px;
          height: 36px;
          background-image: url(../assets/icon/username.png);
          background-size: cover;
        }

        span {
          margin-right: 44px;
          font-weight: 900;
          font-size: 32px;
          color: rgba(0, 0, 0, 0.85);
        }

        p {
          font-size: 32px;
          color: rgba(0, 0, 0, 0.6);
        }

        }
        &:last-child {
          i {
            background-image: url(../assets/icon/contact.png);
            background-size: contain;
            background-repeat: no-repeat;
          }
      }
      }
    }

    .more {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding: 0 30px;
      height: 114px;
      // background-color: #fff;

      p {
        font-size: 28px;
        color: rgba(0, 0, 0, 0.6);
      }

      span {
        display: block;
        width: 40px;
        height: 40px;
        background-image: url(../assets/icon/more.png);
        background-size: cover;
      }
    }
    }

    .task {
      padding: 0px 30px;
      padding-bottom: 0;
      height: 450px;
      background-color: #fff;
      border-radius: 12px;

      p {
        margin-bottom: 12px;
        font-size: 32px;
        color: rgba(0, 0, 0, 0.6);
      }

      p:first-child {
        margin-bottom: 33px;
        height: 112px;
        line-height: 112px;
        font-weight: 900;
        border-bottom: 1px solid #eee;
        font-size: 32px;
        color: rgba(0, 0, 0, 0.85);
      }
    }
  }

}
</style>
