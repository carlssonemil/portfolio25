<template>
  <Header />

  <Main>
    <RouterView />
  </Main>

  <FloatingBlobs />

  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'

import FloatingBlobs from '@/components/FloatingBlobs.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
</script>
