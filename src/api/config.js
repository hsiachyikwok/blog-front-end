import service from './resource'

export default {
getConfig(){
  return service.get('/config/info')
}
}
