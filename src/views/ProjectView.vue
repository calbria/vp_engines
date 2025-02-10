<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projectsStore'
import BreadCrumbs from '@/components/layout/BreadCrumbs.vue'
import type { Project } from '@/types/project'

const route = useRoute()
const projectsStore = useProjectsStore()
const { t } = useI18n()

const project = ref<Project | null>(null)

onMounted(() => {
  projectsStore.fetchProjects()
})
console.log( route.matched)
watch(
  () => projectsStore.projects,
  () => {
    const projectData = projectsStore.projectById(route.params.id as string)
    if(projectData) {
      project.value = projectData

    }
  },
  { immediate: true }
)

const projectBreadcrumb = computed(() => {
  if(!project.value) return ''
  return `${t(`projects.filter.${project.value.category}`)}: ${project.value.car.brand} ${project.value.car.model} ${project.value.engine} (${project.value.date})`
})

</script>
<template> 
  <main class="main-content">
    <BreadCrumbs mode="light" :customBreadcrumb="projectBreadcrumb" parent-route-name="projects"/>

    {{ project?.car.brand }}
    {{ project?.engine }}
    {{route.meta.breadcrumb}}
  </main>
</template>
<style scoped lang="scss">
main {
  background-color: $bg-white;
  min-height: 100vh;
}
</style>
