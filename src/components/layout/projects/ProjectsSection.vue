<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionFilter from '@/components/sections/SectionFilter.vue'
import BasePagination from '@/components/base/BasePagination.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import PagePagination from '@/components/navigation/PagePagination.vue'
import ProjectCard from '@/components/cards/ProjectCard.vue'
import { useProjectsStore } from '@/stores/projectsStore'

type Filter = 'all' | 'repair' | 'tuning' | 'expertise'

const projectsStore = useProjectsStore()
const currentPage = ref(1)
const filter = ref<Filter>('all')

const cardsPerPage: number = 6
const startPrj = computed(() => (currentPage.value - 1) * cardsPerPage)
const endPrj = computed(() => currentPage.value * cardsPerPage)

const filteredProjects = computed(() => {
  if (filter.value === 'all') return projectsStore.allProjects
  else return projectsStore.projectsByCategory(filter.value)
})
const projects = computed(() => filteredProjects.value.slice(startPrj.value, endPrj.value))
const allPages = computed(() => Math.ceil(filteredProjects.value.length / cardsPerPage))


</script>
<template>
  <div class="projects">
    <div class="projects__container container">
      <SectionFilter />
      <div class="projects__card-holder">
        <div v-if="filteredProjects.length === 0" class="projects__nocards">
          <span class="projects__nocards-text">No projects yet</span>
        </div>
        <div v-else class="project__card" v-for="prj in projects" :key="prj.id">
          <ProjectCard
            :id="prj.id"
            :title="prj.category"
            :car="prj.car.brand + ' ' + prj.car.model"
            :engine="prj.engine"
            :summary="prj.summary"
            btn-text="details"
            :image="prj.cardImg"
            :destination="prj.destination"
          />
        </div>
      </div>
      <PagePagination
        :all-pages="allPages"
        :current-page="currentPage"
        @change="(n) => (currentPage = n)"
        @next="() => (currentPage = currentPage + 1)"
        @prev="() => (currentPage = currentPage - 1)"
      />
      <!-- <div v-show="allPages > 0 && allPages <= 7" class="projects__pagination">
        <BasePagination v-show="allPages > 1" state="default">
        <BaseIcon class="projects__pagination-icon" name="chevron_left" path="icons"/>
        </BasePagination>
        <BasePagination v-for="p in allPages" :key="p" :state="p === currentPage ? 'active' : 'default'">
            <span class="projects__pagination-text">{{ p }}</span>
        </BasePagination>
        <BasePagination v-show="allPages > 1" state="default">
        <BaseIcon class="projects__pagination-icon" name="chevron_right" path="icons"/>
    </BasePagination>
      </div>

      <div v-show="allPages > 0 && allPages > 7" class="projects__pagination">

        <BasePagination v-show="allPages > 1" state="default">
        <BaseIcon class="projects__pagination-icon" name="chevron_left" path="icons"/>
        </BasePagination>

          <BasePagination  :state=" currentPage === 1 ? 'active' : 'default'">
            <span class="projects__pagination-text">1</span>
        </BasePagination>

        <div class="pagination__dots" v-show="currentPage > 4">
            <span class="projects__pagination-text">...</span>
        </div>

          <BasePagination v-for="p in shownPages" :key="p" :state="p === currentPage ? 'active' : 'default'">
            <span class="projects__pagination-text">{{ p }}</span>
        </BasePagination>

        <div v-show="currentPage < (allPages - 3)" class="pagination__dots">
            <span class="projects__pagination-text">...</span>
        </div>

        <BasePagination  :state=" currentPage === allPages ? 'active' : 'default'">
            <span class="projects__pagination-text">{{ allPages }}</span>
        </BasePagination>

        <BasePagination v-show="allPages > 1" state="default">
        <BaseIcon class="projects__pagination-icon" name="chevron_right" path="icons"/>
    </BasePagination>
      </div> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
.projects {
  &__container {
    padding: var(--spacing-m) 0;
  }
  &__card-holder {
    padding: var(--spacing-s) 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
  &__nocards {
    color: $secondary-inv;
  }
  &__nocards-text {
    @include h3-dark();
  }

}

@media (min-width: 48rem) {
  .projects {
    &__card-holder {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--grid-gutter-width);
    }
  }
}
@media (min-width: 64rem) {
  .projects {
    &__card-holder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
