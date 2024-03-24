// 侧边栏开关状态
export const viewStore = defineStore({
  id: "viewStore",
  state: () => ({
    closed: false,
    active: false,
  }),
});
