<template>
 <div class="pro w-full h-full overflow-y-scroll">
    <div class="list-wrapper flex flex-wrap items-center flex justify-around flex-wrap text-center">
    <div class="item flex w-2/5 h-3/10"  v-for="(item, index) in items" :key="item.id">
      <surpriseCard :item="item" :ref="(el) => (index === items.length - 1 ? (itemRef = el as HTMLElement) : '')" />
    </div>
  </div>
  <div class="text-center" v-if="!hasMore">没有更多了</div>
 </div>
</template>

<script setup lang="ts">
import type { surprise } from "@/types/surprise"
import surpriseCard from "@/components/surprise/surpriseCard.vue"
import useIntersectionObserver from "@/hook/useIntersectionObserver"
import { ref } from "vue"

defineOptions({
  inheritAttrs: false,
})

const itemRef = ref<HTMLElement | null>(null)

const props = defineProps<{
  items: surprise[]
  /** 获取下一页的方法 */
  next?: (setHasMore: (value: boolean) => void) => void
}>()

const { hasMore, setHasMore } = useIntersectionObserver(itemRef, () => {
  console.log("触发了")
  props.next?.(setHasMore)
})


</script>

<style scoped></style>
