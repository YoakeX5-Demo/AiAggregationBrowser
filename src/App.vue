<script lang="ts" setup>
import AppHome from "./views/home/home-index.vue";
import Test from "./views/test/test-index.vue";

// 暗黑模式
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
  const is_dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setDark(is_dark);
});
const mediaQueryList = matchMedia("(prefers-color-scheme: dark)");
mediaQueryList.addEventListener("change", (evt) => {
  const theme = evt.matches ? "dark" : "light";
  setDark(theme === "dark");
});
</script>

<template>
  <div class="flex h-full w-full">
    <!--主页-->
    <AppHome />
    <Test />
  </div>
</template>
