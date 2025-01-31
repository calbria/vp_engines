<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

const isOpen = ref(false)
const props = defineProps<{
  question: string
  answer: string
  destination?: string
  params?: string
  link?: string
}>()
const toObject = computed(() => {
  if(props.params) {
    return { name: props.destination, params: {id: props.params}}
  } else return { name: props.destination }
})
function toggleOpen() {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <div class="accordion">
    <div class="accordion__wrapper" @click="toggleOpen">
      <h3 class="accordion__question">
        <span class="accordion__question-text"> {{ question }} </span>
        <BaseIcon
          class="accordion__icon"
          :class="{ rotate: isOpen }"
          name="arrow_down"
          path="icons"
        />
      </h3>

      <Transition name="fade">
        <p v-show="isOpen" class="accordion__answer">
          <span class="accordion__answer-text">
            {{ answer }}
            <RouterLink v-if="props.destination" class="accordion__link" :to="toObject"
              >читать статью</RouterLink
            >
          </span>
        </p>
      </Transition>
    </div>
  </div>
</template>
<style scoped lang="scss">
.accordion {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    width: var(--grid-width);
  }
  &__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-xxs) var(--spacing-s);
    border: 1px solid $divider;
    background-color: $bg-island;
    color: $primary;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    &:hover {
      background-color: $bg-island-inner;
    }
    &:active {
      background-color: transparent;
    }
  }
  &__question-text {
    @include normal-dark();
  }
  &__icon {
    width: 24px;
    height: 24px;
    transition: all 0.5s ease-in-out;
  }
  &__icon.rotate {
    transform: rotate(0.5turn);
  }

  &__answer {
    padding: var(--spacing-xxs) var(--spacing-s);
    border: 1px solid $divider;
    border-top: none;
    color: $secondary;
    overflow: hidden;
  }

  &__answer-text {
    @include small-dark();
  }
  &__link {
    font-style: italic;
    background-image: linear-gradient(to top, $primary 1px, transparent 1px);
    background-repeat: no-repeat;
    background-position-x: left;
    background-size:
      0 100%,
      100% 100%;
    transition: background-size 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &__link:hover {
    background-size:
      100% 100%,
      100% 100%;
    color: $primary;
  }
  &__link:active {
    background-size:
      100% 100%,
      100% 100%;
    background-image: linear-gradient(to top, $accent 1px, transparent 1px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease-in-out;
}
.fade-enter-from {
  transform: translateY(-10px); /* Start hidden above */
  opacity: 0;
}
.fade-enter-to {
  transform: translateY(0); /* Slide into view */
  opacity: 1;
}
.fade-leave-from {
  transform: translateY(0); /* Fully visible initially */
  opacity: 1;
}
.fade-leave-to {
  transform: translateY(-10px); /* Slide back out */
  opacity: 0;
}
@media (min-width: 64rem) {
  .accordion {
    &__wrapper {
      width: calc(var(--grid-column-width) * 10 + var(--grid-gutter-width) * 9);
    }
  }
}
@media (min-width: 80rem) {
  .accordion {
    &__wrapper {
      width: calc(var(--grid-column-width) * 8 + var(--grid-gutter-width) * 7);
    }
  }
}
</style>
