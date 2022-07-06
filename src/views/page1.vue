<template>
  <div class="page1-container">
    <Top></Top>
    <div class="main">
      <div class="top">
        <img src="../assets/img/right@2x.png" alt="" />
        <p>面访笔记已记录</p>
      </div>
      <div class="more">
        <List label="可以向TA提供以下服务" value="" bor="border" show="display: inline-block" lis="lis">
        </List>
        <List label="面见客户" value="" show="display: inline-block" :status="false" lis="lis">
        </List>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import List from "../components/List.vue";
export default {
  name: "page1-container",
  components: {
    Top,
    List,
  },
  methods: {
    toSuccess() {
      this.$router.push("/success");
    },
  },
};
</script>

<style lang="scss" scoped>
.page1-container {
  padding-top: 88px;
  .main {
    padding: 0 30px;
    .top {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 200px;
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
    }
  }

</style>
