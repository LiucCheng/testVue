<template>
  <el-container class='layout-container-demo' style='height: 100vh'>
    <el-aside>
      <el-scrollbar>
        <wsf-menu :collapse='isCollapse' @close='onClose'/>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style='text-align: right; font-size: 12px'>
        <span class='collapse-box' @click='onToggleCollapse'>
          <el-icon class='font20' v-if='!isCollapse'><Fold /></el-icon>
          <el-icon class='font20' v-else><Expand /></el-icon>
        </span>
        <span>Tom</span>
      </el-header>

      <el-main>
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import WsfMenu from './menu/index.vue';

const isCollapse = ref(false)
const onClose = () => {
  // console.log('onClose')
}
const onToggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped lang='scss'>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  width: auto;
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
}
.collapse-box{
  float: left;
  cursor: pointer;
  .font20 {
    font-size: 20px;
    vertical-align: middle;
  }
}
</style>