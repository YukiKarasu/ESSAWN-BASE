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
  },
  {
    path: '/register',
    name: 'Register',
    component: () => /* 注册 */ import('@/views/account/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => /* 登录 */ import('@/views/account/Login.vue')
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => /* 忘记密码 */ import('@/views/account/Reset.vue')
  },
  {
    path: '/expand',
    name: 'Expand',
    component: () => /* 添加额外功能 */ import('@/views/account/Expand.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => /* 工作版 */ import('@/views/Home.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () =>
          /* 主页--个人简介|项目展示|教育背景（可隐藏） */ import(
            '@/views/Home.vue'
          )
      },
      {
        path: 'component',
        name: 'Component',
        component: () =>
          /* 组件库--根据分类放置组件|搜索栏 */ import(
            '@/views/work/Component.vue'
          )
      },
      {
        path: 'function',
        name: 'Function',
        component: () =>
          /* 方法库--存储封装好的方法添加标签|标签搜索栏 */ import(
            '@/views/work/Function.vue'
          )
      },
      {
        path: 'experience',
        name: 'Experience',
        component: () =>
          /* 经验库--存储工作时的经验添加标签|标签搜索栏 */ import(
            '@/views/work/Experience.vue'
          )
      },
      {
        path: 'question',
        name: 'Question',
        component: () =>
          /* bug库--存储工作时遇到的bug或问题|搜索栏（是否解决|标签[编程语言|知识点]） 若解决，添加需求知识点 */ import(
            '@/views/work/Question.vue'
          )
      }
    ]
  },
  {
    path: '/study',
    name: 'Study',
    component: () => /* 学习版 */ import('@/views/Home.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () =>
          /* 主页--推荐页面--推荐栏目|单篇博客栏目|博客主栏目|书单栏目|搜索栏目（标签搜索） */ import(
            '@/views/Home.vue'
          )
      },
      {
        path: 'note',
        name: 'Note',
        component: () =>
          /* 个人学习笔记栏目（文件夹层次|控制权限） */ import(
            '@/views/study/Note.vue'
          )
      },
      {
        path: 'sortList',
        name: 'SortList',
        component: () =>
          /* 个人学习书单栏目（分类|控制权限） */ import(
            '@/views/study/SortList.vue'
          )
      },
      {
        path: 'personal',
        name: 'Personal',
        component: () => /* 个人主页 */ import('@/views/study/Personal.vue')
      }
    ]
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: () => /* 娱乐版 */ import('@/views/Home.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () =>
          /* 动漫栏目|漫画栏目|游戏攻略栏目|，瀑布流 */ import(
            '@/views/Home.vue'
          )
      },
      {
        path: 'anima',
        name: 'Anima',
        component: () => /* 动漫栏目 */ import('@/views/Home.vue')
      },
      {
        path: 'comic',
        name: 'Comic',
        component: () => /* 漫画栏目 */ import('@/views/Home.vue')
      },
      {
        path: 'game',
        name: 'Game',
        component: () =>
          /* 游戏攻略栏目|游戏剧情栏目 */ import('@/views/Home.vue')
      },
      {
        path: 'novel',
        name: 'Novel',
        component: () => /* 小说书架|小说书单 */ import('@/views/Home.vue')
      },
      {
        path: 'personal',
        name: 'Personal',
        component: () => /* 个人主页 */ import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '*',
    name: '/404',
    component: () => /* 无页面 */ import('@/views/Home.vue')
  }
];
const router = new VueRouter({
  routes
});
export default router;
