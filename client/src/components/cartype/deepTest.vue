<template>
<div class="deepTest">
    <div class="testFont">
        <div class="left">
            车型深度测评
        </div>
        <div class="right">
            <i class="iconfont icon-dayuhao"></i>
        </div>
    </div>
    <ul>
        <li v-for="(item, index) in car" key="index">
            <div class="avatar">
                <img :src="item.pic" alt="">
            </div>
            <div class="mark">
                <div class="font">
                    {{ item.introduce }}
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<script setup>
import { useCarTypeStore } from '@/store/carType';

// 使用 useCarTypeStore 获取 CarTypeStore 对象
const CarTypeStore = useCarTypeStore();

// 打印 CarTypeStore 中的 car 属性
console.log(CarTypeStore.car);

// 定义组件 props，包括一个 index 属性，类型为 Number，默认值为 9（注意这里应该是 default 而不是 defalut）
const props = defineProps({
    index: {
        type: Number,
        default: 9 // 默认索引值为 9
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

// 使用 sliceArray 函数截取 CarTypeStore.car 数组的一部分，从 props.index 开始，截取到 props.index + 3 的位置
let car = sliceArray(CarTypeStore.car, props.index, props.index + 3);

// 打印截取后数组的第一个元素的 name 属性
console.log(car[0].name);

</script>

<style lang="less" scoped>
.deepTest{
    margin-top: 0;
    height: 100%;
    width: 100%;
    .testFont{
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
    }
    ul{ 
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 90%;
        overflow-x: scroll;
        li{
            flex-shrink: 0;
            height: 100%;
            width: 40%;
            position: relative;
            margin-left: 10px;
            &:nth-child(1){
                margin-left: 0;
            }
            .avatar{
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .mark{
                width: 100%;
                height: 30%;
                position: absolute;
                background-color: rgba(0,0,0,0.5);
                padding: 15px;
                box-sizing: border-box;
                bottom: 0;
                .font{
                    color: white;
                    font-size: 13px;
                }
            }
        }
    }
}
</style>