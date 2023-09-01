<template>
  <div class='flex-box'>
    <el-menu
      :default-active='activeIndex'
      menu-trigger='click'
      router
      v-bind='{...$attrs, ...props}'
    >
      <sub-menu :menus='menus' @click='handleClick' />
    </el-menu>
  </div>
</template>
<script setup lang='ts'>
import { ElMenu } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { menus } from './setting'
import SubMenu from './sub-menu.vue'
const router = useRouter()
const route = useRoute()
const activeIndex = ref('1')
const baseActiveIndex = ref('0')
const routerMap: any = {}
const props = defineProps({
  aaaaa: Boolean,
})

// const emit = defineEmits(['collapse']);
watch(
  () => route.path,
  (newPath) => {
    upDateMenu(newPath)
  }
)
const handleClick = (link: string) => {
  baseActiveIndex.value = '0'
  router.push(link)
}
router.beforeEach((to, form, next) => {
  const curPath = to.path
  upDateMenu(curPath)
  next()
})
const dg = (data: any) => {
  data.forEach((t: any, i: number) => {
    if (t.link) {
      routerMap[t.link] = {
        key: i,
        children: t.children,
      }
    }
    if (t.children && t.children.length) {
      dg(t.children)
    }
  })
}
// const onCollapse = () => {
//   isCollapse.value = !isCollapse.value;
//   emit("collapse", isCollapse.value);
// };
const upDateMenu = (curPath: string) => {
  const currentPath = curPath.split('/').filter((t) => t)
  dg(menus)
  const sum = [`/${currentPath[0]}`]
  currentPath.reduce((per: string, cur: string) => {
    sum.push(`/${per}/${cur}`)
    return ''
  })
  const pathIndex: any = []
  sum.forEach((path) => {
    const obj = routerMap[path]
    if (obj) {
      pathIndex.push(obj.key)
    }
  })
  activeIndex.value = pathIndex.join(',')
}
onMounted(() => {
  const curPath = router.currentRoute.value.path
  upDateMenu(curPath)
})
</script>
<style lang='less' scoped>
//.flex-box {
//  user-select: none;
//}
//.hide-or-show {
//  transition: all 0.2s linear;
//  &.hide {
//    :deep(.el-icon) {
//      transform: rotate(0deg);
//    }
//  }
//  &.show {
//    :deep(.el-icon) {
//      transform: rotate(180deg);
//    }
//  }
//}
</style>
