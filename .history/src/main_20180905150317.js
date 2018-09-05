// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入饿了么组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//ueditor
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/ueditor.parse.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'

//引入公共js
import '@/common/config'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
