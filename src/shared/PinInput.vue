<script setup lang="ts">
import { ref } from 'vue'

const DEFAULT_LENGTH = 4;

interface Props {
  length?: number;
}
const props = defineProps<Props>()
const emit = defineEmits<{
  fulfilled: [value: string]
}>()

const fullValue = ref('')
const cellsFiller = ref(Array(props.length || DEFAULT_LENGTH).fill('').map((_, i) => i))
const cellsRef = ref<any[]>([])

const handleInput = (e: Event) => {
  const cellValue = (e.target as HTMLInputElement)?.value;
  if (cellValue === '') {
    return;
  }

  fullValue.value = cellsRef.value.map(node => node?.value || ' ').join('')

  const pos = Number((e.target as HTMLInputElement)?.dataset.order);
  const isLast = pos + 1 === (props.length || DEFAULT_LENGTH)
  if (isLast) {
    emit('fulfilled', fullValue.value)
  } else {
    const nextCell = cellsRef.value?.[pos + 1];
    (nextCell as any)?.focus?.();
    (nextCell as any)?.select?.()
  }
}

const handleBackspace = (e: Event) => {
  const pos = Number((e.target as HTMLInputElement)?.dataset.order);
  const prevCell = cellsRef.value?.[pos === 0 ? 0 : pos - 1];
  (prevCell as any)?.focus?.();
  (prevCell as any)?.select?.()
}

const handlePaste = (e: any) => {
  const paste = e.clipboardData.getData("text")
  if (typeof paste === 'string' && paste.length) {
    const length = (props.length || DEFAULT_LENGTH) - 1;

    for (let i = 0; i < length; i++) {
      const pasteChar = paste[i]
      if (pasteChar) {
        console.log(cellsRef.value?.[i]);

        // cellsRef.value?.[i]?.value = pasteChar
      }
      console.log(`${i}: `, paste[i]);
    }
    // cellsRef.value.forEach((element, i) => {
    //   console.log(`${i}: `, paste[i]);
    //   element.value = paste[i] || '_'
    // });
    // cellsRef.value.at(-1)?.focus()
    // cellsRef.value.at(-1)?.select()
  }
}

// TODO handle paste 3310

defineExpose({ value: fullValue })
</script>

<template>
  <div class="pin-input" @paste="handlePaste">
    <input v-for="cell in cellsFiller" maxlength="1" @input="handleInput" :data-order="cell" :key="cell" type="text"
      @keyup.backspace="handleBackspace" ref="cellsRef">
  </div>
</template>

<style scoped>
.pin-input {
  display: grid;
  grid-auto-flow: column;
  width: fit-content;
  gap: .3em;

  & input {
    --side-padding: 0.5em;
    aspect-ratio: 1/1;
    width: calc(1ch + 2 * var(--side-padding));
    text-align: center;
    background-color: var(--c-accent);
    outline: none;
    border-radius: .3em;
  }
}
</style>