<script setup lang="ts">
interface Props {
  disabled?: boolean
  error?: string
  id: string
  label?: string
  modelValue?: any
  options?: { name: string; value: any }[]
  placeholder?: string
  scrollHeight?: string
  variant?: 'outlined' | 'filled'
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  scrollHeight: '15rem',
  loading: false
})
defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" :for="id">{{ label }}</label>
    <Select
      @change="$emit('update:modelValue', $event.value)"
      @blur="$emit('blur')"
      :modelValue="modelValue"
      :options="options"
      filter
      optionLabel="name"
      optionValue="value"
      :placeholder="placeholder"
      fluid
      filterMatchMode="contains"
      :invalid="Boolean(error)"
      :disabled="disabled"
      :variant="variant"
      showClear
      :id="id"
      :aria-describedby="`${id}-help`"
      :loading="loading"
    />
    <transition name="expand">
      <small v-if="error" :id="`${id}-help`" class="text-red-500">{{ error }}</small>
    </transition>
  </div>
</template>
