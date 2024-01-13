<script setup lang="ts">
import { getResponse } from "@api/gpt.ts";

const input = ref("");
</script>
<template>
  <el-input
    v-model="input"
    placeholder="输入你的问题..."
    @keyup.enter="getResponse('你好')"
  >
  </el-input>
</template>
