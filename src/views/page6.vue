<template>
  <div class="page6-container">
    <Top middle="编辑笔记" right="删除"></Top>
    <div class="main">
      <List @click.native="chooseTime" :value="time"></List>
      <Type></Type>
      <Choose></Choose>
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
import Top from '../components/Top.vue'
import Footer from '../components/Footer.vue'
import List from '@/components/List.vue'
import Type from '@/components/Type.vue'
import Choose from '@/components/Choose.vue'
import Content from '@/components/Content.vue'
export default {
  data() {
    return {
      list: [{ type: '面访笔记' }, { type: '常规记录' }, { type: '电话沟通' }],
      active: 0,
      value: '',
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
      time:`${new Date().getFullYear()}年${new Date().getMonth() + 1}月${new Date().getDate()}日`
    }
  },

  methods: {
    oncheck(name) {
      console.log(name)
      this.active = name
    },
    checked(item , i) {
      this.choose[i].chooseAll.forEach(item => {
        item.checked = true
      })
      item.checked = false
    },
    chooseTime() {
      console.log(133);

      this.$refs.picker.open()
      this.pickerVisible = !this.pickerVisible
    },
    onConfirm(value) {
      console.log(value);
      this.time = `${value.getFullYear()}年${value.getMonth() + 1}月${value.getDate()}日`
    }
  },
  computed: {
    allCount () {
      return this.choose.length
    }
  },
  name: 'page6-container',
  components: {
    Top,
    Footer,
    List,
    Type,
    Choose,
    Content
  }
}
</script>

<style scoped lang="scss">
.page6-container {
  padding-top: 88px;
  padding-bottom: 128px;
  .main {
    background-color: #f6f6f9;
  }
}
</style>
