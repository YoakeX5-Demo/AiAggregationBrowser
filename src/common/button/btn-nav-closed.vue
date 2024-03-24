<script lang="ts" setup>
// 引入状态管理
import { viewStore } from "@store/view.ts";

// 处理侧边栏状态
const navClosed = storeToRefs(viewStore()).closed;
const navClosedActive = storeToRefs(viewStore()).active;

// 处理气泡框文本
const popoverText = computed(() => {
  return navClosed.value ? "打开侧边" : "关闭侧边";
});
</script>

<template>
  <!--气泡框Popover-->
  <el-popover
    ref="popover"
    value=""
    :hide-after="0"
    :width="75"
    placement="right"
    popper-style="padding: 0.5rem;min-width: 0rem;"
    transition="none"
  >
    {{ popoverText }}
    <template #reference>
      <button
        class="absolute -right-8 w-8 h-18 flex flex-col justify-center items-center group opacity-50 dark:opacity-20 hover:opacity-100"
        @mouseenter="navClosedActive = true"
        @mouseleave="navClosedActive = false"
        @mouseup="navClosed = !navClosed"
      >
        <span
          :class="{
            'group-hover:-rotate-15': navClosed,
            'group-hover:rotate-15': !navClosed,
          }"
          class="w-0.9 h-3 rounded-full -m-0.6 dark:bg-stone-1 bg-zinc-8 transition"
        />
        <span
          :class="{
            'group-hover:rotate-15': navClosed,
            'group-hover:-rotate-15': !navClosed,
          }"
          class="w-0.9 h-3 rounded-full -m-0.6 dark:bg-stone-1 bg-zinc-8 transition"
        />
      </button>
    </template>
  </el-popover>
</template>
