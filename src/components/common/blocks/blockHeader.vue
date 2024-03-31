<template>
  <section class="blockHeader">
    <span class="blockHeader-title">{{ blockTitle }}</span>
  </section>
</template>

<script setup lang="ts">
import { PropType } from "vue";

interface IBlockHeaderSelect {
  label: string;
  value: string;
  children?: Array<IBlockHeaderSelect>;
}

// todo: 1、可能会存在名称  2、可能存在下拉组件  3、可能存在时间控件
defineProps({
  blockTitle: {
    type: String,
    required: false,
  },
  selectOptions: {
    type: Array as PropType<Array<IBlockHeaderSelect>>,
    required: false,
  },
  timeStr: {
    type: String,
    required: false,
  },
  timeType: {
    type: String,
    required: false,
  },
});
</script>
<style lang="less" scoped>
.blockHeader {
  .px2vw(width,440);
  .px2vh(height,32);
  .px2vh(line-height,32);
  box-sizing: border-box;
  border: 1px solid red;
  .blockHeader-title {
    display: block;
    .px2vw(width,220);
    .px2vh(height,32);
    .px2vh(line-height,32);
    .px2vw(text-indent,10);
    .px2font(14);
    font-weight: 700;
    border: 1px solid orange;
  }
}
</style>
