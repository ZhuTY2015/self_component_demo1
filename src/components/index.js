
import formIndex from "./form/formIndex";


const zrlcomponent={
  // 组件注册 install
  install(Vue){

    /*组件区*/
    Vue.component("formDialog",formIndex) //表单
  }
}
export default zrlcomponent;
