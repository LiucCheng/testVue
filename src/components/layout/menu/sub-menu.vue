<template>
  <template v-for="(menuItem, i) in menus">
    <el-subMenu
      v-if="menuItem.children"
      :key="menuItem.title"
      :index="`${parentIndex ? `${parentIndex},` : ''}${i}`"
    >
      <template #title>
        <el-icon v-if="menuItem.icon">
          <component :is="menuItem.icon" />
        </el-icon>
        <span class="menu-title">{{ menuItem.title }}</span>
      </template>
      <div class="children">
        <el-menu-item-group>
          <sub-menu
            :menus="menuItem.children"
            :parent-index="`${i}`"
            @click="handleClick"
          />
        </el-menu-item-group>
      </div>
    </el-subMenu>
    <el-menu-item
      v-else
      :key="menuItem.title + 1"
      :index="`${parentIndex ? `${parentIndex},` : ''}${i}`"
      @click="handleClick(menuItem.link)"
    >
      <el-icon v-if="menuItem.icon">
        <component :is="menuItem.icon" />
      </el-icon>
      <span>{{ menuItem.title }}</span>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import type { IMenus } from './setting';
import { PropType } from 'vue';

defineProps({
  menus: {
    type: Array as PropType<IMenus[]>,
    default: () => [],
  },
  parentIndex: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['click']);
const handleClick = (data: string) => {
  emit('click', data);
};
</script>

<style scoped lang="less"></style>
