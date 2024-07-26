<template>
    <div class="all text-[16px] w-[100vw] h-[100vh] relative overflow-hidden" >
        <router-view></router-view>
        <tabBar></tabBar>
        <router-link to="/login"></router-link>
    </div>
</template>

<script setup>
import tabBar from './views/layout/tabBar.vue';

</script>

<style lang="less" scoped></style>


