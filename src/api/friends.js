import axios from 'axios'
import { HOST } from './config'

// 保存群聊信息近数据库
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
