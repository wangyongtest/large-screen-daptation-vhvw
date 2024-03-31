<!--
 * @Author: wy
 * @Date: 2024-03-21 22:19:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-31 12:26:30
 * @Description: 描述
-->

<template>
  <section class="rightHinge" ref="rightHinge">
    <block-com>
      <template v-slot:blockCtx>
        <scroll-table :header-data="headerData" :table-data="tableData" />
      </template>
    </block-com>
    <block-com />
    <block-com />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { pxToVw } from "@/utils/selfAdaption.ts";
// todo: 子组件
import BlockCom from "@/components/common/blocks/block.vue";
import ScrollTable from "@/components/common/scrollTable/scrollTable.vue";
// todo: hooks动画
import { useAnime } from "@/hooks/animate.ts";
const { animeIntoRight } = useAnime();

// todo：数据
const headerData = ref(["序号", "设备列别", "报警数", "故障数"]);
const tableData = ref<
  Array<{
    id: string;
    type: number;
    deviceType: string;
    alarmNum: number;
    faultNum: number;
  }>
>([]);

const rightHinge = ref();
onMounted(() => {
  animeIntoRight(rightHinge.value, 2000, [-30, pxToVw(32)], "easeInOutSine");

  for (let i = 0; i < 30; i++) {
    tableData.value.push({
      id: `${i + 1}`,
      type: 11,
      deviceType: "设备类型",
      alarmNum: 22,
      faultNum: 33,
    });
  }
});
</script>

<style lang="less" scoped>
.rightHinge {
  .px2vw(width, 440);
  .px2vh(height, 960);
  .px2vh(top, 100);
  // .px2vw(right, 32);
  position: absolute;
  box-sizing: border-box;
  z-index: 1;
  border: 1px solid red;
}
</style>
