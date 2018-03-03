import service from './resource'

export default {
  getArchiveList(data) {
    return service.post('/archive/list', {
      pageSize: data.pageSize,
      pageNum: data.pageNum
    })
  }
}
