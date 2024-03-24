import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// pinia 状态管理
import { createPinia } from "pinia";

// pinia 状态管理持久化存储
import { createPersistedState } from "pinia-plugin-persistedstate";

// router 路由管理
import router from "./router";

// UNOCSS 原子化CSS
import "virtual:uno.css";

// element-plus 饿了么UI-黑暗模式
import "element-plus/theme-chalk/dark/css-vars.css";

// axios 接口请求
import axios from "axios";
import VueAxios from "vue-axios";

// mockjs 模拟接口
// import "./utils/mock/index";

const pinia = createPinia();
pinia.use(
  createPersistedState({
    auto: true, //	该配置将会使所有 Store 持久化存储，且必须配置 persist: false 显式禁用持久化。
    // storage: sessionStorage, //	默认持久化存储方式 修改为 sessionStorage
  }),
);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.mount("#app");
