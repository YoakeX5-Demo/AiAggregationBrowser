import { createRouter, createWebHashHistory } from "vue-router";
import LoginIndex from "@src/views/login/login-index.vue";
import RegIndex from "@src/views/reg/reg-index.vue";
import HomeIndex from "@src/views/home/home-index.vue";
import TestIndex from "@src/views/test/test-index.vue";

const routes = [
  // 设置根目录跳转重定向
  {
    path: "/",
    name: "default",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录页" },
    component: LoginIndex,
  },
  {
    path: "/register",
    name: "register",
    meta: { title: "注册页" },
    component: RegIndex,
  },
  {
    path: "/home",
    name: "home",
    meta: { title: "主页" },
    component: HomeIndex,
  },
  {
    path: "/test",
    name: "test",
    meta: { title: "测试页" },
    component: TestIndex,
  },

  // 设置全路由兜底配置，一般用户错误页面
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: { title: "404" },
    component: () => import("@src/common/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
