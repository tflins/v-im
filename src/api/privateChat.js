import { HOST } from './config'
import axios from 'axios'

// 保存群聊信息近数据库
export function savePrivateChatMsg(query) {
  const url = '/api/privatechat/savemsg'

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

// 获取私聊信息
export function getPrivateChatMsg(params) {
  const url = '/api/privatechat/getmsg'

  return axios
    .get(HOST + url, {
      params
    })
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}
