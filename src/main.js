import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import router from "./router";
import "virtual:uno.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import axios from "axios";
import VueAxios from "vue-axios";
const pinia = createPinia();
pinia.use(createPersistedState({
    auto: true,
}));
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.mount("#app");
