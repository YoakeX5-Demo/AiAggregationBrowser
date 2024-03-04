import request from "../request.ts";

export const getResponseChatGLM = (input: string) => {
  return request({
    url: "/ai/getResponse?aiSelect=0&problem=" + input,
    method: "post",
    data: {},
  });
};

export const getResponseChatGPT = (input: string) => {
  return request({
    // url: "https://ngedlktfticp.cloud.sealos.io/v1/chat/completions",
    url: "/ai/getResponse?aiSelect=1&problem=" + input,
    method: "post",
    data: {},
  });
};
export const getResponseStableDiffusion = (input: string) => {
  return request({
    url: "/ai/getResponse?aiSelect=3&problem=" + input,
    method: "post",
    data: {},
  });
};
