<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import SectionHeader from '@/components/layout/SectionHeader.vue'
import ServiceCard from '@/components/cards/ServiceCard.vue'

const { t } = useI18n()
const services = [
  {
    title: 'cards.repair.title',
    subtitle: 'cards.repair.subtitle',
    btnText: 'details',
    image1440: '/images/img_539x958.png',
    image1280: '/images/img_397x705.png',
    image1024: '/images/img_356x633.png',
    image768: '/images/img_977x726.png',
    image480: '/images/img_721x1281.png',
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
		image768: '/images/img_977x726.png',
		image480: '/images/img_721x1281.png',
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
		image768: '/images/img_977x726.png',
		image480: '/images/img_721x1281.png',
    image: '/images/img_539x958.png',
    destination: 'expertise',
  },
]
</script>
<template>
  <section class="service">
    <div class="service__container container">
      <SectionHeader class="service__header" :title="t('home.services.title')" :subtitle="t('home.services.subtitle')" />
      <div class="service__card-holder">
        <div class="service__card" v-for="item in services" :key="item.title">
          <ServiceCard
            :title="item.title"
            :subtitle="item.subtitle"
            :btnText="item.btnText"
            :image1440="item.image1440"
            :image1280="item.image1280"
            :image1024="item.image1024"
            :image768="item.image768"
            :image480="item.image480"
            :image="item.image"
            :destination="item.destination"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.service {
  &__container {
    padding: var(--spacing-m) 0;
  }
  &__header {
    padding-bottom: var(--spacing-m);
  }
  &__card-holder {

		display: flex;
		flex-direction: column;
		row-gap: var(--spacing-s);
  }
	@media (min-width: 64rem) {
		&__card-holder {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--grid-gutter-width);
  }
	}
}
</style>
