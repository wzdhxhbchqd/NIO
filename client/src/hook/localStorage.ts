// html5 本地存储的理解  html5 本地存储 + ref 响应式本地存储

import {ref, watchEffect} from 'vue'

// watchEffect 相比watch更轻量级， 不需要显示的声明依赖
// 自己根据函数体内的依赖去判断

export const useLocalStorage = (name :string, value = []) => {

    let data = ref(JSON.parse(localStorage.getItem(name)) ||  value)
    watchEffect(() => {
        try {
            // 尝试解析 data.value，如果它是一个有效的 JSON 字符串
            JSON.parse(data.value);
            
            // 如果解析成功，直接存储 data.value
            localStorage.setItem(name, data.value);
          } catch (e) {
              
            // 如果解析失败，说明 data.value 不是一个有效的 JSON 字符串
            // 使用 JSON.stringify 转换后存储
            localStorage.setItem(name, JSON.stringify( data.value));
          }
      });
    return data

}
