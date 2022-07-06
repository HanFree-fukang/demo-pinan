<template>
  <div class="contentComponent">
    <div class="content">
        <h3>笔记内容</h3>
        <textarea name="" id="" placeholder="请详细描述面访客户的补充信息~" v-model.trim="value" :maxlength="num"> </textarea>
        <span>{{ value.length }}/{{num}}</span>
      </div>
  </div>
</template>

<script>
export default {
name:'contentComponent',
data() {
  return {
    value: ''
  }
},
props: {
  num:{
    type:Number,
    default:200
  }
}
}
</script>

<style scoped lang='scss'>
.content {
      position: relative;
      padding: 0 30px;
      height: 943px;
      background-color: #fff;

      h3 {
        height: 117px;
        line-height: 117px;
        font-size: 32px;
        color: rgba(0, 0, 0, 0.85);
      }

      textarea {
        padding: 30px;
        width: 100%;
        height: 500px;
        background-color: #f6f6f9;
        border: none;
        resize: none;
        box-sizing: border-box;

        &::placeholder {
          font-size: 28px;
          color: rgba(0, 0, 0, 0.3);
        }
      }

      span {
        position: absolute;
        bottom: 348px;
        right: 50px;
        font-size: 24px;
        color: rgba(0, 0, 0, 0.3);
      }
    }
</style>