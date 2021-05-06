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
        // action: baseUrl + '/oss/upload',
      },
      {
        label: "图片名称",
        prop: "pictureName",
        search: true,
        rules: [
          {
            required: true,
            message: "请输入案例名称",
            trigger: "blur",
          },
        ]
      },
      {
        label: "尺寸",
        prop: "pictureSize",
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
      }
    ],
  }
}
