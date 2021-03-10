<!--
 * @Author: your name
 * @Date: 2021-01-29 18:06:28
 * @LastEditTime: 2021-03-09 10:58:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Bms_vue2\src\views\c-zxy-food\index.vue
-->
<template>
  <div>
    c-zxy-food
    <div >
      <!-- {{xArr[0]}} -->
      <!-- {{ xzj.name + xzj.date + xzj.love + xzj.isTrue }} -->
      {{ objjj}}
    </div>
    <div>
      {{xzj.name}}
    </div>

    <div class="clickBox" @click="btnclick"></div>
    <div class="rclickBox" @click="rightClick"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ComponentsMap } from "@/router/mapper.js";
export default {
  data() {
    return {
      obj:[1,2,3,4,5,[1,23,45,6]],
      xzj:{
        name:'xzj'
      }
    };
  },
  onload() {},
  mounted() {
    console.log(ComponentsMap);
    console.log(this.$el.textContent, "<<<页面内容");
  },
  computed: {
    ...mapState(["xArr", "xzj"]),
  },
  methods: {
    btnclick() {
  
      this.xzj.name="谢志杰"
      console.log(this.xzj)
    

    },
    rightClick() {},
  },
  computed: {
    objjj() {
      return JSON.stringify(this.obj);
    },
  },
};
</script>

<style scoped lang="scss">
.clickBox {
  width: 60px;
  height: 60px;
  background-color: aqua;
}
.rclickBox {
  width: 60px;
  height: 60px;
  background-color: rgb(255, 115, 0);
}
</style>