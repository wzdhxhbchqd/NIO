<template>
    <div class="there">
        <div class="cityFocus">
            <div class="tab">
                <div class="left">城市聚焦</div>
                <div class="right">
                    <div class="font">南昌</div>
                    <div class="i">
                        <i class="iconfont icon-daosanjiao"></i>
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="mark">
                    <div class="introduce">一周活动早知道 | 南昌七月第三周···</div>
                    <div class="head">
                        <div class="left">
                            <div class="img">
                                <img src="../pics/head.jpg" alt="">
                            </div>
                            <div class="name">南昌牛屋小青</div>
                        </div>
                        <div class="right">3天前</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cityAitivities">
            <div class="head">
                <div class="font">同城活动</div>
                <div class="i">
                    <i class="iconfont icon-dayuhao"></i>
                </div>
            </div>
            <div class="activities"  v-for="(item , index) in there" key="index">
                <div class="left">
                    <img :src="picArr[index]" alt="">
                </div>
                <div class="right">
                    <div class="introduce">
                        {{ item.introduce }}
                    </div>
                    <div class="time">
                       {{ item.time }}
                    </div>
                    <div class="condition">
                        <div class="people">{{ item.people }}</div>
                        <div class="ing">报名中</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import img1 from '@/pics/bit.jpg'; // 导入图片 bit.jpg
import img2 from '@/pics/happy.jpg'; // 导入图片 happy.jpg
import img3 from '@/pics/tree.jpg'; // 导入图片 tree.jpg
import axios from "@/api";
import { useThereStore } from '@/store/there';

const picArr = [img1, img2, img3]; // 图片数组 picArr 包含了三张图片的引用

const there = useThereStore().there; // 获取 there store 的值

// 发送 POST 请求至 "/user/test"
const test = async () => {
    const res = await axios.post("/user/test");
    console.log(res); // 打印请求的响应结果
};

// 调用 test() 函数，触发发送请求
test();
</script>

<style lang="less" scoped>
.there{
    width: 100%;
    height: 85%;
    .cityFocus{
        width: 100%;
        height: 70%;
        .tab{
            width: 100%;
            height: 15%;
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            align-items: center;
            .right{
                display: flex;
                justify-content: space-between;
                width: 15%;
                font-size: 0.4rem;
                color: gray;
            }
        }
        .body{
            width: 100%;
            height: 85%;
            background-image: url('@/pics//nio.jpg');
            background-size: 100% 100%;
            position: relative;
            .mark{
                box-sizing: border-box;
                padding: 0 0.26rem 0 0.26rem;
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 25%;
                background-color: rgba(222,184,135,0.9);
                .head{
                    width: 100%;
                    height: 50%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .left{
                        display: flex;
                        justify-content: space-between;
                        width: 38%;
                        .img{
                            width: 0.53rem;
                            height: 0.53rem;
                            border-radius: 50%;
                            overflow: hidden;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
                .introduce{
                    width: 100%;
                    height: 50%;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
    .cityAitivities{
        width: 100%;
        height: 70%;
        .head{
            width: 100%;
            height: 15%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.53rem;
        }
        .activities{
            margin-bottom: 0.4rem;
            width: 100%;
            height: 25%;
            display: flex;
            .left{
                width: 33%;
                height: 100%;
                margin-right: 0.26rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .time{
                margin-top: 0.26rem;
                font-size: 0.4rem;
                color: gray;
            }
            .condition{
                font-size: 15px;
                display: flex;
                justify-content: space-between;
                width: 50%;
                margin-top: 0.26rem;
                .people{
                    color: gray;
                }
                .ing{
                    color: aqua;
                }
            }
        }

    }
}
</style>