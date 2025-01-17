<script setup lang="ts">
import { ref } from 'vue'
import BaseBtn from '@/components/base/BaseBtn.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import FormField from '@/components/cta/FormField.vue'

const name = ref('')
const phone = ref('')
const details = ref('')
const emit = defineEmits(['formSubmit', 'close'])
function submitHandler() {
  console.log({ name: name.value, phone: phone.value, details: details.value })
  emit('formSubmit')
}
function closeHandler() {
  emit('close')
}
</script>
<template>
  <div class="form">
    <form class="form__content" @submit.prevent="submitHandler">
      <div class="form__left">
        <FormField />
        <FormField />
      </div>
      <div class="form__right">
        <FormField />
        <BaseBtn class="form__btn" mode="primary" size="small" text="send" type="submit" />
      </div>
    </form>
    <BaseIcon @click="closeHandler" class="form__close" name="close" path="icons" />
  </div>
</template>
<style scoped lang="scss">
.form {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &__content {
    width: 100%;
    padding: 0 calc(var(--grid-column-width) + var(--grid-gutter-width));
  }
  &__left {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s)
  }
  &__close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: $tertiary;
    cursor: pointer;
    &:hover {
      color: $primary;
    }
    &:active {
      color: $accent;
    }
  }
}
@media (max-width: 48rem) {
  .form  {
    &__btn {
      width: 100%;
    }
  }
}

@media (min-width: 64rem) {
  .form {
    &__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: var(--grid-gutter-width);
    }
  }
}
</style>
