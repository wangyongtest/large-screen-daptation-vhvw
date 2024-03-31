<template>
  <section class="pageHeader"></section>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.pageHeader {
  width: 100vw;
  .px2vh(height,90);
  left: 0;
  top: 0;
  z-index: 1;
  position: absolute;
  background-color: pink;
}
</style>
