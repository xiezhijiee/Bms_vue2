/*
 * @Author: your name
 * @Date: 2021-01-19 19:21:15
 * @LastEditTime: 2021-01-29 18:12:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xzj_v\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/zxy", //重定向
    name: "Index",
    component: () => import("@/Layout/index.vue"),
    children: [
      {
        path: "zxy",
        redirect: "/zxy/c-zxy-food", //重定向
        name: "zxy",
        component: () => import("@/views/zxy"),
        children: [
          {
            path: "c-zxy-food",
            name: "c-zxy-food",
            component: () => import("@/views/c-zxy-food"),
          },
        ],
      },
    ],
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
