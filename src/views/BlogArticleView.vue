<script setup lang='ts'>
import Breadcrumbs from '@/components/layout/BreadCrumbs.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<template>
<main>
    Article#{{ route.params.id }}

    </main></template>
<style scoped lang='scss'>
main {
    padding-top: 100px;
  background-color: $bg-globe;
  min-height: 100vh;
}
</style>