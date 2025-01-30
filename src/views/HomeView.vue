<script setup lang="ts">
import HeroSection from '@/components/layout/home/HeroSection.vue'
import AboutSection from '@/components/layout/home/AboutSection.vue'
import AdvantageSection from '@/components/layout/home/AdvantageSection.vue'
import ServiceSection from '@/components/layout/home/ServiceSection.vue'
import ProjectsSection from '@/components/layout/home/ProjectsSection.vue'
import BrandsSection from '@/components/layout/home/BrandsSection.vue'
import ProcessSection from '@/components/layout/home/ProcessSection.vue'
import ContactSection from '@/components/layout/home/ContactSection.vue'
import CTASection from '@/components/layout/CTASection.vue'


</script>
<template>
  <main class="main-content">
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <AdvantageSection />
    <ProcessSection/>
    <ProjectsSection />
    <BrandsSection/>
    <CTASection/>
    <ContactSection/>
    

  
  </main>
</template>
<style scoped lang="scss">
main {
  background-color: $bg-globe;
  min-height: 100vh;
}
</style>
 