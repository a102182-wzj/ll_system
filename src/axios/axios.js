import axios from 'axios'
import qs from 'qs'
import _ from 'lodash'
import commonUtil from '@/utils/common'
const apiUrl = process.env.VUE_APP_API_URL // 还可以定义其他api接口变量  比如你请求的是两个不同的api接口  "application/json;charset=utf-8"
// 添加请求拦截器
let httpConfig = {}
axios.interceptors.request.use((config) => {
  console.log('config', config)
  httpConfig = config

  let obj = {}
  let url = ''
  if (config.method === 'post') {
    if (config.token) {
      obj = {
        'Authorization': `Bearer ${config.token}`
      }

    }
    url = apiUrl + (config.url ? config.url : '')
    config['headers'] = obj
    config['method'] = config.method ? config.method : 'post'
    config['data'] = config.data ? config.data : {}
    config['url'] = url
    // 启动异常提醒，默认是
    config['showMessage'] = _.isUndefined(config['showMessage']) ? true : !!config['showMessage']
    config.headers['Content-Type'] = config['application'] ? 'application/x-www-form-urlencoded;charset=utf-8' : 'application/json;charset=utf-8'
    const contentType = config.headers['Content-Type']
    if (contentType && contentType.includes('application/x-www-form-urlencoded')) {
      // ContentType是application/x-www-form-urlencoded，则需要将json数据序列化
      config['data'] = qs.stringify(config.data)
    }
    return config
  } else {
    if (config.token) {
      obj = {
        'Authorization': `Bearer ${config.token1}`
      }
    }

    config['data'] = config.data ? config.data : {}
    console.log('apiUrl', apiUrl)
    url = apiUrl + (config.url ? config.url : '')
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    config['url'] = url
    config['headers'] = obj
    console.log(config)
    return config
  }
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  // if (httpConfig['showMessage']) {
  //   if (response.data.status !== 200 && response.data.status !== 11001) {
  //     if (response.data.message) {
  //       if (httpConfig['notShowToast']) {
  //         return response
  //       }
  //       commonUtil.doMessage('fail', response.data.message)
  //     }
  //   }
  // }
  return response
}, function (error) {
  console.log('error')
  // 找不到请求路径（response的状态码是404  还有服务器错误什么的状态码 比如500  也可以在这里判断）
  if (error.response && error.response.status !== 200) {
    commonUtil.doMessage('fail', '服务开小差~~~')
  }
  return Promise.reject(error)
})

export default axios