<template lang="html">
	<transition name="message">
		<div class="hy-message" v-show="visible">
			<!-- <i class="iconfont icon-delete"></i>  -->
			{{ message}}
		</div>
	</transition>
</template>

<script>
export default {
	data () {
		return {
			message: 'nihao',
			duration: 3000,
			visible: false
		}
	},
	mounted() {
		setTimeout(() => {
			this.flag = true;
			this.$el.parentNode.removeChild(this.$el);
		}, this.duration)
	}
}
</script>
