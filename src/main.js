import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// import router from './router'
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

fastclick.attach(document.body)
// 去除300ms的延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
