<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const props = defineProps<{
  category: string,
  model: string,
  engine: string,
  image: string
}>()

const { t } = useI18n()
</script>
<template>
  <section class="hero">
    <div class="hero__wrapper">
      <div class="hero__media">

          <img v-if="image" class="hero__img" :src="image" alt="hero image" />

      </div>
      <div class="hero__container container">

        <div class="hero__content ">
          <h1 class="hero__title">{{t(`projects.category.${category}`)}}</h1>
          <div class="hero__content-inner">
            <p class="hero__content-item">
              <span class="hero__text">{{t('projects.label.car')}}</span>
              <span class="hero__content-text">{{ model }}</span> 
            </p>
            <p class="hero__content-item">
              <span class="hero__text">{{t('projects.label.engine')}}</span>
              <span class="hero__content-text">{{ engine }}</span> 
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.hero {
  display: block;
  position: relative;
  background-color: $bg-black;
 
  &__wrapper {
    display: block;
    position: relative;
    margin: var(--spacing-m) 0;
  }
  &__media {
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
    //aspect-ratio: 1 / 1;
    aspect-ratio: 12 / 5;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: calc(100% + 2px);
      background: linear-gradient(to top, $bg-black 0, rgba(21, 27, 34, 0) 50%);
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
    top: 0;
  }
  &__content {
    width: 100%;
    color: $primary;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: var(--spacing-s);
    padding: var(--spacing-m) var(--grid-gutter-width);
    
  }
  &__content-inner {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
  &__content-item {
    display: flex;
    column-gap: var(--spacing-s);
    align-items: baseline
  }
  &__title {
    @include h2-dark();
  }
  &__text {
    @include normal-dark();
  }
  &__content-text {
    @include h3-dark();
  }

}

@media (min-width: 48rem) {
  .hero {
    &__media {
      aspect-ratio: 12 / 5;
      &::after {
        background: linear-gradient(to right, $bg-black 0, rgba(21, 27, 34, 0) 50%),
          linear-gradient(to top, $bg-black 0, rgba(21, 27, 34, 0) 25%);
      }
    }
    &__container {
      position: absolute;
      bottom: 0;
      left: calc((100% - var(--grid-width)) / 2);
      display: flex;
      align-items: center;
      height: 100%;
    }
    &__content {
    text-align: left;
    align-items: flex-start;
    row-gap: var(--spacing-s);
    padding: var(--spacing-m) 0;
    width: calc(var(--grid-column-width) * 5 + var(--grid-gutter-width) * 4);
  }
  }
}
</style>
