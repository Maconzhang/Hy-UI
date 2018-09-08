<template lang="html">
  <div class="liuBike">
  	<div class="liuBike-banner">
  	</div>
		<div class="liuBike-intr">
			<div class="liuBike-intr-title">
				小遛电单车
			</div>
			<div class="liuBike-intr-des">
				<span>• 	防爆实心轮胎 / 双GPS</span>
				<span>• 	防爆实心轮胎 / 双GPS</span>
			</div>
		</div>
		<div class="middle-item"  v-for="(item, index) in middleList">
      <div class="middle-item-title" :style="{ backgroundImage:'url(' + item.url + ')'}">
      </div>
      <div class="middle-item-des">
        <div class="middle-item-des-2" >
          <div v-if="index == 0">
						钢结构的车身主体 <br>
						防爆实心轮胎、双GPS、360公司定制智能中控系统 <br>
						为用户提供四重安全保护
          </div>
					<div v-if="index == 1">
						小遛电单车采用联想旗下“星恒”锰酸锂电池技术，最低续航80公里!
          </div>
					<div v-if="index == 2">
						无桩充电、全职换电 <br>
						用户只需打开专属APP扫码，一秒解锁 <br>
						随时想遛就遛
          </div>
        </div>
      </div>
    </div>
		<foot></foot>
  </div>
</template>

<script>
import foot from './foot'
import middle1 from '@/assets/govWeb/Group2@3x.png'
import middle2 from '@/assets/govWeb/Group4@3x.png'
import middle3 from '@/assets/govWeb/Group5@3x.png'
export default {
	components: { foot },
	data() {
		return {
			middleList: [
				{ url: middle1 },
				{ url: middle2 },
				{ url: middle3 },
			]
		}
	},
	mounted() {
		console.log(navigator.userAgent);
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		//这是输入设备为手机的js代码
			console.log('xxx');
		}
	}
}
</script>

<style lang="scss" scoped>
	.liuBike{
		background-color: $bckColor;
		&-banner{
			height: vm(232);
			background-image: url('~@/assets/govWeb/banner2@3x.png');
			@include bck;
		}
		&-intr{
			height: vm(147);
			background-image: url('~@/assets/govWeb/Group@3x.png');
			@include bck;
			padding-top: vm(20);
			box-sizing: border-box;
			&-title{
				font-size: vm(28);
				letter-spacing: 0.34px;
				text-align: center;
				margin-bottom: vm(15);
			}
			&-des{
				span{
					display: block;
					line-height: vm(26);
					height: vm(26);
					text-align: center;
					font-size: vm(16);
					letter-spacing: 0.34px;
				}
			}
		}

		.middle-item{
	    padding: vm(20) vm(20) vm(0) vm(20);
	    border-radius: 5px;
	    &-title{
	      height: vm(207);
	      @include bck;
	    }
	    &-des{
	      background-color: white;
				padding: vm(20);
	      &-2{
	        font-size: vm(14);
	        padding: 0 vm(20);
	        font-family: 'PingFangSC-Regular';
	        letter-spacing: vm(0.3);
					div{
						line-height: vm(22);
						font-size: vm(14);
						color: #222222;
					}
	      }
	    }
	  }
		.middle-item:nth-child(5){
			margin-bottom: vm(20);
		}
	}



</style>
