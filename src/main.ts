import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// UNOCSS
import "virtual:uno.css";

// 饿了么UI黑暗模式
import "element-plus/theme-chalk/dark/css-vars.css";

// pinia 状态管理
import { createPinia } from "pinia";

// axios 接口请求
import axios from "axios";
import VueAxios from "vue-axios";

// mockjs 模拟接口
import "./utils/mock/index";

const app = createApp(App);
app.use(VueAxios, axios);
app.use(createPinia());
app.mount("#app");
