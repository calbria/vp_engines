<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router'
import BaseIcon from '../base/BaseIcon.vue'

const { t } = useI18n()
const props = defineProps<{
  image: string
  date: string
  time: string
  tag: string
  title: string
  text: string
}>()
</script>

<template>
  <div class="card">
    <div class="card__wrapper">
      <RouterLink to="#" class="card__media">
        <img :src="image" alt="preview" class="card__img" />
      </RouterLink>
      <div class="card__content">
        <div class="card__content-header">
          <p class="card__date">
            <span>{{ date }}</span>&nbsp;&bull;&nbsp;<span>{{ time }} {{ t('blog.min') }}</span>
             
          </p>
          <p class="card__tag">{{ t(`blog.filter.${tag}`) }}</p>
        </div>
        <div class="card__content-main">
          <h3 class="card__title">
            <RouterLink to="#" class="card__title">
              {{ title }}
            </RouterLink>
          </h3>
          <p class="card__text">
           {{ text }}
          </p>
        </div>
        <div class="card__content-footer">
        <RouterLink to="#" class="card__link">
          <span class="card__link-text">{{ t('blog.read') }}</span>
          <BaseIcon class="card__link-icon" name="chevron_right" path="icons" />
        </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  &__wrapper {
    height: 100%;
    border: 1px solid $divider-light;
    border-radius: $radius;
    transition: all 0.5s ease-in-out;
    &:hover {
      background: #e9f3ff;
      box-shadow: 0 4px 12px rgba(21, 27, 34, 0.15);
      transform: translateY(-4px);
    }
  }

  &__media {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background-color: $bg-black;
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
  }

  &__img {
    width: 100%;
    object-fit: cover;
    opacity: 0.75;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.05);
      opacity: 1;
    }
  }
  &__content {
    padding: var(--spacing-s);
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
  }
 
  &__content-main {
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
  }
  &__text,
  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limit to 3 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 3;
    text-overflow: ellipsis; /* Optional: adds ... at the end */
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  &__date {
    color: $tertiary-inv;
    margin-bottom: 0.25rem;
    @include breadcrumbs-light();
  }
  &__tag {
    color: $tertiary-inv;
    @include subheader-2-light();
  }
  &__title {
    transition: all 0.5s ease-in-out;
    color: $primary-inv;
    @include h4-dark();
    &:hover {
      color: $accent;
    }
  }
  &__text {
    color: $secondary-inv;
    @include small-light();
  }
  &__link {
    display: flex;
    align-items: center;
    color: $primary-inv;

    @include small-light();
  }
  &__link:hover .card__link-text {
    background-size:
      100% 100%,
      100% 100%;
  }
  &__link:active .card__link-text {
    color: $accent;
  }
  &__link-text {
    display: inline-block;
    font-style: italic;
    background-image: linear-gradient(to top, $accent 2px, transparent 1px);
    background-repeat: no-repeat;
    background-position-x: left;
    background-size:
      0 100%,
      100% 100%;
    transition: background-size 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &__link-icon {
    color: $accent;
  }
}
</style>
