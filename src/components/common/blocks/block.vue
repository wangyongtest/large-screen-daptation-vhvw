<template>
  <section class="block">
    <!--  todo: 1、可能会存在名称(blockHeader)  2、可能存在下拉组件(selectOptions),注意下啦数据统一转成[{label:'',value:''}]  3、可能存在时间控件(timeStr,timeType) -->
    <block-header :block-title="blockTitle" />
    <section class="block-content">
      <slot name="blockCtx" />
    </section>
  </section>
</template>

<script setup lang="ts">
import BlockHeader from "./blockHeader.vue";
defineProps({
  blockHeader: {
    type: String,
    required: false,
  },
  blockTitle: {
    type: String,
    required: false,
  },
});
</script>

<style lang="less" scoped>
.block {
  .px2vw(width,440);
  .px2vh(height,312);
  .px2vh(margin-top,12);
  box-sizing: border-box;
  border: 1px solid red;
  .block-content {
    .px2vw(width,440);
    .px2vh(height, 280);
    box-sizing: border-box;
    border: 1px solid red;
  }
}
.block:nth-child(1) {
  .px2vh(margin-top,0);
}
</style>
