	<script setup lang="ts">
	import MarkdownIt from 'markdown-it'
	import MarkdownItAnchor from 'markdown-it-anchor'

const md = MarkdownIt().use(MarkdownItAnchor, {
  slugify: (s) => s.toLowerCase().replace(/\s+/g, '-'),
})
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