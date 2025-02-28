	<script setup lang="ts">
	import MarkdownIt from 'markdown-it'
	const md = MarkdownIt()
	const props = defineProps<{
		mainContent: string
	}>()
	</script>
<template>
	<div class="content" v-html="md.render(mainContent)">
		
	</div>
</template>
<style scoped lang="scss">
</style>