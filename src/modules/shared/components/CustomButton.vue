<script setup lang="ts">
import type { ButtonProps } from 'primevue/button'
import { useConfigStore } from '../stores/config.store'
import { storeToRefs } from 'pinia'

interface Props {
  className?: string
  label?: string
  severity?: ButtonProps['severity']
  outlined?: boolean
  fluid?: boolean
  icon?: string
  iconPos?: 'left' | 'right' | 'top' | 'bottom'
  iconClass?: string
  text?: boolean
  plain?: boolean
  disabled?: boolean
  loading?: boolean
  loadingIcon?: string
  type?: ButtonProps['type']
}

withDefaults(defineProps<Props>(), {
  className: '',
  severity: 'primary',
  outlined: false,
  fluid: false,
  type: 'button'
})

defineEmits(['click'])

const configStore = useConfigStore()
const { darkTheme } = storeToRefs(configStore)
</script>

<template>
  <Button
    :outlined="darkTheme ? true : undefined"
    :label="label"
    :severity="severity"
    :fluid="fluid"
    :icon="icon"
    :iconPos="iconPos"
    :text="text"
    :plain="plain"
    :disabled="disabled"
    :loading="loading"
    :loadingIcon="loadingIcon"
    :type="type"
    :class="className"
    :iconClass="`!${iconClass}`"
    @click="$emit('click')"
  />
</template>

<style scoped></style>
