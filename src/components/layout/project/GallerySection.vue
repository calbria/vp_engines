<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
//import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import BaseIcon from '@/components/base/BaseIcon.vue'

const props = defineProps<{
    images: string[] 
}>()

const { t } = useI18n()
const carouselConfig = {
    itemsToShow: 1,
    snapAlign: 'center',
    // breakpoints: {
    //     768: {
    //         itemsToShow: 2,
    //         snapAlign: 'start',
    //     },
    //     1024: {
    //         itemsToShow: 3,
    //         snapAlign: 'start',
    //     },
    // },
  wrapAround: true,
  gap: 40,
}

</script>
<template>

<section class="gallery">
    <div class="gallery__wrapper">

        <Carousel v-bind="carouselConfig" class="carousel__light">

            <Slide class="gallery__slide" v-for="(img, index) in images" :key="index">
                <img class="gallery__img" :src="img" alt="img">
            </Slide>
            <template #addons>
      <Navigation>
        <template #prev>
          <BaseIcon class="gallery__controls-icon" name="chevron_left" path="icons" />
        </template>
        <template #next>
          <BaseIcon class="gallery__controls-icon" name="chevron_right" path="icons" />
        </template>
      </Navigation>
      <Pagination />
    </template>
        </Carousel>
    </div>

</section>
</template>
<style lang='scss'>
.gallery {
    
    &__wrapper {
        padding: var(--spacing-m) 0;
    } 

    &__slide {
        aspect-ratio: 16 / 9;
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
    }

}

</style>