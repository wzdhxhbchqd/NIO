<template>
    <div class="buyCar">
        <div class="bgv">
            <video  autoplay loop src="../pics/et7-home-mobile.mp4">
            </video>
        </div>
        <div class="content">
            <div class="header">
                <div class="left">
                    <ul>
                        <li @click="onclick(0)" :class="{'active' : a === 0}">ES6</li>
                        <li @click="onclick(1)"  :class="{'active' : a === 1}">ET7</li>
                        <li @click="onclick(2)"  :class="{'active' : a === 2}">ES8</li>
                        <li @click="onclick(3)"  :class="{'active' : a === 3}">ET5T</li>
                        <li @click="onclick(4)"  :class="{'active' : a === 4}">EC6</li>
                        <li @click="onclick(5)"  :class="{'active' : a === 5}">ET5</li>
                        <li @click="onclick(6)"  :class="{'active' : a === 6}">EC7</li>
                        <li @click="onclick(7)"  :class="{'active' : a === 7}">ES7</li>
                        <li @click="onclick(8)"  :class="{'active' : a === 8}">ET9</li>
                    </ul>
                </div>
                <div class="right">
                    <div class="i">
                        <i class="iconfont icon-caidan"></i>
                    </div>
                    <div class="all">
                        全部
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="name">
                    <div class="nio">NIO</div>
                    <div class="es6">ET7</div>
                </div>
                <div class="introduce">智 能 电 动 全 能 S U V</div>
                <div class="more">
                    <div class="konw">了解更多</div>
                    <div class="i">
                        <i class="iconfont icon-dayuhao"></i>
                    </div>
                </div>
            </div>
            <div class="foot">
                <div class="left">预约试驾</div>
                <div class="right">定制和订购</div>
            </div>
            <div class="tail">
                <i class="iconfont icon-xiangxiajiantou"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const a = ref('')
const onclick = (e) => {
    a.value = e
}
</script>

<style lang="less" scoped>
.buyCar{
    width: 100vw;
    height: 92vh;
    .bgv{
        width: 100%;
        height: 100%;
        video{
            width: 100%;
            height: 100%;
            background-color: aqua;
            object-fit: cover
        }
    }
    .content{
        color: white;
        position: absolute;
        width: 100%;
        height: 92%;
        z-index: 2;
        top: 0;
        box-sizing: border-box;
        padding: 0.4rem;
        .header{
            color: rgba(255, 255, 255,0.5);
            display: flex;
            width: 100%;
            height: 5%;
            .left{
                width: 80%;
                height: 100%;

                ul{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    overflow-x: scroll;
                    &::-webkit-scrollbar {
        display: none; /* 隐藏 Chrome 和 Safari 的滚动条 */
      }
                    li{

                        display: flex;
                        align-items: center;
                        margin-left: 0.53rem;
                        &:nth-child(1){
                            margin-left: 0;
                        }
                        &.active{
                            color: white;
                            font-weight: 700;
                        }
                    }
                }
            }
            .right{
                width: 20%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                .i{
                    i{
                        font-size: 0.66rem;
                    }
                }
            }
        }
        .body{
            margin-top: 20%;
            width: 100%;
            height: 30%;
            .name{
                display: flex;
                .nio{
                    font-size: 1.06rem;
                    font-weight: 700;
                }
                .es6{
                    margin-left: 0.13rem;
                    font-size: 1.06rem;
                }
            }
            .introduce{
                margin-top: 2%;
            }
            .more{
                margin-top: 5%;
                display: flex;
                width: 28%;
                justify-content: space-between;
            }
        }
        .foot{
            width: 100%;
            height: 7%;
            display: flex;
            justify-content: space-between;
            margin-top: 60%;
            .left,.right{
                border: 1px solid white;
                padding: 0.13rem 0.4rem; 
                color: #fff; 
                border-radius: 0.53rem; 
                overflow: hidden; 
                width: 35%;
                height: 100%;
                display: flex;
                align-items: center;
             justify-content: center;           
             }
        }
        .tail{
            width: 100%;
            text-align: center;
            margin-top: 10%;
        }
    }

}
</style>