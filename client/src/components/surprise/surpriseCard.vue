<template>
  <div class="item-warpper w-full p-2 space-y-1" :ref="forwardRef">
    <div class="img-wrapper rounded-xl overflow-hidden relative">
      <img class="w-full" :src="item.cover" alt="" />
      <div class="item-mask absolute w-full h-full bg-black opacity-20 bottom-0"></div>
      <div class="area absolute bottom-1 left-1 text-white text-sm font-bold flex items-center space-x-1">
      </div>
    </div>
    <div class="title text-[16px]">{{ item.title }}</div>
    <div class="price text-[16px]">
      {{ getCurrency(item.price) }}
      <span class="font-normal text-[16px]">起</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { surprise } from "@/types/surprise"
import { getCurrency } from "@/utils/utils"
import { useForwardRef } from "@/hook/useForwardRef"

defineProps<{
  item: surprise
}>()

const forwardRef = useForwardRef()
</script>

<style scoped></style>
