<template>
  <div class="starComponent">
      <ul>
          <li v-for="(item,index) in nowRank" :key="index" @click="rank(index)">
              <img v-if="item.isShowStar" src="../assets/img/star-active.png" alt="" :class="item.status">
              <img v-else src="../assets/img/star.png" alt="">
          </li>
      </ul>
      <p>{{text}}</p>
  </div>
</template>

<script>
export default {
name :'starComponent',
data () {
    return {
        starList:[
            {isShowStar:false , status: ''},
            {isShowStar:false , status: ''},
            {isShowStar:false , status: ''},
            {isShowStar:false , status: ''},
            {isShowStar:false , status: ''}
        ],
        starNum: 0,
    }
},
props: {
    text:{
        type:String,
        default:'请点击星星进行打分'
    }
},
computed: {
    nowRank () {
        return this.starList.map((item,index) => {
            item.isShowStar = index <= this.starNum
            return item
        })
    }
},
methods : {
    rank(index) {
        this.starNum = index
        this.$emit('childInput', this.starNum + 1)
        this.starList.forEach((item) => {
            item.status = ''
        })
        this.starList[index].status = 'active'
        setInterval( () => {
        this.starList[index].status = ''
            
        },800)
    },
}
}
</script>

<style scoped lang="scss">
@keyframes Jump {
    from {
        transform: scale(1.2);
    }
    to {
        transform: scale(1);
    }
}
.starComponent{
    img.active {
        animation: Jump .8s;
    }
}
</style>