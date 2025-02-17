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
  video?: string
  videoText?: string
}>()
</script>
<template>
  <section class="project">
    <div class="project__container container">
      <h2 class="project__title">{{ t(`projects.category.${title}`) + ' ' + car }}</h2>
      <!-- Intro -->
      <div class="project__intro" v-if="intro" v-html="md.render(intro)"></div>
      <!-- Video -->
      <div class="project__video">
        <div class="project__video-content">
            <h3 class="project__video-title">{{ t('projects.video.title') }}</h3>
            <div class="project__video-text">
                <p v-if="videoText" class="project__video-text-inner" v-html="md.render(videoText)"></p>
                <span class="project__video-text-inner">{{ t('projects.video.text') }}</span>
                <a class="project__video-link" href="https://www.youtube.com/@VAGhub">
                    <span class="project__video-link-inner">{{ t('projects.video.link') }}</span>
                </a>
                
            </div>
        </div>
        <iframe
          class="project__video-frame"
          :src="`https://www.youtube-nocookie.com/embed/${video}`"
          allowfullscreen
          frameborder="0"
        ></iframe>
      </div>
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
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-m);
  }
  &__title {
    display: none;
  }
  &__video {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
  &__video-frame {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
  &__video-content {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
    color: $primary-inv;
  }
  &__video-title {
 @include h3-dark();
  }
  &__video-text-inner {
    
    color: $secondary-inv;
  }
  &__video-text {
    @include normal-light();
    
  }
  &__video-link {
    @include subtitle-light();
    &:hover .project__video-link-inner {
        background-size: 100% 100%, 100% 100%;
        color: $primary-inv;
    }
    &:active .project__video-link-inner {
        background-size: 100% 100%, 100% 100%;
        background-image: linear-gradient(to top, $accent 2px, transparent 1px);
        color: $accent;
    }
  }
  &__video-link-inner {
    background-image: linear-gradient(to top, $accent 2px, transparent 1px);
    background-repeat: no-repeat;
    background-position-x: left;
    background-size: 0 100%, 100% 100%;
    transition: background-size 0.5s cubic-bezier(.165,.84,.44,1)
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
  row-gap: var(--spacing-xs);
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
    .project {
        &__video {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            align-items: center;
  }
  &__video-content {
    grid-column: 1 / 6;
  }
  &__video-frame {
    grid-column: 7 / 13;
  }


    }
  .project__intro > ul {
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--grid-gutter-width);
  }
}
</style>
