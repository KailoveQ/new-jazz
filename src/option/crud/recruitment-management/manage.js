export default () => {
  return {
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

    column: [{
      label: "岗位名称",
      prop: "name",
      search: true,
      span: 24
    }, {
      label: "修改时间",
      prop: "修改时间",
      addDisplay:false,
      rules: [{
        required: true,
        message: "请输入姓名",
        trigger: "blur"
      }]
    }
      , {
        label: "内容",
        prop: "内容",
        type: 'ueditor',
        span: 24
      }],
  }
}
