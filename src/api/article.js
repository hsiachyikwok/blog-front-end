import service from './resource'

export default {
  getArticleList(){
    return service.get('/article/list').then(function(res){
      console.log(res)
    })
  }
}
