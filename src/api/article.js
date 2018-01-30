import service from './resource'

export default {
  getArticleList(){
    return service.get('/article/list')
  }
}
