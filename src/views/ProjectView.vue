<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projectsStore'
import { useArticlesStore } from '@/stores/articlesStore'
import BreadCrumbs from '@/components/layout/BreadCrumbs.vue'
import HeroSection from '@/components/layout/project/HeroSection.vue'
import ProjectSection from '@/components/layout/project/ProjectSection.vue'
import CTASection from '@/components/layout/CTASection.vue';
import type { Project } from '@/types/project'
import type { Article } from '@/types/article'

const route = useRoute()
const projectsStore = useProjectsStore()
const articlesStore = useArticlesStore()
const { t } = useI18n()

const project = ref<Project | null>(null)
const similarProjects = ref<Project[] | null>(null)
const relatedArticles = ref<Article[] | null>(null)

onMounted(() => {
	projectsStore.fetchProjects()
})

watch(
	() => projectsStore.projects,
	() => {
		const projectData = projectsStore.projectById(route.params.slug as string)
		if (projectData) {
			project.value = projectData
		}
		if(project.value && project.value.relatedArticles) {
			const related = project.value?.relatedArticles 
			relatedArticles.value = related.map(item => articlesStore.articlesById(item))
		}
	},
	{ immediate: true },
)

const projectBreadcrumb = computed(() => {
	if (!project.value) return ''
	return `${t(`projects.filter.${project.value.category}`)}: ${project.value.carBrand} ${project.value.carModel} ${project.value.engine} (${project.value.date})`
})


</script>

<template>
	<main class="project main-content">
		<div v-if="project">
			<BreadCrumbs mode="light" :customBreadcrumb="projectBreadcrumb" parent-route-name="projects" />
			<HeroSection :category="project.category"
				:model="project?.carBrand + ' ' + project?.carModel + ' ' + '(' + project?.carYear + ')'"
				:engine="project.engine" :image="project.heroImg" />
			<ProjectSection 
				:intro="project.contentIntro" 
				:main="project.contentMain" 
				:results="project.contentResults"
				:images="project.gallery" 
				:video="project?.videoID" 
				:video-text="project?.videoText" 
				:similar="similarProjects"
				:related="relatedArticles"
				/>
			<!-- CTA -->
			<CTASection />
			<!-- Useful posts -->

		</div>
		<div v-else>Something went wrong</div>
	</main>
</template>
<style scoped lang="scss">
.project {
	background-color: $bg-white;
	min-height: 100vh;
}
</style>
