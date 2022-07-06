<template>
  <div class="hello">
    <Top></Top>
    <div class="main">
        <div class="evaluation">
            <h5>请对本次功能使用总体满意度评分</h5>
            <Star @childInput="child_input"></Star>
        </div>
    </div>

    <div class="user">
        <ul>
            <li>
                <p>客户姓名</p>
                <span>李平安</span>
                <a href="#" @click.prevent="toDetail">
                    查看详情 >
                </a>
            </li>
            <li>
                <p>性别</p>
                <span>男</span>
            </li>
            <li><p>联系方式</p>
                <span>18700768567</span>
                </li>
        </ul>
    </div>

    <div class="task">
        <h5>面访任务</h5>
        <p>常规拜访</p>
        <p>完成时间：3月21日</p>
    </div>

    <div class="notes">
        <div class="top">
            <div class="left">面访笔记</div>
            <div class="right" @click="toPage6">编辑</div>
        </div>

        <div class="bottom">
            <h6>面访内容：保障检视</h6>
            <span>有保险意识，近期无需求</span>
            <span>近期安排见面</span>
            <span>流动资金周转</span>
            <span>保险意识强</span>
        </div>
        <div></div>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import Star from '../components/Star.vue'
export default {
    data () {
        return {
            star: 0
        }
    },
    computed: {
    },
  name: 'best-index',
  components:{
      Top,
      Star
  },
  methods: {
      child_input(val) {
          this.star = val
      },
      toDetail() {
        console.log('click');
        this.$router.push('/page4')
      },
      toPage6() {
        console.log(111);
        this.$router.push('/page6')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@keyframes Jump {
    from {
        transform: scale(1.2);
    }
    to {
        transform: scale(1);
    }
}
.hello {
    background: #f6f6f9;
    padding-left: 0;
    ::v-deep .topComponent {
        background-color: transparent;
        .top {
            background-color: transparent;
            .middle {
                color: #fff;
            }
            .left {
                width: 30px;
                height: 30px;
                background-image: url(../assets/img/back.png);
            }
        }
    }
    .main {        
        height: 460px;
        padding-top: 130px;
        background-image: url(../assets/img/function-bgc.png);
        background-size: cover;
        box-sizing: border-box;
        .evaluation {
            h5 {
                // margin-top: 51px;
                font-size: 32px;
                font-weight: 400;
                color: #fff;
                text-align: center;
            }
            ::v-deep .starComponent {
                ul{
                display: flex;
                justify-content: center;
                margin-top: 42px;
                li {
                    list-style-type: none;
                    width: 60px;
                    height: 60px;
                    padding: 0 22.5px;
                    text-align: center;
                    img {
                        width: 100%;
                    }
                }
                }
                p {
                text-align: center;
                color: #F8E71C;
                font-size: 24px;
                margin-top: 30px;
                }
            }
            
            
        }
    }
    .user{
        padding: 0 30px;
        background-color: #fff;
        margin-bottom: 24px;
        ul {
            padding: 0;
            margin: 0;
            li:nth-child(1) {
                height: 114px;
                line-height: 114px;
                list-style-type: none;
                border-bottom: 1px solid #f6f6f9;
                p {
                    margin: 0;
                    float: left;
                    font-size: 32px;
                    width: 164px;
                }
                span {
                    float: left;
                    font-size: 32px;
                    color: rgba(0,0,0,0.60);
                    margin-left: 12px;
                }
                a {
                    float: right;
                    font-size: 28px;
                    color: rgba(0,0,0,0.45);
                    text-decoration: none;
                }
            }
            li:nth-child(2) {
                display: flex;
                align-items: center;
                height: 114px;
                line-height: 114px;
                list-style-type: none;
                border-bottom: 1px solid #f6f6f9;
                p {
                    font-size: 32px;
                    width: 164px;
                }
                span {
                    outline: none;
                    border: none;
                    font-size: 32px;
                    margin-left: 12px;
                    color: rgba(0,0,0,0.60);

                }
            }
            li:nth-child(3) {
                display: flex;
                align-items: center;
                height: 114px;
                line-height: 114px;
                list-style-type: none;
                border-bottom: 1px solid #f6f6f9;
                p {
                    font-size: 32px;
                    width: 164px;
                }
                span {
                    font-size: 32px;
                    margin-left: 12px;
                    color: rgba(0,0,0,0.60);
                }
            }
        }
    }
    .task {
        background-color: #fff;
        padding: 0 30px;
        margin-bottom: 24px;
        height: 308px;
        h5 {
            margin-top: 0;
            margin-bottom: 33px;
            height: 112px;
            line-height: 112px;
            font-size: 32px;
            color: rgba(0,0,0,0.85);
            border-bottom: 1px solid #f6f6f9;
        }
        p {
            margin-top: 0;
            margin-bottom: 12px;
            font-size: 32px;
            color: rgba(0,0,0,0.60);
        }
    }
    .notes {
        background-color: #fff;
        padding: 0 30px;
        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 36px 0;
            .left {
                width: 152px;
                height: 54px;
                line-height: 54px;
                background-color: rgba(255,119,68,0.1);
                border-radius: 27px;
                border-radius: 27px;
                font-size: 26px;
                color: #FF7744;
                text-align: center;
            }
            .right {
                color: #FF7744;
                font-size: 28px;
            }
        }
        .bottom {
            padding-left: 12px;
             h6 {
                 margin-bottom: 16px;
                 padding-left: 6px;
                 height: 26px;
                 border-left:6px solid #FF7744;
                 font-size: 32px;
                 color: rgba(0,0,0,0.85);
                 font-weight: normal;
                 line-height: 30px;
             }
             span {
                 margin-right: 12px;
                 padding: 0 8px;
                 font-size: 24px;
                 color: rgba(0,0,0,0.45);
                 background-color: rgba(0,0,0,0.1);
             }
        }
    }
  .title {
    font-family: PingFangSC-Medium;
    font-size: 34px;
    text-align: center;
  }
}
  
</style>
