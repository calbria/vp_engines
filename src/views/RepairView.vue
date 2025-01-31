<script setup lang='ts'>
import Breadcrumbs from '@/components/layout/BreadCrumbs.vue';
import IntroSection from '@/components/layout/repair/IntroSection.vue';
import StagesSection from '@/components/layout/repair/StagesSection.vue';
import AdvantagesSection from '@/components/layout/repair/AdvantagesSection.vue';
import ProjectsSection from '@/components/layout/repair/ProjectsSection.vue';
import CTASection from '@/components/layout/CTASection.vue';
import FaqSection from '@/components/layout/repair/FaqSection.vue';

</script>
<template>
<main class="main-content">
  <div >
<Breadcrumbs/>
<IntroSection/>
<StagesSection/>
<AdvantagesSection/>
<ProjectsSection/>
<CTASection/>
<FaqSection/>

  </div>
</main>
</template>
<style scoped lang='scss'>
main {
  background-color: $bg-globe;
  min-height: 100vh;
}
</style>