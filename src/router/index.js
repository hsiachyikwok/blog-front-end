import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import ArticleList from '@/views/ArticleList'
import ArticleArea from '@/views/ArticleArea'
import error from '@/views/404'
import tag from '@/views/tag'
import Category from '@/views/category'
import TimeLine from '@/views/TimeLine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'test',
      component: HomePage,
      children: [
        {
          path : 'index',
          component:ArticleList
        },
        {
          path : 'article',
          component : ArticleArea
        },
        {
          path :'',
          component:ArticleList
        }
      ]
    },
    {
      path :'/tag',
      component:tag
    },
    {
      path :'/timeline',
      component:TimeLine
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
      path:'*',
      redirect : '/404'
    }
  ]
})
