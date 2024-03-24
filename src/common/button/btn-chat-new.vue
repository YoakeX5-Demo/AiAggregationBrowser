<script setup lang="ts">
// 引入SVG图标
import IconLogo from "/src/assets/svg/logo.svg";
import IconEdit from "/src/assets/svg/edit.svg";
import { aiStore } from "@store/ai.ts";
import { userStore } from "@store/user.ts";

// 更新状态
const updateStore = () => {
  // 处理数据
  const data = userStore().chatHistorical["data"] as Array<number>;
  // 创建一个 Set 来存储不重复的 item_id 值
  const maxItemId = Math.max(...data.map((item) => item["item_id"]));
  aiStore().itemId = maxItemId + 1;
  aiStore().aiId = 1;
  aiStore().confirm = false;
};
</script>

<template>
  <button class="flex h-10" type="button" @click="updateStore">
    <IconLogo class="h-7 w-7" />
    <span class="font-bold grow overflow-hidden">新会话</span>
    <IconEdit class="h-6 w-6 ml-auto" />
  </button>
</template>

<style scoped lang="scss">
@import "../css/css-btn";
</style>
