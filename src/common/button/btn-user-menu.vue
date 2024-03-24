<script setup lang="ts">
// 引入状态管理
import { userStore } from "@store/user.ts";
// 引入SVG图标
import IconUser from "/src/assets/svg/user.svg";

// 引入接口函数
import { userLogin, userLogout, userToken } from "@api/user.ts";
import router from "@src/router";
const handleClick = async () => {
  const res = await userLogout();
  if (res["msg"] == "注销成功") {
    userStore().name = "";
    userStore().token = "";
    userStore().isLogin = false;
    ElMessage.success("注销成功");
  } else {
    ElMessage.error(res["msg"]);
  }
};
</script>

<template>
  <button class="flex h-12" type="button" @click="handleClick">
    <IconUser class="w-7 h-7 rounded-full" />
    <span class="font-bold grow overflow-hidden">{{
      userStore().name + "（点击注销）"
    }}</span>
  </button>
</template>

<style scoped lang="scss">
@import "../css/css-btn";
</style>
