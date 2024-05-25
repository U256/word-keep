<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ChunkWrapper from '../ChunkWrapper.vue'

const title = ref("RefsAndLifecycle")

const dynamicArgumentAttr = ref('aria-label')

// node refs
const pElementRef = ref<HTMLDivElement | null>(null)
onMounted(() => {
  // component is now mounted.
  console.log(pElementRef.value);
  pElementRef.value!.textContent = 'This content set directly by .textContent'
})
</script>

<template>
  <ChunkWrapper :title>
    <p :[dynamicArgumentAttr]="'value for dynamic attr'">
      Paragraph with ref aria-label
    </p>

    <div>
      <p ref="pElementRef">hello</p>
    </div>
  </ChunkWrapper>
</template>

<style scoped></style>