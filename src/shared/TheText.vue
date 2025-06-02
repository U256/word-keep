<script setup lang="ts">
import { computed } from 'vue'

// import { ref } from 'vue'

interface TheTextProps {
	tag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'article' | 'span' | 'div';
}

const props = defineProps<TheTextProps>()
const tagWithDefault = computed(() => props.tag ?? 'p')
</script>

<template>
	<component :is="tagWithDefault" class="text">
		<slot>...</slot>
	</component>
</template>

<style scoped>
.text {
	display: grid;
	place-items: center;
}
</style>
