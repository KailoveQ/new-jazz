<template>
  <basic-container>
    <avue-crud v-bind="bindVal" v-on="onEvent" v-model="form" :page.sync="page" >
    </avue-crud>
  </basic-container>
</template>
<script>
export default window.$crudCommon(
  {
    data() {
      return {
      }
    },
    methods: {
      listAfter(data){
        console.log(data)
        data.records.map(item=>{
          item.status=item.status.code
          console.log(item.status)
        })
      },
    },
  },
  {
    name: "crud/news-management/list", //模块名字
    list: "list", //列表接口名字
    update: "update", //更新接口名字
    add: "add", //新增接口名字
    del: "del", //删除接口名字
    rowKey: "id", //主键
    pageNumber: "pageIndex", //页码
    pageSize: "pageSize", //页数
    res: (data) => {
      return data.data
    }, //列表的结构
    total: "total", //总页数
    data: "records", //列表属性
  }
);
</script>

<style lang="scss" scoped>
</style>
