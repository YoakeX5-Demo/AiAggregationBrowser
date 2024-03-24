// AI状态
export const aiStore = defineStore({
  id: "aiStore",
  state: () => ({
    itemId: 0, // 集合选择
    aiId: 1, // AI选择
    confirm: false, // 确定AI
    problem: "你好", // AI问题
    response: "你好！很高兴和您交流。有什么问题或者需要帮助的地方吗？", // AI回答
  }),
});
