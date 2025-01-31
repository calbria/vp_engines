<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/sections/SectionHeader.vue'
import SectionText from '@/components/sections/SectionText.vue'
import ListCard from '@/components/cards/ListCard.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

const { t } = useI18n()
const warranties = [
    {id: '1', text: 'repair.warranties.war_1'},
    {id: '2', text: 'repair.warranties.war_2'},
    {id: '3', text: 'repair.warranties.war_3'}
]
</script>
<template>
    <section class="warranties">
      <div class="warranties__container container">
        <div class="warranties__block">
          <div class="warranties__block-content">
            <SectionHeader
              class="warranties__header"
              :title="t('repair.warranties.title')"
              :subtitle="t('repair.warranties.subtitle')"
            />
            <SectionText :text="[t('repair.warranties.text')]" />
          </div>
          <div class="warranties__block-media warranties__block-media--right">
            <img class="warranties__block-img" src="/images/img_3x4.png" alt="image one" />
          </div>
          <ul class="warranties__list">
            <ListCard class="warranties__list-item" v-for="war in warranties" :key="war.id" :text="t(war.text)">
                <BaseIcon class="warranties__list-icon" name="check" path="icons"/>
            </ListCard>
          </ul>
        </div>

      </div>
    </section>
  </template>
  <style scoped lang="scss">
  .warranties {
    &__container {
      padding: var(--spacing-m) 0;
      display: flex;
      flex-direction: column;
      row-gap: var(--spacing-xxl);
    }
    &__block {
      display: flex;
      flex-direction: column;
      row-gap: var(--spacing-s);
      
    }
    &__header {
      padding-bottom: var(--spacing-xs);
    }
    &__block-media {
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
    }
    &__block-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__list {
        display: flex;
        flex-direction: column;
        row-gap: var(--spacing-xxs);
    }
  }
  @media (min-width: 64rem) {
    .warranties {
      &__block {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: var(--grid-gutter-width);
        row-gap: var(--spacing-xs);
        align-items: center;
      }
      &__block-content {
        grid-column: 1 / 6;
        align-self: self-end;
      }
      &__block-media {
        aspect-ratio: 3 / 4;
        grid-column: 7 / 13;
        grid-row: 1 / 3;
      }
      &__list {
        grid-column: 1 / 6;
        align-self: self-start;
      }
  }
}
  @media (min-width: 90rem) {
    .warranties {
        &__block-media {
            aspect-ratio: 1 / 1;
        }
    }
  }
  </style>