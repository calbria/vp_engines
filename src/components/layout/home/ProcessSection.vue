<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '../SectionHeader.vue'
import SectionText from '../SectionText.vue'
import ListCard from '@/components/cards/ListCard.vue'
const { t } = useI18n()

const processSteps = [
  { id: 1, text: 'home.process.item1' },
  { id: 2, text: 'home.process.item2' },
  { id: 3, text: 'home.process.item3' },
  { id: 4, text: 'home.process.item4' },
]
</script>
<template>
  <section class="process">
    <div class="process__container container">
      <div class="process__content">
        <div class="process__content-text">
          <SectionHeader
            class="process__title"
            :title="t('home.process.title')"
            :subtitle="t('home.process.subtitle')"
          />
          <SectionText
            class="process__text"
            :text="[t('home.process.text1'), t('home.process.text2')]"
          />
        </div>
      </div>
      <ul class="process__list">
        <ListCard
          class="process__list-item"
          v-for="item in processSteps"
          :key="item.id"
          :text="t(`${item.text}`)"
        >
          <span class="process__list-number">{{ item.id }}</span>
        </ListCard>
      </ul>
    </div>
  </section>
</template>
<style scoped lang="scss">
.process {
  &__container {
    padding: var(--spacing-m) 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-m);
  }
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xxs);
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
  &__content-text {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
  }
}

@media (min-width: 48rem) {
  .process {
    &__list {
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: var(--grid-gutter-width);
    }
    &__list-item {
      width: calc(var(--grid-column-width) * 6 + var(--grid-gutter-width) * 5);
    }
  }
}

@media (min-width: 64rem) {
  .process {
    &__container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: var(--grid-gutter-width);
      align-items: center;
    }
    &__list {
      grid-column: 7 / -1;
      display: flex;
      flex-direction: column;
      row-gap: var(--spacing-xxs);
    }
    &__content {
      grid-column: 1 / 6;
      justify-content: center;
    }
  }
}
</style>
