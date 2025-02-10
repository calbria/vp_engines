<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BaseIcon from '../base/BaseIcon.vue'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const props = defineProps<{
  mode: 'light' | 'dark'
  customBreadcrumb?: string
  parentRouteName?: 'projects' | 'blog'
}>()


const homeRoute = router.getRoutes().find(r => r.name === 'home')
const parentRoute = props.parentRouteName ? router.getRoutes().find(r => r.name === props.parentRouteName) : null


const matched = computed(() => {
  const routesMatched = [...route.matched]
  console.log(routesMatched);
  
 if(parentRoute) routesMatched.splice(0, 0, parentRoute)
 console.log(routesMatched);
 
 return homeRoute ? [homeRoute, ...routesMatched] : routesMatched
 
})
console.log(matched.value)


</script>
<template>
  <nav class="breadcrumbs">
    <div class="breadcrumbs__container container">
      <ul class="breadcrumbs__list">

        <li class="breadcrumbs__item"  v-for="(item, index) in matched" :key="index">
          <div class="breadcrumbs__home"
          :class="{
            'breadcrumbs__home--dark': mode === 'dark',
            'breadcrumbs__home--light': mode === 'light',
          }"
          v-if="item.name === 'home'">
            <RouterLink class="breadcrumbs__home-link" :to="{ name: 'home' }">
            <BaseIcon class="breadcrumbs__home-icon" name="home" path="icons" />
          </RouterLink>
          </div>
          <div class="breadcrumbs__item-inner" v-else>
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
                {{index === matched.length - 1 && props.customBreadcrumb ? props.customBreadcrumb : t(`common.${item.meta.breadcrumb}`) }}
              </span>
            </RouterLink>
          </div>
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
    align-items: flex-start;

flex-direction: column;

  }
  &__item-inner {
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

@media (min-width: 48rem) {
  .breadcrumbs {
    &__list {
      flex-direction: row;
      align-items: center;
    }
  }
}

</style>
