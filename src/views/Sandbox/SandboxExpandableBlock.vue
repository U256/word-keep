<script setup lang="ts">
import ExpandableBlock, {
	type ExpandBlockEmits,
	type ExpandBlockProps,
} from '@/shared/ExpandableBlock.vue'
import { useGlobalState } from '@/modules/uiShared/hooks'
import type { AccordionName } from '@/modules/uiShared/model'
// TODO: how to get props of ExpandableBlock?
// TODO: spread?

const props = defineProps<
	ExpandBlockProps & {
		name: AccordionName
	}
>()
const emit = defineEmits<ExpandBlockEmits>()

const state = useGlobalState()

function handleExpandClick() {
	const isOpening = state.handleAccordionClick(props.name)
	emit('onExpandClick', isOpening)
}
</script>

<template>
	<ExpandableBlock
		v-bind="props"
		:expanded="state.activeAccordion.includes(name)"
		@on-expand-click="handleExpandClick"
		:class="'sandbox-expandable-block'"
	>
		<slot />
	</ExpandableBlock>
</template>

<style scoped>
.sandbox-expandable-block {
	display: flex;
	flex-direction: column;
	height: fit-content;
}
</style>
