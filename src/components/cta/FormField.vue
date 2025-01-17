<script setup lang='ts'>
// const props = defineProps<{
//     id: string
// }>()
</script>
<template>
    <div class="field">
        <div class="field__wrapper">
            <label class="field__label" for="name">Your name</label>
            <input class="field__input" type="text" id="name"  />
        </div>
      </div>
</template>
<style scoped lang='scss'>
.field {

    &__wrapper {
        
    }
    &__label {}
    &__input {}

}
@media (min-width: 48rem) {
    .field {

&__wrapper {}
&__label {}
&__input {}

}
}
</style>