<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/sections/SectionHeader.vue'
import SectionText from '@/components/sections/SectionText.vue'

const { t } = useI18n()
</script>
<template>
  <section class="intro">
    <div class="intro__container container">
      <div class="intro__block">
        <div class="intro__block-content intro__block-content--left">
          <SectionHeader
            class="intro__header"
            :title="t('repair.intro.title')"
            :subtitle="t('repair.intro.subtitle')"
          />
          <SectionText :text="[t('repair.intro.text_1'), t('repair.intro.text_2')]" />
        </div>
        <div class="intro__block-media intro__block-media--right">
          <img class="intro__block-img" src="/images/img_3x4.png" alt="image one" />
        </div>
      </div>
      <div class="intro__block">
        <div class="intro__block-media intro__block-media--left">
          <img class="intro__block-img" src="/images/img_3x4.png" alt="image one" />
        </div>
        <div class="intro__block-content intro__block-content--right">
          <SectionText :text="[t('repair.intro.text_3'), t('repair.intro.text_4')]" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.intro {
  &__container {
    padding: var(--spacing-m) 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-m);
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
    order: -1;
  }
  &__block-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media (min-width: 64rem) {
  .intro {
    &__block {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: var(--grid-gutter-width);
      align-items: center;
    }
    &__block-media {
      aspect-ratio: 3 / 4;
    }
    &__block-content--left {
      grid-column: 1 / 7;
    }
    &__block-media--right {
      grid-column: 8 / 13;
    }
    &__block-content--right {
      grid-column: 8 / 13;
    }
    &__block-media--left {
      grid-column: 1 / 7;
    }
  }
}
@media (min-width: 90rem) {
  .intro {
    &__block-media {
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
    }
  }
}
</style>
