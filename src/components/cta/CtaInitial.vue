<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import SectionText from '@/components/layout/SectionText.vue'
import BaseBtn from '@/components/base/BaseBtn.vue'

const { t } = useI18n()
const emit = defineEmits(['goToForm'])
function toForm() {
  emit('goToForm')
}
</script>
<template>
  <div class="initial">
    <div class="initial__wrapper">
      <div class="initial__title">
        <SectionHeader :title="t('cta.title')" :subtitle="t('cta.subtitle')" />
      </div>
      <div class="initial__content">
        <SectionText class="initial__text" :text="[t('cta.text')]" />
        <BaseBtn class="initial__btn" @click="toForm" mode="primary" size="small" text="connect" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.initial {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    width: 100%;
    padding: 0 1.5rem;
    display: flex;
    row-gap: var(--spacing-xs);
    flex-direction: column;
  }
  &__title {
  }
  &__content {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
}
@media (max-width: 48rem) {
  .initial {
    &__btn {
      width: 100%;
    }
  }
}
@media (min-width: 64rem) {
  .initial {
    &__wrapper {
      padding: 0 calc(var(--grid-column-width) + var(--grid-gutter-width));
      flex-shrink: 0;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &__title {
      width: calc(var(--grid-column-width) * 4 + var(--grid-gutter-width) * 3);
    }
    &__content {
      width: calc(var(--grid-column-width) * 5 + var(--grid-gutter-width) * 4);

      row-gap: var(--spacing-m);
    }
  }
}
</style>
