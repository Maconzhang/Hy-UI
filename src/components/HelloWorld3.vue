<template>
    <div>
        测试三级以上组件利用provide传递的数据
        <br>
        <!-- <test></test> -->
        <button type="button" name="button" @click="click">click</button>
        <br>
        <div class="imgdiv">
          <img src='~@/assets/banner.png' alt=""  id="img">
        </div>

    </div>
</template>
<script>
import test from './Test/Test'
export default {
    components: { test },
    provide: {
        dialogForm: ''
    },
    data() {
        return {
            dialogForm: {
                name: '',
                age: '',
                sex: '',
                school: ''
            }
        }
    },
    methods: {
      click() {
        var dom = document.getElementById('img');
        dom.style.width = '200%';
        dom.style.height = '200%';
      }
    }
}
</script>
<style lang="scss" scoped="">
  .imgdiv{
    width: vm(300);
    height: vm(300);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  img{
    width: 100%;
    height: 100%;
    animation:move 5s;
  }

  @keyframes move{
    0%{  width: 100%; height: 100%; }
    15%{ width: 115%; height: 115%; }
    30%{ width: 130%; height: 130%; }
    50%{ width: 150%; height: 150%; }
    100%{ width:200%; height: 200%;}
  }
</style>
