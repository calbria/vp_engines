<script setup lang='ts'>
import Breadcrumbs from '@/components/layout/BreadCrumbs.vue';
import CTASection from '@/components/layout/CTASection.vue';
</script>
<template>
<main class="main-content">
  <Breadcrumbs mode="light"/>
  <CTASection/>
</main>
</template>
<style scoped lang='scss'>
main {
  background-color: $bg-white;
  min-height: 100vh;
}
</style>

