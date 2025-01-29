<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BaseIcon from '../base/BaseIcon.vue'

const { t } = useI18n()
const route = useRoute()
const matched = computed(() => route.matched)
console.log(matched.value)
</script>
<template>
  <nav class="breadcrumbs">
    <div class="breadcrumbs__container container">
      <ul class="breadcrumbs__list">
        <li class="breadcrumbs__home">
          <RouterLink class="breadcrumbs__home-link" :to="{ name: 'home' }">
            <BaseIcon class="breadcrumbs__home-icon" name="home" path="icons" />
          </RouterLink>
          
        </li>
        <li class="breadcrumbs__list-item" v-for="(item, index) in matched" :key="index">
          <BaseIcon class="breadcrumbs__chevron" name="chevron_right" path="icons"/>
          <RouterLink class="breadcrumbs__link" :to="{name: item.name}">
            <span class="breadcrumbs__link-text">
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
  &__home-link {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: $tertiary;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: $icon-hover;
    }
    &:active {
      color: $icon-click;
    }
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
    color: $tertiary;
    &:hover {
      color: $primary;
    }
    &:active {
      color: $accent;
    }
  }
  &__link-text {
    @include breadcrumbs-dark();
  }
  &__chevron {
    color: $tertiary;
    width: 24px;
    height: 24px;
  }
}
.router-link-active {

}
.router-link-exact-active {

    border-bottom: 1px solid $tertiary;
    &:hover {
      border-bottom: 1px solid $primary;
    }
    &:active {
      border-bottom: 1px solid $accent;
    }
}
</style>
