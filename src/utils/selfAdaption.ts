// todo: 这里根据设计稿定义
const rootWidth = 1920;
const RootHeight = 1080;

export const pxToVw = (atrgetWidth: number) => {
  return `${(atrgetWidth / rootWidth) * 100}vw`;
};

export const pxToVh = (atrgetHeight: number) => {
  return `${(atrgetHeight / RootHeight) * 100}vh`;
};
