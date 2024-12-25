<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'



const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    default: undefined,
  },
})

const icon = computed(() => {
  if (props.path) {
    return defineAsyncComponent(
      () => import(`../../assets/svg/${props.path}/${props.name}.svg?component`),
    )
  } else {
    return defineAsyncComponent(() => import(`../../assets/svg/${props.name}.svg?component`))
  }
})



</script>
<template>
  <component
  class="base-icon"
    v-if="icon"
    :is="icon"
  ></component>
</template>
<style scoped lang="scss">
.base-icon {
  color: $icon-default;
  &:hover {
    color: $icon-hover;
  }
  &:active {
    color: $icon-click;
  }
}

</style>
