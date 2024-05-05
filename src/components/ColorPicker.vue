<script setup></script>
<template>
  <fieldset class="theme-switcher makeev-is-cool">
    <legend class="theme-switcher__legend">Схема</legend>
    <input type="radio" name="color-scheme" value="dark" aria-label="dark theme" class="theme-switcher__radio _dark">
    <input type="radio" name="color-scheme" value="auto" checked aria-label="auto theme" class="theme-switcher__radio _auto">
    <input type="radio" name="color-scheme" value="light" aria-label="light theme" class="theme-switcher__radio _light">
    <div class="theme-switcher__status"></div>
  </fieldset>
</template>

<style>
.theme-switcher {
  position: relative;
  padding: 2px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: none;
  margin: 3px 20px;
}

.theme-switcher__legend {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.theme-switcher__radio {
  appearance: none;
  margin: 0;
  width: 32px;
  height: 32px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  transition: filter 0.1s ease-in;

  &:focus {
    outline: none;
  }

  &._dark {
    background-image: url('css/icons/dark.svg');

    &:checked~.theme-switcher__status {
      background-position: left 2px center;
    }
  }

  &._auto {
    background-image: url('css/icons/auto.svg');

    &:checked~.theme-switcher__status {
      background-position: center center;
    }
  }

  &._light {
    background-image: url('css/icons/light.svg');

    &:checked~.theme-switcher__status {
      background-position: right 2px center;
    }
  }
}

.theme-switcher__status {
  position: absolute;
  inset: 0;
  z-index: -1;
  box-shadow: 0 0 0 2px rgb(0 0 0 / 0.2);
  border-radius: 18px;
  background-color: rgb(255 255 255 / 0.5);
  background-repeat: no-repeat;
  background-image: url('css/icons/status.svg');
  background-size: 32px;
  background-position: center;
  transition: background-position 0.1s ease-in;
}

.theme-switcher__radio:focus-visible~.theme-switcher__status {
  box-shadow: 0 0 0 2px black;
}
</style>