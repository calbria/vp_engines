<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
    name: string,
    submenu: string[]
}>()
</script>
<template>
  <ul class="dropdown">
    <li v-for="item in submenu" :key="item" class="dropdown__item">
      <RouterLink class="dropdown__link" :to="{ name: `${item}` }" :aria-label="`Go to ${item} page`">
        <span>
          {{ t(`common.submenu-${name}.${item}`) }}
        </span>
      </RouterLink>
    </li>

  </ul>
</template>
<style scoped lang="scss">
.dropdown {
  @include submenu();
  color: $primary;
  text-transform: none;
  padding: var(--spacing-xs) var(--spacing-xs);
  background-color: $bg-island;

  &__link {
    display: flex;
    flex-wrap: nowrap;

    padding: 0.5rem 0;
    transition: all 0.3s ease-in;
    &:hover {
      padding-inline: 12px;
      background-color: $bg-island-inner;
    }
  }
}
@media (min-width: 80rem) {
  .dropdown {
  
  width: 24rem;
  padding: var(--spacing-m) var(--spacing-xs);

}
}
</style>
