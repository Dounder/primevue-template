import { api } from '@/api/api'
import type { AuthResponse, User } from '../interfaces'
import { isAxiosError } from 'axios'

interface CheckError {
  ok: false
  message: string
}

interface CheckSuccess {
  ok: true
  user: User
  token: string
}

export const checkAuthAction = async (): Promise<CheckError | CheckSuccess> => {
  try {
    const localToken = localStorage.getItem('token')

    if (localToken && localToken.length < 10)
      return { ok: false, message: 'Ocurrió un error al verificar la sesión' }

    const { data } = await api.get<AuthResponse>('/auth/verify')

    return {
      ok: true,
      user: data.user,
      token: data.token
    }
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401)
      return { ok: false, message: 'No se pudo verificar la sesión' }

    console.log(error)
    throw new Error('No se pudo verificar la sesión')
  }
}
