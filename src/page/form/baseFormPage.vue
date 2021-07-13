<template>
  <div>
    <p style="padding:10px 0;">基础表单</p>
    <el-row :gutter="20" style="background: #FFFFFF;padding: 10px;">
      <el-col :span="14">
        <div class="scroll-box">
          <formIndex :param-all="paramAll" @submitForm="keepForm" @selOrg="searchHandle"></formIndex>
        </div>
      </el-col>
      <el-col :span="10" style="border-left: 1px solid #eee;">
        <div class="scroll-box">
            <div v-html="baseTxt"> </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import formIndex from "../../components/form/formIndex";
  import {baseContent} from "./baseContent";

  export default {
    name: "baseFormPage",
    components:{formIndex},
    mixins:[baseContent],
    data() {
      return {

        paramAll:{
          dialogType:1,
          gutter:10,//表单栅格间隔
          size:"small",// medium / small / mini 表单大小
          labelWidth:80,//表单label文字宽度
          labelPosition:'right',//表单label文字对其方式
          formRule:{},//验证规则
          menuData:[
            {
              col:24,
              field:'name',
              label:'姓名',
              type:'input',
              formType:'text',
              placeholder:'请输入姓名',
              message:'姓名不能为空',
            },
            {
              col:24,
              field:'sex',
              label:'性别',
              multiple:false,
              type:'select',
              filterable:true,//是否可搜索
              create:true,//是否允许用户创建新条目，需配合 filterable 使用
              arr:[{label:'男',val:1},{label:'女',val:0}],
              placeholder:'请选择性别',
              message:'性别不能为空',
            },
            {
              col:24,
              field:'age',
              label:'年龄',
              type:'inputNumber',
              placeholder:'请输入年龄',
              message:'年龄不能为空',
              min:0,
            },
            {
              col:24,
              field:'xl',
              label:'学历',
              type:'radio',
              arr:[{label:'高中',val:1},{label:'大专',val:2}],
              placeholder:'请输入学历',
              message:'学历不能为空',
            },
            {
              col:24,
              field:'xq',
              label:'兴趣',
              type:'checkbox',
              arr:[{label:'篮球',val:1},{label:'足球',val:2}],
              placeholder:'请选择兴趣',
              message:'兴趣不能为空',
            },
            {
              col:24,
              field:'birth',
              label:'出生日期',
              type:'date',
              dateType:'date', //year,month,date,week,datetime,datetimerange,daterange
              format:'yyyy-MM-dd',//时间显示以及value格式,显示格式一定要与dateType对应，否则会报错哦
              isRange:false,//是否是范围选择的（两个时间）
              placeholder:'请选择出生日期',
              message: '出生日期不能为空',
            },
            {
              col:24,
              field:'icons',
              label:'搜索',
              type:'search',
              icon:'el-icon-search',//图标class名
              placeholder:'请选择搜索类型',
              // message: '搜索类型不能为空',
            },
            {
              col:24,
              field:'rangeDate',
              label:'范围日期',
              type:'date',
              dateType:'datetimerange', //year,month,date,week,datetime,datetimerange,daterange
              format:'yyyy-MM-dd HH:mm:ss',//时间显示以及value格式,显示格式一定要与dateType对应，否则会报错哦
              isRange:true,//是否是范围选择的（两个时间）
              placeholder:'请选择范围日期',
            },
            {
              col:24,
              field:'type',
              label:'类型',
              type:'cascader',//级联选择
              placeholder:'请选择',
              collapseTags:false,//多选模式下是否折叠Tag
              separator:'/',//选项分隔符
              filterable:false,//是否可搜索选项
              showAllLevel:false,//是否显示选中值的完整路径
              options:[
                {
                  value: 'zhinan',
                  label: '指南',
                  children: [
                    {
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [
                        {
                          value: 'yizhi',
                          label: '一致'
                        },
                        {
                          value: 'fankui',
                          label: '反馈'
                        },
                        {
                          value: 'xiaolv',
                          label: '效率'
                        },
                        {
                          value: 'kekong',
                          label: '可控'
                        }
                      ]
                    },
                    {
                      value: 'daohang',
                      label: '导航',
                      children: [
                        {
                          value: 'cexiangdaohang',
                          label: '侧向导航'
                        },
                        {
                          value: 'dingbudaohang',
                          label: '顶部导航'
                        }
                      ]
                    }
                  ]
                }
              ],//数据
              props:{
                multiple:true,//是否多选
                expandTrigger:'click',//次级菜单的展开方式click / hover
                value:'value',//指定选项值属性
                label:'label',//指定选项标签属性
                children:'children',//指定子级属性
              }
            },
            {
              col:12,
              field: 'isOpen',
              label:'是否打开',
              type:'switch',
              width:40,//switch 的宽度（像素）,默认40
              // activeIcon:'',//switch 打开时所显示图标的类名，设置此项会忽略 active-text
              // inactiveIcon:'',//switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text
              // activeText:'',//switch 打开时的文字描述
              // inactiveText:'',//switch 关闭时的文字描述
              activeColor:'#13ce66',//switch 打开时的背景色
              inactiveColor:'#ff4949',//switch 关闭时的背景色
            },
            {
              col:24,
              field:'remark',
              label:'备注',
              type:'input',
              formType:'textarea',
              rows:5,
              placeholder:'请输入备注信息',
              showLimit:true,//需要配合 maxlength 使用
              maxlength:150,
            },
          ],//表单项
          menuObj:{
            name:'',
            age:'',
            sex:'',
            xl:'',
            xq:[],
            birth:'',
            rangeDate:[],//['2021-04-12 12:00:00','2021-04-20 12:00:00'],//范围日期时间必须是一个数组
            isOpen:true,
            remark:'',
          },//表单初始值
        },
      }

    },
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
