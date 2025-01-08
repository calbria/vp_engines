<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const lang: string[] = ['ua', 'ru']
function changeLang(lang: string) {
  locale.value = lang
  localStorage.setItem('language', lang)
}
</script>
<template>
  <div class="lang" v-for="(item, index) in lang" :key="item">
    <button
      class="lang__btn"
      :class="{ 'current-lang': item === locale }"
      @click="changeLang(item)"
      type="button"
      :aria-label="`Switch language to ${item}`"
      aria-live="polite"
    >
      {{ item.toLocaleUpperCase() }}
    </button>
    <span v-if="index < lang.length - 1">|</span>
  </div>
</template>
<style scoped lang="scss">
.lang {
  
  &__btn {
    @include menu();
    height: 2.25rem;
    padding-inline: 0.25rem;
    &:hover {
      color: $primary;
    }
    &:active {
      color: $accent;
    }
  }
}
.lang span {
    position: relative;
    bottom: 1px;
  }
  .current-lang {
  color: $primary;
}
</style>
