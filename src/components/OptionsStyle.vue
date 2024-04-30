<script lang="ts">
export default {
  data() {
    return {
      count: 0,
      title: 'Options style title'
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<template>
  <main class="wrapper">
    <p>{{ title }}</p>
    <br>
    <div>
      <button @click="increment">count is: {{ count }}</button>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 5px;
}
</style>