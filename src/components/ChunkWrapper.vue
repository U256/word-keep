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
    <!-- $attrs.class is a way to explicitly define where to pass an external class -->
    <h2 v-if="title">{{ title }}</h2>
    <slot>fallback content</slot>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  gap: 1em;
  padding: 1.3em;
  margin: .7em 0;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: .3em;
  background: var(--c-bg-section);
}
</style>