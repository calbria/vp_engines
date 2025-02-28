<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useArticlesStore } from '@/stores/articlesStore'
import SectionFilter from '@/components/sections/SectionFilter.vue'
import BlogCard from '@/components/cards/BlogCard.vue'
import PagePagination from '@/components/navigation/PagePagination.vue'

type Filter = 'all' | 'owners' | 'profi' | 'myths'

const filter = ref<Filter>('all')
const filterTabs: Filter[] = ['all', 'owners', 'profi', 'myths']
const currentPage = ref(1)

const articlesStore = useArticlesStore()
const filteredArticles = computed(() => {
	if(filter.value === 'all') return articlesStore.allArticles
	else return articlesStore.articlesByTag(filter.value)
})
const cardsPerPage: number = 6
const startArt = computed(() => (currentPage.value - 1) * cardsPerPage)
const endArt = computed(() => currentPage.value * cardsPerPage)

const articles = computed(() => filteredArticles.value.slice(startArt.value, endArt.value))
const allPages = computed(() => Math.ceil(filteredArticles.value.length / cardsPerPage))

onMounted(() => articlesStore.fetchArticles())
</script>
<template>
  <section class="blog">
    <div class="blog__container container">
      <SectionFilter
        :filter-tabs="filterTabs"
        :current-tab="filter"
        type="blog"
        @choose-tab="(tab) => (filter = tab)"
      />

      <div class="blog__card-holder">
				<div class="blog__card" v-for="art in articles" :key="art.id">
					<BlogCard
						:image="art.preview"
						:date="art.date"
						:tag="art.tag"
						:time="art.time"
						:title="art.title"
						:text="art.summary"
						:slug="art.slug"
					/>
				</div>
        
      </div>

      <PagePagination
		:all-pages="allPages"
        :current-page="currentPage"
        @change="(n) => (currentPage = n)"
        @next="() => (currentPage = currentPage + 1)"
        @prev="() => (currentPage = currentPage - 1)"/>
    </div>
  </section>
</template>

<style scoped lang="scss">
.blog {
&__container {
	padding: var(--spacing-m) 0;
}
  &__card-holder {
    padding: var(--spacing-s) 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
}
@media (min-width: 48rem) {
  .blog {
    &__card-holder {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--grid-gutter-width);
    }
  }
}
@media (min-width: 64rem) {
  .blog {
    &__card-holder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
