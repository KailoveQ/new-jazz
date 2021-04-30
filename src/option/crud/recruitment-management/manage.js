export default () => {
  return {
    translate: false,
    searchLabelWidth: 100,
    excelBtn: true,
    labelWidth: 110,
    selection: false,
    tip: false,
    index: false,
    align: 'center',
    headerAlign: 'center',
    border: true,
    stripe: true,
    dateBtn: false,

    column: [{
      label: "岗位名称",
      prop: "name",
      search: true,
      // message: "请输入岗位名称",
      searchRules: [{
        required: true,
        message: "请输入搜索岗位",
        trigger: "blur"
      }],
    }, {
      label: "修改时间",
      prop: "changeTime",
      addDisplay:false,

    }],
  }
}
