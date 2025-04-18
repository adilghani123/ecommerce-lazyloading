<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-md-6">
        <div v-if="product">
          <img
            :src="product.image"
            style="
              height: 400px;
              object-fit: contain;
              width: 400px;
              background-color: #f5f2f2;
              padding: 1px;
              margin-bottom: 40px;
            "
          />
          <h2>{{ product.title }}</h2>

          <p>{{ product.description }}</p>
          <p><strong>Price:</strong> ${{ product.price }}</p>
          <p><strong>Category:</strong> {{ product.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: null,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      this.product = res.data;
    } catch (error) {
      console.error("❌ Error fetching product:", error);
    }
  },
};
</script>
