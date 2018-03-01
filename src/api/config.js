import service from './resource'

export default {
getConfig(){
  return service.get('/config/info')
},
updateConfig(data){
  return service.put('/config/update',data)
}
}
