import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import article from '@/views/article'
import error from '@/views/404'
import tag from '@/views/tag'
import Category from '@/views/category'
import admin from '@/views/admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path:'/article',
      name:'article',
      component:article
    },
    {
      path :'/tag',
      component:tag
    },
    {
      path :'/category',
      component:Category
    },
    {
      path : '/404',
      component:error
    },
    {
      path: '/admin',
      component:admin
    },
    {
      path:'*',
      redirect : '/404'
    }
  ]
})
