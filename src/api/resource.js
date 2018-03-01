import axios from 'axios'
import storage from '@/utils/storage.js'
import {
  stringify
} from 'qs'
//axios.defaults.withCredentials = true
const service = axios.create({
  baseURL: process.env.BASE_API,
  withCredentials: true
})
//请求拦截
service.interceptors.request.use(config => {
  const token = storage.get('token') ? storage.get('token') : ''
  if (config.method.toUpperCase() === 'GET' || config.method.toUpperCase() === 'DELETE') { // querystring将json转from格式
    config.params = { ...config.params,
      token
    }
  } else {
    config.data = stringify({ ...config.data,
      token
    })
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
//响应拦截
service.interceptors.response.use(
  response => {
    console.log(response.data)
    return response.data //返回响应数据
  },
  error => {
    //可以根据code做一些提示
    console.log('error' + error)
    return Promise.reject(error)
  })

export default service
