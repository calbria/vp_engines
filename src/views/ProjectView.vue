<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projectsStore'
import BreadCrumbs from '@/components/layout/BreadCrumbs.vue'
const route = useRoute()
const projectsStore = useProjectsStore()

onMounted(() => {
  projectsStore.fetchProjects()
})
console.log(typeof route.params.id)

const project = projectsStore.projectById(route.params.id as string)
</script>
<template>
  <main class="main-content">
    <BreadCrumbs mode="light"/>
    {{ route.params.id }}
    {{ project?.content }}
  </main>
</template>
<style scoped lang="scss">
main {
  background-color: $bg-white;
  min-height: 100vh;
}
</style>
