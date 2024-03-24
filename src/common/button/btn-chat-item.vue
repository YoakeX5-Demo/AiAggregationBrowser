<script setup lang="ts">
// 引入SVG图标
import IconMenu from "/src/assets/svg/menu.svg";
</script>

<template>
  <button class="flex h-9" type="button">
    <slot></slot>
    <IconMenu class="w-6 ml-auto" />
  </button>
</template>

<style scoped lang="scss">
@import "../css/css-btn";
</style>
