<script setup lang="ts">
interface Props {
  disabled?: boolean
  error?: string
  id: string
  label?: string
  modelValue?: string
  placeholder?: string
  size?: 'large' | 'small'
  variant?: 'outlined' | 'filled'
  loading?: boolean
  feedback?: boolean
  toggleMask?: boolean
  invalid?: boolean
  autofocus?: boolean
}

withDefaults(defineProps<Props>(), {
  feedback: false,
  toggleMask: true
})

defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" :for="id">{{ label }}</label>
    <Password
      :id="id"
      :model-value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value || '')"
      @blur="$emit('blur')"
      :aria-describedby="`${id}-help`"
      :invalid="invalid || Boolean(error)"
      :placeholder="placeholder"
      :size="size"
      :variant="variant"
      fluid
      :disabled="disabled"
      :loading="loading"
      :feedback="feedback"
      :toggle-mask="toggleMask"
      :autofocus="autofocus"
    />
    <transition name="p-message" tag="div" class="flex flex-col">
      <Message v-if="error" severity="error">{{ error }}</Message>
    </transition>
  </div>
</template>

<style scoped>
.expand-enter-to,
.expand-leave-from {
  height: 1.5rem;
}
</style>
