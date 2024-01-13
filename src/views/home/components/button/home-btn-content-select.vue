<script setup lang="ts">
import { storeChat } from "../../../../utils/store/chat.ts";

// 选项
const options = [
  {
    value: "0",
    label: "ChatGLM（问答）",
  },
  {
    value: "1",
    label: "ChatGPT（问答）",
  },
  {
    value: "2",
    label: "文心一言（写作）",
  },
  {
    value: "3",
    label: "Stable Diffusion（绘画）",
  },
];

// 用户选择 ： "0", "1", "2", "3"
const select: Ref<string> = storeToRefs(storeChat()).select;
</script>

<template>
  <div class="h-15 w-50">
    <el-select v-model="select" class="m-2" size="large">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>
