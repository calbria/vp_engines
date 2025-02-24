<script setup lang="ts">
import { useI18n } from 'vue-i18n'
//import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import SliderCard from '@/components/cards/SliderCard.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
const carouselConfig = {
  itemsToShow: 'auto',
  wrapAround: true,
  gap: 40,
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
  <Carousel v-bind="carouselConfig" class="carousel__dark">
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
<style scoped lang="scss">

</style>
