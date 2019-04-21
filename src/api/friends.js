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
