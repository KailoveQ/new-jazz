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
    column: [
      {
        label: "ID",
        prop: "id",
        hide: true,
      },
      {
        label: "资质图片",
        prop: "photo",
        type: 'upload',
        listType: 'picture-img',
        accept: 'image/jpeg,image/png',
        action: baseUrl + '/upload',
        tip: '只能上传jpg/png文件，750*470，690*150',
        span: 24,
        propsHttp: {
          res: 'data',
          url:'absolutePath'
        },
        rules: [
          {
            required: true,
            message: "请上传图片",
            trigger: "blur",
          },
        ]
      },
      {
        label: "资质名称",
        prop: "name",
        row:true,
        // addDisplay: false,
        // editDisplay: false
      },
      {
        label: "状态",
        prop: "status",
        row: true,
        hide: false,
        type: 'select',
        value: 0,
        dicData: [{
          label: "显示",
          value: 0
        }, {
          label: "隐藏",
          value: 1
        }],
      },
      // {
      //   label: "资质类型",
      //   prop: "type",
      //   row: true,
      //   hide: false,
      //   type: 'select',
      //   value: 1,
      //   dicData: [{
      //     label: "类型一",
      //     value: 1
      //   }, {
      //     label: "类型二",
      //     value: 2
      //   }],
      // },
      {
        label: "修改时间",
        prop: "updateTime",
        addDisplay: true,
        // editDisplay: true,
        // hide: false
      },
    ],
  }
}
