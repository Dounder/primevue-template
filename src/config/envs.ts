import joi from 'joi'

interface EnvVars {
  VITE_API_URL: string
}

const envSchema = joi
  .object({
    VITE_API_URL: joi.string().required()
  })
  .unknown(true)

const { error, value } = envSchema.validate(import.meta.env)

if (error) throw new Error(`Config validation error: ${error.message}`)

const envVars: EnvVars = value

export const envs = {
  apiUrl: envVars.VITE_API_URL,
  mode: import.meta.env.MODE
}
