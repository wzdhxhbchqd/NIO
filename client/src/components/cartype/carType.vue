<template>
    <div class="carType">
        <div class="new">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :height="300">
                 <van-swipe-item v-for="(item, index) in car " key="index">
                    <img :src="item.pic" alt="">
                    <div class="introduce">
                        <div class="comment">
                                <div class="font">
                                    {{ item.introduce }}
                                </div>
                        </div>
                        <div class="people">
                            <div class="head">
                                <img src="@/pics/head.jpg" alt="">
                            </div>
                            <div class="name">
                                <div class="n">
                                   {{item.name}}
                                </div>
                            </div>
                        </div>
    
                    </div>
                 </van-swipe-item>
            </van-swipe>
        </div>
        <div class="test">

        </div>
    </div>
</template>

<script setup>

import { useCarTypeStore } from '@/store/carType';

// 使用 useCarTypeStore 获取 CarTypeStore 对象
const CarTypeStore = useCarTypeStore();

// 打印 CarTypeStore 中的 car 属性
console.log(CarTypeStore.car);

// 定义组件 props，包括一个 index 属性，类型为 Number，默认值为 0
const props = defineProps({
    index: {
        type: Number,
        default: 0 // 注意是 default 而不是 defalut
    }
});

// 定义一个函数，用于截取数组的一部分
function sliceArray(arr, begin, end) {
    if (begin < 0) {
        begin = arr.length + begin; // 处理负数索引
    }
    if (end < 0) {
        end = arr.length + end; // 处理负数索引
    }
    return arr.slice(begin, end); // 返回截取后的数组片段
}

// 使用 sliceArray 函数截取 CarTypeStore.car 数组的一部分
let car = sliceArray(CarTypeStore.car, props.index, props.index + 3);

// 打印截取后数组的第一个元素的 name 属性
console.log(car[0].name);

</script>

 <style lang="less" scoped>
.carType{
    margin-top: 15px;
    width: 100%;
    height: 100%;
    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    position: relative;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .introduce{
        width: 100%;
        height: 20%;
        position: absolute;
        bottom: 10%;
        .comment{
            position: relative;
            height: 50%;
            width: 100%;
            .font{
                position: absolute;
                top: -130%;
                left: 5%;
            }   
        }
        .people{
            height: 50%;
            position: relative;
            margin-top: 15px;
            .head{
                position: absolute;
                display: inline-block;
                width: 20px;
                height: 20px;
                top: 25%;
                left: 5%;
                border-radius: 50%;
                overflow: hidden;
                img{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            }
            .name{
                position: absolute;
                margin-left: 5px;
                display: inline-block;
                width: 50%;
                height: 20px;
                top: 25%;
                left: 10%;
                font-size: 15px;
                .n{
                    position: absolute;
                    top: -320%;
                    color: black;
                    color: white;
                    margin-left: 5px;
                }
            }
        }
    }
  }
}
</style>