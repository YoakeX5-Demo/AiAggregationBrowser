<script setup lang="ts">
// 引入状态管理
import { aiStore } from "@store/ai.ts";
import { Ref } from "vue";

// 选项
const options = [
  {
    value: 0,
    label: "ChatGLM（聊天）[本地]",
  },
  {
    value: 1,
    label: "ChatGPT（代码）[在线]",
  },
  {
    value: 2,
    label: "文心一言（写作）[申请中]",
  },
  {
    value: 3,
    label: "Stable Diffusion（绘画）[本地]",
  },
];

// 用户选择 ： "0", "1", "2", "3"
const select: Ref<number> = storeToRefs(aiStore()).aiId;
</script>

<template>
  <div class="h-15 w-55">
    <el-select v-model="select" class="m-2" size="large">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="aiStore().confirm"
      />
    </el-select>
  </div>
</template>
