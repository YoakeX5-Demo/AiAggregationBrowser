import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// pinia 状态管理
import { createPinia } from "pinia";

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

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(VueAxios, axios);
app.mount("#app");
