import { HOST } from './config'
import axios from 'axios'

// 保存群聊信息近数据库
export function saveGroupMessage(query) {
  const url = '/api/groupchart/savegroupmessage'

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
