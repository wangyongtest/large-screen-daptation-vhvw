import anime from "animejs";
import { Ref, onMounted } from "vue";
// 参考 TS
// https://blog.csdn.net/weixin_42424283/article/details/129014389
// todo 示例
// https://animejs.com/documentation/#playPause

export type CssField =
  | "translateX"
  | "translateY"
  | "translateZ"
  | "rotate"
  | "rotateX"
  | "rotateY"
  | "rotateZ"
  | "scale"
  | "scaleX"
  | "scaleZ"
  | "scaleY"
  | "skew"
  | "skewX"
  | "skewY"
  | "perspective"
  | "matrix"
  | "matrix3d"
  | "opacity";

export type AnimateParams = {
  targets: Ref<HTMLElement | null>;
  duration?: number;
  delay?: number;
  endDelay?: number;
  elasticity?: number;
  round?: number;
  loop?: number;
  autoplay?: boolean;
  direction?: string;
  easing?: anime.EasingOptions;
} & {
  [key in CssField]?: any;
};

const EASING = "easeInOutQuad";

export type TranslateX = number | Array<string | number>;
export const useAnime = () => {
  // todo：从左侧滑入
  const animeIntoLeft = (
    targetDom: HTMLElement | null,
    duration: number = 2000,
    translateX?: TranslateX,
    easing?: anime.EasingOptions
  ) => {
    anime({
      targets: targetDom,
      left: translateX,
      easing: easing,
      duration: duration,
    });
  };
  // todo：从右侧滑入
  const animeIntoRight = (
    targetDom: HTMLElement | null,
    duration: number = 2000,
    translateX?: TranslateX,
    easing?: anime.EasingOptions
  ) => {
    anime({
      targets: targetDom,
      right: translateX,
      easing: easing,
      duration: duration,
    });
  };
  // todo:从底部滑入
  const animeIntoBottom = (
    targetDom: HTMLElement | null,
    duration: number = 2000,
    translateX?: TranslateX,
    easing?: anime.EasingOptions
  ) => {
    anime({
      targets: targetDom,
      bottom: translateX,
      easing: easing,
      duration: duration,
    });
  };

  return {
    animeIntoLeft,
    animeIntoRight,
    animeIntoBottom,
  };
};
