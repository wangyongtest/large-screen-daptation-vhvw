<!--
 * @Author: wy
 * @Date: 2024-03-23 15:21:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-24 17:12:12
 * @Description: 描述
-->
<template>
  <section :style="{ width: width, height: height }" ref="echartRef"></section>
</template>

<script setup lang="ts">
import { EChartsCoreOption, useEChart } from "@/hooks/useChart.ts";
import { ref, watch, PropType } from "vue";

const props = defineProps({
  options: {
    type: Object as PropType<EChartsCoreOption>,
    required: true,
  },
  height: {
    type: String,
    default: "100%",
  },
  width: {
    type: String,
    default: "100%",
  },
  themeColors: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});

const echartRef = ref();

watch(
  () => [props.options, echartRef.value],
  ([optionVal, domVal]) => {
    const { initCharts, setOptions } = useEChart(echartRef, props.options);
    let targetOptions: EChartsCoreOption = {};
    if (optionVal && Reflect.ownKeys(optionVal).length && domVal) {
      console.log(optionVal, "optionVal");

      if (props.themeColors && props.themeColors.length > 0) {
        targetOptions = { ...optionVal };
        targetOptions.color = props.themeColors;
      } else {
        targetOptions = { ...optionVal };
      }
      setOptions(targetOptions);
      initCharts();
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>
