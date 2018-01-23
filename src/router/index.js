import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import ArticleList from '@/components/ArticleList'
import ArticleArea from '@/components/ArticleArea'
import error from '@/components/404'
import tag from '@/components/Tag'
import Category from '@/components/Category'
import TimeLine from '@/components/TimeLine'


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
