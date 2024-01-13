import request from "../request.ts";

export const getResponse = (input: string) => {
  return request({
    url: "/getResponse",
    method: "post",
    data: {
      prompt: input,
      history: [],
      max_length: 128,
      top_p: 0.7,
      temperature: 0.95,
    },
  });
};
