<template>
  <div class="list-container">
    <div class="list" :class="{ bor, lis }">
      <h3>
        <div class="mor1" v-if="status" :style="show"></div>
        <div class="mor2" :style="show" v-else></div>
        {{ label }}
      </h3>
      <p>{{ value }} <i></i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-container",
  props: {
    label: {
      type: String,
      default: "日期时间",
    },
    value: {
      type: String,
      default: `${new Date().getFullYear()}年${
        new Date().getMonth() + 1
      }月${new Date().getDate()}日`,
    },
    bor: {
      type: String,
      default: "",
    },
    status: {
      type: Boolean,
      default: true,
    },
    show: {
      type: String,
      default: "display: none",
    },
    lis: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 24px;
  height: 114px;
  background-color: #fff;

  h3 {
    font-size: 32px;
    color: rgba(0, 0, 0, 0.85);
    .mor1 {
      display: inline-block;
      margin-right: 12px;
      width: 36px;
      height: 36px;
      background-image: url(../assets/icon/service.png);
      background-size: contain;
      vertical-align: middle;
    }
    .mor2 {
      display: inline-block;
      margin-right: 12px;

      width: 40px;
      height: 40px;
      background-image: url(../assets/icon/heart.png);
      background-size: contain;
      vertical-align: middle;
    }
  }

  p {
    font-size: 32px;
    color: rgba(0, 0, 0, 0.45);

    i {
      float: right;
      display: block;
      margin-left: 6px;
      width: 40px;
      height: 40px;
      background-image: url(../assets/icon/more.png);
      background-size: contain;
    }
  }
  &.border {
    border-bottom: 1px solid #eee;
  }
  &:active {
    background-color: #eee;
  }
  &.lis {
    margin: 0;
    padding: 0;
    h3 {
      font-size: 32px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: normal;
    }
  }
}
</style>