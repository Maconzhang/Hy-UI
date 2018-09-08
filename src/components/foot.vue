<template lang="html">
		<div class="footer-2">
			<div class="footer-2-log">
			</div>
			<div class="footer-2-des">
				<div class="footer-2-des-item">
						<span class="header">联系方式： </span>
						<span class="des">400-101-5707</span>
				</div>
				<div class="footer-2-des-item">
						<span class="header">工作时间： </span>
						<span class="des">周一至周日 7:00 - 22:00</span>
				</div>
				<div class="footer-2-des-item">
						<span class="header">公司地址： </span>
						<span class="des">宁波市鄞州区学士路655号鄞州信息科技孵化园E栋1401室</span>
				</div>
			</div>
		</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
	.footer-2{
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
</style>
