<script setup lang='ts'>
import { useI18n } from 'vue-i18n'


const { t } = useI18n()

</script>
<template>
<main class="main-content">
  <h1>{{t('home.welcome')}}</h1>

</main>
</template>
<style scoped lang='scss'>
main {
  background-color: $bg-globe;
  min-height: 100vh;
}
</style>
