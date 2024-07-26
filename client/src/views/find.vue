<template>
    <div class="find">
        <div class="nav">
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" :placeholder="searchValue">
            </div>
            <div class="more">
                <i class="iconfont icon-jiahao" style="font-size: 0.66rem;"></i>
            </div>
        </div>
        <div class="tab">
                <router-link to="/find/recommend":class="{'active': a === 0}">推荐</router-link>
                <router-link to="/find/cartype":class="{'active': a === 1}">车型</router-link>
                <router-link to="/find/now":class="{'active': a === 2}">此刻</router-link>
                <router-link to="/find/there":class="{'active': a === 3}">此地</router-link> 
                <router-link to="/find/inquiry":class="{'active': a === 4}">咨询</router-link>

            </div>
                <router-view></router-view>
                    

    </div>
</template>
 
<script setup lang="ts">
import { ref } from 'vue'; // 引入 Vue 3 的 ref 函数，用于创建响应式变量
import axios from "@/api"; // 引入 Axios，用于发送 HTTP 请求

const searchArr = ref([ // 创建一个包含搜索内容的响应式数组
    '大家都在搜: ET5',
    '大家都在搜: 换电站地图',
    '大家都在搜: 二手车',
    '大家都在讨论: 蔚来之夏'
]);

let searchValue = ref(''); // 创建一个响应式变量，用于存储当前显示的搜索内容
let i = 0; // 初始化索引变量

setInterval(() => { // 设置定时器，每两秒更新一次搜索内容
    searchValue.value = searchArr.value[i]; // 更新搜索内容为数组中当前索引位置的值
    i++; // 索引递增
    if (i === 4) { // 如果索引达到数组末尾
        i = 0; // 重置索引，从头开始
    }
}, 2000); // 每隔两秒执行一次



import { useRoute } from 'vue-router';

let a = ref(0)
import { onBeforeRouteUpdate } from 'vue-router';
onBeforeRouteUpdate((nextRoute, _, next) => {
      // 根据路由来设置 a 的值
      switch (nextRoute.path) {
        case '/find/recommend':
          a.value = 0;
          break;
        case '/find/cartype':
          a.value = 1;
          break;
        case '/find/now':
          a.value = 2;
          break;
        case '/find/there':
          a.value = 3;
          break;
        case '/find/inquiry':
          a.value = 4;
          break;
        default:
          a.value = 0;
      }
      next();
    });
    const route = useRoute();

  

    // 设置初始值
    switch (route.path) {
      case '/find/recommend':
        a.value = 0;
        break;
      case '/find/cartype':
        a.value = 1;
        break;
      case '/find/now':
        a.value = 2;
        break;
      case '/find/there':
        a.value = 3;
        break;
      case '/find/inquiry':
        a.value = 4;
        break;
      default:
        a.value = 0;
    }




// 向组件传值

const test = async () => {
    const res = await axios.post("/user/test");
     console.log(res);
  };
test()
</script>

<style lang="less" scoped>
.find{
    .my-swipe1 .van-swipe-item {
    color: #fff;
    font-size: 0.53rem;
    line-height: 4rem;
    text-align: center;
    background-color: #39a9ed;
  }
    box-sizing: border-box;
    padding: 0.4rem;
    width: 100vw;
    height: 92vh;
    overflow-y: scroll;
    .nav{
        display: flex;
        width: 100%;
        height: 5%;
        justify-content: space-between;
        .search{
            display: flex;
            width: 80%;
            height: 100%;
            justify-content: space-between;
            align-items: center;
            background-color: rgba(220,220,220,0.3);
            input{
                width: 100%;
                height: 100%;
                border: none;
                background-color: transparent;
                margin-left: 0.13rem;
                outline: none;
            }
        }
        .more{
            width: 20%;
            height: 100%;
            position: relative;
            i{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            
        }

    }

    .tab{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content:space-between;
        align-items: center;
        a{
            color: black;
            &.active{
                font-size: 0.66rem;
                font-weight: 700;
            }
        }
    }
}
</style>