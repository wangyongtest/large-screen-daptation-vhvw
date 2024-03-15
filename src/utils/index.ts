/**
 *
 * @param {*} func 节流函数
 * @param {*} wait 等待时长（毫秒）
 * @param {*} immediate 是否先立即触发一次
 * @returns
 */

export const throttle = (func: Function, wait = 300, immediate = false) => {
  let last: number;
  let timer: number;
  return function (...arg: any[]) {
    const now = +new Date();

    if (last && now < last + wait) {
      clearTimeout(timer);
      timer = window.setTimeout(function () {
        func.apply(null, arg);
      }, wait); //停止触发 后wait毫秒立即执行
    } else {
      if (!immediate) {
        if (last) {
          func.apply(null, arg);
        }
      } else {
        func.apply(null, arg);
      }
      last = now;
    }
  };
};
