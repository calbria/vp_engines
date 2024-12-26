<script setup lang="ts">
import BaseIcon from '../base/BaseIcon.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const lang: string[] = ['ua', 'ru']

function changeLang(lang: string) {
  locale.value = lang
}
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <RouterLink class="header__logo" :to="{ name: 'home' }">
        <BaseIcon name="logo_header" path="logo" />
      </RouterLink>
      <nav class="header__nav">
        <ul class="header__menu">
          <li class="header__menu-item">
            <RouterLink class="header__menu-link" :to="{ name: 'home' }">
              <span>
                {{ t('common.menu.home') }}
              </span>
            </RouterLink>
          </li>
          <li class="header__menu-item header__menu-dropdown">
            <div class="header__menu-link">
              <span>
                {{ t('common.menu.services') }}
              </span>
            </div>

            <ul class="header__dropdown">
              <li class="header__dropdown-item">
                <RouterLink class="header__dropdown-link" :to="{ name: 'repair' }">
                    <span>
                        {{t('common.submenu-service.repair')}}
                    </span>
                </RouterLink>
              </li>
              <li class="header__dropdown-item">
                <RouterLink class="header__dropdown-link" :to="{ name: 'tuning' }">{{
                  t('common.submenu-service.tuning')
                }}
                </RouterLink>
              </li>
              <li class="header__dropdown-item">
                <RouterLink class="header__dropdown-link" :to="{ name: 'expertise' }">{{
                  t('common.submenu-service.expertise')
                }}</RouterLink>
              </li>
            </ul>
          </li>
          <li class="header__menu-item">
            <RouterLink class="header__menu-link" :to="{ name: 'projects' }">
              <span>
                {{ t('common.menu.projects') }}
              </span>
            </RouterLink>
          </li>
          <li class="header__menu-item header__menu-dropdown">
            <div class="header__menu-link">
              <span>
                {{ t('common.menu.company') }}
              </span>
            </div>
            <ul class="header__dropdown">
              <li class="header__dropdown-item">
                <RouterLink class="header__dropdown-link" :to="{ name: 'about' }">
                    <span>
                        {{t('common.submenu-company.about')}}
                    </span>
                </RouterLink>
              </li>
              <li class="header__dropdown-item">
                <RouterLink class="header__dropdown-link" :to="{ name: 'process' }">{{
                  t('common.submenu-company.working-process')
                }}
                </RouterLink>
              </li>
              <li class="header__dropdown-item">
                <RouterLink class="header__dropdown-link" :to="{ name: 'blog' }">{{
                  t('common.submenu-company.blog')
                }}</RouterLink>
              </li>
            </ul>
          </li>
          <li class="header__menu-item">
            <RouterLink class="header__menu-link" :to="{ name: 'contact' }">
              <span>
                {{ t('common.menu.contacts') }}
              </span>
            </RouterLink>
          </li>
        </ul>
        <ul class="header__functionality">
          <li class="header__functionality-item hamburger">
            <button class="header__functionality-link" type="button">
              <BaseIcon name="menu" path="icons" />
            </button>
          </li>
          <li class="header__functionality-item">
            <a class="header__functionality-link" href="tel:+30730660276" alt="+30730660276">
              <BaseIcon name="call" path="icons" />
            </a>
          </li>
          <li class="header__functionality-item language">
            <div class="header__functionality-lang" v-for="(item, index) in lang" :key="item">
              <button
                class="header__functionality-btn"
                :class="{ 'current-lang': item === locale }"
                @click="changeLang(item)"
                type="button"
              >
                {{ item.toLocaleUpperCase() }}
              </button>
              <span v-if="index < lang.length - 1">|</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1100;
  background-color: $bg-black;
  &__container {
    
    min-height: 96px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  &__logo {
    align-self: center
  }
  &__nav {
    @include menu();
    color: $tertiary;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: var(--spacing-l);
  }
  &__menu {
    display: none;
  }
  &__menu-item {
    cursor: pointer;
    padding-bottom: 30px;
  }
  &__menu-dropdown {
    position: relative;
    &:hover .header__dropdown{
        display: flex;
    flex-direction: column;
    row-gap: 1rem;
    }
  }
  &__dropdown {
    @include submenu();
    color: $primary;
    text-transform: none;
    display: none;
    width: 24rem;
    padding: var(--spacing-m) var(--spacing-xs);
    background-color: $bg-island;
    position: absolute;
    top:66px;

  }
  &__dropdown-link {
    display: flex;
    flex-wrap: nowrap;
    
    padding: 0.5rem 0;
    transition: all 0.3s ease-in;
    &:hover {
        padding-inline: 12px;
        background-color: $bg-island-inner;
    }
  }

  &__menu-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 2.25rem;
    padding-inline: 0.25rem;
    &:hover {
      border-bottom: 1px solid $primary;
    }
    &:active {
      color: $accent;
      border-bottom: 1px solid $accent;
    }
  }
  &__functionality {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  &__functionality-item {
    display: flex;
    padding-bottom: 30px;
  }
  &__functionality-lang span {
    position: relative;
    bottom: 1px;
  }

  &__functionality-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    &:hover {
      color: $primary;
    }

    &:active {
      color: $accent;
    }
  }
  &__functionality-btn {
    @include menu();
    height: 2.25rem;
    padding-inline: 0.25rem;
    &:hover {
      color: $primary;
    }
    &:active {
      color: $accent;
    }
  }
}

@media (min-width: 90rem) {
    .hamburger {
        display: none;
    }
    .header__menu {
    display: flex;
    align-items: center;
    column-gap: var(--spacing-xxs);
  }

}
.current-lang {
  color: $primary;
}
.router-link-active {
  color: $primary;
}
</style>
