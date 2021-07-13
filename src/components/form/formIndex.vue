<template>
   <div>
     <baseForm v-if="paramAll.dialogType==1"
                :paramAll="paramAll"
                @submitForm="keepForm"
                @selOrg="searchHandle"
     ></baseForm>
     <formModal v-if="paramAll.dialogType==2||!paramAll.dialogType"
                :paramAll="paramAll"
                @submitForm="keepForm"
                @selOrg="searchHandle"
     ></formModal>
   </div>
</template>

<script>
  import formModal from "./formModal";
  import baseForm from "./baseForm";
  export default {
    name: "formIndex",
    props:["paramAll"],
    components:{formModal,baseForm},
    methods:{
      //表单提交
      keepForm(obj){
        console.log(obj);
      },
      //搜索输入框触发相关事件
      searchHandle(){
        console.log("搜索触发");
      },
    }
  }
</script>

<style scoped>

</style>
