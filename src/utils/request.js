import axios from "axios";
const request = axios.create({
    baseURL: "/",
    timeout: 40000,
    headers: {
        "Content-Type": "application/json;charset:utf-8",
    },
    withCredentials: true,
});
request.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    if (localStorage.getItem("token")) {
        config.headers.token = localStorage.getItem("token") || "";
    }
    return config;
});
request.interceptors.response.use((res) => {
    const code = res.status;
    console.log("res", res.data);
    if (code != 200) {
        ElMessage.error(res.data.msg);
        return Promise.reject(res.data);
    }
    return res.data;
}, (err) => {
    ElMessage.error("服务异常: " + err["message"]);
});
export default request;
