<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from './components/layout/PageHeader.vue'
import PageFooter from './components/layout/PageFooter.vue'

const { t } = useI18n()
</script>

<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>

<style scoped lang="scss"></style>
