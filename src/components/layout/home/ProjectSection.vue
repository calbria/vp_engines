<script setup lang="ts">
import ProjectCard from '@/components/cards/ProjectCard.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue';

const cases = [
  {
    id: '1',
    title: 'cards.case_repair.title',
    car: 'BMW 730',
    engine: 'N54 B30-A',
    text: 'cards.case_repair.text',
    btnText: 'details',
    image: '/images/img_539x958.png',
    destination: 'project',
  },
  {
    id: '2',
    title: 'cards.case_tuning.title',
    car: 'BMW 730',
    engine: 'N54 B30-A',
    text: 'cards.case_tuning.text',
    btnText: 'details',
    image: '/images/img_539x958.png',
    destination: 'project',
  },
  {
    id: '3',
    title: 'cards.case_expertise.title',
    car: 'BMW 730',
    engine: 'N54 B30-A',
    text: 'cards.case_expertise.text',
    btnText: 'details',
    image: '/images/img_539x958.png',
    destination: 'project',
  },
]
</script>
<template>
  <div class="projects">
    <div class="projects__container container">
      <div class="projects__content section-content">
        <SectionHeader title="VP Engines - Проекты" subtitle="Лучшие проекты"/>
        <p class="projects__text">
          Представления широкой аудитории о капремонте на сегодняшний день сформировано
          видеороликами и статьями об “успешной переборке” двигателя сответсвующей модели с заменой
          изношенных запчастей, визуальной оценкой
        </p>
        <BaseBtn mode="primary" size="large" text="Посмотреть все проекты" destination="projects"/>
      </div>
      <div class="projects__cards-container">
        <div class="projects__card" v-for="item in cases" :key="item.id">
          <ProjectCard
            :id="item.id"
            :title="item.title"
            :car="item.car"
            :engine="item.engine"
            :text="item.text"
            :btn-text="item.btnText"
            :image="item.image"
            :destination="item.destination"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.section-title {

}
.projects {
  &__cards-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: var(--grid-gutter-width);
  }
  &__card {
  }
}
@media (min-width: 48rem) and (max-width: 63.99rem) {
  .projects {
    &__cards-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media (min-width: 64rem) {
  .projects {
    &__cards-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
