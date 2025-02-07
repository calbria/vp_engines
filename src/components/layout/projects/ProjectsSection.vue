<script setup lang='ts'>
import { ref, computed } from 'vue';
import SectionFilter from '@/components/sections/SectionFilter.vue';
import BasePagination from '@/components/base/BasePagination.vue';
import ProjectCard from '@/components/cards/ProjectCard.vue';
import { useProjectsStore } from '@/stores/projectsStore';

type Filter = 'all' | 'repair' | 'tuning' | 'expertise'

const projectsStore = useProjectsStore()
const currentPage = ref(1)
const filter = ref<Filter>('all')

const cardsPerPage = 6
const startPrj = computed(() => (currentPage.value - 1) * cardsPerPage )
const endPrj = computed(() => currentPage.value * cardsPerPage )

const filteredProjects = computed(() => {
    if(filter.value === 'all') return projectsStore.allProjects
    else return projectsStore.projectsByCategory(filter.value)
})
const projects = computed(() => filteredProjects.value.slice(startPrj.value, endPrj.value))
</script>
<template>
    <div class="projects">

        <div class="projects__container container">
        <SectionFilter/>
        <div class="projects__card-holder">

            <div class="project__card" v-for="prj in projects" :key="prj.id">
                
                <ProjectCard 
                :id="prj.id"
                    :title="prj.category"
                    :car="prj.car.brand + ' ' + prj.car.model"
                    :engine="prj.engine"
                    :summary="prj.summary"
                    btn-text="details"
                    :image="prj.cardImg"
                    :destination="prj.destination"/>
            </div>
        </div>
        <BasePagination/>
        </div>
    </div>
</template>
<style scoped lang='scss'>
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