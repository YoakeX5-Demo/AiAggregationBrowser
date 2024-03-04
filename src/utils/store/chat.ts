// GPT选择状态
export const storeChat = defineStore("storeChat", {
  state: () => {
    return {
      select: "1",
    };
  },
  getters: {},
  actions: {},
});
// 学生问题
export const userProblem = defineStore("userProblem", {
  state: () => {
    return {
      problem: "",
    };
  },
  getters: {},
  actions: {},
});
// GPT回答内容
export const gptResponse = defineStore("gptResponse", {
  state: () => {
    return {
      response: "",
    };
  },
  getters: {},
  actions: {},
});
