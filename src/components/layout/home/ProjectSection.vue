<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectCard from '@/components/cards/ProjectCard.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import SectionText from '@/components/layout/SectionText.vue'
import BaseBtn from '@/components/base/BaseBtn.vue'
import BaseIcon from '@/components/base/BaseIcon.vue';

const currentPage = ref(1)
const itemsPerPage = ref(3)
const gridIsVisible = ref(true)


const { t } = useI18n()
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

function updateItemsPerPage() {
  const width = window.innerWidth
  if(width >= 1024) {
    itemsPerPage.value = 3
  } else if(width >= 768) {
    itemsPerPage.value = 2
  } else itemsPerPage.value = 1

}

onMounted(() => {
  updateItemsPerPage()
  window.addEventListener('resize', updateItemsPerPage)
})

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return cases.slice(start, end)
})

const totalPages = computed(() => Math.ceil(cases.length / itemsPerPage.value))

function goToPage(page:number) {
  if( page < 1 || page > totalPages.value) return
  gridIsVisible.value = false
  setTimeout(() => {
    currentPage.value = page
    gridIsVisible.value = true
  }, 500)
}

</script>
<template>
  <section class="projects">
    <div class="projects__container container">
      <SectionHeader class="projects__header" :title="t('home.projects.title')" :subtitle="t('home.projects.subtitle')" />
      <div class="projects__content">
        <SectionText class="projects__text" :text="[t('home.projects.text1')]" />
        <BaseBtn class="projects__btn" mode="primary" size="large" text="projects" destination="projects" />
      </div>
      <div class="projects__cards">
        <div class="projects__pagination" v-if="totalPages > 1">
          <div class="pagination">
            <button class="pagination__btn" type="button" :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">
              <BaseIcon class="pagination__icon" name="chevron_left" path="icons"/>
            </button>
            <div class="pagination__info">
              <span class="pagination__text">{{ currentPage}}</span>
              <span class="pagination__text">/</span>
              <span class="pagination__text">{{ totalPages }}</span>
            </div>

            <button class="pagination__btn" type="button" :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">
              <BaseIcon class="pagination__icon" name="chevron_right" path="icons"/>
            </button>
          </div>
        </div>
        <Transition name="fade-grid" mode="out-in">

          <div class="projects__cards-container" v-if="gridIsVisible" :key="currentPage">
            <div class="projects__card" v-for="item in paginatedProjects" :key="item.id">
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
        </Transition>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
   padding: 8px;
   color: $primary;
    &[disabled] {
      color: $tertiary;
    } 
  }
  &__icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__info {
color: $primary;
display: flex;
align-items: center;
column-gap: 2px;
  }
  &__text {
    @include small-dark();

  }
}
.projects {
  &__container {
    padding: var(--spacing-m) 0;
  }

  &__cards-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: var(--grid-gutter-width);
  }
  &__content {

      display: flex;
      flex-direction: column;
      row-gap: var(--spacing-s);
      

    padding-bottom: var(--spacing-m);
  }
  &__header {
    padding-bottom: var(--spacing-xs);
  }
  &__pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-s);
  }
  .fade-grid-enter-active, .fade-grid-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-grid-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-grid-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
}
@media (max-width: 48rem) {
  .projects {
    &__btn {
      display: flex;
      width: 100%;
    }
  }
}
@media (min-width: 48rem)  {
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
    &__content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    &__text {
    width: calc(var(--grid-column-width) * 8 + var( --grid-gutter-width) * 7);
  }
  }
}
</style>
