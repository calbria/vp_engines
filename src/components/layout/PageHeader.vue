<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseHamburger from '@/components/base/BaseHamburger.vue'
import LanguageToggle from '@/components/base/LanguageToggle.vue'
import MenuItem from '@/components/menues/MenuItem.vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)
const currentSubmenu = ref<string | undefined>(undefined)

interface MenuItem {
  name: string
  dropdown?: string[]
}
const menu: MenuItem[] = [
  {
    name: 'home',
  },
  {
    name: 'services',
    dropdown: ['repair', 'tuning', 'expertise'],
  },
  {
    name: 'projects',
  },
  {
    name: 'company',
    dropdown: ['about', 'working-process', 'blog'],
  },
  {
    name: 'contacts',
  },
]

function burgerToggle() {
  isOpen.value = !isOpen.value

  if (typeof route.name === 'string') {
    currentSubmenu.value = route.name
  }
}
function closeMenu() {
  isOpen.value = false
}

function toggleSubmenu(menuName: string) {
  currentSubmenu.value = currentSubmenu.value === menuName ? '' : menuName
}
</script>
<template>
  <header class="header" :class="{ 'header--collapsed': !isOpen, 'header--open': isOpen }">
    <div class="header__container container">
      <nav class="header__nav">
        <div class="header__nav-wrapper">
          <RouterLink :to="{ name: 'home' }" class="header__logo" @click="closeMenu">
            <BaseIcon name="logo_header" path="logo" />
          </RouterLink>
          <div class="header__buttons-mobile">
            <button class="header__btn-mobile" @click="burgerToggle">
              <BaseHamburger :is-open="isOpen" />
            </button>
            <a class="header__btn-mobile" href="tel:+30730660276" alt="+30730660276">
              <BaseIcon name="call" path="icons" />
            </a>
          </div>
        </div>
        <div class="header__menu-wrapper">
          <ul class="header__menu">
            <MenuItem
              v-for="item in menu"
              :key="item.name"
              :name="item.name"
              :dropdown="item.dropdown"
              :isOpen="currentSubmenu === item.name"
              :toggleDropdown="() => toggleSubmenu(item.name)"
              @choose="closeMenu"
            />
          </ul>
          <div class="header__buttons-desktop">
            <a
              class="header__btn-desktop header__btn-desktop--call"
              href="tel:+380963167243"
              alt="+380963167243"
            >
              <BaseIcon name="call" path="icons" />
            </a>
            <div class="header__btn-desktop">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: $bg-black;
  overflow: hidden;
  transition: max-height 0.8s ease-in-out;
  &--collapsed {
    max-height: 72px;
  }
  &--open {
    max-height: 1000px;
  }

  &__nav {
    color: $tertiary;
  }
  &__nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    width: 154px;
  }
  &__buttons-mobile {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  &__btn-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    &:active {
      color: $icon-click;
    }
  }
  &__btn-desktop {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &:hover {
      color: $primary;
    }
    &:active {
      color: $accent;
    }
    &--call {
      display: none;
    }
  }
  &__menu-wrapper {
    padding: 1.5rem 0;
  }
  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
  }
}
// .submenu {
//   display: none;
// }

@media (min-width: 80rem) {
  .header {
    overflow: visible;
    &__nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__logo {
      padding: 1.5rem 0;
      width: 194px;
    }
    &--collapsed {
      max-height: 96px;
    }
    &__nav-wrapper {
      display: block;
    }
    &__buttons-mobile {
      display: none;
    }
    &__menu-wrapper {
      display: flex;
      align-items: center;
      column-gap: 4rem;
      padding: 0;
    }
    &__menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 1rem;
    }

    &__buttons-desktop {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }
    &__btn-desktop {
      padding: 0;

      &--call {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
      }
    }
  }
}
</style>
