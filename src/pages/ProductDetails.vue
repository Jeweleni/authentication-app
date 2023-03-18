<template>
  <NavBar />
  <div>
    <div>
      <img :src="product.thumbnail" alt="product" />
      <div>
        <h1>
          {{ product.title }}
        </h1>

        <p>
          <span>
            <font-awesome-icon icon="fa-solid fa-star" />
          </span>
          {{ product.rating }}
        </p>
        <div>
          <h2>Description:</h2>
          <p>{{ product.description }}</p>
        </div>
        <div>
          <h2>Category:</h2>
          <p>
            {{ product.category }}
          </p>
        </div>
        <div>
          <h2>Price:</h2>
          <p>${{ product.price }}</p>
        </div>
        <div>
          <router-link
            :to="{
              name: 'product-images',
              // params: { id: product.id },
            }"
          >
            <h2>Show Other Images</h2>
          </router-link>
          <hr />
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="main">
    <div class="left">
      <img :src="img" />
    </div>
    <div class="right">
      <div class="brand">
        <h1>{{ brand }}</h1>
        <h2>{{ category }}</h2>
      </div>
      <div class="title">
        <h1>{{ title }}</h1>
        <h2>{{ price }}</h2>
      </div>
      <div class="rating">
        <h1>{{ rating }}</h1>
      </div>
      <div class="description">
        <h1>{{ description }}</h1>
      </div>
      <div class="goBack"  @click="goBack">
   
      </div>
    </div>
  </div> -->
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "ProductDetails",
  components: {
    NavBar,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    fetchProduct() {
      const route = useRoute();
      const { id } = route.params;
      const endpoint = `https://dummyjson.com/products/${id}`;
      axios
        .get(endpoint)
        .then((res) => {
          this.product = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.fetchProduct();
  },
};
</script>
