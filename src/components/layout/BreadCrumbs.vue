<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BaseIcon from '../base/BaseIcon.vue'

const { t } = useI18n()
const route = useRoute()
const props = defineProps<{
  mode: 'light' | 'dark'
}>()
const matched = computed(() => route.matched)
console.log(matched.value)
</script>
<template>
  <nav class="breadcrumbs">
    <div class="breadcrumbs__container container">
      <ul class="breadcrumbs__list">
        <li
          class="breadcrumbs__home"
          :class="{
            'breadcrumbs__home--dark': mode === 'dark',
            'breadcrumbs__home--light': mode === 'light',
          }"
        >
          <RouterLink class="breadcrumbs__home-link" :to="{ name: 'home' }">
            <BaseIcon class="breadcrumbs__home-icon" name="home" path="icons" />
          </RouterLink>
        </li>
        <li class="breadcrumbs__list-item" v-for="(item, index) in matched" :key="index">
          <BaseIcon
            class="breadcrumbs__chevron"
            :class="{
              'breadcrumbs__chevron--dark': mode === 'dark',
              'breadcrumbs__chevron--light': mode === 'light',
            }"
            name="chevron_right"
            path="icons"
          />
          <RouterLink
            class="breadcrumbs__link"
            :class="{
              'breadcrumbs__link--dark': mode === 'dark',
              'breadcrumbs__link--light': mode === 'light',
            }"
            :to="{ name: item.name }"
          >
            <span
              class="breadcrumbs__link-text"
              :class="{
                'breadcrumbs__link-text--dark': mode === 'dark',
                'breadcrumbs__link-text--light': mode === 'light',
              }"
            >
              {{ t(`common.${item.meta.breadcrumb}`) }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.breadcrumbs {
  &__container {
    padding-top: var(--spacing-m);
  }
  &__home {
    cursor: pointer;

    transition: all 0.5s ease-in-out;
    &--light {
      color: $tertiary-inv;
      &:hover {
        color: $secondary-inv;
      }
      &:active {
        color: $icon-click;
      }
    }
    &--dark {
      color: $tertiary;
      &:hover {
        color: $icon-hover;
      }
      &:active {
        color: $icon-click;
      }
    }
  }
  &__home-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__home-icon {
    width: 24px;
    height: 24px;
  }
  &__list {
    display: flex;
    align-items: center;
  }
  &__list-item {
    display: flex;
    align-items: center;
  }
  &__link {
    display: flex;
    align-items: center;
    height: 24px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &--dark {
      color: $tertiary;
      &:hover {
        color: $primary;
      }
      &:active {
        color: $accent;
      }
    }
    &--light {
      color: $tertiary-inv;
      &:hover {
        color: $secondary-inv;
      }
      &:active {
        color: $accent;
      }
    }
  }
  &__link-text {
    &--dark {
      @include breadcrumbs-dark();
    }
    &--light {
      @include breadcrumbs-light();
    }
  }
  &__chevron {
    
    width: 24px;
    height: 24px;
    &--light {
      color: $tertiary-inv;
    }
    &--dark {
      color: $tertiary;
    }
  }
}
.router-link-active {
}
.router-link-exact-active.breadcrumbs__link--dark {
  border-bottom: 1px solid $tertiary;
  &:hover {
    border-bottom: 1px solid $primary;
  }
  &:active {
    border-bottom: 1px solid $accent;
  }
}
.router-link-exact-active.breadcrumbs__link--light {
  border-bottom: 1px solid $tertiary-inv;
  &:hover {
    border-bottom: 1px solid $secondary-inv;
  }
  &:active {
    border-bottom: 1px solid $accent;
  }
}
</style>
