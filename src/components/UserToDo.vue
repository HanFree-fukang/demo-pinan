<template>

    <div class="userToDoComponent">
       <ul>
      <li v-for="item in listToDo" :key="item.id">
        <div class="left">
          <div class="top">
            <h3>{{ item.username }}</h3>
            <p>{{ item.time }}</p>
          </div>
          <div class="bottom">
            <p>
              {{ item.task }}
            </p>
          </div>
        </div>
        <div class="right">
          <img src="../assets/icon/more.png" alt="">
        </div>
      </li>
    </ul>
    </div>
   
    

</template>

<script>

export default {
  name: 'userToDoComponent',
  data() {
    return {
      list:[]
    }

  },
  props: {
    listToDo: {
      type: Array,
      default:() => []
    }
  }, created(){
    // this.list =this.listToDo
    // console.log(this.listToDo);
  }
}
</script>

<style lang="scss" scoped>

.userToDoComponent {
  background-color: #fff;
  ul {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 30px;
      padding-right: 20px;
      height: 150px;
      .left {
        .top {
          display: flex;
          align-items: center;

          h3 {
            margin-right: 15px;
            font-size: 32px;
            color: rgba(0, 0, 0, 0.85);
          }

          p {
            margin: 0;
            font-size: 24px;
            color: rgba(0, 0, 0, 0.45);
          }
        }

        .bottom {
          p {
            font-size: 24px;
            color: rgba(0, 0, 0, 0.45);
          }
        }
      }

      .right {
        img {
          width: 40px;
        }
      }
    }
  }
}


</style>