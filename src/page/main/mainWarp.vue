<template>
  <el-container>
    <el-header>
      <headerPage></headerPage>
    </el-header>
    <el-container class="section-content">
      <el-aside width="200px">
        <menuPage style="height: 100%;"></menuPage>
      </el-aside>
      <el-main>
        <div class="content-wrapper">
          <div class="wrapper-scroll">
            <slot></slot>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  import menuPage from "./menuPage";
  import headerPage from "./header";

  export default {
    name: "mainWarp",
    components:{menuPage,headerPage},
  }
</script>

<style>
  .el-header{
    padding: 0;
    height: auto !important;
  }
  .el-container.section-content{
    width: 100%;
    height: calc(100vh - 50px);
  }
  .el-menu{
    height: 100%;
  }
</style>
