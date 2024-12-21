<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<template>
 <div>{{ t('common.contact') }}</div>
</template>

<style scoped lang="scss">
div {
    @include subheader-1-dark()
}
</style>


