<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import BaseBtn from '@/components/base/BaseBtn.vue'

const { t } = useI18n()
</script>
<template>
  <section class="hero">
    <div class="hero__wrapper">
      <div class="hero__media">
        <picture>
          <source media="(min-width: 1024px)" srcset="/images/main_hero.png" />
          <img class="hero__img" src="/images/main_hero_mobile.png" alt="hero image" />
        </picture>
      </div>
      <div class="hero__container container">

        <div class="hero__content ">
          <div class="hero__content-inner">
            <h1 class="hero__title">{{t('home.hero.title')}}</h1>
            <p class="hero__text">
              {{t('home.hero.text')}}
            </p>
          </div>
          <BaseBtn class="hero__btn" mode="primary" size="large" text="working-process" destination="working-process" />
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
  }
  &__media {
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 1 / 1;
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
    color: $primary;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: var(--spacing-s);
    padding: var(--spacing-m) var(--grid-gutter-width);
    text-align: center;
  }
  &__content-inner {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
  }
  &__title {
    @include h1-dark();
  }
  &__text {
    @include large-dark();
  }
}
@media (max-width: 48rem) {
  .hero {
    &__btn {
      display: flex;
      width: 100%;
    }
  }
}
@media (min-width: 64rem) {
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
