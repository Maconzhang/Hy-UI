import Vue from 'vue';
import HyMessage from './HyMessage';
let HyMessageConstructor = Vue.extend(HyMessage);

let instance;
// let instances = [];
// let seed = 1;

const Message = function (options) {
	if (typeof options === 'string') {
    options = {
      message: options
    };
  }
	instance = new HyMessageConstructor({
		data: options
	})
	instance.vm = instance.$mount();
	document.body.appendChild(instance.vm.$el);
	//模拟v-if / v-show
	instance.vm.visible = true;
}


export default Message;
