<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import BaseBtn from '@/components/base/BaseBtn.vue';



const { t } = useI18n()

</script>
<template>
<main class="main-content">
  <h1>{{t('home.welcome')}}</h1>

<BaseBtn mode="primary" size="large" destination="projects" text="details"/>

</main>
</template>
<style scoped lang='scss'>
main {
  background-color: $bg-globe;
  min-height: 100vh;
}
</style>
