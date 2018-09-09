<template lang="html">
  <div class="HyDialog">
    <div class="HyDialog-mask"  @click="close" v-show="visible"></div>
    <transition name="breadcrumb">
			<div class="HyDialog-content" v-if="visible">
				<slot></slot>
			</div>
    </transition>
  </div>
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
