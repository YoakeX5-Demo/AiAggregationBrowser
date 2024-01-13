import request from "../../request.ts";
// @/api/test.ts
interface loginData {
  userName: string;
  password: string;
}

export const login = (data: loginData) => {
  request({
    url: "/login",
    method: "post",
    data,
  }).then((r) => {
    console.log(r);
  });
};
