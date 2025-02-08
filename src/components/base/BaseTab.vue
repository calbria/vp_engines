<script setup lang="ts">
const props = defineProps<{
    isActive:boolean
}>()
</script>
<template>
  <div class="tab">
    <div class="tab__wrapper">
      <button class="tab__inner" :class="isActive ? 'tab__inner--active' : 'tab__inner--default'" type="button">
        <slot>Tab</slot>
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.tab {
  &__wrapper {
  }
  &__inner {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid transparent;
    transition: all 0.5s ease-in-out;
    &:hover {
        color: $tertiary-inv;
        border-color: $accent;
    }
    &:active {
        color: $accent;
        border-color: $accent;
    }
    &--default {
      color: $tertiary-inv;
      
    }
    &--active {
      color: $secondary-inv;
      border-color: $secondary-inv;
    }
  }
}
</style>
