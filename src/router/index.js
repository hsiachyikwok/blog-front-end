import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/views/homepage'
import article from '@/views/article'
import error from '@/views/404'
import tag from '@/views/tag'
import category from '@/views/category'
import admin from '@/views/admin'
import about from '@/views/about'
import articlelist from '@/views/articlelist'
import archive from '@/views/archive'
import login from '@/views/login'
import articlemanage from '@/views/admin/articlemanage'
import settingsmanage from '@/views/admin/settingsmanage'
import commentmanage from '@/views/admin/commentmanage'
import draftbox from '@/views/admin/draftbox'
import postarticle from '@/views/admin/postarticle'
import catarticlelist from '@/views/category/catarticle'
import tagarticlelist from '@/views/tag/tagarticle'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'layout',
      component: homepage,
      redirect: '/index',
      children: [{
          path: '/index',
          name: 'homepage',
          component: articlelist,
          meta: {
            title: '首页'
          }
        },
        {
          path: '/article/:id',
          name: 'article',
          component: article,
          meta: {
            title: '文章'
          }
        },
        {
          path: '/tag',
          component: tag,
          meta: {
            title: '标签'
          }
        },
        {
          path: '/about',
          component: about,
          meta: {
            title: '关于'
          }
        },
        {
          path: '/category',
          component: category,
          meta: {
            title: '分类'
          }
        },
        {
          path: '/archive',
          component: archive,
          meta: {
            title: '归档'
          }
        },
        {
          path: '/category/article',
          component: catarticlelist,
          name: 'catArticle',
          meta: {
            title: '分类-文章'
          }
        },
        {
          path: '/tag/article',
          component: tagarticlelist,
          name: 'tagArticle',
          meta: {
            title: '标签-文章'
          }
        },
      ]
    },
    {
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
            title: '文章管理'
          }
        },
      ]
    },
    {
      path: '/404',
      component: error,
      meta: {
        title: 'error'
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
