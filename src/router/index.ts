import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => /* 仅展示公开内容 */ import('@/views/Home.vue')
  }
];
const router = new VueRouter({
  routes
});
export default router;
