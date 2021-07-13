<template>
  <div>
    <el-menu default-active="" :default-openeds="defOpen" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-promotion"></i>
          <span>公共组件</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">弹窗组件</template>
          <el-menu-item index="1-1-1">简单判断弹窗</el-menu-item>
          <el-menu-item index="1-1-1">详情弹窗</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-2" route="/formPage">form表单</el-menu-item>
        <el-menu-item index="1-3">查询模块</el-menu-item>
        <el-menu-item index="1-4">表格模块</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-picture-outline-round"></i>
          <span slot="title">其他</span>
        </template>
        <el-menu-item index="2-1">富文本编辑器</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "menuPage",
    data(){
      return {
        defOpen:['1','1-1','2',],
      }
    },
  }
</script>

<style scoped>

</style>
