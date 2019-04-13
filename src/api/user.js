import axios from 'axios'
import { HOST } from './config'

export async function login(userInfo) {
  const url = '/api/login'

  const data = Object.assign({}, userInfo)

  return axios
    .post(HOST + url, data)
    .then(response => {
      Promise.resolve(response.data)
    })
    .catch(err => {
      throw err
    })
}
