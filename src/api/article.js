import service from './resource'

export default {
  getArticleListByState(){
    return service.get('/article/list')
  },

  addArticle(data){
    return service.post('/article/add',data)
  },

  updateArticle(data){
    return service.put('/article/update',data)
  },

  delArticle(id){
    return service.delete('/article/'+'id')
  }
}
