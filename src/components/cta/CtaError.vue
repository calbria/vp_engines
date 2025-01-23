
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
    <div class=error>
    <div class="error__wrapper">
    
        <p class="error__title">
            <span class="error__title-inner">
                {{ t('cta.error.title') }}
            </span>
            
        </p>
        <p class="error__text">
            <span class="error__text-inner">
                {{ t('cta.error.subtitle') }}
            </span>
            
        </p>
        <BaseIcon @click="closeHandler" class="error__close" name="close" path="icons" />
    </div>
    </div>
    </template>
    <style scoped lang='scss'>
    .error {
        height: 100%;
     &__wrapper {
    height: 100%;
        width: 100%;
        padding: 0 2.5rem;
        display: flex;
        flex-direction: column;
        row-gap: var(--spacing-s);
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
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
        .error {
            &__wrapper {
        width: 100%;
        padding: 0 calc(var(--grid-column-width) + var(--grid-gutter-width));
     }
    }
    }
    </style>