<script setup lang="ts">
import IconLogo from "/src/assets/svg/logo.svg";
import IconEdit from "/src/assets/svg/edit.svg";
</script>

<template>
  <button class="flex h-10" type="button">
    <IconLogo class="h-7 w-7" />
    <span class="font-bold grow overflow-hidden">新会话</span>
    <IconEdit class="h-6 w-6 ml-auto" />
  </button>
</template>

<style scoped lang="scss">
@import "style/home-btn-nav";
</style>
