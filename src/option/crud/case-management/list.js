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
        label: "封面图",
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
            message: "请上传封面图",
            trigger: "blur",
          },
        ]
      },
      {
        label: "案例名称",
        prop: "caseName",
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
        label: "案例分类",
        prop: "caseType",
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
        label: "案例详情",
        prop: "caseConetnt",
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
            message: "请输入案例详情",
            trigger: "blur",
          },
        ]
      }
    ],
  }
}
