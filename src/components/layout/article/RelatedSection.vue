<script setup lang="ts">
import type { Article } from '@/types/article';
import BlogCard from '@/components/cards/BlogCard.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const props = defineProps<{
	cards: Article[]
}>()
</script>
<template>
	<div class="related">
		<div class="related__wrapper">
			<h2 class="related__title">{{ t('blog.similar') }}</h2>
			<div class="related__card-holder">
				<div class="related__card" v-for="card in cards" :key="card.id">
					<BlogCard :image="card.preview" :date="card.date" :time="card.time" :tag="card.tag" :title="card.title"
						:text="card.summary" :slug="card.slug" />
				</div>

			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.related {
	&__wrapper {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		column-gap: var(--spacing-s);
		row-gap: var(--spacing-s);
		justify-content: center;
	}

	&__card {
		width: 24rem;
		flex-shrink: 0;
	}

	&__title {
		color: $primary-inv;
		@include h3-dark();
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
