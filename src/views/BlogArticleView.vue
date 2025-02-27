<script setup lang='ts'>
import Breadcrumbs from '@/components/layout/BreadCrumbs.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<template>
<main>
  <Breadcrumbs mode="light" parent-route-name="blog" custom-breadcrumb="article"/>
    Article#{{ route.params.slug }}

    </main></template>
<style scoped lang='scss'>
main {
    padding-top: 100px;
  background-color: $bg-white;
  min-height: 100vh;
}
</style>