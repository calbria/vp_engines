<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()




const props = defineProps<{
  name: string
  isOpen: boolean
  toggleDropdown: (name:string) => void
  dropdown?: string[]
}>()

const hasDropdown = computed(() => props.dropdown && props.dropdown.length > 0)
const isActive = computed(() => {
  if(hasDropdown.value) {
    return props.dropdown?.some( item => item === route.name)
  } else return false
  
})

const emit = defineEmits(['choose'])

function chooseItem(name:string) {
  if (hasDropdown.value) {
    //isVisible.value = !isVisible.value
  } else {
    emit('choose')
  }
  props.toggleDropdown(name)
}
function chooseSubItem(name:string) {
  //isVisible.value = false
  props.toggleDropdown(name)
  emit('choose')
}
</script>
<template>
  <li v-if="hasDropdown" class="menu-item" :class="{active: isActive}">
    <a :href="`/${name}`" class="menu-item__link" @click.prevent="chooseItem(name)">
      <span>
        {{ t(`common.menu.${name}`) }}
      </span>
    </a>
    <ul class="dropdown" :class="{ visible: isOpen }">
      <li v-for="item in dropdown" :key="item">
        <RouterLink
          :to="{ name: `${item}` }"
          class="dropdown__link"
          :aria-label="`Go to ${item} page`"
          @click="chooseSubItem(item)"
        >
          <span>
            {{ t(`common.submenu-${name}.${item}`) }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </li>
  <li v-else class="menu-item">
    <RouterLink :to="{ name: name }" class="menu-item__link" @click="chooseItem">
      <span>
        {{ t(`common.menu.${name}`) }}
      </span>
    </RouterLink>
  </li>
</template>
<style scoped lang="scss">
.dropdown {
  @include submenu();
  display: none;
  color: $primary;
  text-transform: none;
  padding: var(--spacing-xs) var(--spacing-xs);
  background-color: $bg-island;
  &__link {
    display: flex;
    flex-wrap: nowrap;

    padding: 0.5rem 0;
    transition: all 0.3s ease-in;
    &:active {
      padding-inline: 12px;
      background-color: $bg-island-inner;
    }
  }
}
.dropdown.visible {
  display: flex;
  flex-direction: column;
  row-gap:  var(--spacing-xxs);
}
.menu-item {
  width: 100%;
}
@media (min-width: 80rem) {
  .dropdown {
    position: absolute;
    top: 96px;
    width: 24rem;
    padding: var(--spacing-m) var(--spacing-xs);
    &__link {
      &:hover {
        padding-inline: 12px;
        background-color: $bg-island-inner;
      }
      &:active {
        border: 1px solid $bg-island-inner;
        background: none;
      }
    }
  }
  .dropdown.visible {
    display: none;
  }
  .menu-item {
    position: relative;
    padding: 36px 0;
    cursor: pointer;

    &:hover .dropdown {
      display: flex;
      flex-direction: column;
      row-gap: var(--spacing-xs);
    }
    &:hover .menu-item__link {
      border-bottom: 1px solid $primary;
    }
    &:active .menu-item__link {
      color: $accent;
      border-bottom: 1px solid $accent;
    }
    &__link {
      padding: 2px 4px;
    }
  }
}
.active {
  color: $primary;
}
.router-link-active {
  color: $primary;
}
</style>
