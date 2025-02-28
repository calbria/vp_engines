<script setup lang='ts'>
import Breadcrumbs from '@/components/layout/BreadCrumbs.vue';
import HeroSection from '@/components/layout/blog/HeroSection.vue';
import BlogSection from '@/components/layout/blog/BlogSection.vue';
import CTASection from '@/components/layout/CTASection.vue';
</script>
<template>
	<main class="blog main-content">
		<Breadcrumbs mode="light" />
		<!-- Hero section -->
		<HeroSection />
		<!-- Blog section -->
		<BlogSection />
		<!-- CTA section -->
		<CTASection />
	</main>
</template>
<style scoped lang='scss'>
.blog {
	background-color: $bg-white;
	min-height: 100vh;
}
</style>