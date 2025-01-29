<script setup lang='ts'>
import Breadcrumbs from '@/components/layout/BreadCrumbs.vue';
import StagesSection from '@/components/layout/repair/StagesSection.vue';
import FaqSection from '@/components/layout/repair/FaqSection.vue';

</script>
<template>
<main class="main-content">
  <div >
<Breadcrumbs/>
<StagesSection/>
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