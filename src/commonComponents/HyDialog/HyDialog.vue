<template lang="html">
  <transition name="breadcrumb">
  <div class="HyDialog" v-show="visible">
		<div class="HyDialog-mask"  @click="close"></div>
			<div class="HyDialog-content">
				<slot></slot>
			</div>
  </div>
  </transition>

</template>

<script>
export default {
  props: {
    visible: false
  },
	methods: {
		close() {
			this.$emit('close')
		}
	}
}
</script>
