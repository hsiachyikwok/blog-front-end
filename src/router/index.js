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

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: homepage,
      redirect:'/homepage',
      children: [
        {
        path: '/homepage',
        name: 'homepage',
        component: articlelist,
      },
      {
        path: '/article/:id',
        name: 'article',
        component: article,
      }]
    },
    {
      path: '/tag',
      component: tag
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/404',
      component: error
    },
    {
      path: '/admin',
      component: admin
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
