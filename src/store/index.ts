import { getStorage } from './../base/utils';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    portalUserInfo: getStorage('reportUserInfo') || null, //用户信息
    Progress: '0%', //上传进度
    articsInfo: null, //点击header里面的文章信息
    baseUrl: ''
  },
  mutations: {},
  actions: {},
  modules: {}
});
