<template>
  <div>
    <!-- Immediately rendered, possibly above-the-fold -->
    <Slider />
    <Catogories />

    <!-- Lazy load other components with <ClientOnly> -->
    <ClientOnly>
      <LazyProducts />
    </ClientOnly>

    <ClientOnly>
      <LazyVideo />
    </ClientOnly>

    <ClientOnly>
      <LazyProducts />
    </ClientOnly>
  </div>
</template>

<script setup>
import Slider from "~/components/carousal.vue";
import Catogories from "~/components/catogories.vue";
import { defineAsyncComponent } from "vue";

// Lazy load components
const LazyProducts = defineAsyncComponent(() =>
  import("~/components/products.vue")
);
const LazyVideo = defineAsyncComponent(() => import("~/components/video.vue"));
</script>
