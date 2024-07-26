import type { inquiry } from "@/types/inquiry"
import { defineStore } from "pinia"
import { ref } from "vue"
import i1 from '../pics/1.jpg'
import i2 from '../pics/2.jpg'
import i3 from '../pics/3.jpg'
import i4 from '../pics/4.jpg'
import i5 from '../pics/5.jpg'
import i6 from '../pics/6.jpg'
import i7 from '../pics/7.jpg'
import i8 from '../pics/8.jpg'
import i9 from '../pics/9.jpg'

export const useInquiryStore = defineStore("inquiry", () => {
    const inquiry = ref<inquiry[]>([
            {img: i1, name:'车辆产品'},
            {img: i2, name:'加电无忧'},
            {img: i3, name:'用车无忧'},
            {img: i4, name:'智能科技'},
            {img: i5, name:'购车指南'},
            {img: i6, name:'蔚来中心'},
            {img: i7, name:'用户成长'},
            {img: i8, name:'了解蔚来'},
            {img: i9, name:'用户百宝箱'},
            ]
      );
        
  return {
    inquiry
  }
})