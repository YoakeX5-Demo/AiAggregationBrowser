<script lang="ts" setup>
import { BtnB } from "../../components/button";
</script>

<template>
  <!--侧边栏中部内容-->
  <div>
    <!--今日-->
    <div class="flex flex-col">
      <span class="text-xs p-2 gap-2 whitespace-nowrap text-stone-600"
        >今日</span
      >
      <btn-b />
      <btn-b />
    </div>
    <br />
    <!--往日-->
    <div class="flex flex-col">
      <div class="text-xs p-2 gap-2 whitespace-nowrap text-stone-600">过去</div>
      <btn-b />
      <btn-b />
    </div>
  </div>
</template>
