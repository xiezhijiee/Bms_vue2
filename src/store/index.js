/*
 * @Author: your name
 * @Date: 2021-01-19 19:21:15
 * @LastEditTime: 2021-03-08 17:14:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Bms_vue2\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const vm=new Vue()

export default new Vuex.Store({
  state: {
    xArr:[1,3,4,5,6,7],
   xzj:{
     name:'xzj',
     love:'zxy',
     date:'1月9',
     isTrue:true
   }
  },
  mutations: {
    setxarr(state,data){
      vm.$set(state.xArr,0,data)
    },
    setxzj(state,data){
      state.xzj=data
    }
  },
  actions: {
  },
  modules: {
  }
})
