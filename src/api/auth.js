import service from './resource'
import md5 from 'md5'

export default {
  login(data) {
    return service.post('/admin/login', {
      username: data.username,
      password: md5(data.username + data.password)
    })
  },
  logout() {
    return service.get('/admin/logout', {

    })
  }
}
