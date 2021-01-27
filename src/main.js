/*
 * @Author: your name
 * @Date: 2021-01-19 19:21:15
 * @LastEditTime: 2021-01-27 17:01:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xzj_v\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.scss'  //重置样式文件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
