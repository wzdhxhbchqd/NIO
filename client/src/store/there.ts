import type { there } from "@/types/there"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useThereStore = defineStore("mine", () => {
    const there = ref<there[]>( [
        {introduce: '秋水广场live生日会 | 七月定制', time: '6月22日 星期六', people: '0人报名'},
        {introduce: '万象城牛屋生日会 | 七月定制···', time: '7月1日 星期一', people: '1人报名'},
        {introduce: '蔚来之夏户外游玩 | 牛屋夏令···', time: '7月27日 星期六', people: '0人报名'}
]);
        
  return {
    there
  }
})