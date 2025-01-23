<script setup lang='ts'>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()



</script>
<template>
<div class=loader>
<div class="loader__wrapper">

    <p class="loader__title">
        <span class="loader__title-inner">
            {{ t('cta.loader') }}
        </span>
        <span class="loader__dot loader__dot--one"></span>
        <span class="loader__dot loader__dot--two"></span>
        <span class="loader__dot loader__dot--three"></span>

    </p>
  

</div>
</div>
</template>
<style scoped lang='scss'>
.loader {
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

 &__title {
    color: $primary;
 }
 
 &__title-inner {
    @include h3-dark();
 }
 &__dot {
    display: inline-block;
    width: 5px;
    height: 5px;
    margin: 0 4px;
    border-radius: 50%;
    background-color: $primary;
    animation: fadeInOut 1.5s infinite;
    &--two {
        animation-delay: 0.5s;
    }
    &--three {
        animation-delay: 1s;
    }
 }

 
}
@keyframes fadeInOut {
    0%{
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
@media (min-width: 64rem) {
    .loader {
        &__wrapper {
    width: 100%;
    padding: 0 calc(var(--grid-column-width) + var(--grid-gutter-width));
 }
}
}
</style>