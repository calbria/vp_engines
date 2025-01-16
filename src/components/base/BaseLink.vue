<script setup lang="ts">
import BaseIcon from '@/components/base/BaseIcon.vue'
import { RouterLink } from 'vue-router'

/**
 * Props for BaseLink component
 * - `type`: Specifies the link type ('inner' for internal, 'outer' for external).
 * - `destination`: URL or route to navigate to.
 * - `iconName`: Name of the optional icon to display.
 * - `text`: Text for the link.
 */

const props = defineProps<{
  type: 'inner' | 'outer'
  destination: string
  iconName?: string
  text?: string
}>()
</script>

<template>
  <RouterLink class="link" v-if="type === 'inner'" :to="{ name: destination }">
    <div v-if="iconName" class="link__icon">
      <BaseIcon class="link__icon-svg" :name="iconName" path="icons" />
    </div>
    <span class="link__text" v-if="text">{{ text }}</span>
  </RouterLink>
  <a
    class="link"
    :href="destination"
    v-if="type === 'outer'"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div v-if="iconName" class="link__icon">
      <BaseIcon class="link__icon-svg" :name="iconName" path="icons" />
    </div>
    <span class="link__text" v-if="text">{{ text }}</span>
  </a>
</template>
<style scoped lang="scss">
.link {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  
&:hover .link__text {
    background-size: 100% 100%, 100% 100%;
    color: $primary;
}
&:active .link__text {
    background-size: 100% 100%, 100% 100%;
    background-image: linear-gradient(to top, $accent 1px, transparent 1px);
}
&:hover .link__icon {
    color: $primary;
}
&:active .link__icon {
    color: $accent;
}

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  &__icon-svg {
    width: 24px;
    height: 24px;
  }
  &__text {
    background-image: linear-gradient(to top, $primary 1px, transparent 1px);
    background-repeat: no-repeat;
    background-position-x: left;
    background-size: 0 100%, 100% 100%;
    transition: background-size 0.5s cubic-bezier(.165,.84,.44,1)
  }
}
</style>
