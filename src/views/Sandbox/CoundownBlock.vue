<script setup lang="ts">
import ExpandableBlock from '@/views/Sandbox/SandboxExpandableBlock.vue'
import CountdownWidget from '@/widgets/CountdownWidget.vue'
import { ref, useTemplateRef } from 'vue'

const cd = ref(4000)
const cdCandidate = ref(cd.value)
const cdRef = useTemplateRef('cd-widget')
const handleCandidateSet = () => {
	cd.value = cdCandidate.value
}
const handleRestart = () => {
	if (cdRef.value) cdRef.value.setLeft(cd.value)
}
</script>

<template>
	<ExpandableBlock title="CountdownBlock" :name="'CoundownBlock'">
		<form @submit.prevent="handleCandidateSet">
			<input type="number" name="candidate" v-model="cdCandidate" />
			<button type="submit">set</button>
		</form>
		{{ cd }}
		<CountdownWidget ref="cd-widget" :time-ms="cd" :step-ms="50">
			<button type="button" @click="handleRestart">reset within</button>
		</CountdownWidget>
	</ExpandableBlock>
</template>
