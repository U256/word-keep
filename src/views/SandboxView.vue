<script setup lang="ts">
import Counter from '@/widgets/info/CompositionCounter.vue'
import DataBind from '@/widgets/info/CompositionDataBind.vue'
import RefsAndLifecycle from '@/widgets/info/RefsAndLifecycle.vue'
import Styling from '@/widgets/info/CompositionStyling.vue'
import ApiHandling from '@/widgets/info/CompositionApiHandling.vue'
import CompositionStyle from '@/widgets/CompositionStyle.vue'

import OptionsStyle from '@/widgets/OptionsStyle.vue'
</script>

<template>
  <main>
    <Counter />
    <DataBind />
    <RefsAndLifecycle />
    <Styling />
    <ApiHandling />
    <CompositionStyle />

    <OptionsStyle />
  </main>
</template>
