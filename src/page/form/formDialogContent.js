export const dialogContent={
  data() {
    return {

    };
  },
  computed:{
    dialogTxt(){
      return `
      <div>
        <div class="blue"><span class="blue"><</span>template<span class="blue">></span></div>
          <div class="left10">
            <div class="blue"><span class="blue"><</span>div<span class="blue">></span></div>
            <div class="left10">
              <span class="blue"><span class="blue"><</span>baseForm</span>
              <span><span class="orange">ref</span><span class="blue">=</span>"<span class="green">childForm</span>"</span>
              <span><span class="orange">@submitForm</span><span class="blue">=</span>"<span class="green">keepForm</span>"</span>
              <span><span class="orange">@selOrg</span><span class="blue">=</span>"<span class="green">searchHandle</span>"</span>
              <span class="blue">></span>
              <span class="blue"><span class="blue"><</span>/baseForm<span class="blue">></span></span>
             </div>
            <div class="blue"><span class="blue"><</span>/div<span class="blue">></span></div>
           </div>
         <div class="blue"><span class="blue"><</span>/template<span class="blue">></span></div>
      </div>
      <div>
        <div class="blue"><span class="blue"><</span>script<span class="blue">></span></div>
        <div class="left10">
            <div><span class="orange">export detault </span>{</div>
            <div class="left10">
                <div>data(){</div>
                <div class="left10">
                    <div><span class="orange">return </span>{</div>
                        <div class="left10">
                            paramAll:{<br/>
                            <div class="left10">
                              dialogType:1,<br/>
                              gutter:10,<span class="green">//表单栅格间隔</span><br/>
                              size:"small",<span class="green">// medium / small / mini 表单大小</span><br/>
                              labelWidth:80,<span class="green">//表单label文字宽度</span><br/>
                              labelPosition:'right',<span class="green">//表单label文字对其方式</span><br/>
                              formRule:{},<span class="green">//验证规则</span><br/>
                              menuData:[<br/>
                                {<br/>
                                <div class="left10">
                                  col:24,<br/>
                                  field:'name',<br/>
                                  label:'姓名',<br/>
                                  type:'input',<br/>
                                  formType:'text',<br/>
                                  placeholder:'请输入姓名',<br/>
                                  message:'姓名不能为空',<br/>
                                  </div>
                                },<br/>
                                {<br/><div class="left10">
                                  col:24,<br/>
                                  field:'sex',<br/>
                                  label:'性别',<br/>
                                  multiple:false,<br/>
                                  type:'select',<br/>
                                  filterable:true,<span class="green">//是否可搜索</span><br/>
                                  create:true,<span class="green">//是否允许用户创建新条目，需配合 filterable 使用</span><br/>
                                  arr:[{label:'男',val:1},{label:'女',val:0}],<br/>
                                  placeholder:'请选择性别',<br/>
                                  message:'性别不能为空',<br/></div>
                                },<br/>
                                {<br/><div class="left10">
                                  col:24,<br/>
                                  field:'age',<br/>
                                  label:'年龄',<br/>
                                  type:'inputNumber',<br/>
                                  placeholder:'请输入年龄',<br/>
                                  message:'年龄不能为空',<br/>
                                  min:0,<br/></div>
                                },<br/>
                                {<br/><div class="left10">
                                  col:24,<br/>
                                  field:'xl',<br/>
                                  label:'学历',<br/>
                                  type:'radio',<br/>
                                  arr:[{label:'高中',val:1},{label:'大专',val:2}],<br/>
                                  placeholder:'请输入学历',<br/>
                                  message:'学历不能为空',<br/></div>
                                },<br/>
                                {<br/><div class="left10">
                                  col:24,<br/>
                                  field:'xq',<br/>
                                  label:'兴趣',<br/>
                                  type:'checkbox',<br/>
                                  arr:[{label:'篮球',val:1},{label:'足球',val:2}],<br/>
                                  placeholder:'请选择兴趣',<br/>
                                  message:'兴趣不能为空',<br/></div>
                                },<br/>
                                {<br/><div class="left10">
                                  col:24,<br/>
                                  field:'birth',<br/>
                                  label:'出生日期',<br/>
                                  type:'date',<br/>
                                  dateType:'date',<span class="green"> //year,month,date,week,datetime,datetimerange,daterange</span><br/>
                                  format:'yyyy-MM-dd',<span class="green">//时间显示以及value格式,显示格式一定要与dateType对应，否则会报错哦</span><br/>
                                  isRange:false,<span class="green">//是否是范围选择的（两个时间）</span><br/>
                                  placeholder:'请选择出生日期',<br/>
                                  message: '出生日期不能为空',<br/></div>
                                },<br/>
                                {<br/><div class="left10">
                                  col:24,<br/>
                                  field:'icons',<br/>
                                  label:'搜索',<br/>
                                  type:'search',<br/>
                                  icon:'el-icon-search',<span class="green">//图标class名</span><br/>
                                  placeholder:'请选择搜索类型',<br/>
                                  // message: '搜索类型不能为空',<br/></div>
                                },<br/>
                                {<br/><div class="left10">
                                  col:24,<br/>
                                  field:'rangeDate',<br/>
                                  label:'范围日期',<br/>
                                  type:'date',<br/>
                                  dateType:'datetimerange', <span class="green">//year,month,date,week,datetime,datetimerange,daterange</span><br/>
                                  format:'yyyy-MM-dd HH:mm:ss',<span class="green">//时间显示以及value格式,显示格式一定要与dateType对应，否则会报错哦</span><br/>
                                  isRange:true,//是否是范围选择的（两个时间）<br/>
                                  placeholder:'请选择范围日期',<br/></div>
                                },<br/>
                                {<br/><div class="left10">
                                  col:24,<br/>
                                  field:'type',<br/>
                                  label:'类型',<br/>
                                  type:'cascader',<span class="green">//级联选择</span><br/>
                                  placeholder:'请选择',<br/>
                                  collapseTags:false,<span class="green">//多选模式下是否折叠Tag</span><br/>
                                  separator:'/',<span class="green">//选项分隔符</span><br/>
                                  filterable:false,<span class="green">//是否可搜索选项</span><br/>
                                  showAllLevel:false,<span class="green">//是否显示选中值的完整路径</span><br/>
                                  options:[<br/>
                                    {<br/><div class="left10">
                                      value: 'zhinan',<br/>
                                      label: '指南',<br/>
                                      children: [<br/>
                                        {<br/><div class="left10">
                                          value: 'shejiyuanze',<br/>
                                          label: '设计原则',<br/>
                                          children: [<br/>
                                            {<div class="left10">
                                              value: 'yizhi',<br/>
                                              label: '一致'<br/></div>
                                            },<br/>
                                            {<br/><div class="left10">
                                              value: 'fankui',<br/>
                                              label: '反馈'<br/></div>
                                            },<br/>
                                            {<br/><div class="left10">
                                              value: 'xiaolv',<br/>
                                              label: '效率'<br/></div>
                                            },<br/>
                                            {<br/><div class="left10">
                                              value: 'kekong',<br/>
                                              label: '可控'<br/></div>
                                            }<br/>
                                          ]<br/></div>
                                        },<br/>
                                        {<br/><div class="left10">
                                          value: 'daohang',<br/>
                                          label: '导航',<br/>
                                          children: [<br/>
                                            {<br/><div class="left10">
                                              value: 'cexiangdaohang',<br/>
                                              label: '侧向导航'<br/></div>
                                            },<br/>
                                            {<br/><div class="left10">
                                              value: 'dingbudaohang',<br/>
                                              label: '顶部导航'<br/></div>
                                            }<br/>
                                          ]<br/></div>
                                        }<br/>
                                      ]<br/></div>
                                    }<br/>
                                  ],//数据<br/>
                                  props:{<br/><div class="left10">
                                    multiple:true,//是否多选<br/>
                                    expandTrigger:'click',<span class="green">//次级菜单的展开方式click / hover</span><br/>
                                    value:'value',<span class="green">//指定选项值属性</span><br/>
                                    label:'label',<span class="green">//指定选项标签属性</span><br/>
                                    children:'children',<span class="green">//指定子级属性</span><br/></div>
                                  }<br/></div>
                                },<br/>
                                {<br/><div class="left10">
                                  col:12,<br/>
                                  field: 'isOpen',<br/>
                                  label:'是否打开',<br/>
                                  type:'switch',<br/>
                                  width:40,<span class="green">//switch 的宽度（像素）,默认40</span><br/>
                                  // activeIcon:'',<span class="green">//switch 打开时所显示图标的类名，设置此项会忽略 active-text</span><br/>
                                  // inactiveIcon:'',<span class="green">//switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text</span><br/>
                                  // activeText:'',<span class="green">//switch 打开时的文字描述</span><br/>
                                  // inactiveText:'',<span class="green">//switch 关闭时的文字描述</span><br/>
                                  activeColor:'#13ce66',<span class="green">//switch 打开时的背景色</span><br/>
                                  inactiveColor:'#ff4949',<span class="green">//switch 关闭时的背景色</span><br/></div>
                                },<br/>
                                {<br/><div class="left10">
                                  col:24,<br/>
                                  field:'remark',<br/>
                                  label:'备注',<br/>
                                  type:'input',<br/>
                                  formType:'textarea',<br/>
                                  rows:5,<br/>
                                  placeholder:'请输入备注信息',<br/>
                                  showLimit:true,<span class="green">//需要配合 maxlength 使用</span><br/>
                                  maxlength:150,<br/></div>
                                },<br/>
                              ],//表单项<br/>
                              menuObj:{<br/><div class="left10">
                                name:'',<br/>
                                age:'',<br/>
                                sex:'',<br/>
                                xl:'',<br/>
                                xq:[],<br/>
                                birth:'',<br/>
                                rangeDate:[],<span class="green">//['2021-04-12 12:00:00','2021-04-20 12:00:00'],//范围日期时间必须是一个数组</span><br/>
                                isOpen:true,<br/>
                                remark:'',<br/></div>
                              },//表单初始值<br/>
                              </div>
                            },
                        </div>
                    <div>}</div>
                </div>
                <div>},</div>
                <div>methods:{</div>
                    <div class="left10">
                        <span class="green">//表单提交</span><br/>
                        keepForm(obj){<br/><div class="left10">
                          console.log(obj);<br/>
                          <p class="green"> this.$refs.childForm.close();</p></div>
                        },<br/>

                        <span class="green">//搜索输入框触发相关事件</span><br/>
                        searchHandle(){<br/><div class="left10">
                          console.log("搜索触发");<br/></div>
                        },<br/>
                    </div>
                <div>},</div>
            </div>
            <div>}</div>
        </div>

        <div class="blue"><span class="blue"><</span>/script<span class="blue">></span></div>

      </div>

      `
    },
  }
}
