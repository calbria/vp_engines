<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProjectsStore } from '@/stores/projectsStore'
import ProjectCard from '@/components/cards/ProjectCard.vue'
import SectionHeader from '@/components/sections/SectionHeader.vue'
import SectionText from '@/components/sections/SectionText.vue'
import BaseBtn from '@/components/base/BaseBtn.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

const currentPage = ref(1)
const itemsPerPage = ref(3)
const gridIsVisible = ref(true)

const { t } = useI18n()
const projectsStore = useProjectsStore()

function updateItemsPerPage() {
  const width = window.innerWidth
  if (width >= 1024) {
    itemsPerPage.value = 3
  } else if (width >= 768) {
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
  return projectsStore.mainProjects.slice(start, end)
})

const totalPages = computed(() => Math.ceil(projectsStore.mainProjects.length / itemsPerPage.value))

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return
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
      <SectionHeader
        class="projects__header"
        :title="t('home.projects.title')"
        :subtitle="t('home.projects.subtitle')"
      />
      <div class="projects__content">
        <SectionText class="projects__text" :text="[t('home.projects.text1')]" />
        <BaseBtn
          class="projects__btn"
          mode="primary"
          size="large"
          text="projects"
          destination="projects"
        />
      </div>
      <div class="projects__cards">
        <div class="projects__pagination" v-if="totalPages > 1">
          <div class="pagination">
            <button
              class="pagination__btn"
              type="button"
              :disabled="currentPage === 1"
              @click="goToPage(currentPage - 1)"
            >
              <BaseIcon class="pagination__icon" name="chevron_left" path="icons" />
            </button>
            <div class="pagination__info">
              <span class="pagination__text">{{ currentPage }}</span>
              <span class="pagination__text">/</span>
              <span class="pagination__text">{{ totalPages }}</span>
            </div>

            <button
              class="pagination__btn"
              type="button"
              :disabled="currentPage === totalPages"
              @click="goToPage(currentPage + 1)"
            >
              <BaseIcon class="pagination__icon" name="chevron_right" path="icons" />
            </button>
          </div>
        </div>
        <Transition name="fade-grid" mode="out-in">
          <div class="projects__cards-container" v-if="gridIsVisible" :key="currentPage">
            <div class="projects__card" v-for="(item, index) in paginatedProjects" :key="index">
              <ProjectCard
                v-if="item"
                :id="item.id"
                :title="item.category"
                :car="item.car.brand + ' ' + item.car.model"
                :engine="item.engine"
                :summary="item.summary"
                btn-text="details"
                :image="item.cardImg"
                :destination="item.destination"
              />
              <p v-else class="projects__temp">
                <span class="projects__temp-text">{{ t('home.projects.in_progress') }}</span>
              </p>
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
  &__temp {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $bg-black;
    border: 1px solid $divider;
    border-radius: $radius;
    color: $tertiary;
  }
  &__temp-text {
    @include h3-dark();
  }
}
.fade-grid-enter-active,
.fade-grid-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-grid-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-grid-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
@media (max-width: 48rem) {
  .projects {
    &__btn {
      display: flex;
      width: 100%;
    }
  }
}
@media (min-width: 48rem) {
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
      width: calc(var(--grid-column-width) * 8 + var(--grid-gutter-width) * 7);
    }
  }
}
</style>
