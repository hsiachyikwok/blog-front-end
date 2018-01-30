import axios from 'axios'
//import {stringify} from 'qs'

const service = axios.create({
  baseURL: process.env.BASE_API
 })
//请求拦截
service.interceptors.request.use(config => {
  //后台管理要带上token
  // const token = ''
  // config.data = stringify({...config.data, token}) // querystring将json转form格式
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
//响应拦截
service.interceptors.response.use(
  response =>  {
    console.log(response.data)
    return response.data //返回响应数据
  },
  error => {
    //可以根据code做一些提示
    console.log('error' + error)
    return Promise.reject(error)
  })

export default service
