<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import { useForm } from 'vee-validate'
import { ref } from 'vue'

import { envs } from '@/config/envs'
import CustomButton from '@/modules/shared/components/CustomButton.vue'
import CustomInputPassword from '@shared/components/CustomInputPassword.vue'
import CustomInputText from '@shared/components/CustomInputText.vue'
import { loginSchema } from '../schemas'
import { useAuthStore } from '../store/auth.store'

const toast = useToast()
const authStore = useAuthStore()

const initialValues = envs.mode === 'development' ? { username: 'dev', password: 'Dev@123' } : {}
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: loginSchema,
  initialValues
})

const error = ref<string | null>(null)
const [username, usernameAttrs] = defineField('username')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(async ({ username, password }, { resetForm }) => {
  try {
    const ok = await authStore.login(username, password)

    if (!ok) {
      error.value = 'Credenciales incorrectas'
      return
    }

    toast.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Inicio de sesión exitoso',
      life: 1000
    })

    resetForm()
  } catch (error) {
    console.log(error)
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Ocurrió un error al iniciar sesión',
      life: 3000
    })
  }
})
</script>

<template>
  <div class="max-w-[30rem] h-full mx-auto flex items-center flex-col justify-center">
    <h1 class="font-bold text-center text-2xl mb-5">Logo</h1>
    <Card class="w-full dark:bg-gray-900 border dark:border-gray-700">
      <template #title>
        <div class="text-center">Inicio de sesión</div>
      </template>
      <template #content>
        <form @submit="onSubmit" class="flex flex-col gap-6" v-focustrap>
          <CustomInputText
            id="username"
            label="Nombre de usuario"
            v-model="username"
            v-bind="usernameAttrs"
            :error="errors.username"
            autofocus
          />
          <CustomInputPassword
            id="password"
            label="Contraseña"
            type="password"
            v-model="password"
            v-bind="passwordAttrs"
            :error="errors.password"
          />
          <CustomButton type="submit" label="Iniciar sesión" class="mt-4" fluid />
          <transition name="p-message" tag="div" class="flex flex-col">
            <Message v-if="error" severity="error">{{ error }}</Message>
          </transition>
        </form>
      </template>
    </Card>
  </div>
</template>
