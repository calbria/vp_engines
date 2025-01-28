<script setup lang='ts'>
import StagesSection from '@/components/layout/repair/StagesSection.vue';
import StagesSlider from '@/components/layout/repair/StagesSlider.vue'
</script>
<template>
<main class="main-content">
  <div class="container">

<!-- <StagesSection/> -->
<StagesSlider/>
  </div>
</main>
</template>
<style scoped lang='scss'>
main {
  background-color: $bg-globe;
  min-height: 100vh;
}
</style>