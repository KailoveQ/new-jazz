import {baseUrl} from '@/config/env'

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
      prop: "photo",
      type: 'upload',
      listType: 'picture-img',
      accept: 'image/jpeg,image/png',
      action: baseUrl + '/upload',
      tip: '只能上传jpg/png文件，750*470，690*150',
      rows: 1,
      // span: 7,
      // rules: [
      //   {
      //     required: true,
      //     message: "请上传图片",
      //     trigger: "blur",
      //   },
      // ]
    }, {
      label: "新闻名称",
      prop: "name",
      search: true,
    },{
      label: "新闻分类",
      prop: "typeId",
    },
      {
        label: "修改时间",
        prop: "updateTime",
        addDisplay: false,
        editDisplay: false
      },
      {
        label: "状态",
        prop: "status",
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
      {
        label: "新闻介绍",
        prop: "detail",
        type: 'ueditor',
        hide: true,
        span: 24,
        options: {
          action: baseUrl + "/upload/",
          props: {
            url: "url"
          },
        }
      }
    ],
  }
}
