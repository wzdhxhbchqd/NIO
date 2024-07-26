<template>
   <div class="bottom-tab h-[8%] absolute w-[100%] bottom-0 flex items-center text-center justify-around" v-if="$route.path !== '/login' && $route.path !== '/register'">
            <div class="tab">
                <div class="i mb-[-0.133rem]">
                    <i class="iconfont icon-faxian text-xs" :class="{ 'active': $route.path.startsWith('/find/') }"></i>
                </div>
                <div class="link">
                    <router-link to="/find" class="no-underline">发现</router-link>
                </div>
            </div>
            <div class="tab">
                <div class="i mb-[-0.133rem]">
                    <i class="iconfont icon-xinxi text-xs" :class="{ 'active': $route.path === '/friend' }"></i>
                </div>
                <div class="link">
                    <router-link to="/friend" class="no-underline">朋友</router-link>
                </div>
            </div>
            <div class="tab">
                <div class=" i mb-[-0.133rem]">
                    <i class="iconfont icon-goucheyixianggongzuotai-goucheyixiangkehu text-xs"
                        :class="{ 'active': $route.path === '/buyCar' }"></i>
                </div>
                <div class="link">
                    <router-link to="/buyCar" class="no-underline">购车</router-link>
                </div>
            </div>
            <div class="tab">
                <div class="i mb-[-0.133rem]">
                    <i class="iconfont icon-jingxi text-xs" :class="{ 'active': $route.path === '/surprise' }"></i>
                </div>
                <div class="link">
                    <router-link to="/surprise" class="no-underline">惊喜</router-link>
                </div>
            </div>
            <div class="tab">
                <div class="i mb-[-0.133rem]">
                    <i class="iconfont icon-wode text-xs" :class="{ 'active': $route.path === '/mine' }"></i>
                </div>
                <div class="link">
                    <router-link to="/mine" class="no-underline">我的</router-link>
                </div>
            </div>
        </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .iconfont {

&.active {
    color: skyblue;
}
}

a {

&.router-link-active {
color: skyblue;
}
}
</style>