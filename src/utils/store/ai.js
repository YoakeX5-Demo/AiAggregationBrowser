export const aiStore = defineStore({
    id: "aiStore",
    state: () => ({
        itemId: 0,
        aiId: 1,
        confirm: false,
        problem: "你好",
        response: "你好！很高兴和您交流。有什么问题或者需要帮助的地方吗？",
    }),
});
