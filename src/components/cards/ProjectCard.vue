<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n'
import BaseBtn from '@/components/base/BaseBtn.vue'

const { locale } = useI18n()
const isActive = ref(false)
const props = defineProps<{
    id: string
  title: string
  car: string
  engine: string
  summary: string
  btnText: string

  image: string
  destination: string
}>()

const cardTitle = computed(() => {
  if(locale.value === 'ru') {
    switch(props.title) {
      case 'repair': 
      return 'капитальный ремонт двс';
      case 'tuning': 
      return 'тюнинг двс';
      case 'expertise':
      return 'экспертиза';
      default: return 'unknown'
    }

    
  } else {
    switch(props.title) {
      case 'repair': 
      return 'капітальный ремонт двз';
      case 'tuning': 
      return 'тюнінг двз';
      case 'expertise':
      return 'експертиза';
      default: return 'unknown'
    }
    
  }
})
function tapHandler() {
    isActive.value = !isActive.value
}
</script>
<template>
  <div class="card" :class="{'active': isActive}" @click="tapHandler">
    <div class="card__container">
      <div class="card__image-holder">

        <img class="card__img" :src="image" :alt="`${ title } card photo`" />
      </div>
      <div class="card__content">
        <div class="card__text">
          <div class="card__header">
            <p class="card__title">{{ cardTitle }}</p>
            
            <h3 class="card__subtitle">{{ car }}</h3>
            <h3 class="card__subtitle">{{ engine }}</h3>
          </div>
          <p class="card__paragraph">
            <span class="card__paragraph-text">
              {{ summary }}
            </span>
          </p>
        </div>
        <BaseBtn mode="secondary" size="small" :text="btnText" :destination="destination" :params="id" />
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
  position: relative;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.35, 0, 0, 1);

  &__container {
    position: relative;
    width: 100%;
    height: fit-content;
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
    filter: blur(0);
    opacity: 1;
  }

  &__content {
    position: absolute;
    bottom: 0;
    padding: var(--spacing-l) var(--spacing-s) var(--spacing-s);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.3s ease-in-out;
    row-gap: var(--spacing-s);
    width: 100%;
    z-index: 10;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(21, 27, 34, 0) 0%, $bg-black 50%);
      z-index: -1;
    }
  }
  &__text {
    color: $primary;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    max-height: 96px; /* Set initial height to show only the header */
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
  }

  &__header {
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
  }

  &__title {
    @include subheader-2-dark();
  }

  &__subtitle {
    @include h3-dark();
  }

  &__paragraph-text {
    @include small-dark();
  }
}
.active .card__img {
    opacity: 0.2;
    filter: blur(4px);
  }
.active .card__text {
    max-height: 300px;
  }

@media (min-width: 48rem) {
  .card {

  }
}
@media (min-width: 64rem) {
  .card {
    &:hover .card__text {
    max-height: 300px;
  }
  &:hover .card__img {
    opacity: 0.2;
    filter: blur(4px);
  }

  }
}

@media (min-width: 80rem) {
  .card {


    // &__img {
    //   height: 100%;
    //   overflow: hidden;
    //   object-fit: cover;
    //   position: absolute;
    //   top: 0;
    //   transition: transform 0.6s cubic-bezier(0.35, 0, 0, 1);
    // }
    &__text {

    max-height: 112px; /* Set initial height to show only the header */

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
