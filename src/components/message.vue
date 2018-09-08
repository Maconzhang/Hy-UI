<template lang="html">
	<transition	name="message">
		<div class="message" >
			{{tipMes}}
		</div>
	</transition>
</template>

<script>
export default {
	props:{
		tipMes: String
	},
	data() {
		return {
			showMes: true
		}
	},
	mounted() {
		var _this = this;
		setTimeout(()=> {
			console.log('mounted')
			_this.$emit('show')
		}, 1500)
	}
}
</script>

<style lang="scss" scoped>

	.message{
		position: fixed;
		width: 60%;
		font-family: "PingFangSC-Semibold";
		top: pxTorem(40px);
		margin-left: 20%;
		height: pxTorem(30px);
		line-height: pxTorem(30px);
		font-size: pxTorem(12px);
		border-radius: 50px;
		background-color: gray;
    	// border: 1px solid #fbeed5;
		color: white;
		z-index: 10;
	}
</style>
