import Vue from 'vue'
import Router from 'vue-router';


import mainPage from "../page/main/main";
import formPage from "../page/form/formPage";
import home from "../page/home";



Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'main',
    component: mainPage,
    children:[
      {
        path:'/',
        meta: {
          icon:'',
          title: '首页'
        },
        component:home,
      },
      {
        path:'/formPage',
        meta: {
          icon:'',
          title: 'form表单'
        },
        component:formPage,
      },
    ],
  },



]

const router = new Router({
  mode: "hash",
  routes: routes
})

export default router
