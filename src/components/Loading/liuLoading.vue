<template lang="html">
  <div class="loading spin"></div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@function pxTorem($px){
	@return $px / 37.5px * 1rem;
}
.loading {
	position: absolute;
	margin: pxTorem(20px);
  width: pxTorem(3px);
	height: pxTorem(3px);
  border-radius: 100%;                      /* 圆角 */
  box-shadow: 0 pxTorem(-3px) 0 pxTorem(1px) #333,           /* 上, 1px 扩展 */
  pxTorem(10px) pxTorem(0px) #333,                /* 右 */
  0 pxTorem(10px) #333,                  /* 下 */
  pxTorem(-10px) 0 #333,                 /* 左 */

  pxTorem(-7px) pxTorem(-7px) 0 pxTorem(1.5px) #333,        /* 左上, 0.5px扩展 */
  pxTorem(7px) pxTorem(-7px) 0 pxTorem(1.5px) #333,        /* 右上, 1.5px扩展 */
  pxTorem(7px) pxTorem(7px) #333,                 /* 右下 */
  pxTorem(-7px) pxTorem(7px) #333;                /* 左下 */
}
.spin {
  animation: spin 1s steps(8) infinite;
}
@keyframes spin {
  from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}
</style>
