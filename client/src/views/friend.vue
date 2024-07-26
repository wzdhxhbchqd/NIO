<template>
    <div class="friend" v-if=" $route.path === '/friend'">
        <div class="head">
            <div class="left">
                <span>会话</span>
                <span>社群</span>
                <span>通讯录</span>
            </div>
            <div class="right">
                <div class="i">
                    <i class="iconfont icon-chazhao"></i>
                </div>
                <div class="i">
                    <i class="iconfont icon-tianjialianxiren"></i>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="notice">
                <div class="nleft">
                    <i class="iconfont icon-tongzhi3"></i>
                </div>
                <div class="nright">
                    <div class="condition">
                        <div class="left">通知</div>
                        <div class="right">9小时前</div>
                    </div>
                    <div class="message">蔚来能源充电网络向鸿蒙智行开放</div>
                </div>
            </div>
            <div class="server" @click="onClick">
                <div class="nleft">
                    <img src="../pics//ser.png" alt="">
                </div>
                <div class="nright">
                    <div class="condition">
                        <div class="left">蔚来在线顾问</div>
                        <div class="right">刚刚</div>
                    </div>
                    <div class="message">蔚来社区NIO summer活动季来袭</div>
                </div>
            </div>
        </div>

        <div class="router-link" to="/friend/aiServer"></div>
</div>
<router-view class="aiServer"></router-view>
</template>

<script setup>

import { ref } from 'vue'; // 引入 Vue 3 的 ref 函数，用于创建响应式变量
import { useRouter } from 'vue-router'; // 引入 Vue Router 的 useRouter 函数，用于获取路由实例
import axios from "@/api"; // 引入 Axios，用于发送 HTTP 请求

const use = useRouter(); // 获取当前的 Vue Router 实例

const onClick = () => {
    use.push('friend/aiServer'); // 点击事件处理函数，跳转到 'friend/aiServer' 路由
};

const test = async () => {
    const res = await axios.post("/user/test"); // 发送 POST 请求到 "/user/test"
};

test(); // 调用 test 函数，执行 HTTP 请求
</script>

<style lang="less" scoped>
.friend{
    width: 100%;
    height: 92vh;
    box-sizing: border-box;
    padding: 0.4rem;
    .head{
        width: 100%;
        height: 5%;
        display: flex;
        justify-content: space-between;
        .left{
            align-items: center;
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-between;
        }
        .right{
            align-items: center;
            height: 100%;
            width: 20%;
            display: flex;
            justify-content: space-between;
            .i{
                i{
                    font-size: 0.53rem;
                }
            }
        }
    }
    .body{
        width: 100%;
        height: 35%;
        border-bottom: 0.026rem solid rgba(128, 128, 128,0.3);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .notice, .server{
            width: 100%;
            height: 40%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nleft{
                width: 23%;
                height: 100%;
                overflow: hidden;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgba(127, 255, 212,0.3);
                img{
                    width: 100%;
                    height: 100%;
                }
                i{
                    font-size: 0.8rem;
                }
            }
            .nright{
                width: 73%;
                height: 80%;
                display: flex;
                flex-wrap: wrap;
                align-content: center;
                .condition{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.26rem;
                    .left{

                        color: black;
                        font-size: 0.48rem;
                    }
                    .right{
                        font-size: 0.373rem;
                        color: rgba(0, 0, 0,0.5);
                    }
                }
            }
        }
    }

}
</style>