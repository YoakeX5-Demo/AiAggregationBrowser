<script setup lang="ts">
import { ContentHeader, ContentContent, ContentFooter } from "./content";
</script>

<template>
  <div class="flex flex-col">
    <content-header class="flex p-1 px-3" />
    <content-content class="flex flex-1" />
    <content-footer class="flex h-19 p-5" />
  </div>
</template>
