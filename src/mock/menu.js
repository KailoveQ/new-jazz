import Mock from 'mockjs'
const top = []
const first = [
  {
    label: "栏目管理",
    path: '/column-management',
    meta: {
    },
    component: 'views/column-management/index',
    icon: 'icon-caidan',
    children: [],
  },
  {
    label: "公司信息",
    path: '/company-information',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "公司概况",
      path: 'intro',
      component: 'views/company-information/intro',
      icon: 'icon-caidan',
      children: []
    }, {
      label: "企业文化",
      path: 'culture',
      component: 'views/company-information/culture',
      icon: 'icon-caidan',
      children: []
    }, {
      label: "发展历程",
      path: 'course',
      component: 'views/company-information/course',
      icon: 'icon-caidan',
      children: []
    }, {
        label: "资质证书",
        path: 'certificate',
        component: 'views/company-information/certificate',
        icon: 'icon-caidan',
        children: []
    }, {
        label: "宣传片",
        path: 'promotionalVideo',
        component: 'views/company-information/promotionalVideo',
        icon: 'icon-caidan',
        children: []
    }]
  },
  {
    label: "产品管理",
    path: '/product-management',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "产品列表",
      path: 'list',
      component: 'views/product-management/list',
      icon: 'icon-caidan',
      children: []
    }]
  },
  {
    label: "案例管理",
    path: '/case-management',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "案例列表",
      path: 'list',
      component: 'views/case-management/list',
      icon: 'icon-caidan',
      children: []
    },]
  },
  {
    label: "新闻管理",
    path: '/news-management',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "新闻列表",
      path: 'list',
      component: 'views/news-management/list',
      icon: 'icon-caidan',
      children: []
    },]
  },
  {
    label: "招聘管理",
    path: '/recruitment-management',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "岗位管理",
      path: 'manage',
      component: 'views/recruitment-management/manage',
      icon: 'icon-caidan',
      children: []
    },]
  },
  {
    label: "联系我们",
    path: '/contact-us',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "公司信息",
      path: 'companyInformation',
      component: 'views/contact-us/companyInformation',
      icon: 'icon-caidan',
      children: []
    }, {
      label: "咨询合作",
      path: 'refer',
      component: 'views/contact-us/refer',
      icon: 'icon-caidan',
      children: []
    },]
  },
  {
    label: "系统设置",
    path: '/system-settings',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "基础设置",
      path: 'basics',
      component: 'views/system-settings/basics',
      icon: 'icon-caidan',
      children: []
    }, {
      label: "宣传片图片修改",
      path: 'imageEditor',
      component: 'views/system-settings/imageEditor',
      icon: 'icon-caidan',
      children: []
    },{
      label: "其他图片修改",
      path: 'othersImageEditor',
      component: 'views/system-settings/othersImageEditor',
      icon: 'icon-caidan',
      children: []
    },]
  },
  {
  label: "权限管理",
  path: '/authority-management',
  meta: {
  },
  icon: 'icon-caidan',
  children: [{
    label: "角色列表",
    path: 'roles',
    component: 'views/authority-management/roles',
    icon: 'icon-caidan',
    children: []
  }, {
    label: "管理员列表",
    path: 'user',
    component: 'views/authority-management/user',
    icon: 'icon-caidan',
    children: []
  }, {
    label: "菜单列表",
    path: 'menu',
    component: 'views/authority-management/menu',
    icon: 'icon-caidan',
    children: []
  },]
},

]
const second = []
const third = []
export default ({ mock }) => {
  if (!mock) return;
  let menu = [first, second, third];
  Mock.mock('/user/getMenu', 'get', (res) => {
    let body = JSON.parse(res.body);
    return {
      data: menu[body.type] || []
    }
  })
  Mock.mock('/user/getTopMenu', 'get', () => {
    return {
      data: top
    }
  })

}
