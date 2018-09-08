<template lang="html">
  <div class="content">
    <swiper :list="list" :auto="false" :dots-position="'center'" style="height: vm(400)"></swiper>
    <div class="middle-item"  v-for="(item, index) in middleList">
      <div class="middle-item-title">
      </div>
      <div class="middle-item-des">
        <div class="middle-item-des-1">
            <span>
              {{ item.title }}
            </span>
            <div class="yellow-div">
            </div>
        </div>
        <div class="middle-item-des-2" >
          {{ item.des}}
        </div>
      </div>
    </div>
    <div class="footer">
  		<div class="footer-1">
  			<div class="footer-1-des">
  				更轻松的远行
  			</div>
  			<div class="footer-1-btn" @click="$router.push('liuBike')">
  				查看小遛电单车特性
  			</div>
  		</div>
  		<foot></foot>
  	</div>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import foot from './foot'
import img from '@/assets/govWeb/banner@3x.png';
import middle1 from '@/assets/govWeb/PIC@3x.png'
import middle2 from '@/assets/govWeb/PIC@3x.png'
import middle3 from '@/assets/govWeb/PIC@3x.png'
export default {
  components: { Swiper, foot },
  data() {
    return {
      list: [{
        url: 'javascript:',
        img: img,
      }, {
        url: 'javascript:',
        img: img,
      }, {
        url: 'javascript:',
        img: img,
      }],
      middleList: [
        { title: '快速', des: '生活节奏的不断加速，决定了都市人更需要将出行时间缩短，才能让时间更有价值。', url: middle1 },
        { title: '长远', des: "10公里以内的短途出行中都市人更需要克服 '体力尴尬' 才能让距离不再遥远。", url: middle1 },
        { title: '环保', des: '科技改变世界，都市人更需要减少尾气排放来净化生活环境，才能让生活环境更健康。', url: middle1},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
*{
	// box-sizing: border-box;
}
.content{
  letter-spacing: 0.34px;
	z-index: 9;
  background-color: $bckColor;
  .middle-item{
    height: vm(351);
    padding: vm(20) vm(20) vm(0) vm(20);
    border-radius: 5px;
    &-title{
      height: vm(207);
      background-image: url('~@/assets/govWeb/PIC@3x.png');
      @include bck;
    }
    &-des{
      background-color: white;
      height: vm(144);
      &-1{
        font-size: vm(28);
        padding: vm(20) 0;
        height: vm(40);
        text-align: center;
        position: relative;
        span{
          z-index: 13;
          position: absolute;
          font-weight: $fontWeight;
          left: 0;
          right: 0;
          top: vm(28);
          bottom: 0;
          margin:auto;
        }
        .yellow-div{
          height: vm(10);
          width: vm(57);
          position: absolute;
          left: 0;
          right: 0;
          top: vm(40);
          bottom: 0;
          margin:auto;
          z-index: 5;
          background-color: $theme-xiaoliu;
        }
      }
      &-2{
        font-size: vm(14);
        padding: 0 vm(20);
        font-family: 'PingFangSC-Regular';
        letter-spacing: vm(0.3);
      }
    }
  }
  .footer{
  	margin-top: vm(20);
  	&-1{
  		height: vm(155);
  		@include bck;
  		background-image: url('~@/assets/govWeb/Group@3x.png');
  		&-des{
  			font-size: vm(28);
  			text-align: center;
  			padding-top: vm(30);
        font-weight: $fontWeight;
  		}
  		&-btn{
  			width: vm(167);
  			margin: vm(20) auto;
  			background-color: black;
  			color: white;
  			font-size: vm(14);
  			height: vm(35);
  			line-height: vm(35);
  			text-align: center;
  			border-radius: 4px;
  		}
  	}
  	&-2{
  		height: vm(275);
  		background: #222222;
  		color: white;
  		padding-top: vm(30);
  		&-log{
  			width: vm(130);
  			height: vm(65);
  			margin: 0 auto;
  			@include bck;
  			background-image: url('~@/assets/govWeb/logoxia@3x.png');
  		}
  		&-des{
  			padding: vm(30) vm(40);
  			&-item{
  				font-size: vm(14);
  				letter-spacing: 0.3px;
  				line-height: vm(28);
  				height: vm(28);
  				.header{
  					color: #A4A4A4;
  				}
  				.des{
  					color: white;
  				}
  			}
  		}
  	}
  }
  .vux-slider{
    height: vm(400)!important;
  }
}

</style>
