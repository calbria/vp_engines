<script setup lang="ts">
import type { Article } from '@/types/article';
import BlogCard from '@/components/cards/BlogCard.vue';
const props = defineProps<{
	cards: Article[]
}>()
</script>
<template>
<div class="related">
	<div class="related__wrapper">
		<div class="related__card" v-for="card in cards" :key="card.id">
			<BlogCard 
			:image="card.preview"
			:date="card.date"
			:time="card.time"
			:tag="card.tag"
			:title="card.title"
			:text="card.summary"
			:slug="card.slug"
			/>
		</div>
	</div>
</div>
</template>
<style scoped lang="scss">
.related {
	&__wrapper {
		display: flex;
		flex-wrap: wrap;
		column-gap: var(--spacing-s);
		row-gap: var(--spacing-s);
		justify-content: center;
	}
	&__card {
		width: 24rem;
		flex-shrink: 0;
	}
}
@media (min-width: 64rem) {
	.related {
		&__wrapper {
			display: flex;
			flex-wrap: nowrap;
			flex-direction: column;
			row-gap: var(--spacing-s);
		}
		&__card {
			width: 100%;
		}
	}
}
</style>
