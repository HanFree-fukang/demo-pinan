<template>
  <div class="topComponent">
    <div class="top">
      <div class="left" @click="back"></div>
      <h2 class="middle">{{middle}}</h2>
      <div class="right">{{right}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topComponent',
  methods: {
    back() {
      this.$router.back()
    }
  },
  props: {
    middle: {
      type: String,
      default: '面访扫码'
    },
    right: {
      type: String,
      default:''
    }
  }
}
</script>

<style lang="scss" scoped>
.topComponent {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 100;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
    background-color: #fff;
    padding: 0 30px;
    .left {
      height: 48px;
      width: 48px;
      background-image: url(../assets/img/back1.png);
      background-size: contain;
      background-repeat: no-repeat;
    }
    .middle {
      height: 48px;
      padding-left: 25px;
      font-size: 34px;
      font-weight: 900;
      color: rgba(0, 0, 0, 0.85);
    }
    .right {
      min-width: 68px;
      height: 42px;
      font-size: 30px;
      color: #ff7744;
      text-align: right;
    }
  }
}
</style>
