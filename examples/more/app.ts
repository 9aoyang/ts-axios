import axios from '../../src'

// document.cookie = 'a=b'

axios
  .get('/more/get')
  .then(res => {
    console.log(res)
  })
  .catch()

axios
  .post(
    'http://127.0.0.1:8088/more/server2',
    {},
    {
      withCredentials: true
    }
  )
  .then(res => {
    console.log(res)
  })
  .catch()

// xsrf
// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN-D',
//   xsrfHeaderName: 'X-XSRF-TOKEN-D'
// })

// instance
//   .get('/more/get')
//   .then(res => {
//     console.log(res)
//   })
//   .catch()

// HTTP Authorization
axios
  .post(
    '/more/post',
    {
      a: 1
    },
    {
      auth: {
        username: 'silence1amb',
        password: '123456'
      }
    }
  )
  .then(res => {
    console.log(res)
  })
  .catch()
