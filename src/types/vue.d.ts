/**
 * @Author: LiuCheng
 * @Date: 2023/8/25
 * @Time: 16:30
 * @Descriptions:
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
