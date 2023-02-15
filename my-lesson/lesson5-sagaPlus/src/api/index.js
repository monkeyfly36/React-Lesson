import axios from 'axios'

export const getList = () => {
  return axios.get('http://localhost:8082/api/user')
}
  