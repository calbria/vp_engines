<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MenuDropdown from '@/components/menues/MenuDropdown.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
const props = defineProps<{
  name: string
  dropdown?: string[]
}>()

const currentName = computed(() => {
  if (props.dropdown) return props.dropdown[0]
  else return props.name
})
</script>
<template>
  <li class="menu-item">
    <RouterLink
      :to="{ name: `${currentName}` }"
      class="menu-item__link"
      :aria-label="`Go to ${currentName} page`"
    >
      <span>
        {{ t(`common.menu.${name}`) }}
      </span>
    </RouterLink>
    <MenuDropdown v-if="dropdown" class="menu-item__dropdown" :name="name" :submenu="dropdown" />
  </li>
</template>
<style scoped lang="scss">
.menu-item {
  position: relative;
  cursor: pointer;
  padding-bottom: var(--spacing-xs);
  &:hover .menu-item__dropdown {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  &__link {
    display: flex;
    align-items: center;
    //justify-content: center;
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
  &__dropdown {
    display: none;
  }
}
.router-link-active {
  color: $primary;
}

.active {
  color: $primary;
}
@media (min-width: 80rem) {
  .menu-item {
    padding-bottom: 30px;
    &:hover .menu-item__dropdown {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  }
  .menu-item__dropdown {
    display: none;
    position: absolute;
    top: 66px;
  }
}
</style>
