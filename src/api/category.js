import service from './resource'

export default {
getCategoryList(){
  return service.get('/category/list')
}
}
