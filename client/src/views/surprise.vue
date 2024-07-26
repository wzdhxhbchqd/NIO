<template>
    <!-- 主容器，设置高度 -->
    <div class="surprise">
      <!-- 引入 surpriseListVue 组件，传递必要的 props -->
      <surpriseListVue class="PromotionalList px-4" :items="surpriseList" :next="handleNextPage" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, toRefs, onMounted } from "vue"
  import { useSurpriseStore } from "@/store/surprise"
  
  // 引入 surpriseListVue 组件
  import surpriseListVue from "@/components/surprise/surpriseList.vue";
  
  // 使用 surpriseStore 来管理惊喜列表数据
  const surpriseStore = useSurpriseStore()
  
  // 当前页数的 ref
  const currentPage = ref(1)
  
  // 组件挂载时获取第一页的惊喜列表数据
  onMounted(async () => {
    await surpriseStore.getSurpriseList(1, 4)
  })
  
  // 处理下一页的函数，传入 setHasMore 函数用于控制是否还有更多数据
  const handleNextPage = async (setHasMore: (value: boolean) => void) => {
    currentPage.value++
    // 请求下一页的惊喜列表数据
    const res = await surpriseStore.getSurpriseList(currentPage.value, 4)
  
    // 打印返回结果
    console.log(res);
  
    // 如果没有更多数据了，则告知组件不再加载下一页
    if (!res.hasMore) {
      setHasMore(false)
    }
  }
  const test = async () => {
    // 发送 POST 请求到 /user/test 接口
    const res = await axios.post("/user/test");
    // 在控制台打印响应结果
  };
// 调用 test 函数
test()
  // 将 surpriseStore 中的 surpriseList 转换为响应式对象
  const { surpriseList } = toRefs(surpriseStore)
  </script>
  
  <style scoped>
  /* 组件样式，设置高度为 92% 视口高度 */
  .surprise {
    width: 100%;
    height: 92vh;
  }
  </style>