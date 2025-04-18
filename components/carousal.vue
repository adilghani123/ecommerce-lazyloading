<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <!-- Carousel Indicators -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="0"
        class="active"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="2"
      ></button>
    </div>

    <!-- Carousel Inner -->
    <div class="carousel-inner">
      <!-- Slide 1 -->
      <div class="carousel-item active">
        <link
          rel="preload"
          as="image"
          href="/assets/wal1.jpg"
          type="image/jpeg"
        />
        <img :src="image1" class="d-block w-100" alt="Slide 1" />
      </div>

      <!-- Slide 2 -->
      <div class="carousel-item">
        <img :src="image2" class="d-block w-100" alt="Slide 2" />
      </div>

      <!-- Slide 3 -->
      <div class="carousel-item">
        <img :src="image3" class="d-block w-100" alt="Slide 3" />
      </div>
    </div>

    <!-- Carousel Controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<script setup>
import { useHead } from "#app";

// Set preload links for images in the head
useHead({
  title: "Home Page",
  link: [
    {
      rel: "preload",
      href: "/assets/wal1.jpg", // Ensure this path is correct for preload
      as: "image",
      type: "image/jpeg",
    },
    {
      rel: "preload",
      href: "/assets/wal2.jpg",
      as: "image",
      type: "image/jpeg",
    },
    {
      rel: "preload",
      href: "/assets/wal3.jpg",
      as: "image",
      type: "image/jpeg",
    },
  ],
});

// Image paths for the carousel
const image1 = "/assets/wal1.jpg";
const image2 = "/assets/wal2.jpg";
const image3 = "/assets/wal3.jpg";
</script>

<style scoped>
.carousel-item img {
  max-height: 450px;
  object-fit: cover;
}
</style>
