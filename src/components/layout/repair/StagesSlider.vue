<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import SliderCard from '@/components/cards/SliderCard.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
const carouselConfig = {
  itemsToShow: 'auto',
  wrapAround: true,
  gap: 40
}
const { t } = useI18n()
const stages = [
  {
    id: '1',
    title: 'repair.stage_1.title',
    text: 'repair.stage_1.text',
    image: '/images/img_3x4.png',
  },
  {
    id: '2',
    title: 'repair.stage_2.title',
    text: 'repair.stage_2.text',
    image: '/images/img_3x4.png',
  },
  {
    id: '3',
    title: 'repair.stage_3.title',
    text: 'repair.stage_3.text',
    image: '/images/img_3x4.png',
  },
  {
    id: '4',
    title: 'repair.stage_4.title',
    text: 'repair.stage_4.text',
    image: '/images/img_3x4.png',
  },
  {
    id: '5',
    title: 'repair.stage_5.title',
    text: 'repair.stage_5.text',
    image: '/images/img_3x4.png',
  },
  {
    id: '6',
    title: 'repair.stage_6.title',
    text: 'repair.stage_6.text',
    image: '/images/img_3x4.png',
  },
]
</script>
<template>
      <Carousel v-bind="carouselConfig">
        <Slide v-for="slide in stages" :key="slide.id">
      <div class="carousel__item">
        <SliderCard
        :subtitle="`${t('repair.stage')} ${slide.id}`"
            :title="t(slide.title)"
            :text="t(slide.text)"
            :image="slide.image"
        />
        
    </div>
    </Slide>

    <template #addons>
      <Navigation>
        <template #prev>
            <BaseIcon class="slider__controls-icon" name="chevron_left" path="icons" />
        </template>
        <template #next>
            <BaseIcon class="slider__controls-icon" name="chevron_right" path="icons" />
        </template>
      </Navigation>
      <Pagination />
    </template>
</Carousel>
</template>
<style  lang='scss'>
.carousel {
padding-bottom: 2rem;
    &__item {
    height: 100%;

}
}
.carousel__next, .carousel__prev {
    display: none;
}
.carousel__pagination {
    
}
.carousel__pagination-button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $bg-island;
}
.carousel__pagination-button--active {
    background-color: $primary;
}
@media (min-width: 64rem) {
.carousel {
    padding-bottom: 3rem;
}
    .carousel__next, .carousel__prev {
        display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
        margin: 0;
        color: $primary;
          border: 1px solid $bg-island-inner;
          border-radius: 50%;
          background-color: transparent;
          transition: all 0.5s ease-in-out;
    
    }
    .carousel__next:hover, .carousel__prev:hover {
        background-color: $bg-island-inner;
        
    }
    .carousel__next:active, .carousel__prev:active {
        background-color: $bg-island;
        
    }
    .carousel__next {
        right: -56px;
    }
    .carousel__prev {
        left: -56px;
    }
    .carousel__pagination {
   
}
}

@media (min-width: 80rem) {
    .carousel__next, .carousel__prev {
 
    }
    .carousel__next {
    right: -64px;
}
.carousel__prev {
    left: -64px;
}
}

</style>