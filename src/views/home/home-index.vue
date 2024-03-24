<script lang="ts" setup>
// 引入按钮组件
import { Left, Right } from "./layout";
// 引入路由管理
import router from "@src/router";
// 引入接口函数
import { userChatHistorical, userIsLogin } from "@api/user.ts";
import { userStore } from "@store/user.ts";

// 处理载入
onMounted(async () => {
  // 判断用户是否登录
  let res = await userIsLogin();
  if (res["msg"] == "用户未登录") {
    await router.push("/login");
    userStore().isLogin = false;
    ElMessage.warning("请先登录");
  }
  // 更新数据
  userStore().chatHistorical = await userChatHistorical();
});
</script>

<template>
  <div class="flex h-full w-full">
    <!--左侧侧边栏布局-->
    <Left class="flex" />
    <!--右侧内容布局-->
    <Right class="flex w-full" />
  </div>
</template>
