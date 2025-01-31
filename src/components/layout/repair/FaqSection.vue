<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/sections/SectionHeader.vue'
import SectionText from '@/components/sections/SectionText.vue'
import BaseBtn from '@/components/base/BaseBtn.vue'
import AccordionCard from '@/components/cards/AccordionCard.vue'
const { t } = useI18n()
const questions = [
  {
    id: '1',
    question: 'repair.faq_1.question',
    answer: 'repair.faq_1.answer',
    link: 'repair.faq_1.link',
    destination: 'article',
    params: '1',
  },
  {
    id: '2',
    question: 'repair.faq_2.question',
    answer: 'repair.faq_2.answer',
    link: 'repair.faq_2.link',
    destination: '',
    params: '',
  },
  {
    id: '3',
    question: 'repair.faq_3.question',
    answer: 'repair.faq_3.answer',
    link: 'repair.faq_3.link',
    destination: '',
    params: '',
  },
  {
    id: '4',
    question: 'repair.faq_4.question',
    answer: 'repair.faq_4.answer',
    link: 'repair.faq_4.link',
    destination: '',
    params: '',
  },
  {
    id: '5',
    question: 'repair.faq_5.question',
    answer: 'repair.faq_5.answer',
    link: 'repair.faq_5.link',
    destination: 'article',
    params: '2',
  },
]
</script>
<template>
  <section class="faq">
    <div class="faq__container container">
      <div class="faq__wrapper">
        <div class="faq__content">

            <SectionHeader
              class="faq__header"
              :title="t('repair.faq.title')"
              :subtitle="t('repair.faq.subtitle')"
            />
            <div class="faq__main">
              <SectionText class="faq__text" :text="[t('repair.faq.text')]" />
              <BaseBtn class="faq__btn" mode="primary" size="large" text="blog" destination="blog" />
            </div>
        </div>
        <div class="faq__list">
          <AccordionCard
            v-for="faq in questions"
            :key="faq.id"
            :question="t(faq.question)"
            :answer="t(faq.answer)"
            :link="t(faq.link)"
            :destination="faq.destination"
            :params="faq.params"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.faq {
  &__wrapper {
    padding: var(--spacing-m) 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-m);
  }
  &__content {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
  }
  &__main {
    display: flex;
      flex-direction: column;
      row-gap: var(--spacing-s);
  }
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xxs);
    align-items: center;

  }
}

@media (max-width: 48rem) {
  .faq {
    &__btn {
      display: flex;
      width: 100%;
    }
  }
}
@media (min-width: 64rem) {
    .faq {
        &__header {
            width: calc(var(--grid-column-width) * 8 + var( --grid-gutter-width) * 7);
        }
        &__main {
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
</style>
