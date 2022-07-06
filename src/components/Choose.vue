<template>
  <div class="chooseComponent">
    <div class="choose" v-for="(item,index) in choose" :key="item.id">
        <h3>{{ item.problem }}（{{ item.id }}/{{ allCount }}）</h3>
        <ul>
          <li
            v-for="iem in item.chooseAll"
            :key="iem.id"
            @click="checked(iem,index)"
          >
            <img
              src="../assets/img/choose-false.png"
              alt=""
              v-if="iem.checked"
            />
            <img src="../assets/img/choose-true.png" alt="" v-else />
            <p>{{ iem.text }}</p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
name:'chooseComponent',
data () {
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
  }
},
computed: {
  allCount() {
    return this.choose.length
  }
},
methods: {
    checked(iem,i) {
      this.choose[i].chooseAll.forEach(item => {
        item.checked = true
      })
    
      iem.checked = false
    }
  },
}
</script>

<style scoped lang='scss'>
.choose {
      margin-bottom: 24px;
      padding: 0 30px;
      background-color: #fff;
      h3 {
        height: 117px;
        line-height: 117px;
        font-size: 32px;
        color: rgba(0, 0, 0, 0.85);
      }
      li {
        display: flex;
        align-items: center;
        height: 114px;
        line-height: 114px;
        font-size: 32px;
        color: rgba(0, 0, 0, 0.85);
        img {
          width: 42px;
          height: 42px;
        }
        p {
          padding-left: 24px;
        }
      }
    }
</style>