<script lang="ts" setup>
import Header from './_components/Header/index.vue'
import Footer from './_components/Footer/index.vue'
</script>

<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
    <Header />
    <slot />
  </div>
  <Footer />
</template>
