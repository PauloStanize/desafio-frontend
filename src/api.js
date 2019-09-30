import axios from 'axios'

const baseUrl = 'http://localhost:1234/api'

const get = (endpoint, config = {}) => axios.get(baseUrl + endpoint, config)
const post = (endpoint, data = {}, config = {}) => axios.post(baseUrl + endpoint, data, config)
const put = (endpoint, data = {}, config = {}) => axios.put(baseUrl + endpoint, data, config)
const del = (endpoint, config = {}) => axios.delete(baseUrl + endpoint, config)

export default {
  get, post, put, delete: del
}