<template>
    <div class="inquiry">
        <div class="list">
            <ul>
                <li v-for="(item,index) in inquiry" key="index">
                    <div class="img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="font">{{ item.name }}</div>
                </li>
            </ul>
        </div>
        <div class="beauty">
            <div class="head">
                <div class="left">全系车型美图合集</div>
                <div class="right">
                    <i class="iconfont icon-dayuhao"></i>
                </div>
            </div>
            <div class="pic">
                <div class="p1">
                    <div class="img1">
                    <img v-lazy="i1" alt="">
                </div>
                <div class="img4">
                    <img v-lazy="i4" alt="">
                </div>
                </div>
               <div class="p2">
                <div class="img2">
                    <img v-lazy="i2" alt="">
                </div>
                <div class="img5">
                    <img v-lazy="i5" alt="">
                </div>
                <div class="img6">
                    <img v-lazy="i6" alt="">
                </div>
               </div>
            <div class="p3">
                <div class="img3">
                    <img v-lazy="i3" alt="">
                </div>
                <div class="img7">
                    <img v-lazy="i7" alt="">
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import i1 from '@/pics/b1.jpg'
import i2 from '@/pics/b2.jpg'
import i3 from '@/pics/b3.jpg'
import i4 from '@/pics/b4.jpg'
import i5 from '@/pics/b5.jpg'
import i6 from '@/pics/b6.jpg'
import i7 from '@/pics/b7.jpg'

import axios from "@/api";

// 发送 POST 请求至 "/user/test"
const test = async () => {
  const res = await axios.post("/user/test");
  console.log(res);
};
test();

import { useInquiryStore } from '@/store/inquiry.ts';

const inquiryStore = useInquiryStore();

// 获取 inquiryStore 中的 inquiry 数据
const inquiry = inquiryStore.inquiry;

console.log(inquiry);
</script>

<style lang="less" scoped>
.inquiry{
    width: 100%;
    height: 85%;
    .list{
        width: 100%;
        height: 80%;
        border-bottom: 0.026rem solid rgba(128, 128, 128, 0.3);
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            li{
                width: 30%;
                height: 30%;
                .img{
                    width: 100%;
                    height: 80%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .font{
                    height: 20%;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
    .beauty{
        width: 100%;
        height: 80%;
        .head{
            width: 100%;
            height: 15%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 700;
        }
        .pic{
            width: 100%;
            height: 85%;
            display: flex;
            justify-content: space-around;
            .p1{
                width: 32%;
                height: 100%;
                display: flex;
                align-content: space-between;
                flex-wrap: wrap;
               .img1, .img4{
                    width: 100%;
                    height: 49%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .p2{
                width: 32%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .img2,.img6{
                    width: 100%;
                    height: 24%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .img5{
                    width: 100%;
                    height: 50%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .p3{
                width: 32%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                .img3,.img7{
                    width: 100%;
                    height: 49%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            
        }
    }
}
</style>