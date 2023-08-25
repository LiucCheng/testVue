import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, Router } from 'vue-router';
import RouterCommon from '@/router/common';
import RouterModule from '@/router/modules';

// 路由集合
export const routes: RouteRecordRaw[] = [...RouterCommon];
// 创建路由
const router: Router = createRouter({
  history: createWebHistory(), // process.env.BASE_URL
  routes,
});

RouterModule.forEach((e: RouteRecordRaw) => {
  router.addRoute('main', e);
});

export default router
