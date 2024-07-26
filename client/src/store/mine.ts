import type { mine } from "@/types/mine"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useMineStore = defineStore("mine", () => {
    const mine = ref<mine[]>([
        {icon: 'icon-wodejifen', font: '我的积分'},
        {icon: 'icon-wodequanyi', font: '我的权益'},
        {icon: 'icon-wodeqiabao', font: '我的卡包'},
        {icon: 'icon-wodedingdan', font: '我的订单'},
        {icon: 'icon-wodeqianbao', font: '我的钱包'},
        {icon: 'icon-NIO_Logo', font: '蔚来值'},
        {icon: 'icon-yaoqinghaoyou', font: '邀请好友'},
        {icon: 'icon-wodezhangdan1', font: '我的账单'},
        {icon: 'icon-wodejinrong-01', font: '我的金融'},
        {icon: 'icon-wodehuodong', font: '我的活动'},
      ]);
        
  return {
    mine
  }
})