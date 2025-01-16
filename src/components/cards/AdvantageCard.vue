<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import BaseIcon from '@/components/base/BaseIcon.vue';
const props = defineProps<{
    type: string
}>()
const { t } = useI18n()
</script>
<template>
<div class="advantage-card">
<div class="advantage-card__wrapper">
    <div class="advantage-card__header">
        <BaseIcon class="advantage-card__icon" name="logo" path="icons"/>
        <h3 class="advantage-card__title">{{ t(`cards.advantage-${type}.title`) }}</h3>
    </div>
    <p class="advantage-card__text">{{ t(`cards.advantage-${type}.text`) }}</p>
</div>
</div>
</template>
<style scoped lang='scss'>
.advantage-card {
    &__wrapper {
        padding: var(--spacing-m) var(--spacing-s);
        background: linear-gradient(to top, $bg-black, $bg-island);
        border: 1px solid $divider;
        border-radius: $radius;
        color: $secondary;
        display: flex;
        flex-direction: column;
        row-gap: var(--spacing-xxs);
    }
    &__header {
        color: $primary;
        display: flex;
        align-items: center;
        column-gap: var(--spacing-xxs);
  
        row-gap: var(--spacing-xxs);
    }
    &__title {
        @include h4-dark();
    }
    &__text {
        @include small-dark();
    }
    &__icon {
        width: 64px;
        height: 64px;
    }

}

@media (min-width: 48rem) {
    .advantage-card {
 
    &__header {
        color: $primary;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: var(--spacing-xxs);
    }



}
}
@media (min-width: 80rem) {
    .advantage-card {

        &__icon {
            width: 80px;
            height: 80px;
        }
    }
}
</style>