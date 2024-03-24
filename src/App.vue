<script lang="ts" setup>
// 暗黑模式
import { userStore } from "@store/user.ts";
import { userChatHistorical } from "@api/user.ts";

function setDark(is_dark: boolean) {
  if (is_dark) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
}

onMounted(() => {
  const mediaQueryList = matchMedia("(prefers-color-scheme: dark)");
  setDark(mediaQueryList.matches);
  mediaQueryList.addEventListener("change", (evt) => {
    const theme = evt.matches ? "dark" : "light";
    setDark(theme === "dark");
  });
});
</script>

<template>
  <div class="flex h-full w-full">
    <!--路由出口-->
    <router-view></router-view>
  </div>
</template>
