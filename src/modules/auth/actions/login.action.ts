import { isAxiosError } from 'axios'
import type { AuthResponse, LoginError, LoginSuccess } from '../interfaces'
import { api } from '@/api/api'

export const loginAction = async (
  username: string,
  password: string
): Promise<LoginSuccess | LoginError> => {
  try {
    const { data } = await api.post<AuthResponse>('/auth/login', { username, password })

    return { ok: true, message: 'ok', user: data.user, token: data.token }
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401)
      return { ok: false, message: 'Credenciales incorrectas' }

    console.error(error)
    throw new Error('Ocurrió un error inesperado')
  }
}
