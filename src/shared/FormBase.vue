<script setup lang="ts" generic="T extends object">
defineProps<{
  model: T
  label?: string
  withSubmit?: boolean
}>()

const emit = defineEmits<{
  // (e: 'submit', val: T): void
  submit: [value: T] // modern, v3.3 and above
}>()

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (!e || !e.target) {
    return;
  }
  const formData = new FormData(e.target as HTMLFormElement);
  const value = Object.fromEntries(formData.entries());
  emit('submit', value as T)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" :aria-label="label">
    <slot>...</slot>
  </form>
</template>

<style scoped></style>