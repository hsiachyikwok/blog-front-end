import service from './resource'

export default {
  getArticleListByState(state) {
    return service.get('/article/list/'+state)
  },

  getArticle(id) {
    return service.get('/article/' + id)
  },

  addArticle(data) {
    return service.post('/article/add', data)
  },

  updateArticle(data) {
    return service.put('/article/update', data)
  },

  delArticle(id) {
    return service.delete('/article/' + id)
  }
}
