import request from "../request.ts";
export const aiResponseChatGLM = (itemId, problem) => {
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
export const aiResponseChatGPT = (itemId, problem) => {
    return request({
        url: "/ai/getResponse",
        method: "post",
        params: {
            aiId: 1,
            itemId: itemId,
            problem: problem,
        },
    });
};
export const aiResponseERNIE = (itemId, problem) => {
    return request({
        url: "/ai/getResponse",
        method: "post",
        params: {
            aiId: 2,
            itemId: itemId,
            problem: problem,
        },
    });
};
export const aiResponseStableDiffusion = (itemId, problem) => {
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
