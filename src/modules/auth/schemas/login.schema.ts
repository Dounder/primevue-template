import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  username: yup.string().required().min(3),
  password: yup.string().required()
})
