import axios from "axios";
enum MSGS {
  "操作成功" = 200,
  "密码错误",
  "账号错误",
  "请求异常",
}
const request = axios.create({
  baseURL: "/",
  // baseURL: "/mock",
  timeout: 40000,
  headers: {
    "Content-Type": "application/json;charset:utf-8",
  },
  withCredentials: true,
});
// 请求拦截器
request.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  if (localStorage.getItem("token")) {
    config.headers.token = localStorage.getItem("token") || "";
  }
  return config;
});
// 响应拦截器
request.interceptors.response.use(
  (res) => {
    // console.log(res);
    const code: number = res.data.code;
    if (code === 200) {
      console.log(MSGS[code]);
      window.alert(MSGS[code]);
      // return Promise.reject(res.data)
    }
    return res.data;
  },
  (err) => {
    console.log(err, "请求失败");
    window.alert("请求失败（GPT外网连接可能不稳定）");
  },
);
export default request;
