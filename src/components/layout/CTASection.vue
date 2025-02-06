<script setup lang="ts">
import { ref, computed } from 'vue'
import CtaInitial from '@/components/cta/CtaInitial.vue'
import CtaForm from '@/components/cta/CtaForm.vue'
import CtaSuccess from '@/components/cta/CtaSuccess.vue'
import CtaError from '@/components/cta/CtaError.vue'
import CtaLoading from '@/components/cta/CtaLoading.vue'

type CTAState = 'initial' | 'form' | 'success' | 'error' | 'loading'
interface FormData {
  name: string
  phone: string
  details: string | null // Adjust as needed for optional fields
}
const ctaState = ref<CTAState>('initial')

const currentComponent = computed(() => {
  switch (ctaState.value) {
    case 'form':
      return CtaForm
    case 'success':
      return CtaSuccess
    case 'error':
      return CtaError
    case 'loading':
      return CtaLoading
    default:
      return CtaInitial
  }
})
function handleToForm() {
  ctaState.value = 'form'
}
async function handleSubmit(formData: FormData) {
  ctaState.value = 'loading'
try {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5
      if(isSuccess) {
        resolve()
      } else {
        reject('Error: something went wrong')
      }
    }, 2000)
  })

  ctaState.value = 'success'

} catch(error) {
console.log(error);
ctaState.value = 'error'
}
  console.log(formData)

}
function handleClose() {
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
  background-color: $bg-globe;
  &__wrapper {
    border: 1px solid $divider;
    background: linear-gradient(to right, $bg-black 0, $bg-island 50%, $bg-black 100%);

    height: 520px;
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
@media (min-width: 64rem) {
  .cta {
    &__wrapper {
      height: 384px;
    }
  }
}
</style>
