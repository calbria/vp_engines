<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/sections/SectionHeader.vue'
import SectionText from '@/components/sections/SectionText.vue'

import BaseIcon from '@/components/base/BaseIcon.vue'

const { t } = useI18n()
</script>
<template>
  <section class="brands">
    <div class="brands__wrapper container">
      <div class="brands__content">
        <SectionHeader
          class="brands__title"
          :title="t('home.brands.title')"
          :subtitle="t('home.brands.subtitle')"
        />
        <SectionText class="brands__text" :text="[t('home.brands.text1')]" />
      </div>
      <div class="brands__container">
        <div class="brands__group brands__group--merc">
          <BaseIcon class="brands__icon" name="mercedes" path="logo" />
          <BaseIcon class="brands__icon" name="maybach" path="logo" />
          <BaseIcon class="brands__icon" name="amg" path="logo" />
        </div>
        <div class="brands__group brands__group--bmw">
          <BaseIcon class="brands__icon" name="bmw" path="logo" />
          <BaseIcon class="brands__icon" name="alpina" path="logo" />
        </div>
        <div class="brands__group brands__group--vag">
          <div class="brands__vag-holder">
            <BaseIcon class="brands__icon" name="vag" path="logo" />
            <BaseIcon class="brands__icon" name="audi" path="logo" />
          </div>
          <BaseIcon class="brands__icon brands__icon--porche" name="porche" path="logo" />
          <div class="brands__vag-holder">
            <BaseIcon class="brands__icon" name="skoda" path="logo" />
            <BaseIcon class="brands__icon" name="seat" path="logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.brands {
  &__wrapper {
    padding: var(--spacing-m) 0;
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
    padding-bottom: var(--spacing-m);
  }
  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--grid-gutter-width);
    row-gap: var(--spacing-l);
  }
  &__group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__group--merc {
    row-gap: var(--spacing-m);
  }
  &__group--bmw {
    justify-content: space-between;
  }
  &__group--vag {
    grid-column: 1 / 3;
    row-gap: var(--spacing-m);
  }
  &__vag-holder {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: var(--grid-gutter-width);
  }
  &__icon {
    width: calc(var(--grid-column-width) * 6 + var(--grid-gutter-width) * 5);

    &--porche {
      width: 100%;
    }
  }
}
@media (min-width: 48rem) {
  .brands {
    &__container {
      grid-template-columns: repeat(4, 1fr);
    }
    &__group--vag {

        grid-column: 3 / 5;
    }
    &__icon {
      width: calc(var(--grid-column-width) * 3 + var(--grid-gutter-width) * 2);

      &--porche {
      width: 100%;
    }
    }
  }
}
@media (min-width: 64rem) {
  .brands {
    &__content {
      width: calc(var(--grid-column-width) * 8 + var(--grid-gutter-width) * 7);
    }
  }
}
</style>
