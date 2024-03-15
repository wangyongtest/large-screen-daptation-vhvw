import * as ECharts from "echarts";
import { App } from "vue";
import elementResizeDetectorMaker from "element-resize-detector";
const HANDLER = "_vue_resize_handler";
export default function (app: App) {
  app.directive("chart-resize", {
    beforeMount(el: HTMLElement, binding: any) {
      console.log(el, "chartResize");
      el[HANDLER] = binding.value
        ? binding.value
        : () => {
            let chart = ECharts.getInstanceByDom(el);
            if (!chart) {
              return;
            }
            chart.resize();
          };
      // 监听绑定的div大小变化，更新 echarts 大小
      elementResizeDetectorMaker().listenTo(el, el[HANDLER]);
    },
    beforeUnmount(el: any) {
      // console.log("======>卸载之前");
      elementResizeDetectorMaker().removeListener(el, el[HANDLER]);
      delete el[HANDLER];
    },
  });
}
