import qs from 'qs'

import axios from '../../src'
import { AxiosTransformer } from './../../src/types'

// axios.defaults.headers.common['test2'] = 123

// axios({
//   url: '/config/post',
//   method: 'post',
//   data: qs.stringify({
//     a: 1
//   }),
//   headers: {
//     test: '321'
//   }
// })
//   .then(res => {
//     console.log(res.data)
//   })
//   .catch()

// 请求响应配置化
// axios({
//   transformRequest: [
//     function(data) {
//       return qs.stringify(data)
//     },
//     ...(axios.defaults.transformRequest as AxiosTransformer[])
//   ],
//   transformResponse: [
//     ...(axios.defaults.transformResponse as AxiosTransformer[]),
//     function(data) {
//       if (typeof data === 'object') {
//         data.b = 2
//       }
//       return data
//     }
//   ],
//   url: '/config/post',
//   method: 'post',
//   data: {
//     a: 1
//   }
// })
//   .then(res => {
//     console.log(res.data)
//   })
//   .catch()

// 扩展 axios.create接口
const instance = axios.create({
  transformRequest: [
    function(data) {
      return qs.stringify(data)
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function(data) {
      if (typeof data === 'object') {
        data.b = 3
      }
      return data
    }
  ]
})

instance({
  url: '/config/post',
  method: 'post',
  data: {
    a: 1
  }
})
  .then(res => {
    console.log(res.data)
  })
  .catch()
