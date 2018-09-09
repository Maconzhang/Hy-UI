// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'

Vue.config.productionTip = false

//引入所有api
// const api = require('./api/api')
// Vue.prototype.$http = api;
//
// import liuLoading from './components/Loading/liuLoading'
// Vue.component('liuLoading', liuLoading)

//commonComponent组件的scss
import './commonComponents/style/index.scss'

// import 'simplemde/dist/simplemde.min.css'
// import VueSimplemde from 'vue-simplemde'
// Vue.use(VueSimplemde)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
