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
        label: "岗位名称",
        prop: "name",
        rules: [
          {
            required: true,
            message: "请输入岗位名称",
            trigger: "blur",
          },
        ]
      }, {
        label: "状态",
        prop: "status",
        type: 'select',
        value: 0,
        dicData: [{
          label: "活动信息",
          value: '1'
        }, {
          label: "图片放大",
          value: '2'
        }, {
          label: "指定页面",
          value: '4'
        }, {
          label: "文章链接",
          value: '6'
        }, {
          label: "无操作",
          value: '5'
        },],
        rules: [
          {
            required: true,
            message: "请选择薪资区域",
            trigger: "blur",
          },
        ]
      },
      {
        label: "岗位详情",
        prop: "detail",
        type: 'ueditor',
        hide: true,
        span: 24,
        options: {
          action: baseUrl + "/oss/upload",
          props: {
            url: "url"
          },
        },
        rules: [
          {
            required: true,
            message: "请输入岗位详情",
            trigger: "blur",
          },
        ]
      },],
  }
}
