<template>
  <div class="header-box">
    <h2>{{paramsAll.title}}</h2>
  </div>
</template>

<script>
  export default {
    name: "headerTop",
    props:["paramsAll"],
  }
</script>

<style scoped>
  .header-box{
    font-size: 22px;
    font-weight: normal;
    padding-bottom: 10px;
    color: #303031;
  }

</style>
