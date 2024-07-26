// 引入全局样式
import './assets/main.css'

// 引入 Vue 相关依赖
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 引入 Vant 相关组件和样式
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';


// 引入 flexible.js，用于移动端 rem 适配
import 'lib-flexible/flexible.js'
// 引入需要使用的 Vant 组件
import {
    Button,
    Form,
    Field,
    CellGroup,
    Icon,
    Uploader,
    ActionSheet,
    NavBar,
} from "vant";

// 创建 Pinia 实例
const pinia = createPinia()

// 创建应用实例
const app = createApp(App)

import  LazyLoad from '@/directives/index'
app.directive('lazy', LazyLoad);

app.use(ActionSheet);
app.use(Uploader);
app.use(Icon);
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Swipe);
app.use(SwipeItem);
app.use(NavBar);
// 使用 Pinia 状态管理
app.use(pinia)



// 使用 Vue Router
app.use(router)



       


// 挂载程序
app.mount('#app')