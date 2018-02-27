import service from './resource'

export default {
  login() {
    return service.post('/admin/login', {

    })
  },
  logout() {
    return service.get('/admin/logout', {

    })
  }
}
