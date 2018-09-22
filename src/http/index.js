import axios from 'axios'

// axios 配置
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.headers.post['BXVIP-UA'] = 'web'

// 定义默认参数

// POST传参序列化
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断
axios.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default function http(params, url = `/api`) {
  params.client_type = 0
  let msg = ''
  //为了防止服务端内存泄漏，返回的new Promise 有可能造成一直被引用无法回收的情况，就不返回new Promise了
  return axios
    .post(url, params)
    .then(res => {
      let data = res.data
      if (data.msg === 0) {
        return Promise.resolve(data.data)
      } else {
        if (data.msg === 40000) {
          msg = '登录超时，请重新登录'
        }

        return Promise.reject(data.param)
      }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
