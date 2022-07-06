<template>
  <div class="page7-container">
    <Top middle="编辑笔记" right="删除"></Top>
    <div class="main">
      <Choose></Choose>
      <Content num='500'></Content>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import Footer from '../components/Footer.vue'
import Choose from '@/components/Choose.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'page7-container',
  components: {
    Top,
    Footer,
    Choose,
    Content
  }
}
</script>

<style scoped lang="scss">
.page7-container {
  padding-top: 88px;
  padding-bottom: 128px;
  .main {
    background-color: #f6f6f9;
  }
}
</style>
