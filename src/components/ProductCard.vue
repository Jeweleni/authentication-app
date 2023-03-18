<template>
  <div>
    <img
      :src="product.thumbnail"
      alt=""/>
    <div>
      <div>
        <h1>
          {{ product.title }}
        </h1>
        <font-awesome-icon
          icon="fa-solid fa-bookmark"/>
      </div>
      <div>
        <p>
          {{ product.description }}
        </p>
      </div>
      <!-- reviews -->
      <div>
        <font-awesome-icon
          icon="fa-solid fa-star"/>
        <p class="font-bold">
          {{ product.rating }}
          <span>(1112 Reviews)</span>
        </p>
      </div>
      <!-- price and Category -->
    </div>
    <div>
      <p>$ {{ product.price }}</p>
      <p >{{ product.category }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
