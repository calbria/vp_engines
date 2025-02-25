<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectCard from '@/components/cards/ProjectCard.vue'
import BaseIcon from '@/components/base/BaseIcon.vue';
import type { Project } from '@/types/project';

const { t } = useI18n()
const props = defineProps<{
	projects: Project[]
}>()
const currentPage = ref(1)
const itemsPerPage = ref(3)
const gridIsVisible = ref(true)

function updateItemsPerPage() {
  const width = window.innerWidth
  if (width >= 1024) {
    itemsPerPage.value = 3
  } else if (width >= 768) {
    itemsPerPage.value = 2
  } else itemsPerPage.value = 1
}
const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return props.projects.slice(start, end)
})
const totalPages = computed(() => Math.ceil(props.projects.length / itemsPerPage.value))
console.log(totalPages.value);

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  gridIsVisible.value = false
  setTimeout(() => {
    currentPage.value = page
    gridIsVisible.value = true
  }, 500)
}
onMounted(() => {
  updateItemsPerPage()
  window.addEventListener('resize', updateItemsPerPage)
})

</script>
<template>
	<section class="similar">
		<div class="similar__wrapper container">
			<h2 class="similar__title">{{ t('projects.similar') }}</h2>
			<div class="similar__cards">
        <div class="similar__pagination" v-if="totalPages > 1">
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
          <div class="similar__cards-container" v-if="gridIsVisible" :key="currentPage">
            <div class="similar__card" v-for="(item, index) in paginatedProjects" :key="index">
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
              <p v-else class="similar__temp">
                <span class="similar__temp-text">{{ t('home.projects.in_progress') }}</span>
              </p>
            </div>
          </div>
        </Transition>
      </div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.similar {
	&__wrapper {
        padding: var(--spacing-m) 0;
    } 
	&__title {
			padding-bottom: var(--spacing-s);
        color: $primary-inv;
        @include h2-dark();
    }


  &__cards-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: var(--grid-gutter-width);
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
.pagination {
  display: flex;
  align-items: center;
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 8px;
    color: $primary-inv;
    &[disabled] {
      color: $tertiary-inv;
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
    color: $primary-inv;
    display: flex;
    align-items: center;
    column-gap: 2px;
  }
  &__text {
    @include small-dark();
  }
}
@media (min-width: 48rem) {
  .similar {
    &__cards-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media (min-width: 64rem) {
  .similar {
    &__cards-container {
      grid-template-columns: repeat(3, 1fr);
    }

  }
}
</style>