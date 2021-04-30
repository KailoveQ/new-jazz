<template>
  <basic-container>
<!--    <avue-crud v-bind="bindVal" v-on="onEvent" v-model="form" :page.sync="page">-->
<!--    </avue-crud>-->
    <avue-form ref="form" v-model="obj0" :option="option">
      <template slot="menuForm">
        <el-button icon="el-icon-user" type="primary" @click="handleSubmit">提 交</el-button>
        <el-button icon="el-icon-delete" @click="handleEmpty">清 空</el-button>
      </template>
    </avue-form>
  </basic-container>
</template>
<script>
export default window.$crudCommon(
  {
    data() {
      return {
        obj0:{},
      }
    },
    methods:{
      handleEmpty(){
        this.$refs.form.resetForm();
      },
      handleSubmit(){
        this.$refs.form.validate((vaild,done)=>{
          if(vaild){
            this.$message.success(JSON.stringify(this.obj0));
            setTimeout(()=>{
              done()
            },2000)
          }
        })
      }
    }
  },
  {
    name: "crud/recruitment-management/add", //模块名字
    list: "list", //列表接口名字
    update: "update", //更新接口名字
    add: "add", //新增接口名字
    del: "del", //删除接口名字
    rowKey: "id", //主键
    pageNumber: "pageNumber", //页码
    pageSize: "pageSize", //页数
    res: (data) => {
      return {
        total: 0,
        data: [],
      };
    }, //列表的结构
    total: "total", //总页数
    data: "list", //列表属性
  }
);
</script>

<style lang="scss" scoped>
</style>
