<script setup lang="ts">
import { ref } from 'vue'
import ChunkWrapper from '../ChunkWrapper.vue'

const title = ref('Counter')

const count = ref(0)
async function increment(e: Event) {
  // console.log(e);
  count.value++
  // await nextTick() /* To wait for the DOM update to complete after a state change */
}
function multiply(val: number) {
  return val * 2
}
</script>

<template>
  <ChunkWrapper :title class="composition-counter">
    <div :title="multiply(count).toString()">
      value: <b>{{ count }}</b> calling <code>multiply</code> function in binding: <b>{{ multiply(count)
        }}</b>
    </div>

    <div>
      <button @click="increment">
        increment
      </button>

      <!-- using inline js, which will be replaced by eventListener (automatically under the vue's hood) -->
      <button @click="count--">decrement</button>
    </div>

  </ChunkWrapper>
</template>

<style scoped>
.composition-counter button {
  margin-right: 0.5em;
}
</style>