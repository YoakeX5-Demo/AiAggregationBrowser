<script lang="ts" setup>
import { Content, Nav } from "./layout";
</script>

<template>
  <div class="flex h-full w-full">
    <!--左侧侧边栏布局-->
    <Nav class="flex" />
    <!--右侧内容布局-->
    <Content class="flex w-full" />
  </div>
</template>
