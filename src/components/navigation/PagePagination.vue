<script setup lang='ts'>
import { computed } from 'vue';
import BasePagination from '@/components/base/BasePagination.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

const props = defineProps<{
    allPages: number,
    currentPage: number
}>()
const emit = defineEmits(['change', 'next', 'prev'])

const shownPages = computed(() => {
    if(props.currentPage < 5) return [2, 3, 4, 5]
    else if(props.currentPage > (props.allPages - 4)) return [(props.allPages - 4), (props.allPages - 3), (props.allPages - 2), (props.allPages -1)]
    else return [props.currentPage - 1, props.currentPage, props.currentPage + 1]
})

function pageHandler(item:number) {
    if(props.currentPage === item) return
    emit('change', item)
}
function nextHandler() {
    if(props.currentPage === props.allPages) return
 emit('next')
}
function prevHandler() {
    if(props.currentPage === 1) return
 emit('prev')
}

</script>
<template>
<div class="page-pagination">
    <div v-show="allPages > 0 && allPages <= 7" class="page-pagination__pagination">
        <BasePagination v-show="allPages > 1" :state="currentPage > 1 ? 'default' : 'disabled'" @click="prevHandler">
        <BaseIcon class="page-pagination__pagination-icon" name="chevron_left" path="icons"/>
        </BasePagination>
        <BasePagination v-for="p in allPages" :key="p" :state="p === currentPage ? 'active' : 'default'" @click="pageHandler(p)">
            <span class="page-pagination__pagination-text">{{ p }}</span>
        </BasePagination>
        <BasePagination v-show="allPages > 1" :state="currentPage === allPages ? 'disabled' : 'default'" @click="nextHandler">
        <BaseIcon class="page-pagination__pagination-icon" name="chevron_right" path="icons"/>
    </BasePagination>
      </div>

      <div v-show="allPages > 0 && allPages > 7" class="page-pagination__pagination">

        <BasePagination v-show="allPages > 1" :state="currentPage > 1 ? 'default' : 'disabled'" @click="prevHandler">
        <BaseIcon class="page-pagination__pagination-icon" name="chevron_left" path="icons"/>
        </BasePagination>

          <BasePagination  :state=" currentPage === 1 ? 'active' : 'default'" @click="pageHandler(1)">
            <span class="page-pagination__pagination-text">1</span>
        </BasePagination>

        <div class="pagination__dots" v-show="currentPage > 4">
            <span class="page-pagination__pagination-text">...</span>
        </div>

          <BasePagination v-for="p in shownPages" :key="p" :state="p === currentPage ? 'active' : 'default'" @click="pageHandler(p)">
            <span class="page-pagination__pagination-text">{{ p }}</span>
        </BasePagination>

        <div v-show="currentPage < (allPages - 3)" class="pagination__dots">
            <span class="page-pagination__pagination-text">...</span>
        </div>

        <BasePagination  :state=" currentPage === allPages ? 'active' : 'default'" @click="pageHandler(allPages)">
            <span class="page-pagination__pagination-text">{{ allPages }}</span>
        </BasePagination>

        <BasePagination v-show="allPages > 1" :state="currentPage === allPages ? 'disabled' : 'default'" @click="nextHandler">
        <BaseIcon class="page-pagination__pagination-icon" name="chevron_right" path="icons"/>
    </BasePagination>
      </div>
</div>
</template>
<style scoped lang='scss'>
.page-pagination {
    &__pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--spacing-xxs);
  }
  &__pagination-icon {
    width: 20px;
    height: 20px;
  }
  &__pagination-text {
    @include overline-light();
  }
  &__pagination-dots {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>