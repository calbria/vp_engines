<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import SectionText from '@/components/layout/SectionText.vue'
import AdvantageCard from '@/components/cards/AdvantageCard.vue'

const { t } = useI18n()
</script>
<template>
  <section class="advantages">
    <div class="advantages__wrapper container">
      <div class="advantages__content">
        <SectionHeader
          class="advantages__title"
          :title="t('home.advantages.title')"
          :subtitle="t('home.advantages.subtitle')"
        />
        <SectionText class="advantages__text" :text="[t('home.advantages.text1')]" />
      </div>
      <div class="advantages__card-holder">
        <AdvantageCard class="advantages__card" type="complex" />
        <AdvantageCard class="advantages__card" type="equipment" />
        <AdvantageCard class="advantages__card" type="guarantees" />
        <AdvantageCard class="advantages__card" type="innovations" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.advantages {
  &__wrapper {
    padding: var(--spacing-m) 0;
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
      width: calc(var(--grid-column-width) * 8 + var(--grid-gutter-width) * 7);
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
