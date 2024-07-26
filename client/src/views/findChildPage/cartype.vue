<template>
    <div class="cartype">
      <div class="car">
        <div class="E" @click="Eclick(0)" :class="{'active' : c === 0}">ET7</div>
        <div class="E" @click="Eclick(1)" :class="{'active' : c === 1}">ES6</div>
        <div class="E" @click="Eclick(2)" :class="{'active' : c === 2}">ET5T</div>
        <div class="E" @click="Eclick(3)" :class="{'active' : c === 3}">ET5</div>
        <div class="E" @click="Eclick(4)" :class="{'active' : c === 4}">ES8</div>
        <div class="E" @click="Eclick(5)" :class="{'active' : c === 5}">EC7</div>
        <div class="E" @click="Eclick(6)" :class="{'active' : c === 6}">ES7</div>
      </div>
      
      <child v-if="c === 0" :index='0'></child>
      <child v-if="c === 1" :index='1'></child>
      <child v-if="c === 2" :index='2'></child>
      <child v-if="c === 3" :index='3'></child>
      <child v-if="c === 4" :index='4'></child>
      <child v-if="c === 5" :index='5'></child>
      <child v-if="c === 6" :index='6'></child>

      <div class="child2">
        <child2 v-if="c === 0" :index="0"></child2>
        <child2 v-if="c === 1" :index="1"></child2>
        <child2 v-if="c === 2" :index="2"></child2>
        <child2 v-if="c === 3" :index="3"></child2>
        <child2 v-if="c === 4" :index="4"></child2>
        <child2 v-if="c === 5" :index="5"></child2>
        <child2 v-if="c === 6" :index="6"></child2>
    </div>
    </div>
  </template>
  
  <script setup>
  import child from '@/components/cartype/carType.vue';
import { ref } from 'vue';
import child2 from '@/components/cartype/deepTest.vue';
import axios from "@/api";

let c = ref(0);

const Eclick = (e) => {
  c.value = e;
};

const test = async () => {
  // 发送 POST 请求至 "/user/test"
  const res = await axios.post("/user/test");
  console.log(res);
};

// 调用 test() 函数，触发发送请求
test();
  </script>
  
  <style lang="less" scoped>
  .cartype {
    width: 100%;
    height: 80%;
    box-sizing: border-box;
  
    .car {
      display: flex;
      height: 5%;
      overflow-x: scroll;
  
      &::-webkit-scrollbar {
        display: none; /* 隐藏 Chrome 和 Safari 的滚动条 */
      }
  
      .E {
        width: 20%;
        border: 0.026rem solid gray;
        flex-shrink: 0;
        margin-left: 0.186rem;
        line-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
  
        &.active {
          border: 0.052rem solid black;
        }
  
        &:nth-child(1) {
          margin-left: 0;
        }
      }
    }
    .carType{
        height: auto;
    }
    .child2{
        margin-top: 0;
        width: 100%;
        height: 40%;
    }
  

  }
  </style>