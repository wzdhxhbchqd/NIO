import router from "@/router";  // 导入 Vue Router 实例
import axios from "axios";  // 导入 axios
import { showToast } from "vant";  // 导入 vant 组件中的 showToast 方法

axios.defaults.baseURL = "http://localhost:3000";  // 设置 axios 的默认请求基础地址为 localhost:3000

axios.defaults.headers.post["Content-Type"] = "application/json";  // 设置 axios 发送 POST 请求时的默认 Content-Type 为 application/json

// 请求拦截器
axios.interceptors.request.use((req) => {
  let jwtToken = localStorage.getItem("token");  // 从 localStorage 中获取 token
  if (jwtToken) {
    req.headers.Authorization = jwtToken;  // 如果存在 token，则将 Authorization 头部添加到请求中
  }

  return req;  // 返回请求对象
});

// 响应拦截器
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {  // 如果响应状态码不是 200
    showToast("服务器异常");  // 使用 vant 的 showToast 方法显示提示信息“服务器异常”
    return Promise.reject(res);  // 返回一个带有拒绝原因的 Promise
  } else {
    if (res.data.status === 401) {  // 如果响应数据的状态码为 401
      showToast("登录过期，请重新登录");  // 使用 vant 的 showToast 方法显示提示信息“登录过期，请重新登录”
      router.push("/login");  // 跳转至登录页面
      return Promise.reject(res);  // 返回一个带有拒绝原因的 Promise
    }

    if (res.data.code !== "8000") {  // 如果响应数据的 code 不等于 "8000"
      showToast(res.data.msg);  // 使用 vant 的 showToast 方法显示响应数据中的 msg
      return Promise.reject(res);  // 返回一个带有拒绝原因的 Promise
    }
  }
  return res.data;  // 返回响应数据
});

export default axios;  // 导出 axios 实例