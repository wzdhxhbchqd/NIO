<template>
    <div class="now">
        <div class="topic">
            <div class="topic-head">
                <div class="left">热门话题</div>
                <div class="right">
                    <i class="iconfont icon-dayuhao"></i>
                </div>
            </div>
            <div class="topic-body">
                <div class="one">
                    <div class="font">
                        <div class="type">
                            # 全民花式颠球挑战
                        </div>
                        <div class="hot">
                        HOT
                    </div>
                    </div>
                    <div class="people">
                        4266人参与
                    </div>
                </div>
                <div class="one">
                    <div class="font">
                        <div class="type">
                            # 在牛屋快乐长大吧
                        </div>
                        <div class="hot">
                        NEW
                    </div>
                    </div>
                    <div class="people">
                        395人参与
                    </div>
                </div>
                <div class="one">
                    <div class="font">
                        <div class="type">
                           # 走！一起去远方开车压...
                        </div>
                        <div class="hot">
                        NEW
                    </div>
                    </div>
                    <div class="people">
                        34人参与
                    </div>
                </div>
                <div class="one">
                    <div class="font">
                        <div class="type">
                            # 上班划水，下班划船
                        </div>
                        <div class="hot">
                        NEW
                    </div>
                    </div>
                    <div class="people">
                        21人参与
                    </div>
                </div>
            </div>
        </div>
        <div class="share">
            <div class="head">
                <div class="left">
                    <div class="header">
                        <img src="@/pics//head.jpg" alt="">
                        <div class="i">
                            <i class="iconfont icon-v"></i>
                        </div>
                    </div>
                    <div class="name">
                        <div class="n">
                            我是新的吴大冷
                        </div>
                        <div class="type">
                            一个精分美术生
                        </div>
                    </div>
                </div>
                <div class="right">
                    关注
                </div>
            </div>
            <div class="introduce">
                打卡篁岭！
            </div>
            <div class="pic">
                <img src="@/pics/H1.jpg" alt="">
                <img src="@/pics/H2.jpg" alt="">
                <img src="@/pics/H3.jpg" alt="">
                <img src="@/pics/H4.jpg" alt="">
            </div>
            <div class="tail">
                <div class="left">
                    22分钟前·篁岭景区
                </div>
                <div class="right">
                    <div class="talk">
                        <i class="iconfont icon-liaotiankuang"></i>
                        <div class="count">1</div>
                    </div>
                    <div class="love">
                        <i class="iconfont icon-dianzan" @click="onClick(1)" :class="{'active' : a === 1}"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from "@/api";

let a = ref('');

// 切换 a 的值
const onClick = (e) => {
    if (!a.value) {
        a.value = e;
    } else {
        a.value = '';
    }
};

// 发送 POST 请求至 "/user/test"
const test = async () => {
    const res = await axios.post("/user/test");
    console.log(res);
};

// 调用 test() 函数，触发发送请求
test();
</script>

<style lang="less" scoped>
.now{
    width: 100%;
    height: 80%;
    .topic{
        background-image: url('@/pics/love.jpg');
        background-size:100% 100%;
        padding: 0.4rem;
        width: 100%;
        height: 60%;
        box-sizing: border-box;
        .topic-head{
            width: 100%;
            height: 20%;
             display: flex;
             justify-content: space-between;
        }
        .topic-body{
            width: 100%;
            height: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .one{
                display: flex;
                justify-content: space-between;
                .font{
                    display: flex;
                    width: 80%;
                    .hot{
                        color: aqua;
                        margin-left: 0.13rem;
                        font-weight: 100;
                    }
                }
                .people{
                    font-size: 0.32rem;
                    color: gray;
                }
            }
        }
    }
    .share{
        height: 100%;
        width: 100%;
        border-top: 0.026rem solid rgba(128,128,128,0.3);
        margin-top: 0.53rem;
        .head{
            margin-top: 0.26rem;
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: space-between;
            .left{
                width: 50%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .header{
                    position: relative;
                    width: 1.04rem;
                    height: 1.04rem;
                    overflow: hidden;
                    border-radius: 50%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .i{
                    z-index: 2;
                    position: absolute;
                    width: 0.26rem;
                    height:0.26rem;
                    color: red;
                    right: 0.186rem;
                    bottom: 0.186rem;
                }
                }
                .name{
                    .n{
                        font-size: 0.48rem;
                    }
                    .type{
                        margin-top: 0.13rem;
                        font-size: 0.32rem;
                        color: gray;
                    }
                }
            }
            .right{
                width: 20%;
                display: flex;
                align-items: center;
            }
        }
        .introduce{
            width: 100%;
            height: 5%;
            margin-top: 0.13rem;
        }
        .pic{
            width: 100%;
            height:65%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            img{
                width: 48%;
                height: 48%;
            }
        }
        .tail{
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .right{
                width:20%;
                .talk{
                    width: 40%;
                    display: flex;
                    justify-content: space-between;
                    i{
                        font-size: 0.346rem;
                    }
                }
                display: flex;
                justify-content: space-between;
                .love{
                    i.active{
                        color: aqua;
                    }
                }
            }
            .left{
                font-size:0.45rem;
                color: gray;
            }
        }
    }
}
</style>