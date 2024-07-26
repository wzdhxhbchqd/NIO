<template>
    <div class="mine">
        <div class="head">
            <div class="set">
                <div class="icon">
                    <div class="icon1">
                        <i class="iconfont icon-erweima"></i>
                    </div>
                    <div class="icon2">
                        <i class="iconfont icon-shezhi"></i>
                    </div>
                </div>
            </div>
            <div class="name">
                <div class="left">
                    <div class="Hello">
                        <span>Hello</span>
                    </div>
                    <div class="userName">
                        <span>
                            那个少年如清新的夏天
                        </span>
                    </div>
                    <div class="submit">
                        <div class="span">
                            签到领福利
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="avatar">
                        <img src="../pics//head.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="tab">
                <div class="r">
                    <div class="count">0</div>
                    <div class="font">发布</div>
                </div>
                <div class="r">
                    <div class="count">0</div>
                    <div class="font">收藏</div>
                </div>
                <div class="r">
                    <div class="count">0</div>
                    <div class="font">关注</div>
                </div>
                <div class="r">
                    <div class="count">0</div>
                    <div class="font">粉丝</div>
                </div>
            </div>
        </div>
        <div class="body">
            <ul class="ul">
                <li v-for="(item, index) in mine" class="li">
                    <div class="i">
                        <i class="iconfont" :class="item.icon"></i>
                    </div>
                    <div class="font">
                        <span>{{ item.font }}</span>
                    </div>
                </li>
                <div class="line"></div>
            </ul>
        </div>
        <div class="tail">
            <div class="r">
                <div class="font">
                    <span>浏览历史</span>
                </div>
                <div class="icon">
                    <i class="iconfont icon-dayuhao"></i>
                </div>
            </div>
            <div class="r">
                <div class="font">
                    <span>合作伙伴</span>
                </div>
                <div class="icon">
                    <i class="iconfont icon-dayuhao"></i>
                </div>
            </div>
            <div class="r">
                <div class="font">
                    <span>加入蔚来</span>
                </div>
                <div class="icon">
                    <i class="iconfont icon-dayuhao"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from "@/api";

import { useMineStore } from '@/store/mine';

// 获取 mine 商店实例
const mineStore = useMineStore()
// 获取商店中的 mine 数据
const mine = mineStore.mine

// 定义一个异步函数 test
const test = async () => {
    // 发送 POST 请求到 /user/test 接口
    const res = await axios.post("/user/test");
    // 在控制台打印响应结果
  };
// 调用 test 函数
test()
</script>

<style lang="less" scoped>
.mine {
    height: 92vh;
    background-image: url('../pics/NIOcar.jpg');
    background-size: 100% 100%;

    // 头部样式
  .head {
        height: 40%;
        padding: 0 0.4rem 0 0.4rem;
        box-sizing: border-box;
        position: relative;

        // 设置部分样式
      .set {
            height: 15%;
            position: relative;
            right: 0;

            // 图标样式
          .icon {
                position: absolute;
                display: flex;
                right: 0;
                top: 50%;
                width: 15%;
                justify-content: space-between;
                transform: translate(0, -50%);

                // 图标内的字体样式
                i {
                    font-size: 0.53rem;
                }
            }

        }

        // 名字部分样式
      .name {
            height: 60%;
            display: flex;
            justify-content: space-between;

            // 名字左边部分样式
          .left {
                height: 100%;
                width: 50%;
                font-size: 0.53rem;
                overflow: hidden;

                // 用户名样式
              .userName {
                    margin-top: 5%;
                }

                // 提交按钮样式
              .submit {
                    margin-top: 5%;
                    width: 2.6rem;
                    height: 0.66rem;
                    border-top-left-radius: 1.3rem;
                    border-top-right-radius: 1.3rem;
                    border-bottom-left-radius:1.3rem;
                    border-bottom-right-radius: 1.3rem;
                    border: 0.026rem solid black;
                    font-size: 0.346rem;
                    text-align: center;
                    line-height: 0.66rem;
                }
            }

            // 名字右边部分样式
          .right {
                height: 100%;
                width: 50%;
                position: relative;

                // 头像样式
              .avatar {
                    position: absolute;
                    right: 0;
                    width: 1.82rem;
                    height: 1.82rem;
                    border-radius: 50%;
                    background-color: pink;
                    overflow: hidden;

                    // 头像内图片样式
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        // 选项卡样式
      .tab{
            margin-top: 10%;
            width: 100%;
            height: 20%;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            text-align: center;
            align-items: center;
            box-sizing: border-box;

            // 选项卡内字体样式
          .font{
                margin-top:0.13rem;
                color: gray;
            }
        }
    }

    // 主体部分样式
  .body{
        width: 100%;
        height: 38%;
        box-sizing: border-box;

        padding: 0.4rem;

        // 无序列表样式
      .ul{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            text-align: center;

            // 分割线样式
          .line{
                width: 100%;
                height: 0.026rem;
                background-color: gainsboro;
                margin-top: 0.8rem;
            }

            // 列表项样式
          .li{
                width: 25%;
                margin-top: 0.53rem;

                // 列表项内字体样式
              .font{
                    margin-top: 0.13rem;
                }
            }
        }
    }

    // 尾部样式
  .tail{
        width: 100%;
        height: 22%;
        padding: 0.8rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        // 尾部内的行样式
      .r{
            margin-top: 0.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>