<script setup lang="ts">
interface Props {
  disabled?: boolean
  error?: string
  id: string
  label?: string
  modelValue?: number
  placeholder?: string
  size?: 'large' | 'small'
  variant?: 'outlined' | 'filled'
  mode?: 'decimal' | 'currency'
  useGrouping?: boolean
  minFractionDigits?: number
  maxFractionDigits?: number
  min?: number
  max?: number
  prefix?: string
  currency?: string
  loading?: boolean
  invalid?: boolean
  autofocus?: boolean
}

withDefaults(defineProps<Props>(), {
  mode: 'decimal',
  useGrouping: true,
  minFractionDigits: 0,
  maxFractionDigits: 2,
  min: 0,
  max: Infinity,
  loading: false
})

defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" :for="id">{{ label }}</label>
    <InputNumber
      :input-id="id"
      :model-value="modelValue"
      @input="$emit('update:modelValue', $event.value)"
      @blur="$emit('blur')"
      :aria-describedby="`${id}-help`"
      :invalid="invalid || Boolean(error)"
      :placeholder="placeholder"
      :size="size"
      :variant="variant"
      :mode="mode"
      :useGrouping="useGrouping"
      :minFractionDigits="minFractionDigits"
      :maxFractionDigits="maxFractionDigits"
      :min="min"
      :max="max"
      :prefix="prefix"
      :currency="currency"
      locale="en-US"
      fluid
      :disabled="disabled"
      :loading="loading"
      :autofocus="autofocus"
    />
    <transition name="p-message" tag="div" class="flex flex-col">
      <Message v-if="error" severity="error">{{ error }}</Message>
    </transition>
  </div>
</template>

<style scoped>
.expand-leave-active,
.expand-enter-active {
  transition: all 350ms ease-in-out;
  overflow: hidden;
}

.expand-enter-to,
.expand-leave-from {
  height: 1.5rem;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  height: 0;
}
</style>
