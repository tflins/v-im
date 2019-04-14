import axios from 'axios'
import { HOST } from './config'

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
