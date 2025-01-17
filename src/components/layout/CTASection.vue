<script setup lang="ts">
import { ref, computed } from 'vue'
import CtaInitial from '@/components/cta/CtaInitial.vue'
import CtaForm from '@/components/cta/CtaForm.vue'
import CtaSuccess from '@/components/cta/CtaSuccess.vue'
import CtaError from '@/components/cta/CtaError.vue'

type CTAState = 'initial' | 'form' | 'success' | 'error'
const ctaState = ref<CTAState>('initial')

const currentComponent = computed(() => {
  switch (ctaState.value) {
    case 'form':
      return CtaForm
    case 'success':
      return CtaSuccess
    case 'error':
      return CtaError
    default:
      return CtaInitial
  }
})
function handleToForm() {
  console.log('Go to form')
  ctaState.value = 'form'
}
function handleSubmit() {
  console.log('Submit form')
  ctaState.value = 'success'
}
function handleClose() {
  console.log('Close')
  ctaState.value = 'initial'
}
</script>
<template>
  <section class="cta">
    <div class="cta__wrapper container">
      <Transition name="fade" mode="out-in">
        <component
          :is="currentComponent"
          @goToForm="handleToForm"
          @formSubmit="handleSubmit"
          @close="handleClose"
          :key="ctaState"
        />
      </Transition>
    </div>
  </section>
</template>
<style scoped lang="scss">
.cta {
  padding: var(--spacing-m) 0;
  &__wrapper {
    border: 1px solid $divider;
    background: linear-gradient(to right, $bg-black 0, $bg-island 50%, $bg-black 100%);

    height: 456px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (min-width: 48rem) {
  .cta {
    &__wrapper {
      height: 384px;
    }
  }
}
</style>
