import type { carType } from "@/types/carType"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useCarTypeStore = defineStore("car", () => {
    const car = ref<carType[]>([
        {
          introduce: '2024年蔚来ET7新上市',
          name: '王尼克',
          pic: 'https://p2.ssl.qhimgs1.com/sdr/400__/t017947e39179a3ab8c.png',
        },
        {
          introduce: 'ET7新旧款对比',
          name: '购车百晓生',
          pic: 'https://p2.ssl.qhimgs1.com/sdr/400__/t01bad74af570a3b0b2.jpg',
        },
        {
          introduce: '一图看懂2024款ES6',
          name: 'EV老谢',
          pic: 'https://p1.ssl.qhimgs1.com/sdr/400__/t014ddba5f19aafda9b.jpg',
        },
        {
          introduce: '再拿5星！蔚来ES6彰显全能实力',
          name: '爱新觉罗小羊羊',
          pic: 'https://p0.ssl.qhimgs1.com/sdr/400__/t01d58fad7e0c797474.jpg',
        },
        {
          introduce: '一图看懂2024款ET5T实力进阶',
          name: '牛老四',
          pic: 'https://p0.ssl.qhimgs1.com/sdr/400__/t0415571ce70781864a.jpg',
        },
        {
          introduce: '这件事，ET5T可谓潜力无限',
          name: 'shine',
          pic: 'https://p1.ssl.qhimgs1.com/sdr/400__/t040da641a5aa188837.jpg',
        },
        {
          introduce: '一图看懂2024款ET5一触即发',
          name: 'Yo-兰达',
          pic: 'https://p0.ssl.qhimgs1.com/sdr/400__/t031630d5241ae6dc6a.jpg',
        },
        {
          introduce: 'ET5，一秒变赛车？',
          name: 'Yo-兰达',
          pic: 'https://p0.ssl.qhimgs1.com/sdr/400__/t01b47be88d3b89a780.jpg',
        },
        {
          introduce: '一图看懂全新ES8产品亮点',
          name: '蒋大叔',
          pic: 'https://p0.ssl.qhimgs1.com/sdr/400__/t0387f273fe8ac0cc0e.jpg',
        },
        {
          introduce: '底盘有没有魔力，AI说了算',
          name: '蒋大叔',
          pic: 'https://p0.ssl.qhimgs1.com/sdr/400__/t0126d38b28c9b03c64.png',
        },
        {
          introduce: '一图看懂2024款EC7优雅进阶',
          name: 'Hugo张雨果',
          pic: 'https://p0.ssl.qhimgs1.com/sdr/400__/t048f1a453b16a57790.jpg',
        },
        {
          introduce: '谁读懂了EC7的优雅与力量',
          name: 'Hugo张雨果',
          pic: 'https://p0.ssl.qhimgs1.com/sdr/400__/t045c73d72c75eef18e.jpg',
        },
        {
          introduce: '一图看懂NIO ES7 突破边界',
          name: '黄雄 Leslie',
          pic: 'https://p2.ssl.qhimgs1.com/sdr/400__/t040f1928cfe90a2942.jpg',
        },
        {
          introduce: 'ES7突破边界，阳光下的全色实拍',
          name: '黄雄 Leslie',
          pic: 'https://p1.ssl.qhimgs1.com/sdr/400__/t0188f60b311a2ad7d7.jpg',
        },
        {
          introduce: '如何用ES7开启一场极致野奢',
          name: '黄雄 Leslie',
          pic: 'https://p2.ssl.qhimgs1.com/sdr/400__/t018d100f1d0404838c.jpg',
        }
      ]);
        
  return {
    car
  }
})