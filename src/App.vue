<template>
  <section class="parentRoot">
    <section class="layoutLeft">
      <section class="container">
        <section class="chartItem">
          <chart-com :chart-options="options" />
        </section>
        <section class="chartItem">
          <chart-com :chart-options="options" />
        </section>
        <section class="chartItem">
          <chart-com :chart-options="options" />
        </section>
      </section>
    </section>
    <section class="layoutCenter">
      <span v-test>
        11111111111111111111111111111111111111111111111111111111
      </span>
    </section>
    <section class="layoutRight">
      <section class="container">
        <section class="chartItem">
          <chart-com :chart-options="options" />
        </section>
        <section class="chartItem">
          <chart-com :chart-options="options" />
        </section>
        <section class="chartItem">
          <chart-com :chart-options="options" />
        </section>
      </section>
    </section>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { createOptions } from "./chart.ts";

let options = ref(createOptions());
console.log(options.value.title.textStyle, "111");
// console.log(options)
import ChartCom from "@/components/chartCommon.vue";
window.addEventListener("resize", () => {
  options.value = createOptions();
  console.log(options.value.title.textStyle, "222");
});
</script>
<style lang="less" scoped>
/**
 *直接使用 vw 和 vh 函数，将像素值传进去，得到的就是具体的 vw vh单位
 * 例
 */
// .box{
//     .px2vw(width, 300);
//     .px2vh(height, 100);
//     .px2font(16);
//     .px2vw(margin-left, 300);
//     .px2vh(margin-top, 100);
//     background-color: black;
// }
.parentRoot {
  width: 100%;
  height: 100%;
  background-color: pink;
  position: relative;
  .layoutLeft {
    // .px2vw(width,440);
    // .px2vh(height,312);
    position: absolute;
    left: 0;
    z-index: 1;
    .container {
      width: 100%;
      height: 100%;
      .px2vh(margin-top,90);
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      grid-row-gap: 10px;
      .chartItem {
        .px2vw(width,440);
        .px2vh(height,312);
        .px2font(14);
      }
    }
  }
  .layoutRight {
    position: absolute;
    right: 0;
    z-index: 1;

    .container {
      width: 100%;
      height: 100%;
      .px2vh(margin-top,90);
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      grid-row-gap: 10px;
      .chartItem {
        .px2vw(width,440);
        .px2vh(height,312);
        .px2font(14);
      }
    }
  }
  .layoutCenter {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #ccc;
  }
}
</style>
