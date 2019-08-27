import axios from 'axios'
import { HOST } from './config'

// 用户登录
export function login(userInfo) {
  const url = '/api/user/login'

  const data = Object.assign({}, userInfo)

  return axios
    .post(HOST + url, data)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

// 用户注册
export function register(userInfo) {
  const url = '/api/user/register'

  const data = Object.assign({}, userInfo)

  return axios
    .post(HOST + url, data)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

// 根据昵称获取用户列表
export function getName(name) {
  const url = '/api/user/getname'

  return axios
    .get(HOST + url, {
      params: {
        name: name
      }
    })
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

// 根据id获取用户列表
export function getUserById(uid) {
  const url = '/api/user/getuserbyid'

  return axios
    .get(HOST + url, {
      params: {
        uid: uid
      }
    })
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}
