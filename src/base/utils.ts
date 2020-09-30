// Storage--set
export const setStorage = function(key: string, obj: object | string) {
  if (typeof obj === 'string') {
    localStorage.setItem(key, obj);
  } else {
    localStorage.setItem(key, JSON.stringify(obj));
  }
};
// Storage--get
export const getStorage = function(key: string) {
  let val = localStorage.getItem(key);
  if (val) {
    try {
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  } else {
    return;
  }
};
// Storage--clear
export const clearStorage = function(key: string) {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
};
// Format--time
export const getFormatDate = function(date: any, type: string) {
  let time = new Date(date);
  let year = time.getFullYear();
  let month: any = time.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  let day: any = time.getDate();
  day = day < 10 ? '0' + day : day;
  let hour: any = time.getHours();
  hour = hour < 10 ? '0' + hour : hour;
  let minute: any = time.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  let second: any = time.getSeconds();
  second = second < 10 ? '0' + second : second;
  if (type === 'full' || !type)
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  else if (type === 'full-china')
    return `${year}年${month}月${day}日 ${hour}时${minute}分${second}秒`;
  else if (type === 'year') return `${year}-${month}-${day}`;
  else if (type === 'year/') return `${year}-${month}-${day}`.replace('-', '/');
  else if (type === 'year-china') return `${year}年${month}月${day}日`;
  else if (type === 'day') return `${hour}:${minute}:${second}`;
  else if (type === 'day/')
    return `${hour}:${minute}:${second}`.replace('-', '/');
  else if (type === 'day-china') return `${hour}时${minute}分${second}秒`;
};
// Format--data
export const getFormatData = function(formdata: any) {
  let options = new FormData();
  for (let key in formdata) {
    options.append(key, formdata[key]);
  }
  return options;
};
// getWeek
export const getWeek = function() {
  let time = new Date();
  let day = time.getDay();
  let weekArr = [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ];
  return weekArr[day];
};
// 判断手机号
export function isTelephone(val: any) {
  let isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
  let isMob = /^((\+?86)|(\(\+86\)))?(1[0-9]{10})$/;
  if (isMob.test(val) || isPhone.test(val)) {
    return true;
  } else {
    return false;
  }
}
// 判断邮箱
export const isEmail = function(data: any) {
  let result = false;
  let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.) {1,63}[a-z0-9]+$/;
  if (data && reg.test(data)) {
    result = true;
  }
  return result;
};
