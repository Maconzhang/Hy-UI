<template lang="html">
  <div>
		<div class="demo-item">
			123
		</div>
		<!-- <markdown-editor v-model="content" ref="markdownEditor" :highlight="true"></markdown-editor> -->
  </div>
</template>

<script>
// import { markdownEditor } from 'vue-simplemde';
 // import hljs from 'highlight.js';

export default {
	data() {
		return {
			list: [
				{ des: 'HyDialog' }
			],
			content: ''
		}
	}
}
</script>
<style type="text/css">
	/* @import 'simplemde/dist/simplemde.min.css'; */
</style>
<style lang="scss" scoped>
	.demo-item{
		width: 33.3vw;
		height: vm(100);
		display: inline-block;
		border: 1px solid gray;
		box-sizing: border-box;
	}
</style>
