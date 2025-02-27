<script setup lang="ts">
import { ref } from 'vue'
import SectionFilter from '@/components/sections/SectionFilter.vue'
import BlogCard from '@/components/cards/BlogCard.vue'
import PagePagination from '@/components/navigation/PagePagination.vue'

type Filter = 'all' | 'owners' | 'profi' | 'myths'
const filter = ref<Filter>('all')
const filterTabs: Filter[] = ['all', 'owners', 'profi', 'myths']
</script>
<template>
  <section class="blog">
    <div class="blog__container container">
      <SectionFilter
        :filter-tabs="filterTabs"
        :current-tab="filter"
        type="blog"
        @choose-tab="(tab) => (filter = tab)"
      />

      <div class="blog__card-holder">
        <BlogCard
          image="/images/blog/preview.png"
          date="25/01/2024"
          tag="owners"
          time="10"
          title="Сколько стоит капремонт: за что вы платите"
          text="Точного ответа на этот вопрос не существует. Сумма формируется из стоимости работ по
            восстановлению, стоимости станочных работ (если необходимо) и стоимости запчастей. Все
            составляющие зависят от конкретной модели двигателя и характера неисправностей."
						slug="skolko-stoit-kapremont"
        />
        <BlogCard
          image="/images/blog/preview.png"
          date="10/07/2024"
          time="15"
          tag="profi"
          title="Селективная сборка: подводные камни"
          text="Современные двигатели обладают высокой мощностью при малой массе. Для обеспечения надежности на производстве применяются элементы селективной сборки"
          slug="selectivnaya-sborka"
					/>
        <BlogCard
          image="/images/blog/preview.png"
          date="17/01/2025"
          tag="myths"
          time="8"
          title="Контрактный двигатель или капремонт"
          text="Ответ зависит в первую очередь от понимания “лучше”: дешевле, быстрее или качественнее."
					slug="kontraktniy-dvigatel-ili-kapremont"
        />
      </div>

      <!-- <PagePagination
		:all-pages="allPages"
        :current-page="currentPage"
        @change="(n) => (currentPage = n)"
        @next="() => (currentPage = currentPage + 1)"
        @prev="() => (currentPage = currentPage - 1)"/> -->
    </div>
  </section>
</template>

<style scoped lang="scss">
.blog {
  &__card-holder {
    padding: var(--spacing-s) 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
}
@media (min-width: 48rem) {
  .blog {
    &__card-holder {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--grid-gutter-width);
    }
  }
}
@media (min-width: 64rem) {
  .blog {
    &__card-holder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
