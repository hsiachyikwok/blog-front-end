import service from './resource'

export default {
  getArticleListByState(data) {
    return service.post('/article/list/' + data.state, {
      pageNum: data.pageNum,
      pageSize: data.pageSize
    })
  },

  getArticle(id) {
    return service.get('/article/' + id)
  },

  addArticle(data) {
    return service.post('/article/add', data)
  },

  updateArticle(data) {
    return service.post('/article/update', data)
  },

  delArticle(id) {
    return service.delete('/article/' + id)
  },
  getArticleListByTag(data) {
    return service.post('/article/tag/' + data.tag, {
      pageNum: data.pageNum,
      pageSize: data.pageSize
    })
  },
  getArticleListByCategory(data) {
    return service.post('/article/category/' + data.category, {
      pageNum: data.pageNum,
      pageSize: data.pageSize
    })
  }
}
