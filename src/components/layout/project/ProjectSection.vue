<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import GallerySection from '@/components/layout/project/GallerySection.vue'
import type { Project } from '@/types/project'
import type { Article } from '@/types/article'

const md = MarkdownIt()
const props = defineProps<{
	intro: string
	main: string
	results: string
	images?: string[]
	video?: string
	videoText?: string
	similar?: Project[]
	related?: Article[]
}>()

</script>
<template>
	<section class="content">
		<div class="content__container container">
			<div class="content__main">
				<div class="content__table">
					<h2 class="content__title">Table of Content</h2>
				</div>
				<div class="content__intro" v-html="md.render(props.intro)"></div>
				<div class="content__video" v-if="props.video">
					<h2 class="content__title">Video</h2>
					<p class="content__text" v-if="props.videoText" v-html="md.render(props.videoText)"></p>
					<iframe v-if="props.video" :src="`https://www.youtube.com/embed/${props.video}`" title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen>
					</iframe>
				</div>
				<div class="content__stages">
					<h2 class="content__title">Stages</h2>
					<div class="content__stages-inner" v-html="md.render(props.main)"></div>
				</div>
				<div class="content__results">
					<h2 class="content__title">Results</h2>
					<div class="content__results-inner" v-html="md.render(props.results)"></div>
				</div>
				<div v-if="props.images" class="content__gallery">
					<h2 class="content__title">Project Gallery</h2>
					<GallerySection :images="props.images" />
				</div>
			</div>

			<div class="content__side">
				<h3>Similar Projects</h3>
				<p v-for="item in props.similar" :key="item.id">
					{{ item.carBrand }}
				</p>
				<h3>Related Articles </h3>
				<p v-for="item in props.related" :key="item.id">
					{{ item.title }}
				</p>
			</div>
		</div>

	</section>
</template>
<style lang="scss">
.content {
	&__container {
		padding: var(--spacing-m) 0;
	}
}

@media (min-width: 64rem) {
	.content {
		&__container {
			display: flex;
justify-content: space-between;

		}

		&__main {
width: calc(var(--grid-column-width)*7 + var(--grid-gutter-width)*6);
		}

		&__side {
			width: calc(var(--grid-column-width)*4 + var(--grid-gutter-width)*3);
			height: fit-content;
			position: sticky;
			top: 120px;
		}
	}
}
</style>
<!-- <a class="project__video-link" href="https://www.youtube.com/@VAGhub"></a> -->
<!-- <iframe width="560" height="315" 
src="https://www.youtube.com/embed/VIDEO_ID" 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe> -->
<!-- https://youtu.be/78IZ0B5HM_Y?si=BgfFSlmblAysHdqa -->
<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/78IZ0B5HM_Y?si=4MmZJoxlvY7cXxj5"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->