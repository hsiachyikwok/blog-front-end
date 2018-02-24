import service from './resource'

export default {
getFriendLink(){
  return service.get('/friendlink/list')
}
}
