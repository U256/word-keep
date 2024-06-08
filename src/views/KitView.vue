<script setup lang="ts">
import PinInput from '@/shared/PinInput.vue';
</script>

<template>
  <main>
    <h1>Ui Kit</h1>
    <section>
      <h2>Colors</h2>
      <div class="light-box">
        <p style="background: var(--c-bg)">--c-bg</p>
        <p style="background: var(--c-bg-section)">--c-bg-section</p>
        <p style="background: var(--c-pale)">--c-pale</p>
        <p style="background: var(--c-bright)">--с-bright</p>
        <p style="background: var(--c-content); color: var(--c-bg)">--c-content</p>
        <p style="background: var(--c-accent); color: var(--c-bg)">--c-accent</p>
      </div>

    </section>

    <section>
      <h2>Font size</h2>
      <p style=" font-size: var(--fz-hero)">lorem ipsum <b>Hero</b></p>
      <p style=" font-size: var(--fz-title)">lorem ipsum <b>Title</b></p>
      <p style=" font-size: var(--fz-section)">lorem ipsum <b>Section</b></p>
      <!-- <p style=" font-size: var(--fz-subtitle)">lorem ipsum <b>Subtitle</b></p> -->
      <p style=" font-size: var(--fz-main)">lorem ipsum <b>Main</b></p>
      <p style=" font-size: var(--fz-small)">lorem ipsum <b>Small</b></p>
      --
      <p style="font-size: 1rem">1rem</p>
    </section>

    <section>
      <h2>Pin input</h2>
      <PinInput @fulfilled="console.warn" />
    </section>
  </main>
</template>

<style scoped>
main {
  &>:is(div, section) {
    margin-bottom: 18px;
    padding: 12px 16px;
    background: var(--c-bg-section);

    &>:is(h2, h3, h4, h5, h6) {
      font-size: var(--fz-section);
      position: relative;
      width: fit-content;
      margin-bottom: 0.6em;

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

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 4px;
    background: rgb(124, 123, 123);
  }
}

/* colors */
.light-box {
  position: relative;
  margin: 8px 0;
  max-width: 700px;
  border-radius: 16px;
  background-color: white;
  padding: 50px;
  display: grid;

  &:before {
    position: absolute;
    pointer-events: none;
    content: '';
    top: 15px;
    left: 15px;
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    border: 18px solid gray;
    border-radius: 4px;
  }

  *>p {
    height: 50px;
    display: grid;
    place-items: center;
  }
}
</style>
