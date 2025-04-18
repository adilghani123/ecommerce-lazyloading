<template>
  <div class="container my-4">
    <h3 class="text-center">Our Catogories</h3>
    <div class="row">
      <div class="col-md-4">
        <img :src="cat1" height="300px" class="w-100" alt="" />
      </div>
      <div class="col-md-4">
        <img :src="cat2" height="300px" class="w-100" alt="" />
      </div>
      <div class="col-md-4">
        <img :src="cat3" height="300px" class="w-100" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import cat1 from "~/public/assets/cat2 (1).jpg";
import cat2 from "~/public/assets/cat2 (2).jpg";
import cat3 from "~/public/assets/cat2 (3).jpg";
</script>
