<template>
  <div class="container ">
    <div class="lbOverlay">
        <!-- <div class="container1"> -->
        <div class="img">
            <div class="container-title-img">
            </div>
        </div>
        <div class="container-content">
          <div class="main-content"  v-if="!isPayed">
              <div class="content-title" @click="showMessage = true">
                  每月送200元骑行费用
              </div>
              <div class="content-main">
                  <div class="t1">
                      领养金:¥3998
                  </div>
                  <div class="t2">
                      领养金到期可退
                  </div>
                  <div class="t3" @click="goDetail(0)">
                      了解详情>
                  </div>
                  <div class="t4">
                      <div class="img"  @click="adopt()">
                      </div>
                  </div>
              </div>
          </div>
          <div class="main-content" v-else>
              <div class="pay-title1">
                  支付成功！
              </div>
              <div class="pay-title2">
                  您可以下载小遛APP查看中签情况
              </div>
              <div class="t4">
                  <div class="img2" @click="goDetail(1)">
                  </div>
              </div>
          </div>
        </div>
        <div :class="{footer: true,specialFader :showLayer}">
            <div class="img">
            </div>
            <div class="btn" @click="goDetail(1)">
            </div>
        </div>

        <!-- </div> -->

        <!-- fader -->
        <div class="container-layer" v-if="showLayer" @click="close()">
        </div>

        <!-- layer -->
        <transition name="breadcrumb">
          <div class="outLayer" v-if="showLayer">
              <layer v-on:close="close()" v-on:alertMessage="alertMessage"></layer>
          </div>
        </transition>

        <message v-if="showMessage" v-on:show="showMes" :tipMes='tipMes'></message>
      </div>

      <!-- <transition name="breadcrumb">
        <HyDialog v-on:close="showDialog=false"  v-if="showDialog">
            <div style="background:white; height: 100px">
              {{ showDialog }}
            </div>
        </HyDialog>
      </transition> -->

  </div>
</template>
<script>

  import layer from './layer'
  import message from './message'
  import img from '@/assets/banner.png'
  import HyDialog from '@/commonComponents/HyDialog/HyDialog'

export default {
  name: 'HelloWorld',
  components: { layer, message, HyDialog },
  data () {
    return {
      showLayer: false,
      isPayed: false,
      showMessage: false,
      tipMes: '',
      showDialog: false
    }
  },
  mounted () {
    console.log('当前设备的dpr为：', window.devicePixelRatio);
    console.log('router', this.$route.query)
    if (this.$route.query.action == 'successPay') {
      this.isPayed = true;
      console.log('isPayedisPayedisPayed')
    }
    setTimeout(()=> {
      this.showDialog = true
    }, 2000)
    
  },
  methods: {
    adopt () {
      console.log('adopt')
      this.showLayer = !this.showLayer
    },
    close () {
      console.log('close')
      this.showLayer = false
    },
    showMes () {
        this.showMessage = false
    },
    alertMessage(param) {
      this.showMessage = param;
      this.tipMes = param;
    },
    goDetail(param) {
      if (param == '0') {
        window.location.href = 'http://h5.xlgxapp.com/user/adopt-rule.html?type=9';
      } else {
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.adinnet.xlebike'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .specialFader{
      background-color: black;
      opacity: 0.5;
    }
    *{
        box-sizing: border-box;
    }
    .container{
        width: 100%;
        min-height: 100%;
        box-sizing: border-box;
        .container-layer{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 8;
            background-color: black;
            opacity: 0.5;
        }
    }
    .container .img{
        width: 100%;
        height: pxTorem(350px);
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
        .container-title-img{
            width: 100%;
            height: 100%;
            background-image: url('~@/assets/banner.png');
            background-size: 100% 100%;
        }
    }

    .container-content{
        width: 100%;
        height: pxTorem(300px);
        padding: pxTorem(20px);
        background: #feda01;

    }
    .main-content{
        font-family: "PingFangSC-Semibold";
        border: 1px solid white;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        background-image:  url('~@/assets/CombinedShape.png');
        background-size: 100% 100%;
        .pay-title1{
            font-family: "PingFangSC-Semibold";
            margin-top: pxTorem(54px);
            margin-bottom: pxTorem(20px);
            font-size: pxTorem(24px);
            line-height: pxTorem(26px);
            color: #FE5B54;
            letter-spacing: 0;
            line-height: pxTorem(26px);
        }
        .pay-title2{
            font-family: "PingFangSC-Regular";
            font-size: pxTorem(14px);
            margin-bottom: pxTorem(49px);
            color: #222222;
            letter-spacing: 0;
            text-align: center;
            line-height: pxTorem(26px);
        }
    }

    .content-title{
        font-size: pxTorem(18px);
        color: #222222;
        letter-spacing: 0;
        text-align: center;
        width: pxTorem(230px);
        height: pxTorem(31px);
        line-height: pxTorem(31px);
        background: #FFEA6B;
        margin: pxTorem(25px) auto;
        font-weight: 700;
        border-radius: 5px;
        // color: $red;
    }

    .t1{
        font-size: pxTorem(16px);
        color: #222222;
        letter-spacing: 0;
        text-align: center;
        margin-top: pxTorem(18px);
        font-weight: 600;
    }
    .t2{
        margin-top: pxTorem(5px);
        font-size: pxTorem(12px);
        color: #222222;
        letter-spacing: 2.5px;
        text-align: center;
    }
    .t3{
        margin-top: pxTorem(15px);
        margin-bottom: pxTorem(28px);
        font-size: pxTorem(12px);
        color: #222222;
        letter-spacing: 2.5px;
        text-align: center;
        text-decoration: underline;
    }
    .t4  .img{
        background-image: url('~@/assets/go.png');
        background-size: 100% 100%;
        display: block;
        width: pxTorem(250px);
        height: pxTorem(50px);
        margin: 0 auto;
    }
    .t4  .img2{
        background-image: url('~@/assets/go2.png');
        background-size: 100% 100%;
        display: block;
        width: pxTorem(250px);
        height: pxTorem(50px);
        margin: 0 auto;
    }

    .footer{
        width: 100%;
        height: pxTorem(50px);
        padding: pxTorem(5px)  pxTorem(20px);
        background-color: white;
        display: flex;
        box-shadow: inset 0 0 0 0 #E1E1E1;
        > .img{
            width: pxTorem(125px);
            height: pxTorem(40px);
            display: block;
            background-image: url('~@/assets/Group5.png');

            background-size: 100% 100%;
            /* display: inline-block; */
        }
        > .btn{
            margin-top: pxTorem(5px);
            right: pxTorem(20px);
            width: pxTorem(80px);
            height: pxTorem(34px);
            line-height: pxTorem(34px);
            background-image: url('~@/assets/download.png');
            background-size: 100% 100%;
            display: inline-block;
            position: absolute;
            color: white;
       }
    }

    .outLayer{
        opacity: 1;
        position: absolute;
        z-index: 9;
        // width: pxTorem(335px);
        height: pxTorem(643px) ;
        top: pxTorem(30px);
        left: pxTorem(20px);
        right: pxTorem(20px);
    }
  //   .lbOverlay{
  //     position: fixed;
  //     left: 0;
  //     top: 0;
  //     width: 100vw;
  //     background: gray;
  //     z-index: 8;
  //     height:100%;
  //     opacity:0.5;/*其他，透明度50%*/
  // }
</style>
