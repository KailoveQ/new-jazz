/**
 * 全局配置文件
 */
export default {
  title: "车融易管理后台",
  logo: "M",
  key: 'muck-truck-client',//配置主键,目前用于存储
  indexTitle: '车融易管理后台',
  lockPage: '/lock',
  tokenTime: 60000,//token过期时间
  Authorization: 'token',
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [400],
  //配置首页不可关闭
  isFirstPage: false,
  fistPage: {
    label: "首页",
    value: "/wel/index",
    params: {},
    query: {},
    meta: {
      i18n: 'dashboard'
    },
    group: [],
    close: false
  },
  //配置菜单的属性
  menu: {
    iconDefault: 'icon-caidan',
    props: {
      label: 'label',
      path: 'path',
      icon: 'icon',
      children: 'children'
    }
  }
}
