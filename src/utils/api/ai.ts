import request from "../request.ts";

export const aiResponseChatGLM = (itemId: number, problem: string) => {
  return request({
    url: "/ai/getResponse",
    method: "post",
    params: {
      aiId: 0,
      itemId: itemId,
      problem: problem,
    },
  });
};

export const aiResponseChatGPT = (itemId: number, problem: string) => {
  return request({
    // url: "https://ngedlktfticp.cloud.sealos.io/v1/chat/completions",
    url: "/ai/getResponse",
    method: "post",
    params: {
      aiId: 1,
      itemId: itemId,
      problem: problem,
    },
  });
};
export const aiResponseERNIE = (itemId: number, problem: string) => {
  return request({
    // url: "https://ngedlktfticp.cloud.sealos.io/v1/chat/completions",
    url: "/ai/getResponse",
    method: "post",
    params: {
      aiId: 2,
      itemId: itemId,
      problem: problem,
    },
  });
};
export const aiResponseStableDiffusion = (itemId: number, problem: string) => {
  return request({
    url: "/ai/getResponse",
    method: "post",
    params: {
      aiId: 3,
      itemId: itemId,
      problem: problem,
    },
  });
};
