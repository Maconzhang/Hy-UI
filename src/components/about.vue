<template lang="html">
  <div class="about">
		<div class="about-banner">
			<span class="about-banner-header">关于我们</span>
		</div>
		<div class="about-boss">
			<div class="about-boss-intr">
				<div class="header">
					<div class="pic">
						<img src="@/assets/govWeb/zhubo@3x.png" alt="">
					</div>
					<div class="intr">
						<span class="name">朱波</span>
						<span class="name-intr">小遛共享创始人兼CEO双轨运营模式的创造者</span>
					</div>
				</div>
				<div class="content">
					2017年初，朱波与2名合伙人创立小遛共享，提出了“ 双轨运营模式”的理念。小遛共享是一家以分享经济为基础，以共享经济为核心，运营共享电单车平台的互联网科技公司。 <br>
					<br>
					朱波相信，小遛共享将强化人们的环保观念，打造新的出行理念，改变人们的出行方式，让人们的出行变得更加高效和美好。
				</div>
			</div>
		</div>
		<div class="about-company" v-for="(item, index ) in ['1', '2']">
			<div class="about-company-title">
				<div class="real-title">
					<div style="position: relative;z-index: 10">
						{{ index == 0 ? '公司简介' : '愿景展望'}}
					</div>
					<div class="yellow-div">
					</div>
				</div>
			</div>
			<div class="about-company-content" v-if="index == 0">
				宁波小遛共享信息科技有限公司，简称“小遛共享”。 <br>
				小遛共享于2017年4月落户于宁波鄞州科技信息孵化园，是宁波最早的共享电单车信息科技企业之一。小遛共享背后的投资人均为资深餐饮投资者，跨界投资智慧城市--共享出行项目，整合互联网专业技术团队、通过物联网、智联网、大数据全网互通，实现城市资源的优化和共享，为市民提供良好的出行体验。
			</div>
			<div class="about-company-content" v-else>
				在未来，小遛将在百余座城市添加电单车的投放，预计到2020年突破1500万辆。一座城，万辆车，每座城市计划铺设车辆3～30万辆。由甬城，及全国，到2018年，小遛共享预计将拓展20个以上二线城市。
			</div>
		</div>
		<div class="about-feather">
			<div class="about-feather-item" v-for="(item, index) in featherList">
				<div class="log" :style="{ backgroundImage:'url(' + item.url + ')'}">
				</div>
				<div class="content">
					<div class="content-header">
						{{ item.label }}
					</div>
					<div class="content-des">
						{{ item.des }}
					</div>
				</div>
			</div>
			<div class="about-feather-item">
				<div class="six-log">
				</div>
			</div>
		</div>
		<foot></foot>
  </div>
</template>

<script>
import feather1 from '@/assets/govWeb/11@3x.png'
import feather2 from '@/assets/govWeb/22@3x.png'
import feather3 from '@/assets/govWeb/33@3x.png'
import feather4 from '@/assets/govWeb/44@3x.png'
import feather5 from '@/assets/govWeb/55@3x.png'
import foot from './foot'
export default {
	components: { foot },
	data() {
		return{
			featherList: [
				{ url: feather1, label: '资金保障', des: '国内知名投融资公司保驾护航' },
				{ url: feather2, label: '安全保障', des: '保险公司车身与人身双保险' },
				{ url: feather3, label: '产品保障', des: '整车出厂符合国家标准上路运营保障' },
				{ url: feather4, label: '服务保障', des: '16小时客服' },
				{ url: feather5, label: '收益保障', des: '车辆押金开设资金专用账户专用账户' },
			]
		}
	}
}
</script>

<style lang="scss" scoped>
	.about{
		background-color: $bckColor;
		&-banner{
			height: vm(232);
			background-image: url('~@/assets/govWeb/banner123@3x.png');
			@include bck;
			&-header{
				display: inline-block;
				font-size: vm(28);
				color: #FFFFFF;
				letter-spacing: 0.34px;
				margin-left: vm(20);
				margin-top: vm(90);
			}
		}
		&-boss{
			margin: 0 vm(20);
			height: vm(360);
			background-color: white;
			position: relative;
			margin-top: -82px;
			border-radius: 4px;
			&-intr{
				padding: vm(20);
				.header{
					margin-bottom: vm(20);
					.pic{
						display: inline-block;
						vertical-align: top;
						img{
							height: vm(120);
							width: vm(120);
							border-radius: 4px;
						}
					}
					.intr{
						display: inline-block;
						height: vm(120);
						width: vm(170);
						padding-left: vm(20);
						padding-top: vm(20);
						box-sizing: border-box;
						.name{
							display: block;
							font-size: vm(20);
							font-weight: $fontWeight;
							color: #222222;
							letter-spacing: 0.59px;
							margin-bottom: vm(6);
						}
						.name-intr{
							font-size: vm(14);
							color: #A4A4A4;
							letter-spacing: 0.3px;
							line-height: 22px;
						}
					}
				}
				.content{
					font-size: vm(14);
					color: #222222;
					letter-spacing: 0.3px;
					line-height: vm(22);
				}
			}
		}

		&-company{
			padding: vm(20) vm(20) vm(0) vm(20);
			&-title{
				background-color: white;
				padding-top: vm(30);
				margin: 0 auto;
				text-align: center;
				.real-title{
					display: inline-block;
					font-size: vm(28);
					height: vm(40);
					line-height: vm(40);
					position: relative;
					.yellow-div{
						height: vm(10);
	          position: absolute;
	          left: 0;
	          right: 0;
	          top: vm(25);
	          bottom: 0;
	          margin:auto;
	          z-index: 5;
	          background-color: $theme-xiaoliu;
					}
				}
			}
			&-content{
				background-color: white;
				font-size: 14px;
				color: #222222;
				letter-spacing: 0.3px;
				line-height: vm(22);
				padding: vm(20);
			}
		}
		&-feather{
			padding: vm(20) vm(20) vm(0) vm(20);
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: vm(10);
			&-item{
				border-radius: 4px;
				width: vm(163);
				height: vm(231);
				background-color: white;
				margin-bottom: vm(9);
				.log{
					width: vm(65);
					height: vm(65);
					@include bck;
					background-image: url('~@/assets/govWeb/11@3x.png');
					margin: vm(30) auto vm(20) auto;
				}
				.content{
					&-header{
						font-size: vm(20);
						text-align: center;
						font-weight: $fontWeight;
					}
					&-des{
						margin-top: vm(10);
						font-size: vm(14);
						text-align: center;
						padding: 0 vm(31);
						color: #A4A4A4;
					}
				}
			}
		}
		.about-feather-item:nth-child(6){
			background-color: $theme-xiaoliu;
			display: flex;
			justify-content: center;
			align-items: center;

			.six-log{
				width: vm(60);
				height: vm(116);
				background-image: url('~@/assets/govWeb/heiselogo@3x.png');
				@include bck;
			}
		}
	}
</style>
