import { createRouter, createWebHistory } from 'vue-router'
// RouteRecordRaw 约定路由的类型
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = ([
    {
        path: '/',
        redirect: '/login',
        name: 'root'
    },
    {
        path: '/register',
        component: () => import('@/views/login/register.vue'),
        name: 'register'
    },
    {
        path: '/login',
        component: () => import('@/views/login/login.vue'),
        name: 'login'
    },
    {
        path: '/find',
        component: () => import('@/views/find.vue'),
        name: 'find',
        children: [
            {
                path: '/find',
                redirect: '/find/recommend',
                name: 'find-home'
            },
            {
                path: '/find/recommend',
                component: () => import('@/views/findChildPage/recommend.vue'),
                name: 'find-recommend'
            },
            {
                path: '/find/cartype',
                component: () => import('@/views/findChildPage/cartype.vue'),
                name: 'find-cartype'
            },
            {
                path: '/find/now',
                component: () => import('@/views/findChildPage/now.vue'),
                name: 'find-now'
            },
            {
                path: '/find/there',
                component: () => import('@/views/findChildPage/there.vue'),
                name: 'find-there'
            },
            {
                path: '/find/inquiry',
                component: () => import('@/views/findChildPage/inquiry.vue'),
                name: 'find-inquiry'
            },
        ]
    },
    {
        path: '/friend',
        component: () => import('@/views/friend.vue'),
        name: 'friend',
        children:[
            {
                path: "/friend/aiServer",
                component: () => import('../views/friendChildPage/aiServer.vue'),
                name: 'friend-aiServer'
            },
        ]
    },
    {
        path: '/buyCar',
        component: () => import('@/views/buyCar.vue'),
        name: 'buyCar'
    },
    {
        path: '/surprise',
        component: () => import('@/views/surprise.vue'),
        name: 'surprise'
    },
    {
        path: '/mine',
        component: () => import('@/views/mine.vue'),
        name: 'mine'
    },
]);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

const whitePath = ["/login", "/register"];
router.beforeEach((to, from, next) => {
  // console.log(to, from);
  if (!whitePath.includes(to.path)) {
    // 判断是否登录
    if (!localStorage.getItem("userInfo")) {
      router.push("/login");
      return;
    }
    next();
    return;
  }
  next();
});



export default router