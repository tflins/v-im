import axios from 'axios'
import { HOST } from './config'

// 发送添加好友请求
export function addFriends(query) {
  const url = '/api/friends/add'

  const data = Object.assign({}, query)

  return axios
    .post(HOST + url, data)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

// 获取新好友请求
export function getnewfriends() {
  const url = '/api/friends/getnewfriends'

  return axios
    .get(HOST + url)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

// 添加好友到数据库
export function addToFriends(query) {
  const url = '/api/friends/addfriends'

  const data = Object.assign({}, query)

  return axios
    .post(HOST + url, data)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}

// 获取好友列表
export function getfriendslist() {
  const url = '/api/friends/getfriendslist'

  return axios
    .get(HOST + url)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}
