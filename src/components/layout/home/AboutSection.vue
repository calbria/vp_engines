<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseBtn from '@/components/base/BaseBtn.vue'
import SectionHeader from '@/components/sections/SectionHeader.vue'
import SectionText from '@/components/sections/SectionText.vue'

const { t } = useI18n()
</script>
<template>
  <section class="about">
    <div class="about__container container">
      <div class="about__content">
        <div class="about__content-text">
          <SectionHeader class="about__title" :title="t('home.about.title')" :subtitle="t('home.about.subtitle')" />
          <SectionText class="about__text" :text="[t('home.about.text1')]" />
        </div>
        <BaseBtn class="about__btn" mode="secondary" size="large" text="details" />
      </div>
      <div class="about__media">
        <img class="about__img" src="/images/img_3x4.png" alt="about image" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.about {
  &__container {
    padding: var(--spacing-m) 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-m);
  }
  &__media {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    order: -1;
  }
  &__img {
    width: 100%;
    object-fit: cover;
  }
  &__content {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
  &__content-text {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
  }
}
@media (max-width: 48rem) {
  .about {
    &__btn {
      display: flex;
      width: 100%;
    }
  }
}
@media (min-width: 64rem) {
  .about {
    &__container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: var(--grid-gutter-width);
      align-items: center;
    }
    &__media {
      order: initial;
      grid-column: 7 / -1;
      display: flex;
      height: 100%;
      align-items: center;
    }
    &__content {
        grid-column: 1 / 6;
        justify-content: center;
    }
  }
}
</style>
