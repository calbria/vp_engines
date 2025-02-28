	<script setup lang="ts">
	import { useI18n } from 'vue-i18n';
	const { t } = useI18n()
	const props = defineProps<{
		image: string
		title: string
		text: string
		date: string
		time: string
	}>()
	</script>
<template>
	   <section class="hero">
    <div class="hero__wrapper">
      <div class="hero__media">
          <img class="hero__img" :src="image" alt="hero image" />
      </div>
      <div class="hero__container container">
        <div class="hero__content ">
          <div class="hero__content-inner">
						<p class="hero__date">
            <span>{{ date }}</span>&nbsp;&bull;&nbsp;<span>{{ time }} {{ t('blog.min') }}</span>
          </p>
            <h1 class="hero__title">{{ title }}</h1>
            <p class="hero__text">
              {{ text }}
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
    margin: var(--spacing-s) 0;
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
	&__date {
		color: $tertiary;
    @include h4-dark();
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
    width: calc(var(--grid-column-width) * 8 + var(--grid-gutter-width) * 7);
  }
  }
}
</style>