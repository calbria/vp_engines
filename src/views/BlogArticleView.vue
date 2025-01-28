<script setup lang='ts'>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<template><div>Article#{{ route.params.id }}</div></template>
<style scoped lang='scss'></style>