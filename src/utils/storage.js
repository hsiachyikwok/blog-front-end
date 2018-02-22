export default {
  get(key) {
    return JSON.parse(sessionStorage.getItem(key))
  },
  set(key, value) {
    return sessionStorage.setItem(key, JSON.stringify(value))
  },
  remove(key) {
    return sessionStorage.removeItem(key)
  },
  clear() {
    return sessionStorage.clear()
  }
}
