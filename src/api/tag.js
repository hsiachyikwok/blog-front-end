import service from './resource'

export default {
getTagList(){
  return service.get('/tag/list')
}
}
