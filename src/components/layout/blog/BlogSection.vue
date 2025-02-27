<script setup lang="ts">
import { ref } from 'vue';
import SectionFilter from '@/components/sections/SectionFilter.vue'
import BlogCard from '@/components/cards/BlogCard.vue'
import PagePagination from '@/components/navigation/PagePagination.vue'

type Filter = 'all' | 'owners' | 'profi' | 'myths'
const filter = ref<Filter>('all')
const filterTabs:Filter[] = ['all', 'owners', 'profi', 'myths']

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
			<BlogCard/>
			<BlogCard/>
			<BlogCard/>

		</div>
		<!-- <PagePagination
		:all-pages="allPages"
        :current-page="currentPage"
        @change="(n) => (currentPage = n)"
        @next="() => (currentPage = currentPage + 1)"
        @prev="() => (currentPage = currentPage - 1)"/> -->
		</div>
		</section>
</template>

<style scoped lang="scss">
.blog {

	&__card-holder {

	}
}
</style>