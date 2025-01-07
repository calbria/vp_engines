<script setup lang="ts">
import ServiceCard from '@/components/cards/ServiceCard.vue'
const services = [
  {
    title: 'cards.repair.title',
    subtitle: 'cards.repair.subtitle',
    btnText: 'details',
    image1440: '/images/img_539x958.png',
    image1280: '/images/img_397x705.png',
    image1024: '/images/img_356x633.png',
    image: '/images/img_539x958.png',
    destination: 'repair',
  },
  {
    title: 'cards.tuning.title',
    subtitle: 'cards.tuning.subtitle',
    btnText: 'details',
    image1440: '/images/img_539x958.png',
    image1280: '/images/img_397x705.png',
    image1024: '/images/img_356x633.png',
    image: '/images/img_539x958.png',
    destination: 'tuning',
  },
  {
    title: 'cards.expertise.title',
    subtitle: 'cards.expertise.subtitle',
    btnText: 'details',
    image1440: '/images/img_539x958.png',
    image1280: '/images/img_397x705.png',
    image1024: '/images/img_356x633.png',
    image: '/images/img_539x958.png',
    destination: 'expertise',
  },
]
</script>
<template>
  <div class="service">
    <div class="service__container container">
      <div class="service__card" v-for="item in services" :key="item.title">
        <ServiceCard
          :title="item.title"
          :subtitle="item.subtitle"
          :btnText="item.btnText"
          :image1440="item.image1440"
          :image1280="item.image1280"
          :image1024="item.image1024"
          :image="item.image"
          :destination="item.destination"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.service {
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--grid-gutter-width);
  }
}
</style>
