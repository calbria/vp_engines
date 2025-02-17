<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import MarkdownIt from 'markdown-it'
import MarkdownItAnchor from 'markdown-it-anchor'

const md = MarkdownIt().use(MarkdownItAnchor, {
  slugify: (s) => s.toLowerCase().replace(/\s+/g, '-'),
})
const { t } = useI18n()

const props = defineProps<{
  title: string
  car: string
  intro: string
}>()
</script>
<template>
  <section class="project">
    <div class="project__container container">
      <h2 class="project__title">{{ t(`projects.category.${title}`) + ' ' + car }}</h2>
      <!-- Intro -->
      <div class="project__intro" v-if="intro" v-html="md.render(intro)"></div>
      <!-- Video -->
      <div class="project__video">Video</div>
      <!-- Main content -->
      <div class="project__main">Main content</div>
      <!-- Results -->
      <div class="project__results">Results</div>
    </div>
  </section>
</template>
<style lang="scss">
.project {
  &__container {
  }
  &__title {
    display: none;
  }
}

.project__intro > ul {
  display: grid;
  row-gap: var(--spacing-s);
  color: $primary-inv;
}
.project__intro > ul > li {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs)
}
.project__intro > ul > li > h3 {
    @include h3-dark();
}
.project__intro > ul > li > ul {
    @include normal-light();
  
}
.project__intro > ul > li > p {
    @include subtitle-light();
 
  
}
.project__intro > ul > li > ul > li {
    list-style: disc inside;
    color: $secondary-inv;
  
}

@media (min-width: 64rem) {
  .project__intro > ul {
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--grid-gutter-width);
  }

}
</style>
