// todo: 引入 echarts 核心模块，核心模块提供 echarts 使用必须要的接口
import * as echarts from "echarts/core";

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  LegendComponent,
  RadarComponent,
  ToolboxComponent,
  DataZoomComponent,
  DatasetComponent, // todo: 数据集组件
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  GraphicComponent,
  TransformComponent, // todo:数据转化器组件 （filter,sort）
} from "echarts/components";

// todo: 引入渲染器：echarts 默认使用Canvas渲染， 引入 canvasRenderer 或 svgRenderer (必须)
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";

// todo:标签自动布局、全局过度动画特性
import { LabelLayout, UniversalTransition } from "echarts/features";

// todo:引入图表类型， 后缀都为 Chart
import {
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,
  PictorialBarChart,
} from "echarts/charts";

// 注册必须的组件
echarts.use([
  // TODO:内置组件
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  LegendComponent,
  RadarComponent,
  ToolboxComponent,
  DataZoomComponent,
  DatasetComponent, // todo: 数据集组件
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  GraphicComponent,
  TransformComponent, // todo:数据转化器组件 （filter,sort）
  //   TODO：渲染器
  CanvasRenderer,
  SVGRenderer,
  //   TODO:特性
  LabelLayout,
  UniversalTransition,
  //   TODO:图表
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,
  PictorialBarChart,
]);

export default echarts;
