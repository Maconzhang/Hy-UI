<template lang="html">
  <div class="helllo2" v-dir_loading="showLoading2">

    <div class="item">
      <div>Hy-input</div>
      <Hy-input :type="'number'" :placeholder="'请输入手机号码'" ></Hy-input><br>
      <Hy-input :type="'number'" :placeholder="'请输入验证码'" :showCheck="true" v-on:sendCheckNumber="sendCheckNumber"
      v-on:close="isGetNummber=false" :isGetNummber="isGetNummber"></Hy-input>

    </div>

    <div class="item">
      <div> Hy-dialog</div>
      <button type="button" name="button" @click="showDialog=!showDialog">showDialog</button>
      <HyDialog v-on:close="showDialog=false"  :visible="showDialog">
          <div class="dialog-content">
            这里是可以自定义的slot
          </div>
      </HyDialog>
    </div>

    <div class="item">
      <div> HyLoading['组件式'](三秒后关闭)</div>
      <button type="button" name="button" @click="showLoad">showLoading</button>
      <HyLoading v-if="showLoading"></HyLoading>
    </div>

    <div class="item">
      <div> HyLoading['指令式'](三秒后关闭)</div>
      <button type="button" name="button" @click="showLoad2">showLoading</button>
    </div>

    <div class="item">
      <div>HyMessage</div>
      <button @click="showMes">Show Message</button>
    </div>

    <div class="item">
      <div>HyCheck</div>
      <HyCheck v-model="checkValue" label="1">China</HyCheck>
      <HyCheck v-model="checkValue" label="2">USA</HyCheck>
      <HyCheck v-model="checkValue" label="3">UK</HyCheck>
    </div>

  </div>
</template>

<script>

import test from '@/components/Test/Test';
import HyInput from '@/commonComponents/HyInput/HyInput';
import message from '@/commonComponents/HyMessage/index';
import HyDialog from '@/commonComponents/HyDialog/HyDialog';
import HyCheck from '@/commonComponents/HyCheck/HyCheck';
import HyLoading from '@/commonComponents/HyLoading/HyLoading';
import dir_loading from '@/commonComponents/DirLoading/index';

export default {
	name: 'HelloWorld2',
  components: { test, HyInput, HyDialog, HyCheck, HyLoading },
	provide: {
    foo: "this.name"
  },
	data() {
		return {
			name: 'i am cool',
      showDialog: false,
      showLoading: false,
      showLoading2: false,
      checkValue: 1,
      isGetNummber: false
		}
  },
  mounted() {

  },
  methods: {
    showMes() {
      message('出现异常了！！！')
    },
    showLoad() {
      this.showLoading = true
      setTimeout(_ => {
        this.showLoading = false
      }, 3000)
    },
    showLoad2() {
      this.showLoading2 = true
      setTimeout(_ => {
        this.showLoading2 = false
      }, 3000)
    },
    sendCheckNumber() {
      this.isGetNummber = true;
    }
  }
}
</script>

<style lang="scss" scoped>
   .helllo2{
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    border: 2px solid red;
  }
  .helllo3:before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.5;
    // z-index: 999;
  }

  .dialog-content{
    width: 80vw;
    margin-top: 10px;
    margin-left: 10vw;
    margin-right: 10vw;
    background-color: white;
    border-radius: 4px;
    padding: 10px;
  }

  .item{
    padding: vm(20);
  }
</style>
