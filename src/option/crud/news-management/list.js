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
    column: [{
      label: "封面图",
      offset: 1,
      prop: "url",
      type: 'upload',
      listType: 'picture-img',
      accept: 'image/jpeg,image/png',
      tip: '只能上传jpg/png文件，750*470，690*150',
      rows: 1,
      // span: 7,
      rules: [
        {
          required: true,
          message: "请上传图片",
          trigger: "blur",
        },
      ]
    }, {
      label: "新闻名称",
      prop: "newsName",
      type: 'select',
      // dicData: [{
      //   label: '男',
      //   value: 0
      // }, {
      //   label: '女',
      //   value: 1
      // }],
      search: true,
    },{
      label: "新闻分类",
      prop: "newsType",
    },
      {
        label: "修改时间",
        prop: "newsChangeTimes",
      },],
  }
}
