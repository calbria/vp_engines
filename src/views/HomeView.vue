<script setup lang='ts'>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
<main>
  <h1>{{t('home.welcome')}}</h1>

</main>
</template>
<style scoped lang='scss'>
main {
  background-color: $bg-globe;
  min-height: calc(100vh - 96px);
}
</style>
