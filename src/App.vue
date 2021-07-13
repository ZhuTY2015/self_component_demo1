<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

  .blue{
    color: #409EFF;
  }
  .orange{
    color: darkorange;
  }
  .green{
    color: #42b983;
  }
  .left10{
    margin-left: 10px;
  }
  .scroll-box{
    max-height: 400px;
    overflow-y: auto;
  }

</style>
