// 用户状态
export const userStore = defineStore({
  id: "userStore",
  state: () => ({
    name: "", // 用户名
    token: "", // 用户Token
    isLogin: false, // 用户登录
    chatHistorical: {}, // 聊天历史
  }),
});
