<template lang="html">
  <div class="test">
		  Test
		 <test2></test2>
  </div>
</template>

<script>
import test2 from './Test2';
export default {
  components: { test2 },
  data() {
    return {}
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
	.test {
		border: 1px solid red;
    height: 100px;
    padding: 40px;
	}

</style>
