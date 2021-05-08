
<template>
  <basic-container>
    <avue-form
        ref="form"
        v-model="data"
        :option="option0"
        v-loading="loading"
        @submit="handleSubmit"
        :permission="permissionList"
    >
    </avue-form>
  </basic-container>
</template>

<script>
import { getdate, update } from "@/api/crud/contact-us/refer";
export default {
  data() {
    return {
      data: {},
      loading: false,
      option0: {
        translate: false,
        searchLabelWidth: 100,
        excelBtn: false,
        labelWidth: 110,
        selection: true,
        tip: false,
        index: true,
        align: 'center',
        headerAlign: 'center',
        border: true,
        stripe: true,
        column: [
          {
            label: "公司名称",
            prop: "name",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入公司名称",
                trigger: "blur",
              },
            ],
          },
          // {
          //   label: "类型",
          //   prop: "type",
          //   type: 'select',
          //   row: true,
          //   value: 1,
          //   dicData: [{
          //     label: "公司信息",
          //     value: 1
          //   }, {
          //     label: "咨询合作",
          //     value: 2
          //   }],
          // },
          {
            label: "联系电话",
            prop: "phone",
            row: true,
            rules: [
              {
                required: true,
                message: "联系电话",
                trigger: "blur",
              },
            ],
          },
          {
            label: "合作内容",
            prop: "detail",
            type: "textarea",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入 合作内容",
                trigger: "blur",
              },
            ],
          },
        ],
      }
    };
  },
  computed: {
    permissionList() {
      // this.$set(
      //     this.option0,
      //     "submitBtn",
      //     this.vaildPermission(this, "business:orderSite:edit")
      // );
      return {};
    },
  },
  // activated() {
  //   // console.log('xxx')
  //
  //   this.getdate();
  // },
  created() {
    this.getdate();
  },
  methods: {
    getdate() {
      this.loading = true;
      getdate().then(({ data }) => {
        this.data = data.data;
        this.loading = false;
      });
    },
    handleSubmit() {
      this.$refs.form.validate((vaild, done) => {
        if (vaild) {
          update(this.data).then(() => {
            this.$message.success("修改成功");
            done();
            this.getdate();
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
