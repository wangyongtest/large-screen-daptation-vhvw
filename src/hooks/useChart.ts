/*
 * @Author: wy
 * @Date: 2024-03-23 14:49:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-25 20:51:55
 * @Description: 描述
 */
import { Ref, shallowRef, unref, onBeforeUnmount } from "vue";

import echarts from "@/components/common/baseEcharts/echartsConfig.ts";

export type EChartsCoreOption = echarts.EChartsCoreOption;

export const useEChart = (
  elRef: Ref<HTMLDivElement>,
  options: EChartsCoreOption
) => {
  const charts = shallowRef<echarts.ECharts>();

  const setOptions = (options: EChartsCoreOption) => {
    options = options;
    charts.value && charts.value.setOption(options, true);
  };

  //   初始化
  const initCharts = (themeColor?: Array<string>) => {
    const el = unref(elRef);
    if (!el || !unref(el)) return;
    charts.value = echarts.init(el);
    window.addEventListener("resize", resize);
    if (themeColor) {
      options.color = themeColor;
    }
    setOptions(options);
  };

  //   窗口变化时重新计算
  const resize = () => {
    console.log("resize", charts.value);

    charts.value && charts.value.resize();
  };

  //   组件销毁前取消监听
  onBeforeUnmount(() => {
    charts.value?.dispose();
    window.removeEventListener("resize", resize);
  });

  return {
    initCharts,
    setOptions,
    resize,
  };
};
