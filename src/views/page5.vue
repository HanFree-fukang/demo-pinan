<template>
  <div class="page5-container">
    <Top middle="面访笔记"></Top>
    <div class="main">
      <div class="tips">
        <p>
          面访笔记一共两道选择题，帮助快速记录客户保险意向，面访笔记将会被同步到客户中心，方便汇总查看。
        </p>
      </div>
      <Choose></Choose>
      <Content></Content>
      
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import Footer from "../components/Footer.vue";
import Choose from '@/components/Choose.vue';
import Content from '@/components/Content.vue';
export default {
  data() {
    return {
      choose: [
        {
          id: 1,
          problem: "客户是否有保险需求？",
          chooseAll: [
            { id: 1, checked: true, text: "近期有需求" },
            { id: 2, checked: true, text: "有保险意识，近期无需求" },
            { id: 3, checked: true, text: "无保险意识，态度不明确" },
            { id: 4, checked: true, text: "抵抗保险，无兴趣" },
          ],
        },
        {
          id: 2,
          problem: "客户是否有购买保险的资金？",
          chooseAll: [
            { id: 1, checked: true, text: "有足够资金" },
            { id: 2, checked: true, text: "无足够资金" },
            { id: 3, checked: true, text: "近期无足够资金，未来可能有" },
          ],
        },
      ],
      value: ''
    };
  },
  name: "page5-container",
  components: {
    Top,
    Footer,
    Choose,
    Content,
  },
};
</script>

<style scoped lang="scss">
.page5-container {
  padding-top: 88px;
  padding-bottom: 128px;
  .main {
    background-color: #f6f6f9;
    .tips {
      margin-bottom: 24px;
      padding: 30px;
      height: 140px;
      background-color: #fff;
      p {
        font-size: 28px;
        line-height: 40px;
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }
}
</style>