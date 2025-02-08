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
    background-image: linear-gradient(to top, $accent 2px, transparent 1px);
    background-repeat: no-repeat;
    background-position-x: left;
    background-size: 0 100%, 100% 100%;

    transition: all 0.5s cubic-bezier(.165,.84,.44,1);
    &:hover {
        color: $tertiary-inv;
        background-image: linear-gradient(to top, $accent 2px, transparent 1px);
        background-size: 100% 100%, 100% 100%;
    }
    &:active {
        color: $accent;
        background-size: 100% 100%, 100% 100%;

    }
    &--default {
      color: $tertiary-inv;
      
    }
    &--active {
      color: $secondary-inv;
      background-image: linear-gradient(to top, $secondary-inv 2px, transparent 1px);
      background-size: 100% 100%, 100% 100%;
      &:hover {
        background-image: linear-gradient(to top, $secondary-inv 2px, transparent 1px);
        background-size: 100% 100%, 100% 100%;
      }

    }
  }
}
</style>
