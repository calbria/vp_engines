<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import BaseIcon from '@/components/base/BaseIcon.vue'
const { t } = useI18n()


const emit = defineEmits(['close'])
function closeHandler() {
  emit('close')
}
</script>
<template>
<div class=success>
<div class="success__wrapper">

    <p class="success__title">
        <span class="success__title-inner">
            {{ t('cta.success.title') }}
        </span>
        
    </p>
    <p class="success__text">
        <span class="success__text-inner">
            {{ t('cta.success.subtitle') }}
        </span>
        
    </p>
    <BaseIcon @click="closeHandler" class="success__close" name="close" path="icons" />
</div>
</div>
</template>
<style scoped lang='scss'>
.success {
    height: 100%;
 &__wrapper {
height: 100%;
    width: 100%;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
    align-items: center;
    justify-content: center;
    position: relative;
    
 }
 &__text {
    color: $secondary;
 }
 &__title {
    color: $primary;
 }
 &__text-inner {
    @include normal-dark();
 }
 &__title-inner {
    @include h3-dark();
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
@media (min-width: 64rem) {
    .success {
        &__wrapper {
    width: 100%;
    padding: 0 calc(var(--grid-column-width) + var(--grid-gutter-width));
 }
}
}
</style>