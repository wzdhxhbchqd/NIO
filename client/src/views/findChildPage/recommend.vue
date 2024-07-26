<template>
  <div class="zero">
            <div class="carousel">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <div class="avatar">
                        <div class="img">
                            <img src="@/pics/NIOcar.jpg" alt="">
                        </div>
                    </div>
                    <div>NIOcar</div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="avatar">
                        <div class="img">
                            <img src="@/pics/car1.jpg" alt="">
                        </div>
                    </div>
                    <div>NIOcar</div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="avatar">
                        <div class="img">
                            <img src="@/pics/car2.jpg" alt="">
                        </div>
                    </div>
                    <div>NIOcar</div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="avatar">
                        <div class="img">
                            <img src="@/pics/car3.jpg" alt="">
                        </div>
                    </div>
                    <div>NIOcar</div>
                </van-swipe-item>
            </van-swipe>
        </div>
      

        <div class="example">
            <div class="avatar">
                <img src="@/pics/look.jpg" alt="">
            </div>
            <div class="avatar">
                <img src="@/pics/try.jpg" alt="">
            </div>
            <div class="avatar">
                <img src="@/pics/store.jpg" alt="">
            </div>
            <div class="avatar">
                <img src="@/pics/adde.jpg" alt="">
            </div>
        </div>

    <div class="assistant">
        <div class="ass">
            <div class="left">
                <div class="img">
                    <img src="@/pics//ass.png" alt="">
                </div>
                <div class="font">
                    <div class="top">蔚来汽车在线顾问</div>
                    <div class="bottom">您的专属在线购车顾问</div>
                </div>
            </div>
        </div>
        <div class="more" @click="onClick">
            <div class="may">您可能想了解以下热门信息</div>
            <div class="main">
                <div class="one">
                    <div class="font">2024年限时购车优惠</div>
                    <div class="i">
                        <i class="iconfont icon-dayuhao"></i>
                    </div>
                </div>
                <div class="one">
                    <div class="font">7月试驾预约快捷通道</div>
                    <div class="i">
                        <i class="iconfont icon-dayuhao"></i>
                    </div>
                </div>
                <div class="one">
                    <div class="font">BaaS电池租用服务政策解读</div>
                    <div class="i">
                        <i class="iconfont icon-dayuhao"></i>
                    </div>
                </div>
                <div class="one">
                    <div class="font">7月购车补贴信息一览</div>
                    <div class="i">
                        <i class="iconfont icon-dayuhao"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="askOnline" @click="onClick">
            在线咨询
        </div>
    </div>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
import axios from "@/api";

const use = useRouter();

// 跳转至 '/friend/aiServer'
const onClick = () => {
    use.push('/friend/aiServer');
};

// 发送 POST 请求至 "/user/test"
const test = async () => {
    const res = await axios.post("/user/test");
    console.log(res); // 打印请求的响应结果
};

// 调用 test() 函数，触发发送请求
test();
</script>

<style lang="less" scoped>
  .zero{
        height: 90%;
        .carousel{
            .van-swipe-item {
                position: relative;
                color: #fff;
                font-size: 0.53rem;
                line-height: 4rem;
                text-align: center;
                background-color: #39a9ed;
                .avatar{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    .img{
                        width: 100%;
                        height: 100%;
                        background-color: blue;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                }
    }

    .example{
        margin-top: 0.26rem;
        height: 10%;
        display: flex;
        justify-content: space-between;
        .avatar{
            width: 22%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .assistant{
        margin-top: 5%;
        width: 100%;
        height: 70%;
        .ass{
            width: 100%;
            height: 15%;
            .left{
                width: 60%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .img{
                    width: 1.3rem;
                    height: 1.3rem;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .font{
                    .top{
                        font-size: 0.48rem;

                    }
                    .bottom{
                        font-size: 0.32rem;
                        color: gray;
                        margin-top: 0.26rem;
                    }
                }
            }

        }
        .more{
            margin-top: 5%;
            width: 100%;
            height: 70%;
            .may{
                width: 100%;
                height: 10%;
            }
            .main{
                width: 100%;
                height: 90%;
                background-image: url('@/pics//image.png');
            background-size: 100% 100%;
            padding: 0.4rem;
            box-sizing: border-box;
            .one{
                display: flex;
                justify-content: space-between;
                color:white;
                margin-top: 8%;
            }
            }
        }
        .askOnline{
            margin-top: 5%;
            width: 100%;
            height: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
        }
    }
    }
</style>