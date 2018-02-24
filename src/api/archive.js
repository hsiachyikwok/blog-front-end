import service from './resource'

export default {
getArchiveList(){
  return service.get('/archive/list')
}
}
