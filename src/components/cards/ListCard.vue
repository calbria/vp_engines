
<script setup lang='ts'>
const props = defineProps<{
    text: string
}>()
</script>
<template>


<li  class="list-card">
<div class="list-card__wrapper">
    <div class="list-card__icon">
        <div class="list-card__icon-inner">

            <slot>
                1
            </slot>
        </div>

    </div>
    <p class="list-card__text">{{ text }}</p>
</div>
    
</li>
</template>
<style scoped lang='scss'>
.list-card {
    &__wrapper {
        padding: 1rem;
        border-radius: $radius;
        background: linear-gradient(to left, $bg-black, $bg-island);
        border: 1px solid $divider;
        display: flex;
        align-items: center;
        column-gap: 1rem;
        color: $primary;
    }
    &__icon {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 1px solid $primary;
        // color: $primary;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    &__icon-inner {
        @include h3-dark()

    }
    &__text {
        @include normal-dark();
    }
}


@media (min-width: 80rem) {
    .list-card {
        &__icon  {
            width: 80px;
            height: 80px;
        }
    }
}

</style>