/**
 * @Author: LiuCheng
 * @Date: 2023/8/25
 * @Time: 16:16
 * @Descriptions:
 */
import Layout from '@/components/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'main',
    redirect: '/test',
    component: Layout,
    children: []
  }
]
export default routes