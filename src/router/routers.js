
import Parent from '@/components/parent/index'
const routers = [
  {
    path: 'facilitator',
    name: 'facilitator-list',
    meta: {
      title: '服务商管理',
      icon: 'el-icon-menu'
    },
    component: () => import('../view/facilitator/index')
  },
  {
    path: 'platform',
    meta: {
      title: '平台管理',
      icon: 'el-icon-menu'
    },
    component: Parent,
    children: [
      {
        path: 'manager',
        name: 'manager',
        meta: {
          title: '管理员管理',
          icon: ''
        },
        component: () => import('../view/platform/manager')
      },
      {
        path: 'role',
        // name: 'role',
        meta: {
          title: '角色管理',
          icon: ''
        },
        component: Parent,
        children: [
          {
            path: 'role-detail',
            name: 'roleDetail',
            meta: {
              title: '角色分类管理',
              icon: ''
            },
            component: () => import('../view/platform/detail')
          },
          {
            path: 'role-detail1',
            name: 'roleDetail1',
            hidden: true,
            meta: {
              title: '角色分类管理222',
              icon: ''
            },
            component: () => import('../view/platform/detail')
          }
        ]
      }
    ]
  }
]

export default routers
