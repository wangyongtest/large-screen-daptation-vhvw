import { createApp } from "vue";
import "@/assets/css/index.css";
import "@/assets/css/normalize.css";
// import { bind, unbind } from "@/directives/elementResize.ts";
import registerDirectives from "@/directives/index.ts";
// 这里可以挂载全局的字体大小计算，也可在使用地方引入
import { fitChartSize } from "@/utils/globalFontSize.ts";
import App from "./App.vue";
const app = createApp(App);
app.config.globalProperties.$fitChartSize = fitChartSize;
registerDirectives(app);
app.mount("#app");
