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
    methods: {},
  },
  {
    name: "crud/news-management/list", //模块名字
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
