<script setup lang='ts'>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useArticlesStore } from '@/stores/articlesStore';
import Breadcrumbs from '@/components/layout/BreadCrumbs.vue';
import HeroSection from '@/components/layout/article/HeroSection.vue'
import ContentSection from '@/components/layout/article/ContentSection.vue';
import RelatedSection from '@/components/layout/article/RelatedSection.vue';
import type { Article } from '@/types/article';

const route = useRoute()
const articlesStore = useArticlesStore()

const article = ref<Article | null>(null)

onMounted(() => articlesStore.fetchArticles())
watch(
	() => articlesStore.articles,
	() => {
		const articleData = articlesStore.articlesBySlug(route.params.slug as string)
		if (articleData) article.value = articleData
	},
	{ immediate: true }
)
const articleBreadcrumb = computed(() => {
	if (!article.value) return ''
	return article.value.title
})
const relatedArticles = computed(() => {
	if(!article.value) return [] as Article[]
	return articlesStore.relatedArticles(article.value.id) as Article[]
})
</script>
<template>
	<main class="article main-content">
		<div v-if="article">
			<!-- Breadcrumbs -->
			<Breadcrumbs mode="light" parent-route-name="blog" :custom-breadcrumb="articleBreadcrumb" />
			<!-- Hero -->
			<HeroSection 
			:image="article?.heroImg" 
			:title="article?.title" 
			:text="article?.summary" 
			:date="article?.date"
			:time="article?.time" />
			<div class="article__container container">
				<!-- Article content -->
				<ContentSection class="article__content"  :main-content="article.content"/>
				<!-- Related articles -->
				<RelatedSection v-if="relatedArticles" class="article__related" :cards="relatedArticles"/>
			</div>
		</div>
		<div v-else>Something went wrong</div>
	</main>
</template>
<style scoped lang='scss'>
.article {
	background-color: $bg-white;
	min-height: 100vh;
	&__container {
		display: flex;
		flex-direction: column;
		row-gap: var(--spacing-m);
		padding: var(--spacing-m) 0;
	}
	@media (min-width: 64rem) {
		.article {
			&__container {
				display: grid;
				grid-template-columns: repeat(12, 1fr);
				column-gap: var(--grid-gutter-width);
			}
			&__content {
				grid-column: 1 / 8;
			}
			&__related {
				grid-column: 9 / 13;
			}
		}
	}
}
</style>