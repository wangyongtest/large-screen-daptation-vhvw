<!--
 * @Author: wy
 * @Date: 2024-03-21 22:16:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-31 11:15:11
 * @Description: 描述
-->
<template>
  <section class="leftHinge" ref="leftHinge">
    <block-com :block-title="blockTitle">
      <template v-slot:blockCtx>
        <base-chart :options="options" />
      </template>
    </block-com>
    <block-com :block-title="blockTitle">
      <template v-slot:blockCtx>
        <base-chart :options="options" />
      </template>
    </block-com>
    <block-com :block-title="blockTitle">
      <template v-slot:blockCtx>
        <base-chart :options="options" />
      </template>
    </block-com>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { pxToVw } from "@/utils/selfAdaption.ts";
import BlockCom from "@/components/common/blocks/block.vue";
import BaseChart from "@/components/common/baseEcharts/baseChart.vue";
import { createOptions } from "./chart.ts";
const options = ref();
import { useAnime } from "@/hooks/animate.ts";
const { animeIntoLeft } = useAnime();

const leftHinge = ref(null);

onMounted(() => {
  options.value = createOptions();
  console.log(options.value);

  // todo:右侧动画
  animeIntoLeft(leftHinge.value, 2000, [-30, pxToVw(32)], "easeInOutSine");
});

const blockTitle = ref("独立式烟温感设备");
</script>

<style lang="less" scoped>
.leftHinge {
  .px2vw(width, 440);
  .px2vh(height, 960);
  .px2vh(top, 100);
  // .px2vw(left, 32);
  position: absolute;
  z-index: 1;
  border: 1px solid red;
}
</style>
