<template>
  <section class="bottomHinge" ref="bottomHinge"></section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { pxToVw } from "@/utils/selfAdaption.ts";
import { useAnime } from "@/hooks/animate.ts";

const { animeIntoBottom } = useAnime();

const bottomHinge = ref();

onMounted(() => {
  animeIntoBottom(bottomHinge.value, 2000, [-30, pxToVw(20)], "easeInOutSine");
});
</script>

<style lang="less" scoped>
.bottomHinge {
  position: absolute;
  .px2vw(width,924);
  .px2vh(height,310);
  .px2vw(left,498);
  //   .px2vh(bottom,20);
  border: 1px solid red;
}
</style>
