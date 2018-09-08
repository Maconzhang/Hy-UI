<template lang="html">
	<div class="main-footer">
		<div class="footer">
			<div class="log">
			</div>
			<div class="rightBtn" @click="download">
				立即下载
			</div>
	  </div>
	</div>

</template>

<script>
export default {
	methods: {
		download() {
			const url = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.adinnet.xlebike';
			window.location.href = url;
		}
	}
}
</script>

<style lang="scss" scoped>
*{
	box-sizing: border-box;
}
	.main-footer{
		z-index: 99;
		position: fixed;
		bottom: 0;
		width: 100vw;
	}
	.footer{
		height: vm(50);
		line-height: vm(50);
		background-color: #F5F5F5;
		position: relative;
		padding: vm(5);
		.log{
			height: vm(40);
			width: vm(126);
			margin-left: vm(15);
			background-size: 100% 100%;
			background-image: url('~@/assets/govWeb/logoxiaxia@3x.png');
		}
		.rightBtn{
			width: vm(80);
			height: vm(34);
			line-height: vm(34);
			position: absolute;
			top: vm(8);
			right: vm(20);
			background: #222222;
			border-radius: 4px;
			color: white;
			font-size: vm(14);
			text-align: center;
		}
	}
</style>
