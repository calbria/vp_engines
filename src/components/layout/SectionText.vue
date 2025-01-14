<script setup lang='ts'>
const props = defineProps<{
    text: string[]
}>()
</script>
<template>
<div class="text">
<p class="text__paragraph" v-for="(item, index) in text" :key="index">{{ item }}</p>
</div>
</template>
<style scoped lang='scss'>
.text {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    color: $secondary;
    &__paragraph {
        @include normal-dark();
    }
}
</style>