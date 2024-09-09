import { envs } from '@/config/envs'
import axios from 'axios'

const api = axios.create({
  baseURL: envs.apiUrl
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) config.headers.Authorization = `Bearer ${token}`

  return config
})

export { api }
