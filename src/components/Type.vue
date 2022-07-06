<template>
  <div class="typeComponent">
    <div class="type">
        <h3>笔记类型</h3>
        <p>
          <span v-for="(item, index) in list" :key="index" :class="active === index ? 'active' : ''" @click="oncheck(index)">{{ item.type }}</span>
        </p>
      </div>
  </div>
</template>

<script>
export default {
name:'typeComponent',
data() {
  return {
    list: [{ type: '面访笔记' }, { type: '常规记录' }, { type: '电话沟通' }],
    active: '',
  }
},
methods: {
    oncheck(name) {
      console.log(name)
      this.active = name
    }
  }
}
</script>

<style scoped lang='scss'>
 .type {
      margin-bottom: 24px;
      height: 200px;
      padding: 0 30px;
      background-color: #fff;

      h3 {
        height: 109px;
        line-height: 109px;
        font-size: 32px;
        color: rgba(0, 0, 0, 0.85);
      }

      p {
        display: flex;
        padding-left: 24px;
        font-size: 26px;
        color: rgba(0, 0, 0, 0.6);

        span {
          display: block;
          width: 152px;
          height: 54px;
          line-height: 54px;
          text-align: center;
          background-color: #f6f6f9;
          border-radius: 27px;
          border-radius: 27px;
          margin-right: 66px;

          &.active {
            color: #ff7744;
            background-color: rgba(255, 119, 68, 0.1);
          }
        }
      }
    }
</style>