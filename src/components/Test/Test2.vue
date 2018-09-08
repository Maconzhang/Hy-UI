<template lang="html">
  <div class="test2">
  	test2
  </div>
</template>

<script>

export default {
  inject: ['dialogForm'],
  data() {
    return {
      test2: 'i am test2'
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
  .test2{
    border: 1px solid blue;
  }
</style>
