<script setup lang='ts'>
import Breadcrumbs from '@/components/layout/BreadCrumbs.vue';
import HeroSection from '@/components/layout/projects/HeroSection.vue';
import ProjectsSection from '@/components/layout/projects/ProjectsSection.vue';
import CTASection from '@/components/layout/CTASection.vue';
</script>
<template>
<main class="main-content">
  <Breadcrumbs mode="light"/>
  <HeroSection/>
<ProjectsSection/>
  <CTASection/>
</main>
</template>
<style scoped lang='scss'>
main {
  background-color: $bg-white;
  min-height: 100vh;
}
</style>

