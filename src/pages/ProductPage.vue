<template>
  <NavBar />
  <!-- <RouterLink /> -->
  <div class="main">
   
    <div class="product">
      <!-- <font-awesome-icon icon="fa-solid fa-user-secret" width="30" /> -->
      <div>
        <h1>
          WELCOME
          <!-- <span class="user"> {{ user.name }}</span> -->
        </h1>
        <h2 class="text">These are your available products</h2>
      </div>
    </div>


  <div>
    <product-card />
    <!-- <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div
        @click="
          () => $router.push({ name: 'product', params: { id: product.id } })
        "
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div> -->
    </div>
  </div>
      <footer-components />
  <!-- </div> -->

</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponents from "@/components/FooterComponents.vue";
import ProductCard from '@/components/ProductCard.vue';
// import ProductCard from "@/components/ProductCard.vue";
// import { RouterLink } from "vue-router";
// import { mapState } from "vuex";
// import authenTicatedUser from "../composables/authenTicatedUser";


export default {
  name: "ProductPage",
  components: {
    NavBar,
 
    FooterComponents,
    ProductCard,
    // ProductCard,
    // RouterLink,
  },
  // computed: {
  //   // ...mapState("auth", {
  //   //   user: (state) => state.user.username,
  //   // }),

  //   user() {
  //     return this.$store.getters["auth/user"]
  //   },
  //   ...mapState("products", {
  //     loading: (state) => state.isLoading,
  //     products: (state) => state.products.products,
  //   }),
  // },
  // data() {
  //   return {};
  // },
  // methods: {},
  // mounted() {
  //   this.$store.dispatch("products/getProducts");
  //   console.log(this.$store.getters["auth/user"]);
  // },
};
</script>

<style scoped>
.main {
  background: url("../assets/products.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  display: flex;

  flex-direction: column;
}
h1{
  font-size: 50px;
  color: white;
  text-align: center;
  margin-top: 20px;

}
</style>
