<template>
  <mainWarp>
    <keep-alive :include="keepAliveRouter">
      <router-view v-if="isRouterAlive"/>
    </keep-alive>
  </mainWarp>
</template>

<script>
  import mainWarp from "./mainWarp";

  export default {
    name: "Main",
    components:{mainWarp},
    data() {
      return {
        keepAliveRouter: [],
        isRouterAlive: true,//控制视图是否显示的变量
      }
    },
  }
</script>

<style scoped>

</style>
