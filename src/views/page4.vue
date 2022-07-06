<template>
  <div class="page4-container">
    <Top middle="备注笔记" right="删除"></Top>
    <div class="main">
      <List @click.native="choose" :value="time"></List>
      <Type></Type>
      <Content></Content>
    </div>
    <Footer></Footer>
    <mt-datetime-picker
      :visible.sync="pickerVisible"
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      @confirm="onConfirm"
      date-format="{value} 日">
    </mt-datetime-picker>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Footer from '@/components/Footer.vue'
import List from '../components/List.vue'
import Type from '../components/Type.vue'
import Content from '@/components/Content.vue'

export default {
  components: { Top, Footer, List ,Type, Content },
  name: 'page4-container',
  data() {
    return {
      time: `${new Date().getFullYear()}年${new Date().getMonth() + 1}月${new Date().getDate()}日`,
      pickerVisible: true,
      pickerValue: ''
    }
  },
  methods: {
    choose() {
      console.log(133);
      this.$refs.picker.open()
      this.pickerVisible = !this.pickerVisible
    },
    onConfirm(value) {
      console.log(value);
      this.time = `${value.getFullYear()}年${value.getMonth() + 1}月${value.getDate()}日`
    }
  }
}
</script>

<style lang="scss" scoped>
.page4-container {
  padding-top: 88px;
  padding-bottom: 128px;

  .main {
    background-color: #f6f6f9;

  }
}
</style>
