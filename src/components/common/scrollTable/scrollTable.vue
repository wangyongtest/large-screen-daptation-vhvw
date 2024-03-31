<template>
  <section
    class="scrollTable"
    ref="scrollTable"
    :style="{ width: width, height: height }"
  >
    <section
      class="scrollTable-header"
      :style="{
        'grid-template-columns': setCellStyle,
      }"
    >
      <span
        class="scrollTable-row__cell"
        v-for="headerItem in headerData"
        :key="headerItem"
      >
        {{ headerItem }}
      </span>
    </section>

    <section class="scrollTable-body">
      <section class="scrollTable-body-content">
        <section
          class="scrollTable-body-content-row"
          :style="{ 'grid-template-columns': setCellStyle }"
          v-for="(row, rowIndex) in tableData"
          :key="rowIndex"
        >
          <span class="scrollTable-row__cell">{{ row.id }}</span>
          <span class="scrollTable-row__cell">{{ row.deviceType }}</span>
          <span class="scrollTable-row__cell">{{ row.alarmNum }}</span>
          <span class="scrollTable-row__cell">{{ row.faultNum }}</span>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, PropType, onMounted, nextTick } from "vue";

interface ITableData {
  id: string;
  type: number;
  deviceType: string;
  alarmNum: number;
  faultNum: number;
}
const props = defineProps({
  width: {
    type: String,
    required: false,
    default: "100%",
  },
  height: {
    type: String,
    required: false,
    default: "100%",
  },
  headerData: {
    type: Array as PropType<string[]>,
    required: true,
  },
  tableData: {
    type: Array as PropType<ITableData[]>,
    required: true,
    default: () => [],
  },
  cellStyle: {
    type: String,
    required: false,
  },
});

const setCellStyle = computed(() => {
  if (props.cellStyle) {
    return props.cellStyle;
  } else {
    return `repeat(${props.headerData.length},1fr)`;
  }
});

// todo:当前滚动到哪一行
// const currentIndex = ref(0);
// const startIndex = ref(0);
// const endIndex = ref(20);
const scrollTop = ref(0);
// 这里定义每一行高度为 32
// const rowHeight = 32;

const tableScrollInterVal = ref();

const scrollTable = () => {
  const parentDom = document.querySelector(".scrollTable-body");
  const scrollDom = document.querySelector(".scrollTable-body-content");
  if (parentDom && scrollDom) {
    const parentDomClientHeight = parentDom?.clientHeight;
    const scrollDomClientHeight = scrollDom?.clientHeight;
    // console.log(parentDomClientHeight, scrollDomClientHeight);
    // 滚出的高度 + 当前科室区域 >= 列表高度，已经到底
    tableScrollInterVal.value = setInterval(() => {
      if (
        parentDomClientHeight + Math.abs(scrollTop.value) <=
        scrollDomClientHeight
      ) {
        scrollTop.value += 1;
        // console.log(" scrollTop.value", scrollTop.value);
      } else {
        scrollTop.value = 0;
      }
      parentDom.scrollTo(0, scrollTop.value);
    }, 100);

    parentDom.addEventListener("mouseenter", () => {
      window.clearInterval(tableScrollInterVal.value);
    });

    parentDom.addEventListener("mousemove", () => {
      window.clearInterval(tableScrollInterVal.value);
    });

    parentDom.addEventListener("mouseleave", () => {
      if (tableScrollInterVal.value) clearInterval(tableScrollInterVal.value);
      scrollTable();
    });
  }
};

onMounted(() => {
  nextTick(() => {
    scrollTable();
  });
});
</script>

<style lang="less" scoped>
.scrollTable {
  width: 100%;
  height: 100%;
  .scrollTable-header {
    width: 100%;
    .px2vh(height,32);
    .px2vh(line-height,32);
    .px2font(14);
    box-sizing: border-box;
    display: grid;
    // grid-template-columns: repeat(4, 1fr);
  }
  .scrollTable-body {
    width: 100%;
    height: calc(100% - 32px);
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    .scrollTable-body-content {
      width: 100%;
      position: absolute;
      .scrollTable-body-content-row {
        .px2vh(height,32);
        .px2vh(line-height,32);
        display: grid;
        // border: 1px solid red;
        // grid-template-columns: repeat(4, 1fr);
      }
    }
  }
  .scrollTable-body::-webkit-scrollbar {
    display: none;
  }
  .scrollTable-row__cell {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
</style>
