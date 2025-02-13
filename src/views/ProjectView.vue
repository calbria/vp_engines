<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projectsStore'
import BreadCrumbs from '@/components/layout/BreadCrumbs.vue'
import HeroSection from '@/components/layout/project/HeroSection.vue'
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
console.log(route.matched)
watch(
  () => projectsStore.projects,
  () => {
    const projectData = projectsStore.projectById(route.params.id as string)
    if (projectData) {
      project.value = projectData
    }
  },
  { immediate: true },
)

const projectBreadcrumb = computed(() => {
  if (!project.value) return ''
  return `${t(`projects.filter.${project.value.category}`)}: ${project.value.car.brand} ${project.value.car.model} ${project.value.engine} (${project.value.date})`
})
</script>

<template>
  <main class="main-content">
    <BreadCrumbs mode="light" :customBreadcrumb="projectBreadcrumb" parent-route-name="projects" />

    <HeroSection
      :category="project ? project.category : ''"
      :model="
        project
          ? project?.car.brand + ' ' + project?.car.model + ' ' + '(' + project?.car.year + ')'
          : ''
      "
      :engine="project ? project.engine : ''"
      :image="project ? project.heroImg : ''"
    />

    <!-- Intro -->
    <div v-if="project" v-html="md.render(project.content)"></div>
    <!-- Video -->
    <!-- Main content -->
    <!-- Results -->
    <!-- Gallery slider -->
    <!-- CTA -->
    <!-- Similar projects -->
    <!-- Useful posts -->
  </main>
</template>
<style scoped lang="scss">
main {
  background-color: $bg-white;
  min-height: 100vh;
}
</style>
