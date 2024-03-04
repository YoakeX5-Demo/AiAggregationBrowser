<script setup lang="ts">
import { ContentHeader, ContentContent, ContentFooter } from "./content";
</script>

<template>
  <div class="flex flex-col">
    <content-header class="flex p-1 px-3" />
    <div class="flex flex-col h-full items-center">
      <content-content
        class="flex flex-col w-full flex-1 break-all gap-2"
        style="width: 60vw; max-width: 50rem"
      />
      <content-footer class="flex p-3" style="width: 60vw; max-width: 50rem" />
    </div>
  </div>
</template>
