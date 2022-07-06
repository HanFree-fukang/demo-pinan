<template>
  <div class="child1-user">
    <div class="main">
      <div class="user">
        <div class="name">
          <h3>楚琳琳</h3>
          <span>客户来源：转介绍</span>
          <i></i>
        </div>
        <div class="tips">
          <div>
            <span>寿险</span>
            <span
              v-for="(item, index) in list"
              :key="item.id"
              @click="status(index)"
              :class="active === index ? 'active' : ''"
              >{{ item.text }}</span
            >
          </div>
          <img src="../assets/img/unregistered.jpg" alt="" />
          <img src="../assets/img/vip.png" alt="" />
        </div>
        <div class="msg">
          <ul>
            <li>
              <p>
                <i></i>
                <span>{{ userNumber }}</span>
              </p>
              <p @click="copyNumber" class="btnOne">复制</p>
            </li>
            <li>
              <p>
                <i></i>
                <span>1992-09-23</span>
              </p>
            </li>
            <li>
              <p>
                <i></i>
                <span>{{ userId }}</span>
              </p>
              <p @click="copyId" class="btnTwo">复制</p>
            </li>
          </ul>
        </div>
        <div class="more">
          <p>所属标签</p>
          <span class="left">为了更好的管理客户，请给客户添加标签</span>
          <span class="right"> + </span>
        </div>
        <div class="mor">
          <p>查看更多信息 <span></span></p>
        </div>
      </div>
      <div class="note">
        <List label="备注笔记" value="3条"></List>
      </div>
      <div class="policy">
        <h3>已购保单<span></span></h3>
        <div>
          <List label="寿险/投保单" value="2张"></List>
        </div>
        <div class="last">
          <List label="寿险/被保单" value="暂未购买产品"></List>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from "clipboard";
import List from "../components/List.vue";
export default {
  name: "child1-user",
  data() {
    return {
      list: [
        { id: 1, text: "投保人" },
        { id: 2, text: "被保人" },
      ],
      active: 0,
      userNumber: "137 6655 2887",
      userId: "4302047199209232012",
    };
  },
  methods: {
    status(i) {
      this.active = i;
    },
    copyNumber() {
      let that = this;
      let clipboard = new Clipboard(".btnOne", {
        text: function () {
          return that.userNumber;
        },
      });
      clipboard.on("success", () => {
        //复制成功
        alert("复制成功");
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        //复制失败
        alert("复制失败");
        clipboard.destroy();
      });
    }, // 点击复制的方法
    copyId() {
      let that = this;
      let clipboard = new Clipboard(".btnTwo", {
        text: function () {
          return that.userId;
        },
      });
      clipboard.on("success", () => {
        alert("复制成功");
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        alert("复制失败");
        clipboard.destroy();
      });
    },
  },
  components: {
    List,
  },
};
</script>

<style scoped lang="scss">
.main {
  background-color: #f6f6f9;
  .user {
    border-radius: 12px;
    background-color: #fff;
    padding-top: 30px;
    margin-bottom: 24px;
    .name {
      padding: 0 30px;
      display: flex;
      align-items: center;
      margin-bottom: 14px;
      height: 56px;
      h3 {
        margin-right: 23px;
        font-size: 40px;
        color: rgba(0, 0, 0, 0.85);
      }
      span {
        margin-right: 12px;
        font-size: 24px;
        color: rgba(0, 0, 0, 0.45);
      }
      i {
        width: 25px;
        height: 25px;
        background-size: cover;
        background-image: url(../assets/icon/gray@2x.png);
      }
    }
    .tips {
      padding: 0 30px;

      display: flex;
      align-items: center;
      margin-bottom: 60px;
      div {
        display: inline-flex;
        align-items: center;
        background-color: rgba(101, 144, 222, 0.1);
        padding-right: 10px;
        border-radius: 18px;
        span {
          font-size: 24px;
          &:first-child {
            width: 64px;
            margin-right: 7px;
            height: 33px;
            line-height: 33px;
            background: #6590de;
            color: #ffffff;
            text-align: center;
            border-radius: 18px;
          }
          &:nth-child(2) {
            padding: 0 12px;
            border-right: 3px solid #000;
          }
          &:last-child {
            padding: 0 12px;
          }
          &.active {
            color: #6590de;
          }
        }
      }
      img {
        margin: 0 12px;
        width: 114px;
        height: 33px;
        &:last-child {
          margin-left: 0;
        }
      }
    }
    .msg {
      padding: 0 30px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 36px;
        p:first-child {
          i {
            display: inline-block;
            margin-right: 12px;
            width: 36px;
            height: 36px;
            background-image: url(../assets/img/iphone.png);
            background-size: contain;
            background-repeat: no-repeat;
            vertical-align: middle;
          }
          span {
            font-size: 30px;
            color: rgba(0, 0, 0, 0.85);
          }
        }
        p:last-child {
          font-size: 24px;
          color: #5b91ff;
        }
        &:nth-child(2) p:first-child i {
          vertical-align: bottom;
          background-image: url(../assets/img/birthday.png);
        }
        &:last-child p:first-child i {
          background-image: url(../assets/img/id.png);
        }
      }
    }
    .more {
      padding: 0 30px;

      border-top: 1px solid #eee;
      margin-bottom: 36px;
      p {
        height: 105px;
        line-height: 105px;
        font-size: 28px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 900;
      }
      span {
        padding: 14px 25px;
        font-size: 24px;
        color: #ff7744;
        &.left {
          margin-right: 18px;
          background: #fff2ed;
          border-radius: 30px;
        }
        &.right {
          background: #f6f6f9;
          border-radius: 100px;
          font-size: 28px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    .mor {
      border-top: 1px solid #eee;
      p {
        height: 90px;
        line-height: 90px;
        text-align: center;
        font-size: 28px;
        color: rgba(0, 0, 0, 0.45);
        span {
          display: inline-block;
          width: 40px;
          height: 40px;
          background-image: url(../assets/img/more.png);
          background-size: contain;
          background-position: 0 -3px;
          vertical-align: middle;
        }
      }
    }
  }
  .note {
    ::v-deep h3 {
      font-size: 30px;
      color: rgba(0, 0, 0, 0.85);
    }
    ::v-deep p {
      font-size: 30px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .policy {
    padding: 0 30px;
    background-color: #fff;
    border-radius: 12px;
    h3 {
      height: 120px;
      line-height: 120px;
      font-size: 34px;
      color: rgba(0, 0, 0, 0.85);
      border-bottom: 1px solid #eee;
      span {
        display: inline-block;
        margin-left: 6px;
        width: 36px;
        height: 36px;
        background-image: url(../assets/icon/details.png);
        background-size: contain;
        vertical-align: middle;
      }
    }
    div {
      ::v-deep .list {
        margin: 0;
        padding: 0;
        h3 {
          font-size: 30px;
          color: rgba(0, 0, 0, 0.85);
        }
        p {
          font-size: 30px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
      &.last {
        ::v-deep .list {
          p {
            color: rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
  }
}
</style>
