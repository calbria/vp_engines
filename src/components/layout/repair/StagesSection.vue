<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StagesSlider from '@/components/layout/repair/StagesSlider.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'

const { t } = useI18n()
</script>
<template>
  <section class="stages">
    <div class="stages__wrapper">
      <SectionHeader class="stages__header" :title="t('repair.stages.title')" :subtitle="t('repair.stages.subtitle')" />
      <StagesSlider class="stages__slider"/>
    </div>
  </section>
</template>
<style scoped lang="scss">
.stages {
  &__wrapper {
    padding: var(--spacing-m) 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-m);
  }
}
</style>
