import Vue from 'vue'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 声明全局方法
declare module 'vue/types/vue' {
  interface Vue {
  }
}
