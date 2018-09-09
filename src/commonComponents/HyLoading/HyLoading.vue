<template>
    <div class="hy-loading">
        <div class="hy-loading-content">
          <i class="iconfont icon-loading3 spin"></i> <br>
            加载中...
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .hy-loading{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;

        .hy-loading-content {
            text-align: center;
            width: vm(120);
            height: vm(120);
            margin: 40vh auto;
            border: 1px solid gray;
            padding: vm(38) 0;
            box-sizing: border-box;
            border-radius: 4px;
            color: white;
            background-color: hsla(0, 0%, 7%, 0.7);
            i {
                font-size:vm(40);
                color: white;
                margin-bottom: vm(5);
            }
            .spin{
                position:relative;
                display: inline-block;
                width: vm(40);
                height: vm(40);
                animation: mymove 2s infinite linear;
            }
            @keyframes mymove{
                0% {
                    -webkit-transform: rotate3d(0, 0, 1, 0deg);
                    transform: rotate3d(0, 0, 1, 0deg);
                }
                100% {
                    -webkit-transform: rotate3d(0, 0, 1, 360deg);
                    transform: rotate3d(0, 0, 1, 360deg);
                }
            }
        }

    }

</style>
