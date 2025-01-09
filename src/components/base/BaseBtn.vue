<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
const { t } = useI18n()

const props = defineProps<{
  mode: 'primary' | 'secondary' | 'shadow'
  size: 'small' | 'large'
  text?: string
  destination?: string
  params?: string
  canExpand?: boolean
  expanded?: boolean
}>()
const arrow = computed(() => (props.canExpand && props.expanded ? 'arrow_up' : 'arrow_down'))
const toObject = computed(() => {
  if(props.params) {
    return { name: props.destination, params: {id: props.params}}
  } else return { name: props.destination }
})

</script>
<template>
  <RouterLink class="button" :class="[mode, size]" v-if="destination" :to="toObject">
    <span class="button__text">
      {{ t(`btn.${text}`) }}
    </span>
  </RouterLink>
  <button class="button" :class="[mode, size]" v-else type="button">
    <span class="button__text">
      {{ t(`btn.${text}`) }}
    </span>

    <BaseIcon class="button__icon" v-if="canExpand" :name="arrow" path="icons" />
  </button>
</template>
<style scoped lang="scss">
.button {
	
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $radius;

  &__icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }
	&__text {
		@include button();
	}
}
.small {
  width: 142px;
  padding: 12px 24px;
}
.large {
  width: 280px;
  padding: 16px 24px;
}
.primary {
  background-color: $btn-primary-default;
  color: $primary;
  &:hover {
    background-color: $btn-primary-hover;
  }
  &:active {
    background-color: $btn-primary-active;
  }
}
.secondary {
  border: 1px solid $btn-secondary-default;
  color: $primary;
  &:hover {
    background-color: $btn-secondary-hover;
  }
  &:active {
    background-color: $btn-secondary-active;
  }
}
.shadow {
  padding: 12px;
  background-color: $btn-shadow-default;
  &:hover {
    background-color: $btn-shadow-hover;
  }
  &:active {
    background-color: $btn-shadow-active;
  }
}
</style>
