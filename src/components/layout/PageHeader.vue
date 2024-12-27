<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseHamburger from '@/components/base/BaseHamburger.vue'
import HeaderMenuItem from '@/components/menues/HeaderMenuItem.vue'
import LanguageToggle from '@/components/base/LanguageToggle.vue'


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
const screenWidth = ref(window.innerWidth)
const isMobile = computed(() => screenWidth.value < 1280)
const logoName = computed(() => (isMobile.value ? 'logo_header_mobile' : 'logo_header'))
const isOpen = ref(false)

function updateScreenWidth() {
  screenWidth.value = window.innerWidth
}
function burgerToggle() {
isOpen.value = !isOpen.value
}

onMounted(() => {
  updateScreenWidth()
  window.addEventListener('resize', updateScreenWidth)
})
</script>

<template>
  <header class="header">
    <div class="header__wrapper container">

      <div class="header__container">
        <RouterLink class="header__logo" :to="{ name: 'home' }" aria-label="Go to the home page">
          <BaseIcon :name="`${logoName}`" path="logo" />
        </RouterLink>
  
        <nav class="header__nav" aria-label="Main navigation">
          <ul class="header__menu">
            <HeaderMenuItem
              v-for="item in menu"
              :key="item.name"
              :name="item.name"
              :dropdown="item.dropdown"
            />
  
          </ul>
         <div class="header__functionality-item hamburger">
           <button @click="burgerToggle" class="header__functionality-link " type="button">
             
              <BaseHamburger :isOpen="isOpen"/>
           </button>
         </div>
           
          <ul class="header__functionality">
  
            <li class="header__functionality-item">
              <a class="header__functionality-link" href="tel:+30730660276" alt="+30730660276">
                <BaseIcon name="call" path="icons" />
              </a>
            </li>
  
            <li class="header__functionality-item language">
              <LanguageToggle />
            </li>
          </ul>
        </nav>
      </div>
      <nav :class="{'closed': !isOpen}">
        <ul class="header__menu--mobile">
              <HeaderMenuItem
                v-for="item in menu"
                :key="item.name"
                :name="item.name"
                :dropdown="item.dropdown"
              />
    
            </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @include menu();
  color: $tertiary;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1100;
  background-color: $bg-black;
  &__wrapper {

  }
  &__container {
    min-height: 72px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    
   
  }
  &__logo {
    align-self: center;
  }
  &__nav {
   
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: var(--spacing-xs);
  }

  

  &__menu {
    display: none;
    
  }
  &__menu--mobile {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-xs) 0;
  }



  &__functionality {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  &__functionality-item {
    display: flex;
    padding-bottom: 16px;
    align-self: center;
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
}

// .header__mobile .open {
//     display: block;
//   }
.closed {
  transition: all 0.3s ease-in-out;
  display: none;
}

.language {
  display: none;
}

@media (min-width: 80rem) {
  .hamburger {
    display: none;
  }
  .header__nav {
    column-gap: var(--spacing-l);
  }
  .header__menu {
    display: flex;
    align-items: center;
    column-gap: var(--spacing-xxs);
  }
  .language {
    display: flex;
    padding-bottom: 30px;
  }
  .header__container {
    min-height: 96px;
  }
  .header__functionality-item {
    padding-bottom: 30px;
  }
  .header__menu--mobile {
    display: none;
  }

}
</style>
