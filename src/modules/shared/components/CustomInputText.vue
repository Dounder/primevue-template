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
}

defineProps<Props>()

defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" :for="id">{{ label }}</label>
    <InputText
      :id="id"
      :model-value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value || '')"
      @blur="$emit('blur')"
      :aria-describedby="`${id}-help`"
      :invalid="Boolean(error)"
      :placeholder="placeholder"
      :size="size"
      :variant="variant"
      fluid
      :disabled="disabled"
      :loading="loading"
    />
    <transition name="expand">
      <small v-if="error" :id="`${id}-help`" class="text-red-500">{{ error }}</small>
    </transition>
  </div>
</template>

<style scoped>
.expand-enter-to,
.expand-leave-from {
  height: 1.5rem;
}
</style>
