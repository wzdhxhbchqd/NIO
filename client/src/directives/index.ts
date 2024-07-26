// lazy-load.directive.ts
import { DirectiveBinding } from 'vue';

const lazyLoadDirective: any = {
  mounted(el: HTMLImageElement, binding: DirectiveBinding<string>) {
    let observer: IntersectionObserver | null = null;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.src = binding.value; // 将实际的图片 URL 设置为 `src`
          if (observer) {
            observer.disconnect(); // 停止观察该元素
            observer = null;
          }
        }
      });
    };

    observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 当元素至少有10%进入视口时开始加载
    });

    observer.observe(el);
  },
};

export default lazyLoadDirective;