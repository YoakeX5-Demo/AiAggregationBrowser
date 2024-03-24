export const userStore = defineStore({
    id: "userStore",
    state: () => ({
        name: "",
        token: "",
        isLogin: false,
        chatHistorical: {},
    }),
});
