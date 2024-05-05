<script setup lang="ts">
// const props = defineProps({
//   title: String
// })
const props = defineProps<{
  title?: string
}>()

const emit = defineEmits(['response'])
emit('response', 'wtf?')
</script>

<template>
  <div class="wrapper">
    <h2 v-if="title">{{ title }}</h2>
    <slot>fallback content</slot>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 5px;
}
</style>