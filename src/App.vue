<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from './components/layout/PageHeader.vue'
import PageFooter from './components/layout/PageFooter.vue'
import BaseIcon from './components/base/BaseIcon.vue'

const isVisible = ref(false)
const route = useRoute()
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
function checkScroll() {
  isVisible.value = window.scrollY > 200
}
onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <div id="app">
    <PageHeader />
    <RouterView :key="route.fullPath"/>
    <PageFooter />
    <Transition name="slide">
      <button
        class="top-scroll"
        type="button"
        aria-label="Scroll to top"
        v-show="isVisible"
        @click="scrollToTop"
      >
        <div class="top-scroll__wrapper">
          <BaseIcon class="top-scroll__icon" name="scroll_up" path="icons" />
        </div>
      </button>
    </Transition>
  </div>
</template>

<style lang="scss">
.top-scroll {
  position: fixed;
  bottom: 60px;
  right: 10px;
  width: 40px;
  height: 40px;
  z-index: 1000;

  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $primary;
    //border: 1px solid $bg-island-inner;
    border-radius: 50%;

    background-color: $btn-primary-default;

    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: $btn-primary-hover;
      
    }
    &:active {
      background-color: $btn-primary-active;
      
    }
  }
  &__icon {
    width: 24px;
    height: 24px;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(200%);
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
@media (min-width: 64rem) {
  .top-scroll {
    right: 16px;
  }
}
</style>
