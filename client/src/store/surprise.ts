import { defineStore } from "pinia"
import { ref } from "vue"
import type { surprise } from "@/types/surprise"
import img from '../pics/t4.jpg'
export const useSurpriseStore = defineStore("promotional", () => {
  const _surprise: surprise[] = [
    { id: 1, title: "行李箱", cover: img, price: 173 },
    { id: 2, title: "行李箱", cover: img, price: 173 },
    { id: 3, title: "行李箱", cover: img, price: 173 },
    { id: 4, title: "行李箱", cover: img, price: 173 },
    { id: 5, title: "行李箱", cover: img, price: 173 },
    { id: 6, title: "行李箱", cover: img, price: 173 },
    { id: 7, title: "行李箱", cover: img, price: 173 },
    { id: 8, title: "行李箱", cover: img, price: 173 },
    { id: 9, title: "行李箱", cover: img, price: 173 },
    { id: 10, title: "行李箱", cover: img, price: 173 },
    { id: 11, title: "行李箱", cover: img, price: 173 },
    { id: 12, title: "行李箱", cover: img, price: 173 },
    { id: 13, title: "行李箱", cover: img, price: 173 },
    { id: 14, title: "行李箱", cover: img, price: 173 },
    { id: 15, title: "行李箱", cover: img, price: 173 },
    { id: 16, title: "行李箱", cover: img, price: 173 },
    { id: 17, title: "行李箱", cover: img, price: 173 },
    { id: 18, title: "行李箱", cover: img, price: 173 },
    { id: 19, title: "行李箱", cover: img, price: 173 },
    { id: 20, title: "行李箱", cover: img, price: 173 },
    { id: 21, title: "行李箱", cover: img, price: 173 },
    { id: 22, title: "行李箱", cover: img, price: 173 },
    { id: 23, title: "行李箱", cover: img, price: 173 },
    { id: 24, title: "行李箱", cover: img, price: 173 },
    { id: 25, title: "行李箱", cover: img, price: 173 },
    { id: 26, title: "行李箱", cover: img, price: 173 },
    { id: 27, title: "行李箱", cover: img, price: 173 },
    { id: 28, title: "行李箱", cover: img, price: 173 },
    { id: 29, title: "行李箱", cover: img, price: 173 },
    { id: 30, title: "行李箱", cover: img, price: 173 },
    { id: 31, title: "行李箱", cover: img, price: 173 },
    { id: 32, title: "行李箱", cover: img, price: 173 },
    { id: 33, title: "行李箱", cover: img, price: 173 },
    { id: 34, title: "行李箱", cover: img, price: 173 },
    { id: 35, title: "行李箱", cover: img, price: 173 },
    { id: 36, title: "行李箱", cover: img, price: 173 },
    { id: 37, title: "行李箱", cover: img, price: 173 },
    { id: 38, title: "行李箱", cover: img, price: 173 },
    { id: 39, title: "行李箱", cover: img, price: 173 },
    { id: 40, title: "行李箱", cover: img, price: 173 },
    { id: 41, title: "行李箱", cover: img, price: 173 },
    { id: 42, title: "行李箱", cover: img, price: 173 },
    { id: 43, title: "行李箱", cover: img, price: 173 },
    { id: 44, title: "行李箱", cover: img, price: 173 },
    { id: 45, title: "行李箱", cover: img, price: 173 },
    { id: 46, title: "行李箱", cover: img, price: 173 },
    { id: 47, title: "行李箱", cover: img, price: 173 },
    { id: 48, title: "行李箱", cover: img, price: 173 },
    { id: 49, title: "行李箱", cover: img, price: 173 },
    { id: 50, title: "行李箱", cover: img, price: 173 }
  ]

  const surpriseList = ref<surprise[]>([])

  // 模拟异步请求
  const getSurpriseList = (page: number, size: number) => {
    return new Promise<{
      data: surprise[]
      page: number
      total: number
      hasMore: boolean
    }>((resolve) => {
      setTimeout(() => {
        const data = _surprise.slice((page - 1) * size, page * size)
        surpriseList.value = [...surpriseList.value, ...data]
        resolve({
          data,
          page,
          total: _surprise.length,
          hasMore: page * size < _surprise.length,
        })
      }, 100)
    })
  }

  return {
    surpriseList,
    getSurpriseList,
  }
})
