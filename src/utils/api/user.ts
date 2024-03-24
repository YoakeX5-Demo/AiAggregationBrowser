import request from "../request.ts";

export const userRegister = (userName: string, userPwd: string) => {
  return request({
    url: "/user/register",
    method: "post",
    params: {
      userName: userName,
      userPwd: userPwd,
    },
  });
};

export const userLogin = (userName: string, userPwd: string) => {
  return request({
    url: "/user/login",
    method: "post",
    params: {
      userName: userName,
      userPwd: userPwd,
    },
  });
};
export const userIsLogin = () => {
  return request({
    url: "/user/isLogin",
    method: "post",
  });
};
export const userLogout = () => {
  return request({
    url: "/user/logout",
    method: "post",
  });
};
export const userToken = () => {
  return request({
    url: "/user/token",
    method: "post",
  });
};
export const userChatHistorical = () => {
  return request({
    url: "/user/chatHistorical",
    method: "post",
  });
};
