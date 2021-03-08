import axios from './axios'

const $http = {
  post: (url, data, param) => {
    return axios.post(url, data, param).then(res => {
      if (res.data.status === 200) {
        return Promise.resolve(res.data)
      } else if (res.data.status === 1003) {
        return Promise.reject(res.data)
      } else {
        return Promise.reject(res.data)

      }
    })
  },
  get: (url, param) => {
    return axios.get(url, param).then(res => {
      if (res.data.status === 0 || res.data.status === 200) {
        return Promise.resolve(res.data.content)
      } else if (res.data.status === 1003) {
        return Promise.reject(res.data)
      } else {
        return Promise.resolve(res.data)

        // return Promise.reject(res.data)
      }
    })
  }
}
export default $http