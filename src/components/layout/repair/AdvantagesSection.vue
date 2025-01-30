<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/sections/SectionHeader.vue'
import SectionText from '@/components/sections/SectionText.vue'
import AdvantageCard from '@/components/cards/AdvantageCard.vue'
import BaseBtn from '@/components/base/BaseBtn.vue'

const { t } = useI18n()
const advantages = ['complex', 'equipment', 'guarantees', 'innovations']
</script>
<template>
  <section class="advantages">
    <div class="advantages__wrapper container">
        <SectionHeader
          class="advantages__header"
          :title="t('repair.advantages.title')"
          :subtitle="t('repair.advantages.subtitle')"
        />
      <div class="advantages__content">
        <SectionText class="advantages__text" :text="[t('repair.advantages.text1')]" />
        <BaseBtn class="advantages__btn" mode="primary" size="large" text="working-process" destination="working-process" />
      </div>


      <div class="advantages__card-holder">
        <AdvantageCard
          class="advantages__card"
          v-for="adv in advantages"
          :key="adv"
          :title="t(`cards.advantage-${adv}.title`)"
          :text="t(`cards.advantage-${adv}.text`)"
        />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.advantages {
  &__wrapper {
    padding: var(--spacing-m) 0;
  }
  &__header {
    padding-bottom: var(--spacing-xs);
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
    padding-bottom: var(--spacing-m);
  }
  &__card-holder {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
  }
  &__card {
    display: flex;
    height: 100%;
  }
}
@media (max-width: 48rem) {
  .advantages {
    &__btn {
      display: flex;
      width: 100%;
    }
  }
}
@media (min-width: 48rem) {
  .advantages {
    &__card-holder {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: var(--grid-gutter-width);
      row-gap: var(--grid-gutter-width);
    }
  }
}
@media (min-width: 64rem) {
  .advantages {
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

@media (min-width: 90rem) {
  .advantages {
    &__card-holder {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
