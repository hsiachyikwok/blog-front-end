import service from './resource'

export default {
getConfig(){
  return service.get('/config/info')
},
updateConfig(data){
  return service.post('/config/update',data)
}
}
