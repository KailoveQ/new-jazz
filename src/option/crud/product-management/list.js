export default () => {
  return {
    translate: false,
    searchLabelWidth: 100,
    excelBtn: false,
    labelWidth: 110,
    selection: true,
    tip: false,
    index: false,
    align: 'center',
    headerAlign: 'center',
    border: true,
    stripe: true,
    column: [
      {
      label: "图片",
      prop: "entImg",
      type: 'upload',
      listType: 'picture-img',
      accept: 'image/jpeg,image/png',
      span: 12,
      row: true,
      // action: baseUrl + '/oss/upload',
      rules: [
        {
          required: true,
          message: "请上传门店照片",
          trigger: "blur",
        },
      ]
    },
      {
      label: "产品名称",
      prop: "prodName",
      search: true,
      rules: [
          {
            required: true,
            message: "请输入产品名称",
            trigger: "blur",
          },
      ]
    },
      {
      label: "产品分类",
      prop: "prodType",
      type: 'select',
      dicData: [{
        label: '男',
        value: 0
      }, {
        label: '女',
        value: 1
      }],
      search: true,
    },
      {
        label: "修改时间",
        prop: "changeTimes",
        search: true,
        addDisplay: false
      },
      {
        label: "产品详情",
        prop: "prodConetnt",
        type: 'ueditor',
        hide: true,
        span: 24,
        options: {
          // action: baseUrl + "/oss/upload",
          props: {
            url: "url"
          },
        },
        rules: [
          {
            required: true,
            message: "请输入产品详情",
            trigger: "blur",
          },
        ]
      }
    ],
  }
}
