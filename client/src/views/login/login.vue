<template>
    <div class="login">
      <h1>登录</h1>
      <div class="login-wrapper">
        <div class="avatar">
          <img
            src="@/pics/head.jpg"
          />
        </div>
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="username"
              name="username"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit">
              登录
            </van-button>
          </div>
        </van-form>
        <van-nav-bar left-arrow>
        <template #right>
            <span class="text-ts text-gray-400">遇到问题</span>
        </template>
      </van-nav-bar>
      </div>
      <p class="register" @click="() => router.push('/register')">
        新用户？点击这里注册
      </p>
    </div>
  </template>
  
  <script setup>
import { ref } from "vue"; // 引入 Vue 3 的 ref 函数，用于创建响应式变量
import axios from "@/api/index"; // 引入 Axios，用于发送 HTTP 请求
import { useRouter } from "vue-router"; // 引入 Vue Router 的 useRouter 函数，用于获取路由实例
import { showSuccessToast } from "vant"; // 引入 Vant 的 showSuccessToast 函数，用于显示成功提示

// 引入本地存储钩子函数
import { useLocalStorage } from '@/hook/localStorage';

const router = useRouter(); // 获取当前的 Vue Router 实例
const username = ref(""); // 创建一个响应式变量，用于存储用户名
const password = ref(""); // 创建一个响应式变量，用于存储密码

const onSubmit = async (values) => { // 提交表单处理函数
  // console.log("submit", values);
  const res = await axios.post("/user/login", { // 发送 POST 请求到 "/user/login"
    username: values.username,
    password: values.password,
  });

  useLocalStorage("userInfo", JSON.stringify(res.data)); // 使用本地存储钩子函数存储用户信息
  localStorage.setItem("token", res.token); // 存储 token 到 localStorage
  console.log(res); // 输出请求返回的数据
  showSuccessToast(res.msg); // 显示成功提示消息
  setTimeout(() => {
    router.push("/find"); // 一秒后跳转到 '/find' 路由
  }, 1000);
};
 
  </script>
  
  <style lang="less" scoped>
  .login {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
  
    h1 {
      height: 0.6933rem;
      text-align: center;
      font-size: 0.48rem;
      margin-top: 1.2rem;
    }
  
    .login-wrapper {
      width: 7.444rem;
      height: 10.77rem;
      border: 1px solid rgba(187, 187, 187, 1);
      margin: 0 auto;
      margin-top: 1.7rem;
      border-radius: 0.3rem;
      box-shadow: 0 0 0.533rem rgba(170, 170, 170, 1);
  
      .avatar {
        width: 2rem;
        height: 2rem;
        margin: 1rem auto 0.77rem;
        border-radius: 50%;
        overflow: hidden;
  
        img {
          width: 100%;
        }
      }
    }
  
    .register {
      width: 100%;
      height: 0.56rem;
      text-align: center;
      line-height: 0.56rem;
      font-size: 0.34rem;
      margin-top: 1.21rem;
      color: rgba(16, 16, 16, 1);
    }
  }
  
  :deep(.van-cell__title.van-field__label) {
    width: 45px;
  }
  </style>
  