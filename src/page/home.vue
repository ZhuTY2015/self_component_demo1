<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="card.col" v-for="(card,index) in list" :key="index">
        <el-card class="box-card" :header="card.title">
          <div v-for="(item,ind) in card.child" :key="ind" class="item" @click="bindGo(item.url)">
            {{item.name}}
          <span style="color: darkorange">({{item.sub}})</span></div>
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {
        list:[
          {
            title:'公共组件',
            col:7,
            child:[
              {
                name:'简单判断弹框',
                sub:'popModel',
                url:'',
              },
              {
                name:'详情弹框',
                sub:'detailsPop',
                url:'',
              },
              {
                name:'form表单',
                sub:'formDialog',
                url:'/formPage'
              },
              {
                name:'查询模块',
                sub:'queryModel',
                url:'/formPage'
              },
              {
                name:'表格模块',
                sub:'tableModel',
                url:'/formPage'
              },
            ]
          },
          {
            title:'其他',
            col:7,
            child:[
              {
                name:'富文本编辑器',
                sub:'edit',
                url:'',
              },
            ]
          },
        ],

      }
    },
    methods:{
      bindGo(url){
        this.$router.push(url)
      },
    }
  }
</script>

<style scoped>
  .item{
    padding-bottom: 5px;
    cursor: pointer;
  }
</style>
<style>
  .el-card__header{
    padding: 10px;
    background: #409EFF;
    color: #FFFFFF;
  }
</style>
