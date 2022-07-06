<template>
  <div class="footerComponent">
    <footer>
      <p>保存</p>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'footerComponent'
}
</script>

<style scoped lang="scss">
    footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 24px 30px;
    height: 128px;
    box-sizing: border-box;
    background-color: #fff;
    border-top: 1px solid #EEEEF5;

    // background-color: pink;
    p {
      text-align: center;
      height: 80px;
      line-height: 80px;
      background: #ff7744;
      border-radius: 40px;
      border-radius: 40px;
      font-size: 32px;
      color: #ffffff;
    }
  }
</style>