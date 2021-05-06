import { baseUrl } from '@/config/env';
export default () => {
  return {
    translate: false,
    searchLabelWidth: 100,
    excelBtn: false, viewBtn: true,
    labelWidth: 110,
    selection: true,
    tip: false,
    index: true,
    align: 'center',
    headerAlign: 'center',
    border: true,
    stripe: true,
    searchShow: false,
    column: [ {
        label: "类型",
        prop: "id",
        // rules: [
        //   {
        //     required: true,
        //     message: "请输入岗位名称",
        //     trigger: "blur",
        //   },
        // ]
      },
      {
        label: "栏目名称",
        prop: "name",
        // rules: [
        //   {
        //     required: true,
        //     message: "请输入岗位名称",
        //     trigger: "blur",
        //   },
        // ]
      },
      // {
      //   label: "修改时间",
      //   prop: "createTime",
      //   addDisplay: false,
      //   editDisplay: false
      // },
      {
        label: "状态",
        prop: "level",
        type: 'select',
        value: 0,
        dicData: [{
          label: "上架",
          value: 0
        }, {
          label: "下架",
          value: 1
        }],

      },
      ],
  }
}
