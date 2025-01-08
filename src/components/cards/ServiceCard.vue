<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseBtn from '@/components/base/BaseBtn.vue'

const { t } = useI18n()

const props = defineProps<{
  title: string
  subtitle: string
  btnText: string
  image1440: string
  image1280: string
  image1024: string
  image: string
  destination: string
}>()
</script>
<template>
  <div class="card">
    <div class="card__container">
      <div class="card__image-holder">
        <picture>
          <source media="(min-width: 1440px)" :srcset="image1440" />
          <source media="(min-width: 1280px)" :srcset="image1280" />
          <source media="(min-width: 1024px)" :srcset="image1024" />
          <img class="card__img" :src="image" :alt="`${t(title)} card photo`" />
        </picture>
      </div>
      <div class="card__content">
        <div class="card__text">
          <h3 class="card__title">{{ t(title) }}</h3>
          <p class="card__subtitle">{{ t(subtitle) }}</p>
        </div>
        <BaseBtn mode="primary" size="small" :text="btnText" :destination="destination" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  min-height: 100%;
  background-color: $bg-black;
  border: 1px solid $divider;
  border-radius: $radius;
  padding-bottom: var(--spacing-s);

  &:hover .card__img {
    transform: scale(1.1);
  }

  &__container {
    position: relative;
    width: 100%;
    height: fit-content;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(21, 27, 34, 0) 0%, $bg-black 80%);
    }
  }
  &__image-holder {
    width: 100%;
    aspect-ratio: 9 / 16;
    overflow: hidden;
    position: relative;
  }
  &__img {
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    position: absolute;
    top: 0;
    transition: transform 0.6s cubic-bezier(0.35, 0, 0, 1);
  }
  &__content {
    position: absolute;
    bottom: 0;
    padding: var(--spacing-l) var(--spacing-s) var(--spacing-s);
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
    width: 100%;
    z-index: 10;
  }
  &__text {
    display: flex;
    flex-direction: column;
    color: $primary;
    row-gap: 0.25rem;
  }
  &__title {
    @include subheader-2-dark();
    
  }
  &__subtitle {
    @include h3-dark();
    
  }
}
@media (min-width: 80rem) {
  .card {

  &__image-holder {
    width: 100%;
    aspect-ratio: 9 / 16;
    overflow: hidden;
    position: relative;
  }
  &__img {
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    position: absolute;
    top: 0;
    transition: transform 0.6s cubic-bezier(0.35, 0, 0, 1);
  }
 

  &__title {
    @include subheader-2-dark();
    
  }
  &__subtitle {
    @include h3-dark();
    
  }
}
  
}
</style>
