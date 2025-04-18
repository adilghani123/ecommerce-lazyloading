<template>
  <div class="main">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
</script>

<style scoped>
main {
  min-height: 80vh;
  padding: 0px !important;
}
</style>
