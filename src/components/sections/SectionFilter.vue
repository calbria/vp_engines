<script setup lang="ts">
import BaseTab from '../base/BaseTab.vue'
import { useI18n } from 'vue-i18n'
const props = defineProps<{
    currentTab: string
  filterTabs: string[]
  type: string
}>()
const emit = defineEmits(['chooseTab'])
const { t } = useI18n()

function tabHandler(tab:string) {
    console.log(tab);
    
emit('chooseTab', tab)
}
</script>
<template>
  <div class="filter">
    <div class="filter__wrapper">
      <BaseTab v-for="tab in filterTabs" :key="tab" :is-active="tab === currentTab " @click="tabHandler(tab)">
        <span class="filter__text">{{ t(`${type}.filter.${tab}`) }}</span>
      </BaseTab>
    </div>
  </div>
</template>
<style scoped lang="scss">
.filter {
  &__wrapper {
    display: flex;
    align-items: center;


    justify-content: space-between;
    border-bottom: 1px solid $divider-light;
    
    //text-transform: uppercase;
  }
  &__text {
    //@include breadcrumbs-light();
    @include subheader-2-light()
    
  }

}
@media (min-width: 48rem) {
  .filter {
    &__wrapper {
      justify-content: flex-start;
      column-gap: var(--spacing-s);
    }
    &__text {
    @include subheader-2-light();
  }
  }
}
@media (min-width: 80rem) {
  .filter {
    &__wrapper {
      column-gap: var(--spacing-m);
    }
    &__text {
    }
  }
}
</style>
