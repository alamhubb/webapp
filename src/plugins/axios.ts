import Axios from 'axios'

const axios = Axios.create({
  // baseURL: 'http://localhost:8066',
  baseURL: process.env.VUE_APP_BASE,
  withCredentials: true,
  timeout: 60 * 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

axios.interceptors.request.use(
  config => {
    // 这里写死一个token，你需要在这里取到你设置好的token的值
    return config
  },
  error => {
    return Promise.reject(error)
  })

/****** respone拦截器==>对响应做处理 ******/
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error.response)
    return Promise.reject(error)
  }
)
export default axios
