<template>
  <div class="userDoingComponent">
    <ul>
      <li v-for="item in listDoing" :key="item.id">
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
// import bus from './eventBus'
export default {
  name: 'userDoingComponent',
  data() {
    return {
    }
  },
  props: {
    listDoing : {
      type:Array,
      default: () => []
    }
  },
  methods: {
    // send() {
    //   bus.$emit('share1' ,this.num)
    // }
  }
}
</script>

<style lang="scss" scoped>
.userDoingComponent {
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