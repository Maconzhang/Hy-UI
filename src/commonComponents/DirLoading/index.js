import Vue from 'vue';
import DirLoading from './DirLoading'
let DirLoadingConstructor = Vue.extend(DirLoading);

let loadingDirective = {}
loadingDirective.install = Vue => {
    Vue.directive('dir_loading', {
        bind: function (el, binding, vnode) {
            const bol = binding.value;
            if (bol) {
                addChild(el)
            }
        },
        inserted: function (el, binding, vnode) {
            console.log('inserted');
        },
        update: function (el, binding, vnode) {
            console.log('update', binding);
            if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding);
            }
        },
        componentUpdated: function (el, binding, vnode) {
            console.log('componentUpdated');
        },
        unbind: function (el, binding, vnode) {
            console.log('unbind');
        }
    })
      
    const toggleLoading = (el, binding) => {
        console.log('value', binding.value);
        if (binding.value && el.mask) {
            el.mask.style.display = 'block';
        } else if (!binding.value && el.mask){
            el.mask.style.display = 'none';
        } else {
            addChild(el)
        }
    }
    
    const addChild = (el) => {
        var child = new DirLoadingConstructor({
            el: document.createElement('div'),
        })
        el.mask = child.$el;
        //在元素内部
        // el.appendChild(el.mask);

        //在body上面
        document.body.appendChild(el.mask)
    }
    
}

Vue.use(loadingDirective);

export default loadingDirective
