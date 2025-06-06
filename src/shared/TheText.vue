<script setup lang="ts">
import { computed } from 'vue'

// import { ref } from 'vue'

interface TheTextProps {
	tag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'article' | 'span' | 'div'
	align?: 'center' | 'end'
	color?: 'bg' | 'bg-section' | 'pale' | 'bright' | 'content' | 'accent'
	size?: 'hero' | 'title' | 'section' | 'main' | 'small'
}

const props = defineProps<TheTextProps>()
const tagWithDefault = computed(() => props.tag ?? 'p')
</script>

<template>
	<component
    class="text"
		:is="tagWithDefault"
		:class="{
			centered: props.align === 'center',
			end: props.align === 'end',
		}"
		:style="{
			color: props.color ? `var(--c-${props.color})` : 'unset',
			fontSize: props.size ? `var(--fz-${props.size})` : 'unset',
		}"
	>
		<slot>...</slot>
	</component>
</template>

<style scoped>
.text {
	display: grid;
}

.centered {
	place-items: center;
}

.end {
	place-items: flex-end;
}
</style>
