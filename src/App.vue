<!--
 * @Author: wy
 * @Date: 2024-03-21 22:06:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-31 13:01:45
 * @Description: 描述
-->
<template>
  <section class="layoutRoot">
    <!-- GIS dom节点 -->
    <section class="gisDom"></section>
    <!-- 浮动页面布局组件 -->
    <header-com />
    <left-hinge />
    <right-hinge />
    <bottom-hinge />
  </section>
</template>
<script setup lang="ts">
import LeftHinge from "@/components/layout/leftHinge.vue";
import RightHinge from "@/components/layout/rightHinge.vue";
import HeaderCom from "@/components/layout/header.vue";
import BottomHinge from "@/components/layout/bottomHinge.vue";
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
.layoutRoot {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .gisDom {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: #ccc;
  }
}
</style>
