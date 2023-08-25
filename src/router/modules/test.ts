/**
 * @Author: LiuCheng
 * @Date: 2023/8/25
 * @Time: 16:25
 * @Descriptions:
 */
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/index.vue')
  }
]

export default routes
