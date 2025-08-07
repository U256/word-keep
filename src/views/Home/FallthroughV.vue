<script setup lang="ts">
import { useAttrs } from 'vue'

// NON reactive attributes
const { ['data-label']: dataLabel, ...restAttrs } = useAttrs()

defineOptions({
	// To ensure that the root element will not implicitly receive attributes
	// If not set, attributes like data-label="test" will be passed to the root element (if it is only one root el) AND to v-bind="$attrs"
	inheritAttrs: false,
})
</script>

<template>
	
	<div class="d" :data-label="dataLabel">Attributes</div>
	<!-- data-label="test" will not be passed implicitly if here is more than 1 root tag -->
	<div class="d goal" v-bind="restAttrs">content</div>
	<!-- <div class="d goal" v-bind="$attrs">content</div> -->

	<div class="d">$attrs: {{ $attrs }}</div>
</template>

<style scoped>
.d {
	&:first-of-type {
		margin-top: 20px;
		font-size: 20px;
	}
	&:last-of-type {
		margin-bottom: 20px;
	}
}

.goal {
	background-color: #f0f0f0;
	padding: 6px 22px;
	border: 2px dotted #ccc;
	margin: 7px 0;
	width: fit-content;
}
</style>
