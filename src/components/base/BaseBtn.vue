<script setup lang='ts'>
import { computed } from 'vue';
import BaseIcon from '@/components/base/BaseIcon.vue'

const props = defineProps<{
type: 'primary'|'secondary'|'shadow'
size: 'small'|'large'
text: string
destination?: string
canExpand?: boolean
expanded?: boolean

}>()
const arrow = computed(() => props.canExpand && props.expanded ? 'arrow_down' : 'arrow_up')
</script>
<template>
<RouterLink class="button" :class="type" v-if="destination" :to="destination">
    <span class="button__text">
        {{ text }}
    </span>
</RouterLink>
<button v-else type="button">
    <span class="button__text">
        {{ text }}
    </span>
    <BaseIcon v-if="canExpand" :name="arrow"/>
    </button>
</template>
<style scoped lang='scss'>
</style>