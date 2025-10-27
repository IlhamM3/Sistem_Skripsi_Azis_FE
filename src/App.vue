<script setup>
import FooterCus from "./components/FooterContent.vue";
import navbar from "./components/navbar.vue";
import mainContent from "./components/mainContent.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <navbar />
    <main class="">
      <mainContent />
    </main>
    <FooterCus />
  </div>
</template>
