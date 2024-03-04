<script lang="ts" setup>
import { NavContent, NavFooter, NavHeader } from "./nav";
import { BtnNavClosed } from "../components/button";
import { storeNav } from "@store/view.ts";

// 侧边栏状态
const navClosedActive = storeToRefs(storeNav()).active;
const navClosed = storeToRefs(storeNav()).closed;
</script>

<template>
  <!--侧边栏框架-->
  <div class="flex items-center relative">
    <!--侧边栏-->
    <div
      :class="[
        { 'brightness-70': navClosedActive || navClosed },
        { 'w-40 sm:w-65': !navClosed },
        { 'w-0 px-0': navClosed },
        { 'w-0 px-0': navClosed },
      ]"
      class="h-full bg-slate-3 dark:bg-zinc-900 transition-all flex flex-col flex-1 box-border p-3 overflow-hidden"
    >
      <!--首部-->
      <nav-header class="flex flex-col" />
      <!--中部-->
      <nav-content class="flex flex-col h-full w-full overflow-y-auto" />
      <!--底部-->
      <nav-footer class="flex flex-col" />
    </div>
    <!--侧边栏收起按钮-->
    <btn-nav-closed />
  </div>
</template>
