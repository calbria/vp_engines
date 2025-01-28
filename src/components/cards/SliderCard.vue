<script setup lang="ts">
const props = defineProps<{
  subtitle: string
  title: string
  text: string
  image: string
}>()
</script>
<template>
  <div class="slider-card">
    <div class="slider-card__wrapper">
      <div class="slider-card__media">
        <img class="slider-card__img" :src="image" alt="slider image" />
      </div>
      <div class="slider-card__content">
        <div class="slider-card__header">
          <p class="slider-card__subtitle">
            <span class="slider-card__subtitle-text">{{ subtitle }}</span>
          </p>
          <h3 class="slider-card__title">
            <span class="slider-card__title-text">{{ title }}</span>
          </h3>
        </div>
        <div class="slider-card__content-text">
          <p class="slider-card__text">
           {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.slider-card {
  height: 100%;
  &__wrapper {
   width: var(--grid-width);
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
    border: 1px solid $divider;
    background-image: linear-gradient(to top, $bg-black, $bg-island);
  }
  &__media {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__content {
    padding: 0 var(--spacing-xs) var(--spacing-s);
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xxs);
  }
  &__header {
    display: flex;
    flex-direction: column;
    row-gap: 0;
    color: $primary;
  }
  &__title {
    @include h3-dark();
  }
  &__subtitle {
    @include subheader-2-dark();
  }
  &__content-text {
    color: $secondary;
  }
  &__text {
    @include small-dark();
  }
}
@media (min-width: 64rem) {
  .slider-card {
    &__wrapper {
      width: var(--grid-width);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: var(--grid-gutter-width);
      background-image: linear-gradient(to left, $bg-black, $bg-island);
    }
    &__media {
      aspect-ratio: 1 / 1;
      overflow: hidden;
    }
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__content {
      padding: var(--spacing-s);
      align-items: flex-start;
      justify-content: flex-end;
    }
  }
}
@media (min-width: 90rem) {
  .slider-card {
    &__media {
      aspect-ratio: 4 / 3;
      overflow: hidden;
    }

  }
}
</style>
