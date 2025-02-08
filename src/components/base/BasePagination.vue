<script setup lang="ts">
const props = defineProps<{
  state: 'default' | 'active' | 'disabled'
}>()
</script>
<template>
  <div class="pagination">
    <div class="pagination__wrapper">
      <button class="pagination__content" :class="`pagination__content--${state}`" :disabled="state === 'disabled'" type="button">
        <slot>1</slot>
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.pagination {
  display: inline-block;
  &__wrapper {
    width: 2rem;
    height: 2rem;
  }
  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $radius;
    background-color: transparent;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: $btn-shadow-hover;
      color: $secondary-inv;
    }
    &:active {
      background-color: $accent;
      border-color: transparent;
      color: $primary;
    }
    &--default {
      border: 1px solid $divider-light;
      color: $secondary-inv;
    }
    &--disabled {
        border: 1px solid $divider-light;
        color: $secondary-inv;
        opacity: 0.4;
        pointer-events: none;
    }
    &--active {
        background-color: $accent;
      border-color: transparent;
      color: $primary;
    }

  }
}
</style>
