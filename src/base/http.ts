import { Message } from 'element-ui';
import { clearStorage } from '@/base/utils';
import axios from 'axios';
import store from '../store/index';
import Router from '../router/index';
// base--设置网址
let baseUrl = '';
// base--设置window
let WIN: any = window;
// base--设置基础用户信息配置
let configJson: any = WIN.ConfigData;
// ajax--设置请求头
const headers = { 'Content-Type': 'application/json' };
// message--设置弹窗实例
let messageInstance: any = null;
// axios--获取环境配置
axios.defaults.baseURL = baseUrl;
// base--配置环境
if (process.env.NODE_ENV === 'development') {
  if (configJson.TestBaseUrl) {
    baseUrl = configJson.TestBaseUrl;
  }
  baseUrl += configJson.content;
}
// Vuex--用户信息
setTimeout(() => {
  store.commit('setBaseUrl', baseUrl);
});
// message--拦截器弹窗
let axiosMessage: any = function AlertMessage(options: any) {
  if (messageInstance) {
    messageInstance.close();
  }
  messageInstance = Message(options);
};
let axiosMessageArr = ['success', 'warning', 'info', 'error'];
axiosMessageArr.forEach(function(type) {
  axiosMessage[type] = function(options: any) {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return axiosMessage(options);
  };
});
// axios--请求拦截器
axios.interceptors.request.use(
  (config: any) => {
    if (config.method === 'get') {
      config.params = {
        _t: Date.parse(new Date().toString()) / 1000,
        ...config.params
      };
    }
    let token = '';
    if (store.state.portalUserInfo && !config.headers['cc-r-token']) {
      config.headers['cc-r-token'] = store.state.portalUserInfo.token;
      token = store.state.portalUserInfo.token;
    }
    //以下只是做IE9的token兼容处理
    let browser = navigator.appName;
    let browserVersion = navigator.appVersion;
    if (browserVersion.indexOf(';') < 0) {
      return config;
    }
    let version = browserVersion.split(';');
    let trimVersion = version[1].replace(/[ ]/g, '');
    if (browser == 'Microsoft Internet Explorer' && trimVersion == 'MSIE9.0') {
      if (config.url.indexOf('?') > 0) {
        config.url = config.url + '&token=' + JSON.parse(token).value;
      } else {
        config.url = config.url + '?token=' + JSON.parse(token).value;
      }
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
// axios--响应拦截器
axios.interceptors.response.use(
  (response: any) => {
    if (
      response.data &&
      (response.data.code === 30002 || response.data.code === 30003)
    ) {
      axiosMessage.error(response.data.msg);
      clearStorage('reportUserInfo');
      Router.push({ path: '/login' }).catch(err => {
        err;
      });
    } else if (
      response.data &&
      response.data.code !== 0 &&
      response.data.code
    ) {
      axiosMessage.error(response.data.msg || '请求错误');
    }
    return response.data;
  },
  (error: any) => {
    return Promise.resolve(error.response);
  }
);
// ajax
export default {
  post(url: string, data: any): any {
    return axios({
      method: 'post',
      url,
      data,
      timeout: 20000,
      headers
    })
      .then(res => {
        return res;
      })
      .catch(res => {
        return res;
      });
  },
  get(url: string, params: any): any {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 20000,
      headers
    })
      .then((res: any) => {
        return res;
      })
      .catch((res: any) => {
        return res;
      });
  },
  formdataPost(url: string, data: any, file: any): any {
    return axios({
      method: 'post',
      url,
      data,
      onUploadProgress: ProgressEvent => {
        let progressPercent = 0;
        let progressLoaded = ProgressEvent.loaded || 1;
        let progressTotal = ProgressEvent.total || 1;
        progressPercent = Math.round((progressLoaded / progressTotal) * 100);
        store.commit('setProgress', progressPercent.toString().concat('%'));
      }
    })
      .then((response: any) => {
        return response;
      })
      .catch((res: any) => {
        return res;
      });
  },
  delete(url: string, params: any): any {
    return axios({
      method: 'delete',
      url,
      params,
      timeout: 20000
    })
      .then((res: any) => {
        return res;
      })
      .catch((res: any) => {
        return res;
      });
  },
  put(url: string, data: any): any {
    return axios({
      method: 'put',
      url,
      data,
      timeout: 20000
    })
      .then((res: any) => {
        return res;
      })
      .catch((res: any) => {
        return res;
      });
  },
  baseUrl
};
