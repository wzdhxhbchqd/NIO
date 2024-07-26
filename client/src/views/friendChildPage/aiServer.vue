<template>
    <div class="aiServer">
        <div class="header">
            <div class="left">
                <div class="return">
                    <i class="iconfont icon-ic_arrow_back_px" style="font-size:  0.8rem;" @click="r"></i>
                </div>
                <div class="font">
                    蔚来在线顾问
                </div>
            </div>
            <div class="right">
                <i class="iconfont icon-sandian"  style="font-size:  0.8rem;"></i>
            </div>
        </div>
        <div class="content" ref="content">
            
        </div>
        <div class="ask">
                <div class="mkf">
                    <i class="iconfont icon-maikefeng"></i>
                </div>
                <div class="input">
                    <input type="text" v-model="mess" @keyup.enter="onClick" :placeholder="pla">
                    <button @click="onClick">提交</button>
                </div>
                <div class="emoji">
                    <i  class="iconfont icon-biaoqing"></i>
                </div>
                <div class="add">
                    <i class="iconfont icon-jiahao1"></i>
                </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { chat } from '@/hook/gpt.ts';
import { useRouter } from 'vue-router';

let a = ref(''); // 响应式变量，用于存储 AI 返回的消息
let mess = ref(''); // 响应式变量，用于存储用户输入的消息
let mess1 = ref(''); // 响应式变量，用于临时存储用户输入的消息
let content = ref(null); // 响应式变量，用于引用消息内容的 DOM 元素
let pla = ref('请输入您的问题'); // 响应式变量，用于提示用户输入问题

const main = async (mess) => {
    const messageList = [{
        role: 'admin',
        content: '你是一位汽车4s店销售专家，可以回答有关买车卖车的问题'
    }, {
        role: 'user',
        content: mess,
    }];
    const data = await chat(messageList, "sk-KPhNXw1Jy4i3Gd6c7FxolDg6vLSc1gsamnSoUPYSYkDfaaFg");
    console.log(data.choices[0].message.content);
    a.value = data.choices[0].message.content;
    console.log(a);
};

const onClick = async () => {
    let li1 = document.createElement('li');
    li1.innerHTML = mess.value;
    mess1.value = mess.value;
    mess.value = '';
    li1.style.boxSizing = 'border-box';
    li1.style.padding = '0.4rem';
    li1.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
    li1.style.marginTop = '0.66666667rem';
    li1.style.borderRadius = '0.26666667rem';
    li1.style.float = 'right';
    li1.style.listStyle = 'none';
    content.value.appendChild(li1);
    pla.value = 'AI助理正在思考，请稍候';
    await main(mess1.value);
    pla.value = '请输入您的问题';

    let li = document.createElement('div');
    li.style.marginTop = '0.66666667rem';
    li.style.float = 'left';
    li.style.width = '100%';
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';

    let li2 = document.createElement('li');
    li2.style.boxSizing = 'border-box';
    li2.style.padding = '0.4rem';
    li2.innerHTML = a.value;
    li2.style.float = 'right';
    li2.style.width = '85%';
    li2.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
    li2.style.borderRadius = '0.26666667rem';
    li2.style.listStyle = 'none';

    let avatar = document.createElement('div');
    avatar.style.borderRadius = '50%'; // 圆形头像的样式
    avatar.style.width = '1.06666667rem';
    avatar.style.height = '1.06666667rem';
    avatar.style.borderRadius = '50%';
    avatar.style.overflow = 'hidden';

    let img = document.createElement('img');
    img.src = 'https://p2.ssl.qhimgs1.com/sdr/400__/t0326262f768a977148.png';
    img.style.width = '100%'; // 设置头像宽度
    img.style.height = '100%'; // 设置头像高度
    avatar.appendChild(img);

    // 将头像元素添加到 li2 中
    li.appendChild(avatar);
    li.appendChild(li2);

    content.value.appendChild(li);
};

const { push } = useRouter(); // 获取路由的 push 函数

const r = () => {
    push('/friend'); // 跳转到 '/friend' 路由
};
</script>

<style lang="less" scoped>
.aiServer{
    width: 100%;
    height: 92vh;
    padding: 0 0.4rem 0.4rem 0.4rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url('@/pics//NIOcar.jpg');
    background-size: 100% 100%;
    .header{
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 10%;
        .left{
            display: flex;
            justify-content: space-between;
            width: 40%;
            align-items: center;
        }
    }
    .content{
        position: relative;
        width: 100%;
        height: 80%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none; /* 隐藏 Chrome 和 Safari 的滚动条 */
        }
        li{
            color: red;
        }
    }
    .ask{
        align-items: center;
        box-sizing: border-box;
        bottom: 0;
        width: 100%;
        height: 0.21333333rem;
        display: flex;
        justify-content: space-between;
        i{
            font-size: 0.8rem;
        }
    }
}
</style>