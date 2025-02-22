<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projectsStore'
import BreadCrumbs from '@/components/layout/BreadCrumbs.vue'
import HeroSection from '@/components/layout/project/HeroSection.vue'
import ProjectSection from '@/components/layout/project/ProjectSection.vue'
import type { Project } from '@/types/project'

import MarkdownIt from 'markdown-it'
import MarkdownItAnchor from 'markdown-it-anchor'

const md = MarkdownIt().use(MarkdownItAnchor, {
  slugify: (s) => s.toLowerCase().replace(/\s+/g, '-'),
})

const route = useRoute()
const projectsStore = useProjectsStore()
const { t } = useI18n()

const project = ref<Project | null>(null)

onMounted(() => {
  projectsStore.fetchProjects()
})

watch(
  () => projectsStore.projects,
  () => {
    const projectData = projectsStore.projectById(route.params.id as string)
    if (projectData) {
      project.value = projectData
    }
    console.log('Project watcher')
  },
  { immediate: true },
)

const projectBreadcrumb = computed(() => {
  if (!project.value) return ''
  return `${t(`projects.filter.${project.value.category}`)}: ${project.value.car.brand} ${project.value.car.model} ${project.value.engine} (${project.value.date})`
})
</script>

<template>
  <main class="project main-content">
    <div v-if="project">

      <BreadCrumbs mode="light" :customBreadcrumb="projectBreadcrumb" parent-route-name="projects" />
  
      <HeroSection
        :category="project.category"
        :model="project?.car.brand + ' ' + project?.car.model + ' ' + '(' + project?.car.year + ')'"
        :engine="project.engine"
        :image="project.heroImg"
      />
      
      <ProjectSection
        :title="project.category"
        :car="
          project?.car.brand +
          ' ' +
          project?.car.model +
          ' ' +
          '(' +
          project?.car.year +
          ')' +
          ' ' +
          project.engine
        "
        :intro="project.contentIntro"
        :main="project.contentMain"
        :video="project?.videoID"
        :video-text="project?.videoText"
      />
  
      <!-- Gallery slider -->
      <!-- CTA -->
      <!-- Similar projects -->
      <!-- Useful posts -->
    </div>
    <div v-else>Something went wrong</div>
  </main>
</template>
<style scoped lang="scss">
main {
  background-color: $bg-white;
  min-height: 100vh;
}
</style>
