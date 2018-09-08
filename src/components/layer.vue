<template lang="html">
  <div class="layer">
    <!-- <liuLoading></liuLoading> -->
	  <div class="layer-title">
		  注册支付
		  <div class="close">
			  <img src="@/assets/Shape.png" alt="" @click="close()">
		  </div>
	  </div>
	  <div class="input-group">
		  <input type="number" name="" value="" placeholder="请输入领养人手机号" v-model="phone">
		  <input type="number" name="" value="" placeholder="请输入验证码" v-model="code">
          <span class="getCheck" @click="getNumber"> {{ isGetNummber ? (checkedNumber + '秒后再获取') : '获取验证码' }}</span>
	  </div>
	  <div class="modal">
  		<div class="modal-title">
  			选择领养模式：
  		</div>
  	  	<div class="modal-item" v-for="(item, index) in earnStyle" @click="setEarn(index)">
  	  		{{ item.des }}: <span :class="{ radio:true, radio1: index == earnType }"></span>
  	  	</div>
  		<div class="pay">
  			<div class="price">
  				<span class="tip">¥ </span>3998.00
  			</div>
  			<div class="pay-type" v-for="(item, index) in payStyle" @click="setPay(index)">
  				<span :class="{ icon: true, pay0: index == 0, pay1: index == 1  } "> </span>
  				<span class="des">{{ item.des }}</span>
  				<span :class="{ radio:true, radio1: index == payType }"></span>
  			</div>
  			<div class="tip">
  				确认支付，即表同意<span @click="goDetail">《小遛共享领养协议》</span>
  			</div>
  			<div class="surePay" @click="surePay">
  				确认支付
  			</div>
  		</div>
	  </div>
    <!-- <form class="" action="index.html" method="post" style="position: absolute;top: -9999px;left: -9999px;" id="form1" ref="form">
      <input type="text" name="" value="">
    </form> -->
  </div>
</template>

<script>

var ua = window.navigator.userAgent.toLowerCase();
if (ua.match(/MicroMessenger/i) == 'micromessenger') {
  console.log('isWx')
} else {
  console.log('noIsWx')
}
export default {
	data() {
		return {
            earnStyle: [
                { des: '赚骑行收益' },
                { des: '赚骑行费用' },
            ],
            payStyle: [
                { des: '支付宝', imgUrl: '~@/assets/logo_pay01.png' },
                { des: '微信支付', imgUrl: '~@/assets/logo_pay01.png' }
            ],
            earnType: 0,
            payType: 0,
            isGetNummber: false,
            checkedNumber: 60,
            phone: '',
            code: '',
            token: '',
            payUrl: 'https://m.alipay.com/Gk8NF23?total_amount=9.00&timestamp=2016-08-11+19%3A36%3A01&sign=ErCRRVmW%2FvXu1XO76k%2BUr4gYKC5%2FWgZGSo%2FR7nbL%2FPU7yFXtQJ2CjYPcqumxcYYB5x%2FzaRJXWBLN3jJXr01Icph8AZGEmwNuzvfezRoWny6%2Fm0iVQf7hfgn66z2yRfXtRSqtSTQWhjMa5YXE7MBMKFruIclYVTlfWDN30Cw7k%2Fk%3D&trade_no=2016081121001004630200142207&sign_type=RSA2&charset=UTF-8&seller_id=2088111111116894&method=alipay.trade.wap.pay.return&app_id=2016040501024706&out_trade_no=70501111111S001111119&version=1.0',
            ipAddress: ''
	   }
	},
  mounted() {
     this.ipAddress = returnCitySN["cip"];
     console.log('11111====================', this.ipAddress);


    // console.log(Arr)
     // const ss = "app_id=2017062307551382";
     // console.log(ss.split("="))
     // this.createForm()
     // console.log(this.createForm())
     // console.log(document.getElementById('form1'), this.$refs);
  },
  methods: {
    close () {
      this.$emit('close')
    },
    setEarn (index) {
      this.earnType = index
    },
    setPay (index) {
      this.payType = index
    },
    getNumber () {
        //获取手机验证码
        if (this.isGetNummber) {
            return
        }
        const phone = this.phone;
        this.$http.message(phone)
        .then(res =>{
          if(res.data == 'success') {
            this.isGetNummber = true
            var t = setInterval(()=> {
                this.checkedNumber = this.checkedNumber - 1;
                if (this.checkedNumber == 0) {
                    clearInterval(t)
                    this.isGetNummber = false
                    this.checkedNumber = 60
                }
            }, 1000)
          } else {
            this.alertMes('手机号有误')
          }
        }).catch(e => {
          this.alertMes('手机号有误')
        })
    },
    surePay () {
        /*
         * 1.登录
         * 2.支付方式选择
         * 验证码 -> 登录 -> 获取活动编号 -> 下单 -> 支付
         */

        //login
        var _this = this
        this.$http.login({ phone: this.phone, code: this.code, areaid: '315000' }).then(res => {

          if (res.status == 200){
            const token = res.data.token;
            this.token = token;
            console.log('已经获取到token', token)

            //window.location.href = this.payUrl;

            //获取活动编号-
            const activecount = this.earnType == 0 ? 5 : 6;

            //下单
            this.$http.order({ token, activecount }).then(res => {
                console.log('adoptorders', res)
                const orderno = res.data.data.orderno;
                if (res.status == 200) {

                    //支付
                    console.log('进入支付---');

                    //支付宝支付
                    if (this.payType == 0) {
                        console.log('支付宝')
                        _this.$http.ali_pay({ orderno, token }).then(res => {

                          console.log('ali', res)
                          const url = 'https://openapi.alipay.com/gateway.do?' + res.data.data;
                          window.location.href = url;

                        }).catch(e => {
                          console.log('支付宝支付出错', e)
                        })
                    }

                    //微信支付
                    else {
                        console.log('微信支付ip地址查询', _this.ipAddress)
                        // const ip = this.ipAddress;
                        const ip = '116.62.18.66';
                        _this.$http.wx_pay({ orderno, ip, token }).then(res => {
                          var url = res.data.data.mweb_url + '&redirect_url=' + 'http%3a%2f%2fh5.xlgxapp.com%2flingyangpay%2fdist%2findex.html%23%2f%3faction%3dsuccessPay';
                          console.log('wx', res.data.data.mweb_url, url)

                          window.location.href = url

                        }).catch(e => {
                          console.log('微信支付出错', e)
                        })
                    }
                } else {
                  console.log('下单出错了', res)
                }
            }).catch(e => {
              console.log('err2', e)
            })

          } else {
            console.log('验证码错误')
            this.alertMes()
          }
        }).catch(e => {
            console.log(e);
            this.alertMes()
        })

    },
    alertMes(param) {
      const p = param || '验证码错误!';
      this.$emit('alertMessage', p);
    },
    createForm() {
      var form = document.createElement("form");
      form.style="width: 0px";
      form.action = 'https://openapi.alipay.com/gateway.do';
      form.target = '_blank';

      //创建隐藏表单
      var newElement = document.createElement("input");
      newElement.setAttribute("name","method");
      newElement.setAttribute("type","hidden");
      newElement.setAttribute("value",'alipay.trade.wap.pay');
      form.appendChild(newElement);

      var app_id = document.createElement("input");
      app_id.setAttribute("name","app_id");
      app_id.setAttribute("type","hidden");
      app_id.setAttribute("value", '2017062307551382');
      form.appendChild(app_id);


      document.body.appendChild(form);

      // return form

      form.submit();
    },
    parseStr(str) {
      var newArr = str.split('&')
      var Arr = []
      for(var i = 0; i < newArr.length; i++ ) {
        var obj = {};
        var tArr =  newArr[i].split('=');
        obj[tArr[0]] = tArr[1];
        Arr.push(obj)
      }
      return Arr
    },
    goDetail() {
      window.location.href = 'http://h5.xlgxapp.com/user/adopt-rule.html?type=8';
    }
  }
}
</script>

<style lang="scss" scoped  rel="stylesheet/scss">
  .radio1{
    background-image: url('~@/assets/checked.png')!important;
  }
	.layer{
		background: #FFFFFF;
		border-radius: 10px;
		height: 100%;
    width: 100%;
	}
	.layer-title{
    font-size: pxTorem(16px);
		height: pxTorem(50px);
		line-height: pxTorem(50px);
		border-bottom: 1px solid #E1E1E1;
	}
	.layer-title .close{
		margin-top: pxTorem(15px);
		padding: pxTorem(5px);
		width: pxTorem(28px);
		height: pxTorem(28px);
		top: pxTorem(-5px);
		right: pxTorem(10px);
		position: absolute;
	}
	.layer-title .close img{
		height: pxTorem(16px);
		width: pxTorem(16px);
		display: block;
		background-image: url('~@/assets/Shape.png');
		background-size: 100% 100%;
	}

	.input-group{
		padding: pxTorem(5px) pxTorem(20px);
        position: relative;
        .getCheck{
            font-size: pxTorem(14px);
            color: #4B92E3;
            letter-spacing: 0;
            position: absolute;
            top: pxTorem(90px);
            right: pxTorem(30px);
        }
	}
	.input-group input{
    vertical-align:middle;
		width: 100%;
		height: pxTorem(42px);
		line-height: pxTorem(42px);
		color: #A4A4A4;
		background: #F5F5F5;
		border-radius: 4px;
    height: pxTorem(42px);
    // line-height: pxTorem(20px);
		margin: 0;
		padding: 0;
		font-size: pxTorem(14px);
		margin-top: pxTorem(15px);
		padding-left: pxTorem(10px);
		border: none;
		outline: none;
		-webkit-appearance: none;
	}

	.modal-title{
		font-size: pxTorem(16px);
		color: #222222;
		letter-spacing: pxTorem(0.39px);
		margin-top: pxTorem(20px);
		margin-bottom: pxTorem(15px);
		font-weight: 800;
		font-family: "PingFangSC-Semibold";
	}

	.modal-item{
		width: 100%;
		height: pxTorem(50px);
		padding: pxTorem(15px)  pxTorem(55px);
        font-size: pxTorem(14px);
		text-align: left;
		box-sizing: border-box;
	}

	.modal-item .radio{
		width: pxTorem(18px);
		height: pxTorem(18px);
        background-image: url('~@/assets/unChecked.png');
		background-size: 100% 100%;
		position: absolute;
		right: pxTorem(55px);
		display: inline-block;
	}
	.modal-item2{
		border-bottom: 1px solid  #E1E1E1;
	}

	.pay .price{
		font-family: ArialMT;
		font-size: pxTorem(24px);
		color: #D0021B;
		letter-spacing: 0;
		text-align: center;
		margin-top: pxTorem(24px);
		margin-bottom: pxTorem(24px);
        font-weight: 600;
        > .tip{
            font-size: pxTorem(16px)!important;
            color: #D0021B;
        }
	}
	.pay-type{
		box-sizing: border-box;
		text-align: left;
		height: pxTorem(50px);
		padding:  pxTorem(14px)  pxTorem(55px);
		text-align: left;
		box-sizing: border-box;
		display: flex;
    font-size: pxTorem(14px);
    span{
      line-height: pxTorem(24px);
      height: pxTorem(24px);
    }
	}

	.pay-type .icon{
		display: inline-block;
		width: pxTorem(24px);
		height: pxTorem(24px);
		// background-image: url('~@/assets/logo_pay01.png');
		background-size: 100% 100%;
		display: inline-block;
		margin-right: pxTorem(10px);
	}
	.pay0{
		background-image: url('~@/assets/logo_pay01.png');
	}
	.pay1{
		background-image: url('~@/assets/logo_pay02.png');
	}

	.pay-type .radio{
		width: pxTorem(18px);
		height: pxTorem(18px);
		background-image: url('~@/assets/unChecked.png');
		background-size: 100% 100%;
		position: absolute;
		right: pxTorem(55px);
		display: inline-block;
	}

	.tip{
		font-family: "PingFangSC-Regular";
		font-size: pxTorem(11px);
		color: #A4A4A4;
		letter-spacing: 0;
		text-align: center;
		line-height: pxTorem(11px);
		margin-top: pxTorem(45px);
        > span{
    		color: #ee6723;
    	}
	}

	.surePay{
		background: #222222;
		border-radius: 100px;
		width: 80%;
		height: pxTorem(40px);
		line-height: pxTorem(40px);
		color: white;
        font-size: pxTorem(16px);
		margin: pxTorem(15px) auto;
        letter-spacing: pxTorem(1px);
	}
</style>
