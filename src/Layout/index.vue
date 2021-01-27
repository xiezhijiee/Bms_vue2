<!--
 * @Author: your name
 * @Date: 2021-01-27 16:55:20
 * @LastEditTime: 2021-01-27 19:14:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xzj_v\src\Layout\index.vue
-->

<template>
  <div class="x-content">
    <Sider class="sider" />
    <div class="rightSide">
      <Header class="header" />
      <Main class="main" />
      <Footer class="footer"/>
    </div>
  </div>
</template>

<script>
import Sider from "@/Layout/Sider";
import Header from "@/Layout/Header";
import Main from "@/Layout/Main";
import Footer from '@/Layout/Footer';
export default {
  components: {
    Sider,
    Header,
    Main,
    Footer
  },
};
</script>

<style lang="scss" scoped>
.x-content {
  width: 100%;
  height: 100vh;
  background-color: $allColor;
  display: flex;
}
.sider {
  background-color: yellow;
  width: 20%;
}
.header {
  background-color: #7e1f96;
}
</style>