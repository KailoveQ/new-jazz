<template>
  <basic-container>
    <avue-crud :data="data" :option="option"></avue-crud>
  </basic-container>

</template>
<script>
import { list } from "@/api/crud/contact-us/messageList";
export default {
  data() {
    return {
      data: [],
      option: {
        title: '表格的标题',
        titleSize: 'h3',
        titleStyle: {
          color: 'red'
        },
        page: false,
        align: 'center',
        menuAlign: 'center',
        column: [
          {
            label: '留言人',
            prop: 'name'
          },
          {
            label: '联系方式',
            prop: 'phone'
          }, {
            label: "邮箱",
            prop: "email",
          }, {
            label: "留言内容",
            prop: "detail",
          }
        ]
      },

    }
  },
  created() {
    this.list();
  },
  methods: {
    list() {
      this.loading = true;
      list().then(({data}) => {
        this.data = data.data;
        this.loading = false;
        console.log(this.data)
      });
    },
  },
}

</script>

<style lang="scss" scoped>
</style>
