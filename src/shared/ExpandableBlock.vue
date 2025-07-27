<script setup lang="ts">
import { ref, watch } from 'vue'

// defineProps({
//   title: String
// })
export type ExpandBlockProps = {
	title?: string
	expanded?: boolean
}
export type ExpandBlockEmits = {
	onExpandClick: [isOpen: boolean]
}
const props = defineProps<ExpandBlockProps>()
const emit = defineEmits<ExpandBlockEmits>()

const expandedInternal = ref(props.expanded ?? false)

function handleExpandClick() {
	expandedInternal.value = !expandedInternal.value
	emit('onExpandClick', expandedInternal.value)
}

watch(props, () => {
	expandedInternal.value = props.expanded
})
</script>

<template>
	<div class="wrapper">
		<!-- $attrs.class is a way to explicitly define where to pass an external class -->
		<slot name="beforeTitle"></slot>

		<div class="top">
			<button
				@click="handleExpandClick"
				:class="{ expand: true, _active: expandedInternal }"
				type="button"
			>
				<span>&gt;</span>
			</button>
			<h2 v-if="title">{{ title }}</h2>
			<h2 v-else>{{ expandedInternal ? 'close' : 'open' }}</h2>
		</div>

		<div :class="{ content: true, _open: expandedInternal }">
			<div class="content-inner">
				<slot>fallback content</slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	display: grid;
	gap: 1em;
	padding: 1.3em;
	margin: 0.7em 0;
	border: 1px solid rgba(128, 128, 128, 0.2);
	border-radius: 0.3em;
	background: var(--c-bg-section);
}

.top {
	display: flex;
	gap: 10px;
	align-items: center;
}

.expand {
	display: flex;
	padding: 2px;
	transition: all 0.3s ease;
	width: 26px;
	height: 26px;
	transform: rotate(-90deg);
	border-width: 1px;
	border-radius: 50%;

	&._active {
		transform: rotate(90deg);
	}

	& span {
		font-size: 22px;
		transform: translateY(-2px);
		line-height: 1;
		margin: auto;
	}
}

.content {
	display: grid;
	grid-template-rows: 0fr;
	transition: grid-template-rows 0.5s;

	&._open {
		grid-template-rows: 1fr;
	}
}

.content-inner {
	overflow: hidden;
}
</style>
