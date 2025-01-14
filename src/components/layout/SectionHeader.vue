<script setup lang="ts">


const props = defineProps<{
  title: string
  subtitle: string
}>()
</script>
<template>
  <div class="header">
    <h2 class="header__title">
      <span class="header__title-text">{{ title }}</span>
    </h2>
    <p class="header__subtitle">
      <span class="header__subtitle-text"> {{ subtitle }} </span>
    </p>
  </div>
</template>
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  &__title {
    color: $tertiary;
  }
  &__title-text {
    @include subheader-2-dark();
  }
  &__subtitle {
    color: $primary;
  }
  &__subtitle-text {
    @include h2-dark();
  }
}
</style>
