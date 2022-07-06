<template>
  <div class="success-cantainer">
    <Top></Top>
    <div class="main">
      <div class="card">
        <div class="left">
          <img src="../assets/img/card.png" alt="">
          <div class="components">
            <div class="bottom">
              <img src="../assets/icon/scanning.png" alt="">
              <div>
                <p>扫扫码</p>
                <p>（金管家）</p>
              </div>
            </div>
          </div>
        </div>
        <div class="right" @click="toPage1">
          <img src="../assets/img/card.png" alt="">
          <div class="components">
            <div class="bottom">
              <img src="../assets/icon/code.png" alt="">
              <div>我的<br>二维码</div>
            </div>
          </div>
        </div>
      </div>
      <div class="customer">
            <div @click="type(item.id)" v-for="item in list" :key="item.id" :class="active === item.id ? 'active' : ''">
            {{item.text}}({{ num1 }})
            </div>
      </div>
      <div class="float">
      <UserToDo class="animate__animated animate__slideInLeft" v-if="status" :listToDo="listToDo" ></UserToDo>
      <UserDoing class="animate__animated animate__slideInRight" v-if="!status" :listDoing="listDoing"></UserDoing>
      </div>
      
    </div>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import UserDoing from '@/components/UserDoing.vue'
import UserToDo from '@/components/UserToDo.vue'
// import bus from '../components/eventBus'
export default {
  name: 'successContainer',
  data() {
    return {
      listToDo: [
        { id: 1, username: '李平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
        { id: 2, username: '李平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
        { id: 3, username: '李平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
        { id: 4, username: '李平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
        { id: 5, username: '李平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
        { id: 6, username: '李平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' }
      ],
      listDoing: [
        { id: 1, username: '张平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
        { id: 2, username: '张平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
        { id: 3, username: '张平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
        { id: 4, username: '张平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
        { id: 5, username: '张平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
        { id: 6, username: '张平安', time: '2019-02-19 11:24:08', task: '面见客户 | 旺财开户 | 星级代理人评选 | 平安送福' },
      ],
      num1: 0,
      num2: 0,
      status: true,
      list: [
        {id: 1, text: '待面访'},
        {id: 2, text: '已面访'}
      ],
      active:1
    }
  },
  created() {
    this.num1 = this.listToDo.length
    this.num2 = this.listDoing.length
    
  },
  components: {
    Top,
    UserDoing,
    UserToDo
},
methods: {
type( id) {
  this.active = id
  this.status = id === 1
},
toPage1() {
  this.$router.push('/page1')
}
}
  // created() {
  //   bus.$on('share1' , (val) => {
  //     this.numToDo = val
  //   })
  // }
}
</script>

<style lang="scss" scoped>
.success-cantainer {
  padding-top: 88px;
  height: 100vh;

  .main {
    height: 100%;
    background-image: linear-gradient(0deg, #F6F6F9 0%, #FFFFFF 100%);

    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 28px;
      padding: 35px 50px;
      height: 245px;
      background-color: #fff;

      .left {
        position: relative;
        width: 360px;

        .components {
          position: absolute;
          top: 55px;
          left: 80px;

          .bottom {
            display: flex;
            justify-content: center;
            align-items: center;

            // background-color: pink;
            img {
              width: 63px;
              height: 63px;
            }

            div {
              padding: 0 20px;

              p:first-child {
                margin: 0;
                font-size: 32px;
                text-align: center;
                color: #fff;
              }

              p:last-child {
                margin: 0;
                font-size: 24px;
                text-align: center;
                color: #fff;


              }
            }
          }
        }
      }

      .right {
        width: 360px;
        position: relative;

        .components {
          position: absolute;
          top: 55px;
          left: 75px;

          .bottom {
            display: flex;
            justify-content: center;
            align-items: center;

            // background-color: pink;
            img {
              width: 63px;
              height: 63px;
            }

            div {
              padding: 0 20px;
              font-size: 32px;
              color: #fff;
              text-align: center;
            }
          }
        }
      }
    }

    .customer {
      display: flex;
      height: 100px;
     
      padding: 0 30px;
      background-color: #fff;
        div {
          flex: 1;
          line-height: 100px;
          text-align: center;
          font-size: 30px;
          color: rgba(0, 0, 0, 0.45);
           border-bottom: 1px solid #eee;

          &.active {
            font-size: 30px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 900;
          }
      }

      .right {
        // background-color: green;
        flex: 1;

        li {
          list-style-type: none;
          line-height: 100px;
          text-align: center;
          font-size: 30px;
          color: rgba(0, 0, 0, 0.45);

          &.router-link-active {
            font-size: 30px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 900;
          }
        }

      }
    }
    
    .float {
      .animate__animated.animate__slideInLeft{
        animation-duration: 0.5s;
      }
      .animate__animated.animate__slideInRight {
        animation-duration: 0.5s;
      }
    }
    .fade-left-enter-active {
      animation: moveLeftEnter .5s ;
    }
    .fade-left-leave-active {
      animation: moveLeftleave .5s ;
    }
    .fade-right-enter-active {
      animation: moveRightEnter .5s ;
    }
    .fade-right-leave-active {
      animation: moveRightLeave .5s ;
    }
  }
}

@keyframes moveRightEnter {
  from {
    transform: translate(100%);

  }
  to {
    transform: translateX(0);
  }
}
@keyframes moveRightLeave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes moveLeftEnter {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0)
  }
}

@keyframes moveLeftleave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%)
  }
}
</style>
