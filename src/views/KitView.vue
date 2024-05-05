<script setup lang="ts">
</script>

<template>
  <main>
    <h1>Ui Kit</h1>
    <section>
      <h2>Colors</h2>
      <p>todo</p>
    </section>
    <section>
      <h2>Font size</h2>
      <p style=" font-size: var(--fz-hero)">Hero</p>
      <p style=" font-size: var(--fz-title)">Title</p>
      <p style=" font-size: var(--fz-section)">Section</p>
      <p style=" font-size: var(--fz-subtitle)">Subtitle</p>
      <p style=" font-size: var(--fz-big)">Big</p>
      <p style=" font-size: var(--fz-main)">Main</p>
      <p style=" font-size: var(--fz-small)">Small</p>
    </section>
  </main>
</template>

<style scoped>
main {
  &>:is(div, section) {
    margin-bottom: 16px;

    &>:is(h2, h3, h4, h5, h6) {
      font-size: var(--fz-section);
      position: relative;
      width: fit-content;
      margin-bottom: 0.15em;

      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 3px;
        background: rgb(214, 213, 213);
      }
    }
  }
}

h1 {
  font-size: var(--fz-hero);
  margin-bottom: 0.3em;
  position: relative;
  width: fit-content;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 4px;
    background: rgb(124, 123, 123);
  }
}
</style>
