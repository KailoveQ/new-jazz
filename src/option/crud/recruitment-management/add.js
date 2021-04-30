export default () => {
  return {
    emptyBtn:false,
    submitBtn:false,
    column: [{
      label: "岗位名称",
      prop: "job-information",
      span: 7,
      row: true,
      offset: 1,
      rules: [{
        required: true,
        message: "请输入岗位名称",
        trigger: "blur"
      }]
    },{
      label: "薪资",
      prop: "money",
      span: 7,
      row: true,
      offset: 1,
      rules: [{
        required: true,
        message: "请输入岗位名称",
        trigger: "blur"
      }]
    },{
      type: 'ueditor',
      prop: "duty",
      span: 20,
      rules: [{
        required: true,
        message: "请输入岗位职责",
        trigger: "blur"
      }]
    }]
  }
}
