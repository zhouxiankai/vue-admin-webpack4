// import axios from 'axios'
// import api from './apiConfig'
// import template from 'url-template'
// import qs from 'qs'
// // import router from '../router'
// import Message from 'element-ui/lib/message'
// import Loading from 'element-ui/lib/loading'

// axios.defaults.timeout = 5000
// axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

// axios.interceptors.request.use(
//   config => {
//     if (localStorage.userToken) {
//       config.headers.common['X-AIYANGNIU-SIGNATURE'] = localStorage.userToken
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )

// axios.interceptors.response.use(response => {
//   if (response.data) {
//     // let code = response.data.code
//     // switch (code) { // code 109 时status为401
//     //   case 109:
//     //     localStorage.userToken = ''
//     //     break
//     // }
//   }
//   return response
// }, err => {
//   console.log(err.code)
//   for (const i in err) {
//     console.log(i)
//     console.log(err[i])
//   }
//   if (err && err.code) {
//     if (err.code === 'ECONNABORTED') {
//       err.message = '请求超时'
//     }
//   }
//   if (err && err.response) {
//     const status = err.response.status
//     switch (status) {
//       case 400:
//         err.message = '请求错误'
//         break

//       case 401:
//         err.message = '未授权，请登录'
//         localStorage.userToken = ''
//         // router.push({ name: 'login' })
//         break

//       case 403:
//         err.message = '拒绝访问'
//         break

//       case 404:
//         err.message = `请求地址出错: ${err.response.config.url}`
//         break

//       case 408:
//         err.message = '请求超时'
//         break

//       case 500:
//         err.message = '服务器内部错误'
//         break

//       case 501:
//         err.message = '服务未实现'
//         break

//       case 502:
//         err.message = '网关错误'
//         break

//       case 503:
//         err.message = '服务不可用'
//         break

//       case 504:
//         err.message = '网关超时'
//         break

//       case 505:
//         err.message = 'HTTP版本不受支持'
//         break

//       default:
//     }
//   }
//   return Promise.reject(err)
// })

// export const uploadFile = (type, apiName, url, formData, config = {}) => {
//   return new Promise((resolve, reject) => {
//     const path = (apiName !== '') ? api[apiName] + url : url
//     config.timeout = 0 // 永不超时
//     axios[type](path, formData, config).then(res => {
//       if (res.data.code === 101) {
//         resolve(res.data)
//       } else {
//         reject(res.data)
//       }
//     }).catch(res => {
//       reject(res)
//     })
//   })
// }

// export const req = (type, apiName, url, data, options) => {
//   return new Promise((resolve, reject) => {
//     // url拼接
//     let path = (apiName !== '') ? api[apiName] + url : url
//     //  console.log(path,"path");
//     // url-template
//     const UrlTemplate = template.parse(path)

//     //  console.log(data,"data");
//     // 格式化地址,如果data传入的参数是{params:{xx:"xxx",xxx:"xxxx"}}结构的，expand要取{xx:"xxx",xxx:"xxxx"}来格式化url
//     if (data && data.hasOwnProperty('params')) {
//       path = UrlTemplate.expand(data.params)
//       if (!data.params) {
//         data.params = {}
//       }
//       data.params._t = Date.now().toString()
//     } else {
//       path = UrlTemplate.expand(data)
//       if (data) {
//         data._t = Date.now().toString()
//       }
//     }
//     // post/put data转form
//     if (options && options.form) {
//       const opt = {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       }
//       data = qs.stringify(data)
//       delete options.form
//       options.headers = Object.assign({}, options.headers, opt.headers)
//     }
//     if (type === 'get' && options && options.headers) {
//       data ? data.headers = options.headers : data = options
//     }
//     const loadingInstance = Loading.service({ fullscreen: true, background: 'rgba(0, 0, 0, 0.5)' })
//     axios[type](path, data, options).then(res => {
//       if (res.data.code === 101) {
//         resolve(res.data)
//       } else {
//         if (res.data && res.data.message) {
//           Message.error(res.data.message)
//         }
//         reject(res.data)
//       }
//     }).catch(res => {
//       Message.error(res.message)
//       reject(res)
//     }).finally(res => {
//       loadingInstance.close()
//     })
//   })
// }
