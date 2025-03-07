	<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import { useI18n } from 'vue-i18n'
	import MarkdownIt from 'markdown-it'
	import BaseIcon from '@/components/base/BaseIcon.vue'
	import type { Article } from '@/types/article'

	const { t } = useI18n()
	const md = MarkdownIt()

	const tableOfContent = ref<string[]>([])

	const props = defineProps<{
		intro: string
		mainContent: string
		video?: string
		videoText?: string
		related?: Article[] | null
	}>()

	onMounted(() => {
	const content = document.querySelectorAll('h3')

	content.forEach(item => {
		item.id = item.innerText
		console.log(item);
		tableOfContent.value.push(item.id)
	})
})

</script>
<template>
	<section class="content">
		<div class="content__container container">
			<div class="content__main">
				<div class="content__block content__block--table" v-if="tableOfContent.length > 0">
					<h2 class="content__title">{{ t('blog.tableOfContent') }}</h2>
					<ul class="content__list">
						<li v-for="(item, index) in tableOfContent" :key="index" class="content__list-item">
							<a :href="`#${item}`" class="content__list-link">
								<BaseIcon name="chevron_right" path="icons" class="post-content__list-icon" />
								{{ item }}
							</a>
						</li>
					</ul>
				</div>
				<div class="content__block content__block--intro markdown" v-html="md.render(props.intro)"></div>
				<div class="content__block content__block--video" v-if="props.video">
					<div class="content__text markdown" v-if="props.videoText" v-html="md.render(props.videoText)"></div>
					<p class="content__text"> {{ t('projects.link') }}
						<a href="https://www.youtube.com/@VAGhub" target="_blank" class="content__link"> Youtube {{ t('projects.channel') }}</a>
					</p>
					<iframe v-if="props.video" :src="`https://www.youtube.com/embed/${props.video}`" class="content__video"
						title="YouTube video player" frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen>
					</iframe>
				</div>
				<div class="content__block content__block--main markdown" v-html="md.render(props.mainContent)"></div>
			</div>
			<div class="content__side">
				<div class="content__side-block">
					<h4 class="content__side-title">{{ t('blog.similar') }}</h4>
					<div v-for="item in props.related" :key="item.id">
						<RouterLink :to="{ name: 'article', params: { slug: item.slug } }" class="content__side-link">
							<p class="content__side-date">
								<span> {{ item.date }}</span>&nbsp;&bull;&nbsp;<span>{{ item.time }} {{ t('blog.min') }}</span>
							</p>
							<span class="content__side-tag">{{ t(`blog.filter.${item.tag}`) }}</span>
							<span class="content__side-text">{{ item.title }}</span>
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style scoped lang="scss">
html {
	scroll-behavior: smooth;
	scroll-padding-top: 100px;
}

.content {
	&__container {
		padding: var(--spacing-m) 0;
	}
&__main {
	display: flex;
	flex-direction: column;
	row-gap: var(--spacing-s);
}
	&__title {
		background-color: $bg-island;
		padding: 1rem 1.5rem;
		border-radius: $radius;
		color: $primary;
		margin-bottom: var(--spacing-xs);
		@include h3-dark();
	}

	&__video {
		margin-top: 1rem;
		width: 100%;
		aspect-ratio: 16 / 9;

	}
	&__text {
		color: $secondary-inv;
		@include normal-light();
	}

	&__link {
		color: $secondary-inv;
		background-image: linear-gradient(to top, $accent 2px, transparent 1px);
		background-repeat: no-repeat;
		background-position-x: left;
		background-size: 0 100%, 100% 100%;
		transition: background-size 0.5s cubic-bezier(.165, .84, .44, 1);
		@include normal-light();
		&:hover {
			color: $primary-inv;
			background-size: 100% 100%, 100% 100%;
		}
		&:active {
			color: $accent;
			background-image: linear-gradient(to top, $accent 2px, transparent 1px);
		}
	}

	&__list {
		display: flex;
		flex-direction: column;
		row-gap: var(--spacing-xxs);
	}

	&__list-link {
		display: flex;
		align-items: center;
		color: $secondary-inv;
		transition: all 0.5s ease-in-out;
		@include normal-light();
		&:hover {
			transform: translateX(0.5rem);
			color: $primary-inv;
		}
		&:active {
			color: $accent;
		}
	}
	&__list-icon {
		width: 24px;
		height: 24px;
	}

	&__side {
		display: flex;
		flex-direction: column;
		row-gap: var(--spacing-m);
	}

	&__side-link {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
		padding: var(--spacing-xs) 0;
		border-bottom: 1px solid $divider-light;

		&:hover .content__side-text {
			color: $accent;
		}
	}

	&__side-title {
		color: $primary-inv;
		@include h4-dark();
	}

	&__side-tag {
		color: $tertiary-inv;
		@include subheader-2-dark();
	}

	&__side-text {
		color: $primary-inv;
		@include normal-light();
	}

	&__side-date {
		color: $tertiary-inv;
		@include breadcrumbs-light();
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
<!-- v-html="md.render(mainContent)" -->