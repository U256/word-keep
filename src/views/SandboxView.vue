<script setup lang="ts">
import Counter from '../components/info/CompositionCounter.vue'
import DataBind from '../components/info/CompositionDataBind.vue'
import RefsAndLifecycle from '../components/info/RefsAndLifecycle.vue'
import Styling from '../components/info/CompositionStyling.vue'
import CompositionStyle from '../components/CompositionStyle.vue'

import OptionsStyle from '../components/OptionsStyle.vue'
</script>

<template>
  <main>
    <Counter />
    <DataBind />
    <RefsAndLifecycle />
    <Styling />
    <CompositionStyle />

    <OptionsStyle />
  </main>
</template>
