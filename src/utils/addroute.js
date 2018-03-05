import admin from '@/views/admin'
import articlemanage from '@/views/admin/articlemanage'
import settingsmanage from '@/views/admin/settingsmanage'
import commentmanage from '@/views/admin/commentmanage'
import draftbox from '@/views/admin/draftbox'
import postarticle from '@/views/admin/postarticle'
import router from '@/router'
export function
addRoutes() {
  const adminRoute = [{
    path: '/admin',
    component: admin,
    children: [{
        path: '/admin/articlemanage',
        component: articlemanage,
        meta: {
          title: '文章管理'
        }
      },
      {
        path: '/admin/settingsmanage',
        component: settingsmanage,
        meta: {
          title: '设置管理'
        }
      },
      {
        path: '/admin/draftbox',
        component: draftbox,
        meta: {
          title: '草稿箱'
        }
      },
      {
        path: '/admin/commentmanage',
        component: commentmanage,
        meta: {
          title: '评论管理'
        }
      },
      {
        path: '/admin/postarticle',
        component: postarticle,
        name: 'postarticle',
        meta: {
          title: '编辑文章'
        }
      }
    ]
  }]
  router.addRoutes(adminRoute)
}
