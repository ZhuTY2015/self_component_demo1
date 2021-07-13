<template>
  <div>
      <el-form ref="form" :model="paramAlls.menuObj"
               :label-width="paramAlls.labelWidth+'px'"
               :size="paramAlls.size"
               :rules="paramAlls.formRule"
               :label-position="paramAlls.labelPosition">
        <el-row :gutter="paramAlls.gutter">
          <el-col v-for="(item,index) in paramAlls.menuData" :key="index" :span="item.col">
            <!--input 输入框-->
            <el-form-item :label="item.label" v-if="item.type=='input'" :prop="item.field">
              <el-input v-model="paramAlls.menuObj[item.field]"
                        :type="item.formType"
                        :disabled="item.disabled==undefined?false:item.disabled"
                        :readonly="item.disabled==undefined?false:item.readonly"
                        :clearable="item.clearable==undefined?true:item.clearable"
                        :rows="item.rows"
                        :maxlength="item.maxlength"
                        :show-word-limit="item.showLimit"
                        :placeholder="item.placeholder"></el-input>
            </el-form-item>
            <!--带搜索的输入框-->
            <el-form-item :label="item.label" v-if="item.type=='search'" :prop="item.field">
              <el-input v-model="paramAlls.menuObj[item.field]" type=""
                        :disabled="item.disabled==undefined?false:item.disabled"
                        :readonly="true"
                        :clearable="item.clearable==undefined?true:item.clearable"
                        :placeholder="item.placeholder">
                <el-button slot="append" :icon="item.icon" @click="bindSearch"></el-button>
              </el-input>
            </el-form-item>
            <!--数字输入框-->
            <el-form-item :label="item.label" v-if="item.type=='inputNumber'" :prop="item.field">
              <el-input-number controls-position="right"
                               v-model="paramAlls.menuObj[item.field]"
                               :min="item.min"
                               :step="item.step"
                               :precision="item.precision"
                               :disabled="item.disabled==undefined?false:item.disabled"
                               :readonly="item.disabled==undefined?false:item.readonly"
                               :placeholder="item.placeholder"></el-input-number>
            </el-form-item>
            <!-- select 下拉框 -->
            <el-form-item :label="item.label" v-if="item.type=='select'" :prop="item.field">
              <el-select v-model="paramAlls.menuObj[item.field]"
                         :placeholder="item.placeholder"
                         :multiple="item.multiple"
                         :filterable="item.filterable"
                         :allow-create="item.create"
                         :disabled="item.disabled==undefined?false:item.disabled"
                         :readonly="item.disabled==undefined?false:item.readonly"
                         :clearable="item.clearable==undefined?true:item.clearable">
                <el-option v-for="child in item.arr" :key="child.val" :label="child.label" :value="child.val"></el-option>
              </el-select>
            </el-form-item>
            <!-- radio 单选 -->
            <el-form-item :label="item.label" v-if="item.type=='radio'" :prop="item.field">
              <el-radio-group v-model="paramAlls.menuObj[item.field]"
                              :disabled="item.disabled==undefined?false:item.disabled"
                              :readonly="item.disabled==undefined?false:item.readonly"
                              :clearable="item.clearable==undefined?true:item.clearable">
                <el-radio v-for="child in item.arr" :key="child.val"  :label="child.val">{{child.label}}</el-radio>
              </el-radio-group>
            </el-form-item>
            <!-- checkbox 复选框 -->
            <el-form-item :label="item.label" v-if="item.type=='checkbox'" :prop="item.field">
              <el-checkbox-group v-model="paramAlls.menuObj[item.field]"
                                 :disabled="item.disabled==undefined?false:item.disabled"
                                 :readonly="item.disabled==undefined?false:item.readonly"
                                 :clearable="item.clearable==undefined?true:item.clearable">
                <el-checkbox v-for="child in item.arr" :key="child.val"  :label="child.val">{{child.label}}</el-checkbox>
              </el-checkbox-group>

            </el-form-item>
            <!--date 时间日期-->
            <el-form-item :label="item.label" v-if="item.type=='date'" :prop="item.field">
              <el-date-picker v-if="item.isRange"
                              v-model="paramAlls.menuObj[item.field]"
                              :type="item.dateType"
                              :disabled="item.disabled==undefined?false:item.disabled"
                              :readonly="item.disabled==undefined?false:item.readonly"
                              :clearable="item.clearable==undefined?true:item.clearable"
                              :value-format="item.format"
                              range-separator="-"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
              <el-date-picker v-if="!item.isRange"
                              v-model="paramAlls.menuObj[item.field]"
                              :type="item.dateType"
                              :value-format="item.format"
                              :disabled="item.disabled==undefined?false:item.disabled"
                              :readonly="item.disabled==undefined?false:item.readonly"
                              :clearable="item.clearable==undefined?true:item.clearable"
                              :placeholder="item.placeholder">
              </el-date-picker>
            </el-form-item>
            <!-- cascader 级联选择器-->
            <el-form-item :label="item.label" v-if="item.type=='cascader'" :prop="item.field">
              <el-cascader
                v-model="paramAlls.menuObj[item.field]"
                :filterable="item.filterable"
                :collapse-tags="item.collapseTags"
                :separator="item.separator"
                :show-all-levels="item.showAllLevel"
                :disabled="item.disabled==undefined?false:item.disabled"
                :readonly="item.disabled==undefined?false:item.readonly"
                :clearable="item.clearable==undefined?true:item.clearable"
                :options="item.options" :props="item.props"></el-cascader>
            </el-form-item>
            <!--switch 开关-->
            <el-form-item :label="item.label" v-if="item.type=='switch'" :prop="item.field">
              <el-switch
                v-model="paramAlls.menuObj[item.field]"
                :width="item.width"
                :active-icon-class="item.activeIcon"
                :inactive-icon-class="item.inactiveIcon"
                :active-text="item.activeText"
                :inactive-text="item.inactiveText"
                :active-color="item.activeColor"
                :inactive-color="item.inactiveColor"
                :disabled="item.disabled==undefined?false:item.disabled"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="form-footer">
        <el-button size="small" type="primary" @click="close('form')">关闭</el-button>
        <el-button size="small" type="primary" @click="submitHandle('form')">保存</el-button>
      </div>
  </div>
</template>

<script>
  export default {
    name: "baseForm",
    props:["paramAll"],
    data(){
      return {

      }
    },
    mounted() {


    },
    computed:{
      paramAlls(){
        let list = this.paramAll.menuData;
        this.paramAll.formRule = {};
        list.forEach(item=>{
          if(item.message && item.type === 'input'){
            this.paramAll.formRule[item.field] = [{ required: true, message: item.message, trigger: 'blur' },]
          } else if(item.message && item.type === 'inputNumber'){
            this.paramAll.formRule[item.field] = [{ required: true, message: item.message, trigger: 'blur' },]
          } else if(item.message && item.type === 'search'){
            this.paramAll.formRule[item.field] = [{ required: true, message: item.message, trigger: 'blur' },]
          } else if(item.message && item.type === 'select'){
            this.paramAll.formRule[item.field] = [{ required: true, message: item.message, trigger: 'change' },]
          } else if(item.message && item.type === 'radio'){
            this.paramAll.formRule[item.field] = [{ required: true, message: item.message, trigger: 'change' },]
          }else if(item.message && item.type === 'checkbox'){
            this.paramAll.formRule[item.field] = [{ required: true, message: item.message, trigger: 'change' },]
          } else if(item.message && item.type === 'date'){
            this.paramAll.formRule[item.field] = [{ required: true, message: item.message, trigger: 'change' },]
          } else if(item.message && item.type === 'switch'){
            this.paramAll.formRule[item.field] = [{ required: true, message: item.message, trigger: 'change' },]
          } else if(item.message && item.type === 'cascader'){
            this.paramAll.formRule[item.field] = [{ required: true, message: item.message, trigger: 'change' },]
          }
        })

        return this.paramAll
      },


    },
    methods:{
      //关闭--同时清空验证
      close(formName){
        this.$refs[formName].resetFields();
      },
      //带搜索的输入框点击按钮
      bindSearch(){
        this.$emit("selOrg")
      },
      //保存操作
      submitHandle(formName){
        this.$refs[formName].validate((valid)=>{
          if(valid){
            console.log(this.paramAlls.menuObj);
            this.$emit("submitForm",this.paramAlls.menuObj)
          }
        })
      },
    },
    watch:{


    }
  }
</script>

<style scoped>
  .form-footer{
    text-align: right;
  }

</style>

